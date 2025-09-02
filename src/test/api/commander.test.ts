import { join } from "path";
import { it } from "vitest";

import { getCommanderCredits, getCommanderInventory, getCommanderRanks } from "../../main/api/commander.js";
import { createValidator, describeWhenTestAPI, edsmAPIKey, testJSON } from "../util.js";

const baseDir = join(__dirname, "../../..");
const sourceFiles = [
    join(baseDir, "src/main/api/commander.ts")
];

describeWhenTestAPI("getCommanderRanks", () => {
    const validator = createValidator("commanderRanks", "CommanderRanks", sourceFiles);
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
    const validator = createValidator("commanderCredits", "CommanderCredits", sourceFiles);
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
    const validator = createValidator("commanderInventory", "CommanderInventory", sourceFiles);
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
