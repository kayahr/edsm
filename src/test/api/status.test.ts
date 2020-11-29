import "jest-extended";
import "isomorphic-fetch";

import * as path from "path";

import { getEliteServerStatus } from "../../main/api/status";
import { createValidator, describeWhenTestAPI, testJSON } from "../util";

const baseDir = path.join(__dirname, "../../..");
const sourceFiles = [
    path.join(baseDir, "src/main/api/status.ts")
];

describeWhenTestAPI("getEliteServerStatus", () => {
    const validator = createValidator("eliteServerStatus", "EliteServerStatus", sourceFiles);
    it("returns elite server status which matches the schema", async () => {
        const result = await getEliteServerStatus();
        testJSON(validator, result);
    });
});
