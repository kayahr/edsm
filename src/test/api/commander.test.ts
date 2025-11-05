
import type { ValidateFunction } from "ajv";
import { after, before, describe, it } from "node:test";
import { assertDefined, assertSame, assertThrowWithMessage, assertUndefined } from "@kayahr/assert";
import { getCommanderCredits, getCommanderInventory, getCommanderRanks } from "../../main/api/commander.ts";
import { APIException } from "../../main/index.ts";
import { createValidator, testJSON } from "../util.ts";
import { edsmAPIKey, edsmMock, edsmUser } from "./mock.ts";

describe("commander", () => {
    before(() => {
        edsmMock.start();
    });

    after(() => {
        edsmMock.stop();
    });

    describe("getCommanderRanks", () => {
        let validator: ValidateFunction;
        before(async () => {
            validator = await createValidator("commander-ranks-response");
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
            await assertThrowWithMessage(() => getCommanderRanks(crypto.randomUUID()), APIException, "Commander name/API Key not found");
        });
    });

    describe("getCommanderCredits", () => {
        let validator: ValidateFunction;
        before(async () => {
            validator = await createValidator("commander-credits-response");
        });
        it("returns commander credits which matches the schema", async () => {
            const result = await getCommanderCredits(edsmUser, edsmAPIKey);
            testJSON(validator, result);
        });
        it("returns commander credits with time period '7DAY' which matches the schema", async () => {
            const result = await getCommanderCredits(edsmUser, edsmAPIKey, "7DAY");
            assertSame(result.period, "7DAY");
            testJSON(validator, result);
        });
        it("returns commander credits with time period '1MONTH' which matches the schema", async () => {
            const result = await getCommanderCredits(edsmUser, edsmAPIKey, "1MONTH");
            assertSame(result.period, "1MONTH");
            testJSON(validator, result);
        });
        it("returns commander credits with time period '3MONTH' which matches the schema", async () => {
            const result = await getCommanderCredits(edsmUser, edsmAPIKey, "3MONTH");
            assertSame(result.period, "3MONTH");
            testJSON(validator, result);
        });
        it("returns commander credits with time period '6MONTH' which matches the schema", async () => {
            const result = await getCommanderCredits(edsmUser, edsmAPIKey, "6MONTH");
            assertSame(result.period, "6MONTH");
            testJSON(validator, result);
        });
    });

    describe("getCommanderInventory", () => {
        let validator: ValidateFunction;

        before(async () => {
            validator = await createValidator("commander-inventory-response");
        });

        it("returns commander materials which matches the schema", async () => {
            const result = await getCommanderInventory(edsmUser, edsmAPIKey);
            testJSON(validator, result);
            assertDefined(result.materials);
            assertUndefined(result.cargo);
            assertUndefined(result.data);
        });
        it("returns commander materials (explicitly specified) which matches the schema", async () => {
            const result = await getCommanderInventory(edsmUser, edsmAPIKey, "materials");
            testJSON(validator, result);
            assertDefined(result.materials);
            assertUndefined(result.cargo);
            assertUndefined(result.data);
        });
        it("returns commander cargo which matches the schema", async () => {
            const result = await getCommanderInventory(edsmUser, edsmAPIKey, "cargo");
            testJSON(validator, result);
            assertUndefined(result.materials);
            assertDefined(result.cargo);
            assertUndefined(result.data);
        });
        it("returns commander data which matches the schema", async () => {
            const result = await getCommanderInventory(edsmUser, edsmAPIKey, "data");
            testJSON(validator, result);
            assertUndefined(result.materials);
            assertUndefined(result.cargo);
            assertDefined(result.data);
        });
    });
});
