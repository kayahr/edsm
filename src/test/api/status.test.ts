import type { ValidateFunction } from "ajv";
import { afterAll, beforeAll, describe, it } from "vitest";

import { getEliteServerStatus } from "../../main/api/status.js";
import { createValidator, testJSON } from "../util.js";
import { edsmMock } from "./mock.js";

describe("status", () => {
    let validator: ValidateFunction;

    beforeAll(async () => {
        edsmMock.start();
        validator = await createValidator("elite-server-status-response");
    });

    afterAll(() => {
        edsmMock.stop();
    });

    describe("getEliteServerStatus", () => {
        it("returns elite server status which matches the schema", async () => {
            const result = await getEliteServerStatus();
            testJSON(validator, result);
        });
    });
});
