import "@kayahr/vitest-matchers";

import { createReadStream } from "node:fs";
import { join } from "node:path";

import { type ValidateFunction } from "ajv";
import { beforeAll, describe, it } from "vitest";

import { parseSystemsJSON } from "../main/systems.js";
import { createValidator, testJSON } from "./util.js";

const baseDir = join(__dirname, "../..");
const systemsWithoutCoordinatesFile = join(baseDir, "src/test/data/systemsWithoutCoordinates.json");
const systemsWithCoordinatesFile = join(baseDir, "src/test/data/systemsWithCoordinates.json");
const systemsPopulatedFile = join(baseDir, "src/test/data/systemsPopulated.json");

describe("systems", () => {
    let validator: ValidateFunction;

    beforeAll(async () => {
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
