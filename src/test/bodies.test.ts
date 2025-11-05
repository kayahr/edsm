
import { createReadStream } from "node:fs";

import type { ValidateFunction } from "ajv";
import { before, describe, it } from "node:test";

import { isPlanet, isStar, parseBodiesJSON } from "../main/bodies.ts";
import { createValidator, testJSON } from "./util.ts";
import { assertSame } from "@kayahr/assert";

const bodiesFile = "src/test/data/bodies7days.json";

describe("bodies", () => {
    let validator: ValidateFunction;

    before(async () => {
        validator = await createValidator("body");
    });

    describe("isStar", () => {
        it("checks if body is a star", async () => {
            for await (const body of parseBodiesJSON(createReadStream(bodiesFile))) {
                assertSame(isStar(body), body.type === "Star");
            };
        });
    });

    describe("isPlanet", () => {
        it("checks if body is a planet", async () => {
            for await (const body of parseBodiesJSON(createReadStream(bodiesFile))) {
                assertSame(isPlanet(body), body.type === "Planet");
            };
        });
    });

    describe("parseBodiesJSON", () => {
        it("reads bodies from JSON stream", async () => {
            for await (const body of parseBodiesJSON(createReadStream(bodiesFile))) {
                testJSON(validator, body);
            }
        });
    });
});
