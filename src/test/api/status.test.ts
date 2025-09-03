import type { ValidateFunction } from "ajv";
import { beforeAll, it } from "vitest";

import { getEliteServerStatus } from "../../main/api/status.js";
import { createValidator, describeWhenTestAPI, testJSON } from "../util.js";

describeWhenTestAPI("getEliteServerStatus", () => {
    let validator: ValidateFunction;

    beforeAll(async () => {
        validator = await createValidator("elite-server-status");
    });

    it("returns elite server status which matches the schema", async () => {
        const result = await getEliteServerStatus();
        testJSON(validator, result);
    });
});
