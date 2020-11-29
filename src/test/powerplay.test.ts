import "jest-extended";

import ajv from "ajv";
import * as path from "path";

import { PowerPlays, readPowerPlayJSON, streamPowerPlayJSON } from "../main/powerplay";
import { createReader, createValidator, readJSON, sleep, testJSON, testJSONFileLineByLine } from "./util";

const baseDir = path.join(__dirname, "../..");
const sourceFiles = [
    path.join(baseDir, "src/main/common.ts"),
    path.join(baseDir, "src/main/powerplay.ts")
];
const powerPlayFile = path.join(baseDir, "src/test/data/powerPlay.json");

// Use this to test against real data export stored in data directory:
// const powerPlayFile = path.join(baseDir, "data/powerPlay.json.gz");

describe("powerplay", () => {
    let powerPlays: PowerPlays;
    let validator: ajv.ValidateFunction;

    beforeAll(async () => {
        powerPlays = await readJSON(powerPlayFile) as PowerPlays;
        validator = createValidator("powerPlay", "PowerPlay", sourceFiles);
    });

    describe("PowerPlay", () => {
        it("matches actual JSON", async () => {
            await testJSONFileLineByLine(validator, powerPlayFile);
        });
    });

    describe("streamPowerPlayJSON", () => {
        it("reads power play information from JSON stream", async () => {
            await expect(streamPowerPlayJSON(createReader(powerPlayFile), powerPlay => {
                testJSON(validator, powerPlay);
            })).toResolve();
        });
        it("waits for async callback result", async () => {
            const list: PowerPlays = [];
            await expect(streamPowerPlayJSON(createReader(powerPlayFile), async powerPlay => {
                testJSON(validator, powerPlay);
                await sleep();
                list.push(powerPlay);
            })).toResolve();
            expect(list).toEqual(powerPlays);
        });
    });

    describe("readPowerPlayJSON", () => {
        it("reads power play information from JSON stream", async () => {
            expect(await readPowerPlayJSON(createReader(powerPlayFile))).toEqual(powerPlays);
        });
    });
});
