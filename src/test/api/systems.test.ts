import "@kayahr/vitest-matchers";

import type { ValidateFunction } from "ajv";
import { afterAll, beforeAll, describe, expect, it } from "vitest";

import { getCubeSystems, getSphereSystems, getSystem, getSystems } from "../../main/api/systems.js";
import { NotFoundException } from "../../main/util.js";
import { createValidator, testJSON } from "../util.js";
import { edsmLiveTest, edsmMock } from "./mock.js";

describe("systems", () => {
    beforeAll(() => {
        edsmMock.start();
    });

    afterAll(() => {
        edsmMock.stop();
    });

    describe("getSystem", () => {
        let validator: ValidateFunction;

        beforeAll(async () => {
            validator = await createValidator("system-response");
        });

        it("return single system by name", async () => {
            const result = await getSystem("Shinrarta Dezhra");
            expect(result.name).toBe("Shinrarta Dezhra");
            testJSON(validator, result);
        });
        it("returns single system by EDSM ID", async () => {
            const result = await getSystem("Some Name", { systemId: 4345 });
            expect(result.name).toBe("Shinrarta Dezhra");
            testJSON(validator, result);
        });
        it("returns single system by Frontier ID", async () => {
            const result = await getSystem("Some Name", { systemId64: 3932277478106 });
            expect(result.name).toBe("Shinrarta Dezhra");
            testJSON(validator, result);
        });
        it("throws error when system not found", async () => {
            await expect(getSystem("Raxxla")).rejects.toThrowWithMessage(NotFoundException, "System not found: Raxxla");
        });
    });

    describe("getSystems", () => {
        let validator: ValidateFunction;

        beforeAll(async () => {
            validator = await createValidator("system-response");
        });

        it("returns multiple systems by exact name", async () => {
            const result = await getSystems({ systemName: [ "Shinrarta Dezhra", "Sol" ] });
            expect(result.length == 2);
            expect(result[0].name).toBe("Shinrarta Dezhra");
            expect(result[1].name).toBe("Sol");
            testJSON(validator, result[0]);
            testJSON(validator, result[1]);
        });

        it("returns systems matching start of name", async () => {
            const result = await getSystems({ systemName: "Shinrarta Dez" });
            expect(result.length == 1);
            expect(result[0].name).toBe("Shinrarta Dezhra");
            testJSON(validator, result[0]);
        });

        it("returns empty list of nothing found", async () => {
            const result = await getSystems({ systemName: "Raxxla" });
            expect(result.length == 0);
        });
    });

    // TODO These tests currently do not work with live system
    if (!edsmLiveTest) {
        describe("getSphereSystems", () => {
            let validator: ValidateFunction;
            beforeAll(async () => {
                validator = await createValidator("system-response");
            });
            it("returns multiple systems around coordinate", async () => {
                const result = await getSphereSystems({ x: 0, y: 0, z: 0 });
                expect(result.length == 2);
                expect(result[0].name).toBe("Shinrarta Dezhra");
                expect(result[1].name).toBe("Sol");
                testJSON(validator, result[0]);
                testJSON(validator, result[1]);
            });
            it("returns multiple systems around specific system", async () => {
                const result = await getSphereSystems("Sol");
                expect(result.length == 2);
                expect(result[0].name).toBe("Shinrarta Dezhra");
                expect(result[1].name).toBe("Sol");
                testJSON(validator, result[0]);
                testJSON(validator, result[1]);
            });
        });

        describe("getCubeSystems", () => {
            let validator: ValidateFunction;
            beforeAll(async () => {
                validator = await createValidator("system-response");
            });
            it("returns multiple systems around coordinate", async () => {
                const result = await getCubeSystems({ x: 0, y: 0, z: 0 });
                expect(result.length == 2);
                expect(result[0].name).toBe("Shinrarta Dezhra");
                expect(result[1].name).toBe("Sol");
                testJSON(validator, result[0]);
                testJSON(validator, result[1]);
            });
            it("returns multiple systems around specific system", async () => {
                const result = await getCubeSystems("Sol");
                expect(result.length == 2);
                expect(result[0].name).toBe("Shinrarta Dezhra");
                expect(result[1].name).toBe("Sol");
                testJSON(validator, result[0]);
                testJSON(validator, result[1]);
            });
        });
    }
});
