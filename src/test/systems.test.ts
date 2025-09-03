import "@kayahr/vitest-matchers";

import { join } from "node:path";

import { type ValidateFunction } from "ajv";
import { beforeAll, describe, expect, it } from "vitest";

import { streamSystemsJSON, type Systems } from "../main/systems.js";
import { createReader, createValidator, readJSON, sleep, testJSON, testJSONFileLineByLine } from "./util.js";

const baseDir = join(__dirname, "../..");
const systemsWithoutCoordinatesFile = join(baseDir, "src/test/data/systemsWithoutCoordinates.json");
const systemsWithCoordinatesFile = join(baseDir, "src/test/data/systemsWithCoordinates.json");
const systemsPopulatedFile = join(baseDir, "src/test/data/systemsPopulated.json");

// Use this to test against real data export stored in data directory:
// const systemsWithoutCoordinatesFile = join(baseDir, "data/systemsWithoutCoordinates.json.gz");
// const systemsWithCoordinatesFile = join(baseDir, "data/systemsWithCoordinates7days.json.gz");
// const systemsPopulatedFile = join(baseDir, "data/systemsPopulated.json.gz");

describe("systems", () => {
    let validator: ValidateFunction;
    let systems: Systems;

    beforeAll(async () => {
        validator = await createValidator("system");
        systems = await readJSON(systemsPopulatedFile) as Systems;
    });

    describe("System", () => {
        it("matches actual JSON", async () => {
            await testJSONFileLineByLine(validator, systemsWithoutCoordinatesFile);
            await testJSONFileLineByLine(validator, systemsWithCoordinatesFile);
            await testJSONFileLineByLine(validator, systemsPopulatedFile);
        });
    });

    describe("streamSystemsJSON", () => {
        it("reads systems from JSON stream", async () => {
            await expect(streamSystemsJSON(createReader(systemsWithCoordinatesFile), system => {
                testJSON(validator, system);
            })).toResolve();
            await expect(streamSystemsJSON(createReader(systemsWithoutCoordinatesFile), system => {
                testJSON(validator, system);
            })).toResolve();
            await expect(streamSystemsJSON(createReader(systemsPopulatedFile), system => {
                testJSON(validator, system);
            })).toResolve();
        });
        it("waits for async callback result", async () => {
            const list: Systems = [];
            await expect(streamSystemsJSON(createReader(systemsPopulatedFile), async system => {
                testJSON(validator, system);
                await sleep();
                list.push(system);
            })).toResolve();
            expect(list).toEqual(systems);
        });
    });
});
