import type { ValidateFunction } from "ajv";
import { after, before, describe, it } from "node:test";

import { getCommanderPosition, getFlightLogs, getSystemComment, getSystemComments, setSystemComment } from "../../main/api/logs.ts";
import { createValidator, testJSON } from "../util.ts";
import { edsmAPIKey, edsmMock, edsmUser } from "./mock.ts";
import { assertDefined, assertSame, assertUndefined } from "@kayahr/assert";

describe("logs", () => {
    before(() => {
        edsmMock.start();
    });

    after(() => {
        edsmMock.stop();
    });

    describe("getFlightLogs", () => {
        let validator: ValidateFunction;

        before(async () => {
            validator = await createValidator("flight-logs-response");
        });

        it("returns flight logs (without ID) which matches the schema", async () => {
            const result = await getFlightLogs(edsmUser, edsmAPIKey);
            testJSON(validator, result);
        });
        it("returns flight logs (with ID) which matches the schema", async () => {
            const result = await getFlightLogs(edsmUser, edsmAPIKey, { showId: 1 });
            testJSON(validator, result);
        });
    });

    describe("getCommanderPosition", () => {
        let validator: ValidateFunction;

        before(async () => {
            validator = await createValidator("commander-position-response");
        });

        it("returns last position (without ID and coords) which matches the schema", async () => {
            const result = await getCommanderPosition(edsmUser);
            assertUndefined(result.coordinates);
            assertUndefined(result.systemId);
            assertUndefined(result.systemId64);
            testJSON(validator, result);
        });
        it("returns last position (with IDs) which matches the schema", async () => {
            const result = await getCommanderPosition(edsmUser, { apiKey: edsmAPIKey, showId: 1 });
            assertUndefined(result.coordinates);
            assertDefined(result.systemId);
            assertDefined(result.systemId64);
            testJSON(validator, result);
        });
        it("returns last position (with coordinates) which matches the schema", async () => {
            const result = await getCommanderPosition(edsmUser, { apiKey: edsmAPIKey, showCoordinates: 1 });
            assertDefined(result.coordinates);
            assertUndefined(result.systemId);
            assertUndefined(result.systemId64);
            testJSON(validator, result);
        });
    });

    describe("system comments", () => {
        it("can be written and read", async () => {
            const system = "Lyncis Sector KM-W c1-10";
            const systemId = 241168;
            const systemId64 = 2832564490938n;

            // Set Test comment
            const result1 = await setSystemComment(edsmUser, edsmAPIKey, system, "Test", { systemId, systemId64 });
            assertSame(result1.comment, "Test");

            // Get comment
            const result2 = await getSystemComment(edsmUser, edsmAPIKey, system, { systemId, systemId64 });
            assertSame(result2.comment, "Test");

            // Get all comments
            const allCommentsResult = await getSystemComments(edsmUser, edsmAPIKey);
            assertSame(allCommentsResult.comments.some(comment => comment.system === system && comment.comment === "Test"), true);

            // Remove comment
            const result3 = await setSystemComment(edsmUser, edsmAPIKey, system, "");
            assertSame(result3.comment, null);

            // Get now empty comment
            const result4 = await getSystemComment(edsmUser, edsmAPIKey, system);
            assertSame(result4.comment, null);
        });
    });
});
