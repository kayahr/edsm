import "@kayahr/vitest-matchers";

import type { ValidateFunction } from "ajv";
import { afterAll, beforeAll, describe, expect, it } from "vitest";

import {
    getStationMarket, getStationOutfitting, getStationShipyard, getSystemBodies, getSystemEstimatedValue, getSystemStations
} from "../../main/api/system.js";
import { ServerException } from "../../main/index.js";
import { NotFoundException } from "../../main/util.js";
import { createValidator, testJSON } from "../util.js";
import { edsmMock } from "./mock.js";

describe("commander", () => {
    beforeAll(() => {
        edsmMock.start();
    });

    afterAll(() => {
        edsmMock.stop();
    });

    describe("getSystemBodies", () => {
        let validator: ValidateFunction;

        beforeAll(async () => {
            validator = await createValidator("system-bodies");
        });

        it("returns bodies for single system which matches the schema", async () => {
            const result = await getSystemBodies("Colonia");
            expect(result.id).toBe(3384966);
            expect(result.id64).toBe(3238296097059);
            expect(result.name).toBe("Colonia");
            expect(result.bodies.length).toBeGreaterThan(0);
            expect(result.bodyCount).toBe(result.bodies.length);
            testJSON(validator, result);
        });
        it("returns bodies for correct duplicate system by ID", async () => {
            const result1 = await getSystemBodies("24 Comae Berenices", { systemId: 5410650 });
            expect(result1.id64).toBe(84054348506);
            const result2 = await getSystemBodies("24 Comae Berenices", { systemId: 53494504 });
            expect(result2.id64).toBe(1323435196);
            testJSON(validator, result1);
            testJSON(validator, result2);
        });
        it("returns bodies for correct duplicate system by ID64", async () => {
            const result1 = await getSystemBodies("24 Comae Berenices", { systemId64: 84054348506 });
            expect(result1.id).toBe(5410650);
            const result2 = await getSystemBodies("24 Comae Berenices", { systemId64: 1323435196 });
            expect(result2.id).toBe(53494504);
            testJSON(validator, result1);
            testJSON(validator, result2);
        });
        it("throws error when system not found", async () => {
            try {
                await getSystemBodies("Raxxla");
                throw new Error("Did not throw exception");
            } catch (e) {
                expect(() => { throw e; }).toThrowWithMessage(NotFoundException, "System not found: Raxxla");
            }
        });
    });

    describe("getSystemEstimatedValue", () => {
        let validator: ValidateFunction;

        beforeAll(async () => {
            validator = await createValidator("system-estimated-value");
        });

        it("returns system estimated value for single system which matches the schema", async () => {
            const result = await getSystemEstimatedValue("Sol");
            expect(result.id).toBe(27);
            expect(result.id64).toBe(10477373803);
            expect(result.name).toBe("Sol");
            expect(result.url).toBe("https://www.edsm.net/en/system/bodies/id/27/name/Sol");
            expect(result.valuableBodies.length).toBeGreaterThan(0);
            testJSON(validator, result);
        });
        it("returns system estimated value for correct duplicate system by ID", async () => {
            const result1 = await getSystemEstimatedValue("24 Comae Berenices", { systemId: 5410650 });
            expect(result1.id64).toBe(84054348506);
            const result2 = await getSystemEstimatedValue("24 Comae Berenices", { systemId: 53494504 });
            expect(result2.id64).toBe(1323435196);
            testJSON(validator, result1);
            testJSON(validator, result2);
        });
        it("returns system estimated value for correct duplicate system by ID64", async () => {
            const result1 = await getSystemEstimatedValue("24 Comae Berenices", { systemId64: 84054348506 });
            expect(result1.id).toBe(5410650);
            const result2 = await getSystemEstimatedValue("24 Comae Berenices", { systemId64: 1323435196 });
            expect(result2.id).toBe(53494504);
            testJSON(validator, result1);
            testJSON(validator, result2);
        });
        it("throws error when system not found", async () => {
            try {
                await getSystemEstimatedValue("Raxxla");
                throw new Error("Did not throw exception");
            } catch (e) {
                expect(() => { throw e; }).toThrowWithMessage(NotFoundException, "System not found: Raxxla");
            }
        });
    });

    describe("getSystemStations", () => {
        let validator: ValidateFunction;

        beforeAll(async () => {
            validator = await createValidator("system-stations");
        });

        it("returns stations for single system which matches the schema", async () => {
            const result = await getSystemStations("Shinrarta Dezhra");
            expect(result.id).toBe(4345);
            expect(result.id64).toBe(3932277478106);
            expect(result.name).toBe("Shinrarta Dezhra");
            expect(result.url).toBe("https://www.edsm.net/en/system/stations/id/4345/name/Shinrarta+Dezhra");
            expect(result.stations.length).toBeGreaterThan(0);
            testJSON(validator, result);
        });
        it("returns stations for correct duplicate system by ID", async () => {
            const result1 = await getSystemStations("24 Comae Berenices", { systemId: 5410650 });
            expect(result1.id64).toBe(84054348506);
            const result2 = await getSystemStations("24 Comae Berenices", { systemId: 53494504 });
            expect(result2.id64).toBe(1323435196);
            testJSON(validator, result1);
            testJSON(validator, result2);
        });
        it("returns stations for correct duplicate system by ID64", async () => {
            const result1 = await getSystemStations("24 Comae Berenices", { systemId64: 84054348506 });
            expect(result1.id).toBe(5410650);
            const result2 = await getSystemStations("24 Comae Berenices", { systemId64: 1323435196 });
            expect(result2.id).toBe(53494504);
            testJSON(validator, result1);
            testJSON(validator, result2);
        });
        it("throws error when system not found", async () => {
            await expect(getSystemStations("Raxxla")).rejects.toThrowWithMessage(NotFoundException, "System not found: Raxxla");
        });
    });

    describe("getStationMarket", () => {
        let validator: ValidateFunction;
        beforeAll(async () => {
            validator = await createValidator("station-market");
        });
        it("returns market data for station referenced by name", async () => {
            const result = await getStationMarket("Shinrarta Dezhra", "Jameson Memorial");
            testJSON(validator, result);
            expect(result.sName === "Jameson Memorial");
            expect(result.commodities.length > 0);
        });
        it("returns market data for station referenced by id", async () => {
            const result = await getStationMarket(128666762);
            testJSON(validator, result);
            expect(result.sName === "Jameson Memorial");
            expect(result.commodities.length > 0);
        });
        it("throws error when market id not found", async () => {
            await expect(getStationMarket(1234567890)).rejects.toThrowWithMessage(NotFoundException, "Market not found: 1234567890");
        });
        it("throws error when station name not found", async () => {
            await expect(getStationMarket("Shinrarta Dezhra", "Jameson")).rejects
                .toThrowWithMessage(NotFoundException, "Station 'Jameson' in 'Shinrarta Dezhra' not found");
        });
        it("throws server error when market id is negative", async () => {
            await expect(getStationMarket(-1)).rejects
                .toThrowWithMessage(ServerException, "Internal Server Error");
        });
    });

    describe("getStationShipyard", () => {
        let validator: ValidateFunction;
        beforeAll(async () => {
            validator = await createValidator("station-shipyard");
        });
        it("returns market data for station referenced by name", async () => {
            const result = await getStationShipyard("Shinrarta Dezhra", "Jameson Memorial");
            testJSON(validator, result);
            expect(result.sName === "Jameson Memorial");
            expect(result.ships.length > 0);
        });
        it("returns market data for station referenced by id", async () => {
            const result = await getStationShipyard(128666762);
            testJSON(validator, result);
            expect(result.sName === "Jameson Memorial");
            expect(result.ships.length > 0);
        });
        it("throws error when market id not found", async () => {
            await expect(getStationShipyard(1234567890)).rejects.toThrowWithMessage(NotFoundException, "Market not found: 1234567890");
        });
        it("throws error when station name not found", async () => {
            await expect(getStationShipyard("Shinrarta Dezhra", "Jameson")).rejects
                .toThrowWithMessage(NotFoundException, "Station 'Jameson' in 'Shinrarta Dezhra' not found");
        });
    });

    describe("getStationOutfitting", () => {
        let validator: ValidateFunction;
        beforeAll(async () => {
            validator = await createValidator("station-outfitting");
        });
        it("returns market data for station referenced by name", async () => {
            const result = await getStationOutfitting("Shinrarta Dezhra", "Jameson Memorial");
            testJSON(validator, result);
            expect(result.sName === "Jameson Memorial");
            expect(result.outfitting.length > 0);
        });
        it("returns market data for station referenced by id", async () => {
            const result = await getStationOutfitting(128666762);
            testJSON(validator, result);
            expect(result.sName === "Jameson Memorial");
            expect(result.outfitting.length > 0);
        });
        it("throws error when market id not found", async () => {
            await expect(getStationOutfitting(1234567890)).rejects.toThrowWithMessage(NotFoundException, "Market not found: 1234567890");
        });
        it("throws error when station name not found", async () => {
            await expect(getStationOutfitting("Shinrarta Dezhra", "Jameson")).rejects
                .toThrowWithMessage(NotFoundException, "Station 'Jameson' in 'Shinrarta Dezhra' not found");
        });
    });
});
