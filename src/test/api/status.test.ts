import { join } from "node:path";

import { it } from "vitest";

import { getEliteServerStatus } from "../../main/api/status.js";
import { createValidator, describeWhenTestAPI, testJSON } from "../util.js";

const baseDir = join(__dirname, "../../..");
const sourceFiles = [
    join(baseDir, "src/main/api/status.ts")
];

describeWhenTestAPI("getEliteServerStatus", () => {
    const validator = createValidator("eliteServerStatus", "EliteServerStatus", sourceFiles);
    it("returns elite server status which matches the schema", async () => {
        const result = await getEliteServerStatus();
        testJSON(validator, result);
    });
});
