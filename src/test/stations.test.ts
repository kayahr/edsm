import "jest-extended";

import * as path from "path";

import { testSchema } from "./support/testSchema";

const baseDir = path.join(__dirname, "../..");
const sourceFiles = [
    path.join(baseDir, "src/main/systems.ts")
];
const stationsFile = path.join(baseDir, "src/test/data/stations.json");
// const stationsFile = path.join(baseDir, "data/stations.json.gz");

describe("Station", () => {
    it("matches actual JSON", async () => {
        await testSchema("station", "Station", sourceFiles, stationsFile);
    });
});
