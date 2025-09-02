import { createReadStream, readFileSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { createInterface, type Interface } from "node:readline";
import { createGunzip } from "node:zlib";

import { Ajv, type ValidateFunction } from "ajv";
import { createGenerator } from "ts-json-schema-generator/dist/factory/generator.js";
import { type Config, DEFAULT_CONFIG } from "ts-json-schema-generator/dist/src/Config.js";
import { describe } from "vitest";

const baseDir = join(__dirname, "../..");

export const edsmAPIKey = process.env["EDSM_API_KEY"] ?? "";
export const describeWhenTestAPI = (description: string, func: () => void): unknown => describe.skipIf(edsmAPIKey === "")(description, func);

function getLastModified(file: string): number {
    try {
        return statSync(file).mtimeMs;
    } catch (e: unknown) {
        if ((e as { code: string }).code === "ENOENT") {
            return 0;
        } else {
            throw e;
        }
    }
}

function getLatestLastModified(files: string[]): number {
    let latestLastModified = 0;
    for (const file of files) {
        latestLastModified = Math.max(latestLastModified, getLastModified(file));
    }
    return latestLastModified;
}

export function createValidator(schemaName: string, typeName: string, sourceFiles: string[]): ValidateFunction {
    const schemaFile = join(baseDir, `lib/test/${schemaName}.schema.json`);

    // Generate the test JSON schema if not already up-to-date
    const schemaLastModified = getLastModified(schemaFile);
    const sourcesLastModified = getLatestLastModified(sourceFiles);
    let schemaJSON: object | null;
    if (sourcesLastModified > schemaLastModified) {
        const config: Config = {
            ...DEFAULT_CONFIG,
            tsconfig: join(baseDir, "tsconfig.json"),
            type: typeName
        };
        schemaJSON = createGenerator(config).createSchema(typeName);
        writeFileSync(schemaFile, JSON.stringify(schemaJSON, null, 4));
    } else {
        schemaJSON = JSON.parse(readFileSync(schemaFile).toString()) as object;
    }

    if (schemaJSON == null) {
        throw new Error("Generated schema is null");
    }

    // Create JSON validator
    return new Ajv({ allErrors: true, allowUnionTypes: true }).compile(schemaJSON);
}

export function testJSON(validate: ValidateFunction, json: unknown): void {
    if (!validate(json)) {
        const errors = validate.errors;
        if (errors != null) {
            const jsonStr = JSON.stringify(json, undefined, 2);
            const errorStr = JSON.stringify(errors, undefined, 2);
            throw new Error(`Expected JSON to match schema:\n\n${jsonStr}\n\nBut failed:\n\n${errorStr}`);
        }
    }
}

export function testJSONFile(validate: ValidateFunction, jsonFile: string): void {
    testJSON(validate, JSON.parse(readFileSync(jsonFile).toString()));
}

function createStream(jsonFile: string): NodeJS.ReadableStream {
    let stream: NodeJS.ReadableStream = createReadStream(jsonFile);
    if (jsonFile.endsWith(".gz")) {
        stream = stream.pipe(createGunzip());
    }
    return stream;
}

export function createReader(jsonFile: string): Interface {
    return createInterface({ input: createStream(jsonFile) });
}

export async function testJSONFileLineByLine(validate: ValidateFunction, jsonFile: string): Promise<void> {
    const reader = createReader(jsonFile);
    for await (let line of reader) {
        if (line === "[" || line === "]") {
            continue;
        }
        if (line.endsWith(",")) {
            line = line.substring(0, line.length - 1);
        }
        testJSON(validate, JSON.parse(line));
    }
}

export async function readJSON(jsonFile: string): Promise<unknown> {
    return new Promise((resolve, reject) => {
        const chunks: Uint8Array[] = [];
        const stream = createStream(jsonFile);
        stream.on("data", (chunk: Buffer) => {
            chunks.push(chunk);
        });
        stream.on("error", (e: Error) => {
            reject(e);
        });
        stream.on("end", () => {
            resolve(JSON.parse(Buffer.concat(chunks).toString()));
        });
    });
}

export function sleep(ms: number = 0): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}
