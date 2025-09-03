import "@kayahr/vitest-matchers";

import { join } from "node:path";

import { type ValidateFunction } from "ajv";
import { beforeAll, describe, expect, it } from "vitest";

import { type Codices, readCodexJSON, streamCodexJSON } from "../main/codex.js";
import { createReader, createValidator, readJSON, sleep, testJSON, testJSONFileLineByLine } from "./util.js";

const baseDir = join(__dirname, "../..");
const codexFile = join(baseDir, "src/test/data/codex.json");

// Use this to test against real data export stored in data directory (Actually doesn't work because of out-of-mem):
// const codexFile = join(baseDir, "data/codex.json.gz");

describe("codex", () => {
    let validator: ValidateFunction;
    let codices: Codices;

    beforeAll(async () => {
        validator = await createValidator("codex");
        codices = await readJSON(codexFile) as Codices;
    });

    describe("Codex", () => {
        it("matches actual JSON", async () => {
            await testJSONFileLineByLine(validator, codexFile);
        });
    });

    describe("streamCodicesJSON", () => {
        it("reads codices from JSON stream", async () => {
            await expect(streamCodexJSON(createReader(codexFile), codex => {
                testJSON(validator, codex);
            })).toResolve();
        });
        it("waits for async callback result", async () => {
            const list: Codices = [];
            await expect(streamCodexJSON(createReader(codexFile), async codex => {
                testJSON(validator, codex);
                await sleep();
                list.push(codex);
            })).toResolve();
            expect(list).toEqual(codices);
        });
    });

    describe("readCodicesJSON", () => {
        it("reads codices from JSON stream", async () => {
            expect(await readCodexJSON(createReader(codexFile))).toEqual(codices);
        });
    });
});
