import { it } from "vitest";

import { getCommanderCredits, getCommanderInventory, getCommanderRanks } from "../../main/api/commander.js";
import { createValidator, describeWhenTestAPI, edsmAPIKey, testJSON } from "../util.js";

describeWhenTestAPI("getCommanderRanks", () => {
    const validator = createValidator("commander-ranks");
    it("returns commander ranks (without API key) which matches the schema", async () => {
        const result = await getCommanderRanks("Kayahr");
        testJSON(validator, result);
    });
    it("returns commander ranks (with API key) which matches the schema", async () => {
        const result = await getCommanderRanks("Kayahr", edsmAPIKey);
        testJSON(validator, result);
    });
});

describeWhenTestAPI("getCommanderCredits", () => {
    const validator = createValidator("commander-credits");
    it("returns commander credits which matches the schema", async () => {
        const result = await getCommanderCredits("Kayahr", edsmAPIKey);
        testJSON(validator, result);
    });
    it("returns commander credits for given time period which matches the schema", async () => {
        const result = await getCommanderCredits("Kayahr", edsmAPIKey, "1MONTH");
        testJSON(validator, result);
    });
});

describeWhenTestAPI("getCommanderInventory", () => {
    const validator = createValidator("commander-inventory");
    it("returns commander materials which matches the schema", async () => {
        const result = await getCommanderInventory("Kayahr", edsmAPIKey);
        testJSON(validator, result);
    });
    it("returns commander cargo which matches the schema", async () => {
        const result = await getCommanderInventory("Kayahr", edsmAPIKey, "cargo");
        testJSON(validator, result);
    });
    it("returns commander data which matches the schema", async () => {
        const result = await getCommanderInventory("Kayahr", edsmAPIKey, "data");
        testJSON(validator, result);
    });
});
