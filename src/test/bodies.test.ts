import "jest-extended";

import * as path from "path";

import { testSchema } from "./support/testSchema";

const baseDir = path.join(__dirname, "../..");
const sourceFiles = [
    path.join(baseDir, "src/main/bodies.ts")
];
// const bodiesFile = path.join(baseDir, "data/bodies7days.json.gz");
const bodiesFile = path.join(baseDir, "src/test/data/bodies7days.json");

describe("Body", () => {
    it("matches actual JSON", async () => {
        await testSchema("body", "Body", sourceFiles, bodiesFile);
    });
});
