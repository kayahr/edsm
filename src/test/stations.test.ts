
import { createReadStream } from "node:fs";

import type { ValidateFunction } from "ajv";
import { before, describe, it } from "node:test";

import { parseStationsJSON } from "../main/stations.ts";
import { createValidator, testJSON } from "./util.ts";

const stationsFile = "src/test/data/stations.json";

describe("stations", () => {
    let validator: ValidateFunction;

    before(async () => {
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
