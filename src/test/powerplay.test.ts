
import { createReadStream } from "node:fs";

import type { ValidateFunction } from "ajv";
import { before, describe, it } from "node:test";

import { parsePowerPlayJSON } from "../main/powerplay.ts";
import { createValidator, testJSON } from "./util.ts";

const powerPlayFile = "src/test/data/powerPlay.json";

describe("powerplay", () => {
    let validator: ValidateFunction;

    before(async () => {
        validator = await createValidator("powerplay");
    });

    describe("parsePowerPlayJSON", () => {
        it("reads codices from JSON stream", async () => {
            for await (const body of parsePowerPlayJSON(createReadStream(powerPlayFile))) {
                testJSON(validator, body);
            }
        });
    });
});
