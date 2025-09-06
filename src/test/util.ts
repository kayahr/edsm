import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { Ajv, type ValidateFunction } from "ajv";
import { JSONStringify } from "json-with-bigint";

const baseDir = join(__dirname, "../..");

export async function createValidator(schemaName: string): Promise<ValidateFunction> {
    const schemaJSON = JSON.parse(await readFile(join(baseDir, `lib/${schemaName}.schema.json`), "utf-8")) as object;
    return new Ajv({ allErrors: true, allowUnionTypes: true }).compile(schemaJSON);
}

function bigintToNumber(obj: unknown): void {
    if (obj != null && typeof obj === "object") {
        if (Array.isArray(obj)) {
            for (let i = 0; i < obj.length; i++) {
                const value = obj[i] as unknown;
                if (typeof value === "bigint") {
                    obj[i] = Number(value);
                } else if (typeof value === "object") {
                    bigintToNumber(value);
                }
            }
        } else {
            for (const [ key, value ] of Object.entries(obj)) {
                if (typeof value === "bigint") {
                    (obj as Record<string, number>)[key] = Number(value);
                } else if (typeof value === "object") {
                    bigintToNumber(value);
                }
            }
        }
    }
}

export function testJSON(validate: ValidateFunction, json: unknown): void {
    // AJV cannot validate bigint against integer json type. So we have to convert bigint to number first
    bigintToNumber(json);
    if (!validate(json)) {
        const errors = validate.errors;
        if (errors != null) {
            const jsonStr = JSONStringify(json, undefined, 2);
            const errorStr = JSONStringify(errors, undefined, 2);
            throw new Error(`Expected JSON to match schema:\n\n${jsonStr}\n\nBut failed:\n\n${errorStr}`);
        }
    }
}

export function sleep(ms: number = 0): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}
