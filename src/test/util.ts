import * as ajv from "ajv";
import * as fs from "fs";
import * as path from "path";
import * as readline from "readline";
import { createGenerator } from "ts-json-schema-generator/dist/factory/generator";
import { Config, DEFAULT_CONFIG } from "ts-json-schema-generator/dist/src/Config";
import * as zlib from "zlib";

const baseDir = path.join(__dirname, "../..");

export const edsmAPIKey = process.env["EDSM_API_KEY"] ?? "";
export const describeWhenTestAPI = edsmAPIKey !== "" ? describe : xdescribe;

function getLastModified(file: string): number {
    try {
        return fs.statSync(file).mtimeMs;
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

export function createValidator(schemaName: string, typeName: string, sourceFiles: string[]): ajv.ValidateFunction {
    const schemaFile = path.join(baseDir, `lib/test/${schemaName}.schema.json`);

    // Generate the test JSON schema if not already up-to-date
    const schemaLastModified = getLastModified(schemaFile);
    const sourcesLastModified = getLatestLastModified(sourceFiles);
    let schemaJSON: object | null;
    if (sourcesLastModified > schemaLastModified) {
        const config: Config = {
            ...DEFAULT_CONFIG,
            tsconfig: path.join(baseDir, "tsconfig.json"),
            type: typeName
        };
        schemaJSON = createGenerator(config).createSchema(typeName);
        fs.writeFileSync(schemaFile, JSON.stringify(schemaJSON, null, 4));
    } else {
        schemaJSON = JSON.parse(fs.readFileSync(schemaFile).toString()) as object;
    }

    if (schemaJSON == null) {
        throw new Error("Generated schema is null");
    }

    // Create JSON validator
    return new ajv({ allErrors: true }).compile(schemaJSON);
}

export function testJSON(validate: ajv.ValidateFunction, json: unknown): void {
    if (validate(json) === false) {
        const errors = validate.errors;
        if (errors != null) {
            const jsonStr = JSON.stringify(json, undefined, 2);
            const errorStr = JSON.stringify(errors, undefined, 2);
            fail(new Error(`Expected JSON to match schema:\n\n${jsonStr}\n\nBut failed:\n\n${errorStr}`));
        }
    }
}

export function testJSONFile(validate: ajv.ValidateFunction, jsonFile: string): void {
    testJSON(validate, JSON.parse(fs.readFileSync(jsonFile).toString()));
}

function createStream(jsonFile: string): NodeJS.ReadableStream {
    let stream: NodeJS.ReadableStream = fs.createReadStream(jsonFile);
    if (jsonFile.endsWith(".gz")) {
        stream = stream.pipe(zlib.createGunzip());
    }
    return stream;
}

export function createReader(jsonFile: string): readline.Interface {
    return readline.createInterface({ input: createStream(jsonFile) });
}

export async function testJSONFileLineByLine(validate: ajv.ValidateFunction, jsonFile: string): Promise<void> {
    const reader = createReader(jsonFile);
    for await (let line of reader) {
        if (line === "[" || line === "]") {
            continue;
        }
        if (line.endsWith(",")) {
            line = line.substr(0, line.length - 1);
        }
        testJSON(validate, JSON.parse(line));
    }
}

export async function readJSON(jsonFile: string): Promise<unknown> {
    return new Promise((resolve, reject) => {
        const chunks: Uint8Array[] = [];
        const stream = createStream(jsonFile);
        stream.on("data", chunk => {
            chunks.push(chunk);
        });
        stream.on("error", e => {
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
