import type { ValidateFunction } from "ajv";
import { afterAll, beforeAll, describe, expect, it } from "vitest";

import { getComment, getComments, getFlightLogs, getPosition, setComment } from "../../main/api/logs.js";
import { createValidator, testJSON } from "../util.js";
import { edsmAPIKey, edsmMock, edsmUser } from "./mock.js";

describe("commander", () => {
    beforeAll(() => {
        edsmMock.start();
    });

    afterAll(() => {
        edsmMock.stop();
    });

    describe("getFlightLogs", () => {
        let validator: ValidateFunction;

        beforeAll(async () => {
            validator = await createValidator("flight-logs");
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

    describe("getPosition", () => {
        let validator: ValidateFunction;

        beforeAll(async () => {
            validator = await createValidator("commander-position");
        });

        it("returns last position (without ID and coords) which matches the schema", async () => {
            const result = await getPosition(edsmUser);
            expect(result.coordinates).toBeUndefined();
            expect(result.systemId).toBeUndefined();
            expect(result.systemId64).toBeUndefined();
            testJSON(validator, result);
        });
        it("returns last position (with IDs) which matches the schema", async () => {
            const result = await getPosition(edsmUser, { apiKey: edsmAPIKey, showId: 1 });
            expect(result.coordinates).toBeUndefined();
            expect(result.systemId).toBeDefined();
            expect(result.systemId64).toBeDefined();
            testJSON(validator, result);
        });
        it("returns last position (with coordinates) which matches the schema", async () => {
            const result = await getPosition(edsmUser, { apiKey: edsmAPIKey, showCoordinates: 1 });
            expect(result.coordinates).toBeDefined();
            expect(result.systemId).toBeUndefined();
            expect(result.systemId64).toBeUndefined();
            testJSON(validator, result);
        });
    });

    describe("comments", () => {
        it("can write and read", async () => {
            const system = "Lyncis Sector KM-W c1-10";
            const systemId = 241168;
            const systemId64 = 2832564490938n;

            // Set Test comment
            const result1 = await setComment(edsmUser, edsmAPIKey, system, "Test", { systemId, systemId64 });
            expect(result1.comment).toBe("Test");

            // Get comment
            const result2 = await getComment(edsmUser, edsmAPIKey, system, { systemId, systemId64 });
            expect(result2.comment).toBe("Test");

            // Get all comments
            const allCommentsResult = await getComments(edsmUser, edsmAPIKey);
            expect(allCommentsResult.comments.some(comment => comment.system === system && comment.comment === "Test")).toBe(true);

            // Remove comment
            const result3 = await setComment(edsmUser, edsmAPIKey, system, "");
            expect(result3.comment).toBe(null);

            // Get now empty comment
            const result4 = await getComment(edsmUser, edsmAPIKey, system);
            expect(result4.comment).toBe(null);
        });
    });
});
