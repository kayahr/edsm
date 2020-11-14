import "jest-extended";

import * as path from "path";

import { testSchema } from "./support/testSchema";

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

// const systemsWithoutCoordinatesFile = path.join(baseDir, "data/systemsWithoutCoordinates.json.gz");
// const systemsWithCoordinatesFile = path.join(baseDir, "data/systemsWithCoordinates.json.gz");
// const systemsWithCoordinatesFile = path.join(baseDir, "data/systemsWithCoordinates7days.json.gz");
// const systemsPopulatedFile = path.join(baseDir, "data/systemsPopulated.json.gz");

describe("SystemWithoutCoordinates", () => {
    it("matches actual JSON", async () => {
        await testSchema("systemWithoutCoordinates", "SystemWithoutCoordinates", sourceFiles,
            systemsWithoutCoordinatesFile);
    });
});

describe("SystemWithCoordinates", () => {
    it("matches actual JSON", async () => {
        await testSchema("systemWithCoordinates", "SystemWithCoordinates", sourceFiles,
            systemsWithCoordinatesFile);
    });
});

describe("PopulatedSystem", () => {
    it("matches actual JSON", async () => {
        await testSchema("populatedSystem", "PopulatedSystem", sourceFiles,
            systemsPopulatedFile);
    });
});
