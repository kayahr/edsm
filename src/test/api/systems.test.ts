
import type { ValidateFunction } from "ajv";
import { after, before, describe, it } from "node:test";

import { getCubeSystems, getSphereSystems, getSystem, getSystems } from "../../main/api/systems.ts";
import { NotFoundException } from "../../main/util.ts";
import { createValidator, testJSON } from "../util.ts";
import { edsmLiveTest, edsmMock } from "./mock.ts";
import { assertSame, assertThrowWithMessage } from "@kayahr/assert";

describe("systems", () => {
    before(() => {
        edsmMock.start();
    });

    after(() => {
        edsmMock.stop();
    });

    describe("getSystem", () => {
        let validator: ValidateFunction;

        before(async () => {
            validator = await createValidator("system-response");
        });

        it("return single system by name", async () => {
            const result = await getSystem("Shinrarta Dezhra");
            assertSame(result.name, "Shinrarta Dezhra");
            testJSON(validator, result);
        });
        it("returns single system by EDSM ID", async () => {
            const result = await getSystem("Some Name", { systemId: 4345 });
            assertSame(result.name, "Shinrarta Dezhra");
            testJSON(validator, result);
        });
        it("returns single system by Frontier ID", async () => {
            const result = await getSystem("Some Name", { systemId64: 3932277478106 });
            assertSame(result.name, "Shinrarta Dezhra");
            testJSON(validator, result);
        });
        it("throws error when system not found", async () => {
            await assertThrowWithMessage(() => getSystem("Raxxla"), NotFoundException, "System not found: Raxxla");
        });
    });

    describe("getSystems", () => {
        let validator: ValidateFunction;

        before(async () => {
            validator = await createValidator("system-response");
        });

        it("returns multiple systems by exact name", async () => {
            const result = await getSystems({ systemName: [ "Shinrarta Dezhra", "Sol" ] });
            assertSame(result.length, 2);
            assertSame(result[0].name, "Shinrarta Dezhra");
            assertSame(result[1].name, "Sol");
            testJSON(validator, result[0]);
            testJSON(validator, result[1]);
        });

        it("returns systems matching start of name", async () => {
            const result = await getSystems({ systemName: "Shinrarta Dez" });
            assertSame(result.length, 1);
            assertSame(result[0].name, "Shinrarta Dezhra");
            testJSON(validator, result[0]);
        });

        it("returns empty list of nothing found", async () => {
            const result = await getSystems({ systemName: "Raxxla" });
            assertSame(result.length, 0);
        });
    });

    // TODO These tests currently do not work with live system
    if (!edsmLiveTest) {
        describe("getSphereSystems", () => {
            let validator: ValidateFunction;
            before(async () => {
                validator = await createValidator("system-response");
            });
            it("returns multiple systems around coordinate", async () => {
                const result = await getSphereSystems({ x: 0, y: 0, z: 0 });
                assertSame(result.length, 2);
                assertSame(result[0].name, "Shinrarta Dezhra");
                assertSame(result[1].name, "Sol");
                testJSON(validator, result[0]);
                testJSON(validator, result[1]);
            });
            it("returns multiple systems around specific system", async () => {
                const result = await getSphereSystems("Sol");
                assertSame(result.length, 2);
                assertSame(result[0].name, "Shinrarta Dezhra");
                assertSame(result[1].name, "Sol");
                testJSON(validator, result[0]);
                testJSON(validator, result[1]);
            });
        });

        describe("getCubeSystems", () => {
            let validator: ValidateFunction;
            before(async () => {
                validator = await createValidator("system-response");
            });
            it("returns multiple systems around coordinate", async () => {
                const result = await getCubeSystems({ x: 0, y: 0, z: 0 });
                assertSame(result.length, 2);
                assertSame(result[0].name, "Shinrarta Dezhra");
                assertSame(result[1].name, "Sol");
                testJSON(validator, result[0]);
                testJSON(validator, result[1]);
            });
            it("returns multiple systems around specific system", async () => {
                const result = await getCubeSystems("Sol");
                assertSame(result.length, 2);
                assertSame(result[0].name, "Shinrarta Dezhra");
                assertSame(result[1].name, "Sol");
                testJSON(validator, result[0]);
                testJSON(validator, result[1]);
            });
        });
    }
});
