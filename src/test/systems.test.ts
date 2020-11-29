import "jest-extended";

import * as ajv from "ajv";
import * as path from "path";

import { readSystemsJSON, streamSystemsJSON, Systems } from "../main/systems";
import { createReader, createValidator, readJSON, sleep, testJSON, testJSONFileLineByLine } from "./util";

const baseDir = path.join(__dirname, "../..");
const sourceFiles = [
    path.join(baseDir, "src/main/common.ts"),
    path.join(baseDir, "src/main/bodies.ts"),
    path.join(baseDir, "src/main/systems.ts"),
    path.join(baseDir, "src/main/stations.ts")
];
const systemsWithoutCoordinatesFile = path.join(baseDir, "src/test/data/systemsWithoutCoordinates.json");
const systemsWithCoordinatesFile = path.join(baseDir, "src/test/data/systemsWithCoordinates.json");
const systemsPopulatedFile = path.join(baseDir, "src/test/data/systemsPopulated.json");

// Use this to test against real data export stored in data directory:
// const systemsWithoutCoordinatesFile = path.join(baseDir, "data/systemsWithoutCoordinates.json.gz");
// const systemsWithCoordinatesFile = path.join(baseDir, "data/systemsWithCoordinates7days.json.gz");
// const systemsPopulatedFile = path.join(baseDir, "data/systemsPopulated.json.gz");

describe("systems", () => {
    let validator: ajv.ValidateFunction;
    let systems: Systems;

    beforeAll(async () => {
        validator = createValidator("system", "System", sourceFiles);
        systems = await readJSON(systemsWithCoordinatesFile) as Systems;
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
            await expect(streamSystemsJSON(createReader(systemsWithCoordinatesFile), async system => {
                testJSON(validator, system);
                await sleep();
                list.push(system);
            })).toResolve();
            expect(list).toEqual(systems);
        });
    });

    describe("readSystemsJSON", () => {
        it("reads systems from JSON stream", async () => {
            expect(await readSystemsJSON(createReader(systemsWithCoordinatesFile))).toEqual(systems);
        });
    });
});
