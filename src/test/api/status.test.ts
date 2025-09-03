import { it } from "vitest";

import { getEliteServerStatus } from "../../main/api/status.js";
import { createValidator, describeWhenTestAPI, testJSON } from "../util.js";

describeWhenTestAPI("getEliteServerStatus", () => {
    const validator = createValidator("elite-server-status");
    it("returns elite server status which matches the schema", async () => {
        const result = await getEliteServerStatus();
        testJSON(validator, result);
    });
});
