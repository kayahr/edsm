import "@kayahr/vitest-matchers";

import { createReadStream } from "node:fs";
import { join } from "node:path";

import { type ValidateFunction } from "ajv";
import { beforeAll, describe, it } from "vitest";

import { parsePowerPlayJSON } from "../main/powerplay.js";
import { createValidator, testJSON } from "./util.js";

const baseDir = join(__dirname, "../..");
const powerPlayFile = join(baseDir, "src/test/data/powerPlay.json");

describe("powerplay", () => {
    let validator: ValidateFunction;

    beforeAll(async () => {
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
