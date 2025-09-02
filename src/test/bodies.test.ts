import "@kayahr/vitest-matchers";

import path from "node:path";

import ajv from "ajv";
import { beforeAll, describe, expect, it } from "vitest";

import { type Bodies, isPlanet, isStar, readBodiesJSON, streamBodiesJSON } from "../main/bodies.js";
import { createReader, createValidator, readJSON, sleep, testJSON, testJSONFileLineByLine } from "./util.js";

const baseDir = path.join(__dirname, "../..");
const sourceFiles = [
    path.join(baseDir, "src/main/bodies.ts")
];
const bodiesFile = path.join(baseDir, "src/test/data/bodies7days.json");
// Use this to test against real data export stored in data directory (Actually doesn't work because of out-of-mem):
// const bodiesFile = path.join(baseDir, "data/bodies7days.json.gz");

describe("bodies", () => {
    let validator: ajv.ValidateFunction;
    let bodies: Bodies;

    beforeAll(async () => {
        validator = createValidator("body", "Body", sourceFiles);
        bodies = await readJSON(bodiesFile) as Bodies;
    });

    describe("isStar", () => {
        it("checks if body is a star", () => {
            bodies.forEach(body => {
                expect(isStar(body)).toBe(body.type === "Star");
            });
        });
    });

    describe("isPlanet", () => {
        it("checks if body is a planet", () => {
            bodies.forEach(body => {
                expect(isPlanet(body)).toBe(body.type === "Planet");
            });
        });
    });

    describe("Body", () => {
        it("matches actual JSON", async () => {
            await testJSONFileLineByLine(validator, bodiesFile);
        });
    });

    describe("streamBodiesJSON", () => {
        it("reads bodies from JSON stream", async () => {
            await expect(streamBodiesJSON(createReader(bodiesFile), body => {
                testJSON(validator, body);
            })).toResolve();
        });
        it("waits for async callback result", async () => {
            const list: Bodies = [];
            await expect(streamBodiesJSON(createReader(bodiesFile), async body => {
                testJSON(validator, body);
                await sleep();
                list.push(body);
            })).toResolve();
            expect(list).toEqual(bodies);
        });
    });

    describe("readBodiesJSON", () => {
        it("reads bodies from JSON stream", async () => {
            expect(await readBodiesJSON(createReader(bodiesFile))).toEqual(bodies);
        });
    });
});
