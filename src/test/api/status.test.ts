import type { ValidateFunction } from "ajv";
import { after, before, describe, it } from "node:test";

import { getEliteServerStatus } from "../../main/api/status.ts";
import { createValidator, testJSON } from "../util.ts";
import { edsmMock } from "./mock.ts";

describe("status", () => {
    let validator: ValidateFunction;

    before(async () => {
        edsmMock.start();
        validator = await createValidator("elite-server-status-response");
    });

    after(() => {
        edsmMock.stop();
    });

    describe("getEliteServerStatus", () => {
        it("returns elite server status which matches the schema", async () => {
            const result = await getEliteServerStatus();
            testJSON(validator, result);
        });
    });
});
