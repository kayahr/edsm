import "@kayahr/vitest-matchers";

import { createReadStream } from "node:fs";
import { join } from "node:path";

import { type ValidateFunction } from "ajv";
import { beforeAll, describe, it } from "vitest";

import { parseStationsJSON } from "../main/stations.js";
import { createValidator, testJSON } from "./util.js";

const baseDir = join(__dirname, "../..");
const stationsFile = join(baseDir, "src/test/data/stations.json");

describe("stations", () => {
    let validator: ValidateFunction;

    beforeAll(async () => {
        validator = await createValidator("station");
    });

    describe("parseStationsJSON", () => {
        it("reads stations from JSON stream", async () => {
            for await (const body of parseStationsJSON(createReadStream(stationsFile))) {
                testJSON(validator, body);
            }
        });
    });
});
