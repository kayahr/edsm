import "@kayahr/vitest-matchers";

import type { ValidateFunction } from "ajv";
import { afterAll, beforeAll, describe, expect, it } from "vitest";

import { getCommanderCredits, getCommanderInventory, getCommanderRanks } from "../../main/api/commander.js";
import { APIException } from "../../main/index.js";
import { createValidator, testJSON } from "../util.js";
import { edsmAPIKey, edsmMock, edsmUser } from "./mock.js";

describe("commander", () => {
    beforeAll(() => {
        edsmMock.start();
    });

    afterAll(() => {
        edsmMock.stop();
    });

    describe("getCommanderRanks", () => {
        let validator: ValidateFunction;
        beforeAll(async () => {
            validator = await createValidator("commander-ranks");
        });
        it("returns commander ranks (without API key) which matches the schema", async () => {
            const result = await getCommanderRanks(edsmUser);
            testJSON(validator, result);
        });
        it("returns commander ranks (with API key) which matches the schema", async () => {
            const result = await getCommanderRanks(edsmUser, edsmAPIKey);
            testJSON(validator, result);
        });
        it("throws APIException when commander not found", async () => {
            await expect(getCommanderRanks(crypto.randomUUID())).rejects.toThrowWithMessage(APIException, "Commander name/API Key not found");
        });
    });

    describe("getCommanderCredits", () => {
        let validator: ValidateFunction;
        beforeAll(async () => {
            validator = await createValidator("commander-credits");
        });
        it("returns commander credits which matches the schema", async () => {
            const result = await getCommanderCredits(edsmUser, edsmAPIKey);
            testJSON(validator, result);
        });
        it("returns commander credits with time period '7DAY' which matches the schema", async () => {
            const result = await getCommanderCredits(edsmUser, edsmAPIKey, "7DAY");
            expect(result.period === "7DAY");
            testJSON(validator, result);
        });
        it("returns commander credits with time period '1MONTH' which matches the schema", async () => {
            const result = await getCommanderCredits(edsmUser, edsmAPIKey, "1MONTH");
            expect(result.period === "1MONTH");
            testJSON(validator, result);
        });
        it("returns commander credits with time period '3MONTH' which matches the schema", async () => {
            const result = await getCommanderCredits(edsmUser, edsmAPIKey, "3MONTH");
            expect(result.period === "3MONTH");
            testJSON(validator, result);
        });
        it("returns commander credits with time period '6MONTH' which matches the schema", async () => {
            const result = await getCommanderCredits(edsmUser, edsmAPIKey, "6MONTH");
            expect(result.period === "6MONTH");
            testJSON(validator, result);
        });
    });

    describe("getCommanderInventory", () => {
        let validator: ValidateFunction;

        beforeAll(async () => {
            validator = await createValidator("commander-inventory");
        });

        it("returns commander materials which matches the schema", async () => {
            const result = await getCommanderInventory(edsmUser, edsmAPIKey);
            testJSON(validator, result);
            expect(result.materials).toBeDefined();
            expect(result.cargo).toBeUndefined();
            expect(result.data).toBeUndefined();
        });
        it("returns commander materials (explicitly specified) which matches the schema", async () => {
            const result = await getCommanderInventory(edsmUser, edsmAPIKey, "materials");
            testJSON(validator, result);
            expect(result.materials).toBeDefined();
            expect(result.cargo).toBeUndefined();
            expect(result.data).toBeUndefined();
        });
        it("returns commander cargo which matches the schema", async () => {
            const result = await getCommanderInventory(edsmUser, edsmAPIKey, "cargo");
            testJSON(validator, result);
            expect(result.materials).toBeUndefined();
            expect(result.cargo).toBeDefined();
            expect(result.data).toBeUndefined();
        });
        it("returns commander data which matches the schema", async () => {
            const result = await getCommanderInventory(edsmUser, edsmAPIKey, "data");
            testJSON(validator, result);
            expect(result.materials).toBeUndefined();
            expect(result.cargo).toBeUndefined();
            expect(result.data).toBeDefined();
        });
    });
});
