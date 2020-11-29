import "jest-extended";

import * as ajv from "ajv";
import * as path from "path";

import { Codices, readCodexJSON, streamCodexJSON } from "../main/codex";
import { createReader, createValidator, readJSON, sleep, testJSON, testJSONFileLineByLine } from "./util";

const baseDir = path.join(__dirname, "../..");
const sourceFiles = [
    path.join(baseDir, "src/main/codex.ts")
];
const codexFile = path.join(baseDir, "src/test/data/codex.json");

// Use this to test against real data export stored in data directory (Actually doesn't work because of out-of-mem):
// const codexFile = path.join(baseDir, "data/codex.json.gz");

describe("codex", () => {
    let validator: ajv.ValidateFunction;
    let codices: Codices;

    beforeAll(async () => {
        validator = createValidator("codex", "Codex", sourceFiles);
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
