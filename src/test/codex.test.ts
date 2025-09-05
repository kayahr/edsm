import "@kayahr/vitest-matchers";

import { createReadStream } from "node:fs";
import { join } from "node:path";

import { type ValidateFunction } from "ajv";
import { beforeAll, describe, it } from "vitest";

import { parseCodexJSON } from "../main/codex.js";
import { createValidator, testJSON } from "./util.js";

const baseDir = join(__dirname, "../..");
const codexFile = join(baseDir, "src/test/data/codex.json");

describe("codex", () => {
    let validator: ValidateFunction;

    beforeAll(async () => {
        validator = await createValidator("codex");
    });

    describe("parseCodexJSON", () => {
        it("reads codices from JSON stream", async () => {
            for await (const body of parseCodexJSON(createReadStream(codexFile))) {
                testJSON(validator, body);
            }
        });
    });
});
