import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { Ajv, type ValidateFunction } from "ajv";
import { describe } from "vitest";

const baseDir = join(__dirname, "../..");

export const edsmAPIKey = process.env["EDSM_API_KEY"] ?? "";
export const describeWhenTestAPI = (description: string, func: () => void): unknown => describe.skipIf(edsmAPIKey === "")(description, func);

export async function createValidator(schemaName: string): Promise<ValidateFunction> {
    const schemaJSON = JSON.parse(await readFile(join(baseDir, `lib/${schemaName}.schema.json`), "utf-8")) as object;
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

export function sleep(ms: number = 0): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}
