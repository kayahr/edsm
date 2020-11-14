import "jest-extended";

import * as path from "path";

import { testSchema } from "./support/testSchema";

const baseDir = path.join(__dirname, "../..");
const sourceFiles = [
    path.join(baseDir, "src/main/codex.ts")
];
const codexFile = path.join(baseDir, "src/test/data/codex.json");
// const codexFile = path.join(baseDir, "data/codex.json.gz");

describe("Codex", () => {
    it("matches actual JSON", async () => {
        await testSchema("codex", "Codex", sourceFiles, codexFile);
    });
});
