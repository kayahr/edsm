import "jest-extended";

import * as path from "path";

import { testSchema } from "./support/testSchema";

const baseDir = path.join(__dirname, "../..");
const sourceFiles = [
    path.join(baseDir, "src/main/common.ts"),
    path.join(baseDir, "src/main/powerplay.ts")
];
const powerPlayFile = path.join(baseDir, "src/test/data/powerPlay.json");
// const powerPlayFile = path.join(baseDir, "data/powerPlay.json.gz");

describe("PowerPlay", () => {
    it("matches actual JSON", async () => {
        await testSchema("powerPlay", "PowerPlay", sourceFiles, powerPlayFile);
    });
});
