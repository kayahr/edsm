import "@kayahr/vitest-matchers";

import { join } from "node:path";

import { type ValidateFunction } from "ajv";
import { beforeAll, describe, expect, it } from "vitest";

import { readStationsJSON, type Stations, streamStationsJSON } from "../main/stations.js";
import { createReader, createValidator, readJSON, sleep, testJSON, testJSONFileLineByLine } from "./util.js";

const baseDir = join(__dirname, "../..");
const sourceFiles = [
    join(baseDir, "src/main/systems.ts")
];
const stationsFile = join(baseDir, "src/test/data/stations.json");
// Use this to test against real data export stored in data directory:
// const stationsFile = path.join(baseDir, "data/stations.json.gz");

describe("stations", () => {
    let validator: ValidateFunction;
    let stations: Stations;

    beforeAll(async () => {
        validator = createValidator("station", "Station", sourceFiles);
        stations = await readJSON(stationsFile) as Stations;
    });

    describe("Station", () => {
        it("matches actual JSON", async () => {
            await testJSONFileLineByLine(validator, stationsFile);
        });
    });

    describe("streamStationsJSON", () => {
        it("reads stations from JSON stream", async () => {
            await expect(streamStationsJSON(createReader(stationsFile), station => {
                testJSON(validator, station);
            })).toResolve();
        });
        it("waits for async callback result", async () => {
            const list: Stations = [];
            await expect(streamStationsJSON(createReader(stationsFile), async station => {
                testJSON(validator, station);
                await sleep();
                list.push(station);
            })).toResolve();
            expect(list).toEqual(stations);
        });
    });

    describe("readStationsJSON", () => {
        it("reads stations from JSON stream", async () => {
            expect(await readStationsJSON(createReader(stationsFile))).toEqual(stations);
        });
    });
});
