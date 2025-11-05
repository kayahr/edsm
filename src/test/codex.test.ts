
import { createReadStream } from "node:fs";

import type { ValidateFunction } from "ajv";
import { before, describe, it } from "node:test";

import { parseCodexJSON } from "../main/codex.ts";
import { createValidator, testJSON } from "./util.ts";

const codexFile = "src/test/data/codex.json";

describe("codex", () => {
    let validator: ValidateFunction;

    before(async () => {
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
