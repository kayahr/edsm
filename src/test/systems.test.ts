
import { createReadStream } from "node:fs";

import type { ValidateFunction } from "ajv";
import { before, describe, it } from "node:test";

import { parseSystemsJSON } from "../main/systems.ts";
import { createValidator, testJSON } from "./util.ts";

const systemsWithoutCoordinatesFile = "src/test/data/systemsWithoutCoordinates.json";
const systemsWithCoordinatesFile = "src/test/data/systemsWithCoordinates.json";
const systemsPopulatedFile = "src/test/data/systemsPopulated.json";

describe("systems", () => {
    let validator: ValidateFunction;

    before(async () => {
        validator = await createValidator("system");
    });

    describe("parseSystemsJSON", () => {
        it("reads systems from JSON stream without coordinates", async () => {
            for await (const body of parseSystemsJSON(createReadStream(systemsWithoutCoordinatesFile))) {
                testJSON(validator, body);
            }
        });
        it("reads systems from JSON stream with coordinates", async () => {
            for await (const body of parseSystemsJSON(createReadStream(systemsWithCoordinatesFile))) {
                testJSON(validator, body);
            }
        });
        it("reads systems from JSON stream with only populated systems", async () => {
            for await (const body of parseSystemsJSON(createReadStream(systemsPopulatedFile))) {
                testJSON(validator, body);
            }
        });
    });
});
