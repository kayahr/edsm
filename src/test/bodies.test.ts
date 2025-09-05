import "@kayahr/vitest-matchers";

import { createReadStream } from "node:fs";
import { join } from "node:path";

import type { ValidateFunction } from "ajv";
import { beforeAll, describe, expect, it } from "vitest";

import { isPlanet, isStar, parseBodiesJSON } from "../main/bodies.js";
import { createValidator, testJSON } from "./util.js";

const baseDir = join(__dirname, "../..");
const bodiesFile = join(baseDir, "src/test/data/bodies7days.json");

describe("bodies", () => {
    let validator: ValidateFunction;

    beforeAll(async () => {
        validator = await createValidator("body");
    });

    describe("isStar", () => {
        it("checks if body is a star", async () => {
            for await (const body of parseBodiesJSON(createReadStream(bodiesFile))) {
                expect(isStar(body)).toBe(body.type === "Star");
            };
        });
    });

    describe("isPlanet", () => {
        it("checks if body is a planet", async () => {
            for await (const body of parseBodiesJSON(createReadStream(bodiesFile))) {
                expect(isPlanet(body)).toBe(body.type === "Planet");
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
