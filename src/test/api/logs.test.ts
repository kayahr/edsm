import type { ValidateFunction } from "ajv";
import { beforeAll, it } from "vitest";

import { getFlightLogs, getPosition } from "../../main/api/logs.js";
import { createValidator, describeWhenTestAPI, edsmAPIKey, testJSON } from "../util.js";

describeWhenTestAPI("getFlightLogs", () => {
    let validator: ValidateFunction;

    beforeAll(async () => {
        validator = await createValidator("flight-logs");
    });

    it("returns flight logs (without ID) which matches the schema", async () => {
        const result = await getFlightLogs("Kayahr", edsmAPIKey);
        testJSON(validator, result);
    });
    it("returns flight logs (with ID) which matches the schema", async () => {
        const result = await getFlightLogs("Kayahr", edsmAPIKey, { showId: 1 });
        testJSON(validator, result);
    });
});

describeWhenTestAPI("getPosition", () => {
    let validator: ValidateFunction;

    beforeAll(async () => {
        validator = await createValidator("commander-position");
    });

    it("returns last position (without ID and coords) which matches the schema", async () => {
        const result = await getPosition("Kayahr");
        testJSON(validator, result);
    });
    it("returns last position (with ID and coords) which matches the schema", async () => {
        const result = await getPosition("Kayahr", { apiKey: edsmAPIKey, showId: 1, showCoordinates: 1 });
        testJSON(validator, result);
    });
});
