
import type { ValidateFunction } from "ajv";
import { after, before, describe, it } from "node:test";

import {
    getStationMarket, getStationOutfitting, getStationShipyard, getSystemBodies, getSystemDeaths, getSystemEstimatedValue, getSystemFactions, getSystemStations,
    getSystemTraffic
} from "../../main/api/system.ts";
import { ServerException } from "../../main/index.ts";
import { NotFoundException } from "../../main/util.ts";
import { createValidator, testJSON } from "../util.ts";
import { edsmMock } from "./mock.ts";
import { assertDefined, assertGreaterThan, assertSame, assertThrowWithMessage, assertUndefined } from "@kayahr/assert";

describe("system", () => {
    before(() => {
        edsmMock.start();
    });

    after(() => {
        edsmMock.stop();
    });

    describe("getSystemBodies", () => {
        let validator: ValidateFunction;

        before(async () => {
            validator = await createValidator("system-bodies-response");
        });

        it("returns bodies for single system which matches the schema", async () => {
            const result = await getSystemBodies("Colonia");
            assertSame(result.id, 3384966);
            assertSame(result.id64, 3238296097059);
            assertSame(result.name, "Colonia");
            assertGreaterThan(result.bodies.length, 0);
            assertSame(result.bodyCount, result.bodies.length);
            testJSON(validator, result);
        });
        it("returns bodies for correct duplicate system by ID", async () => {
            const result1 = await getSystemBodies("24 Comae Berenices", { systemId: 5410650 });
            assertSame(result1.id64, 84054348506);
            const result2 = await getSystemBodies("24 Comae Berenices", { systemId: 53494504 });
            assertSame(result2.id64, 1323435196);
            testJSON(validator, result1);
            testJSON(validator, result2);
        });
        it("returns bodies for correct duplicate system by ID64", async () => {
            const result1 = await getSystemBodies("24 Comae Berenices", { systemId64: 84054348506 });
            assertSame(result1.id, 5410650);
            const result2 = await getSystemBodies("24 Comae Berenices", { systemId64: 1323435196 });
            assertSame(result2.id, 53494504);
            testJSON(validator, result1);
            testJSON(validator, result2);
        });
        it("throws error when system not found", async () => {
            try {
                await getSystemBodies("Raxxla");
                throw new Error("Did not throw exception");
            } catch (error) {
                assertThrowWithMessage(() => { throw error; }, NotFoundException, "System not found: Raxxla");
            }
        });
    });

    describe("getSystemEstimatedValue", () => {
        let validator: ValidateFunction;

        before(async () => {
            validator = await createValidator("system-estimated-value-response");
        });

        it("returns system estimated value for single system which matches the schema", async () => {
            const result = await getSystemEstimatedValue("Sol");
            assertSame(result.id, 27);
            assertSame(result.id64, 10477373803);
            assertSame(result.name, "Sol");
            assertSame(result.url, "https://www.edsm.net/en/system/bodies/id/27/name/Sol");
            assertGreaterThan(result.valuableBodies.length, 0);
            testJSON(validator, result);
        });
        it("returns system estimated value for correct duplicate system by ID", async () => {
            const result1 = await getSystemEstimatedValue("24 Comae Berenices", { systemId: 5410650 });
            assertSame(result1.id64, 84054348506);
            const result2 = await getSystemEstimatedValue("24 Comae Berenices", { systemId: 53494504 });
            assertSame(result2.id64, 1323435196);
            testJSON(validator, result1);
            testJSON(validator, result2);
        });
        it("returns system estimated value for correct duplicate system by ID64", async () => {
            const result1 = await getSystemEstimatedValue("24 Comae Berenices", { systemId64: 84054348506 });
            assertSame(result1.id, 5410650);
            const result2 = await getSystemEstimatedValue("24 Comae Berenices", { systemId64: 1323435196 });
            assertSame(result2.id, 53494504);
            testJSON(validator, result1);
            testJSON(validator, result2);
        });
        it("throws error when system not found", async () => {
            try {
                await getSystemEstimatedValue("Raxxla");
                throw new Error("Did not throw exception");
            } catch (error) {
                assertThrowWithMessage(() => { throw error; }, NotFoundException, "System not found: Raxxla");
            }
        });
    });

    describe("getSystemStations", () => {
        let validator: ValidateFunction;

        before(async () => {
            validator = await createValidator("system-stations-response");
        });

        it("returns stations for single system which matches the schema", async () => {
            const result = await getSystemStations("Shinrarta Dezhra");
            assertSame(result.id, 4345);
            assertSame(result.id64, 3932277478106);
            assertSame(result.name, "Shinrarta Dezhra");
            assertSame(result.url, "https://www.edsm.net/en/system/stations/id/4345/name/Shinrarta+Dezhra");
            assertGreaterThan(result.stations.length, 0);
            testJSON(validator, result);
        });
        it("returns stations for correct duplicate system by ID", async () => {
            const result1 = await getSystemStations("24 Comae Berenices", { systemId: 5410650 });
            assertSame(result1.id64, 84054348506);
            const result2 = await getSystemStations("24 Comae Berenices", { systemId: 53494504 });
            assertSame(result2.id64, 1323435196);
            testJSON(validator, result1);
            testJSON(validator, result2);
        });
        it("returns stations for correct duplicate system by ID64", async () => {
            const result1 = await getSystemStations("24 Comae Berenices", { systemId64: 84054348506 });
            assertSame(result1.id, 5410650);
            const result2 = await getSystemStations("24 Comae Berenices", { systemId64: 1323435196 });
            assertSame(result2.id, 53494504);
            testJSON(validator, result1);
            testJSON(validator, result2);
        });
        it("throws error when system not found", async () => {
            await assertThrowWithMessage(() => getSystemStations("Raxxla"), NotFoundException, "System not found: Raxxla");
        });
    });

    describe("getStationMarket", () => {
        let validator: ValidateFunction;
        before(async () => {
            validator = await createValidator("station-market-response");
        });
        it("returns market data for station referenced by name", async () => {
            const result = await getStationMarket("Shinrarta Dezhra", "Jameson Memorial");
            testJSON(validator, result);
            assertSame(result.sName, "Jameson Memorial");
            assertGreaterThan(result.commodities.length, 0);
        });
        it("returns market data for station referenced by id", async () => {
            const result = await getStationMarket(128666762);
            testJSON(validator, result);
            assertSame(result.sName, "Jameson Memorial");
            assertGreaterThan(result.commodities.length, 0);
        });
        it("throws error when market id not found", async () => {
            await assertThrowWithMessage(() => getStationMarket(1234567890), NotFoundException, "Market not found: 1234567890");
        });
        it("throws error when station name not found", async () => {
            await assertThrowWithMessage(() => getStationMarket("Shinrarta Dezhra", "Jameson"), NotFoundException,
                "Station 'Jameson' in 'Shinrarta Dezhra' not found");
        });
        it("throws server error when market id is negative", async () => {
            await assertThrowWithMessage(() => getStationMarket(-1), ServerException, "Internal Server Error");
        });
    });

    describe("getStationShipyard", () => {
        let validator: ValidateFunction;
        before(async () => {
            validator = await createValidator("station-shipyard-response");
        });
        it("returns shipyard data for station referenced by name", async () => {
            const result = await getStationShipyard("Shinrarta Dezhra", "Jameson Memorial");
            testJSON(validator, result);
            assertSame(result.sName, "Jameson Memorial");
            assertGreaterThan(result.ships.length, 0);
        });
        it("returns shipyard data for station referenced by id", async () => {
            const result = await getStationShipyard(128666762);
            testJSON(validator, result);
            assertSame(result.sName, "Jameson Memorial");
            assertGreaterThan(result.ships.length, 0);
        });
        it("throws error when market id not found", async () => {
            await assertThrowWithMessage(() => getStationShipyard(1234567890), NotFoundException, "Market not found: 1234567890");
        });
        it("throws error when station name not found", async () => {
            await assertThrowWithMessage(() => getStationShipyard("Shinrarta Dezhra", "Jameson"), NotFoundException,
                "Station 'Jameson' in 'Shinrarta Dezhra' not found");
        });
    });

    describe("getStationOutfitting", () => {
        let validator: ValidateFunction;
        before(async () => {
            validator = await createValidator("station-outfitting-response");
        });
        it("returns outfitting data for station referenced by name", async () => {
            const result = await getStationOutfitting("Shinrarta Dezhra", "Jameson Memorial");
            testJSON(validator, result);
            assertSame(result.sName, "Jameson Memorial");
            assertGreaterThan(result.outfitting.length, 0);
        });
        it("returns outfitting data for station referenced by id", async () => {
            const result = await getStationOutfitting(128666762);
            testJSON(validator, result);
            assertSame(result.sName, "Jameson Memorial");
            assertGreaterThan(result.outfitting.length, 0);
        });
        it("throws error when market id not found", async () => {
            await assertThrowWithMessage(() => getStationOutfitting(1234567890), NotFoundException, "Market not found: 1234567890");
        });
        it("throws error when station name not found", async () => {
            await assertThrowWithMessage(() => getStationOutfitting("Shinrarta Dezhra", "Jameson"), NotFoundException,
                "Station 'Jameson' in 'Shinrarta Dezhra' not found");
        });
    });

    describe("getSystemFactions", () => {
        let validator: ValidateFunction;

        before(async () => {
            validator = await createValidator("system-factions-response");
        });

        it("returns factions for single system without history which matches the schema", async () => {
            const result = await getSystemFactions("Shinrarta Dezhra");
            assertSame(result.id, 4345);
            assertSame(result.id64, 3932277478106);
            assertSame(result.name, "Shinrarta Dezhra");
            assertSame(result.url, "https://www.edsm.net/en/system/id/4345/name/Shinrarta+Dezhra");
            assertGreaterThan(result.factions.length, 0);
            assertUndefined(result.factions[0].activeStatesHistory);
            assertUndefined(result.factions[0].happinessHistory);
            assertUndefined(result.factions[0].influenceHistory);
            assertUndefined(result.factions[0].pendingStatesHistory);
            assertUndefined(result.factions[0].stateHistory);
            assertUndefined(result.factions[0].recoveringStatesHistory);
            testJSON(validator, result);
        });
        it("returns factions for single system with history which matches the schema", async () => {
            const result = await getSystemFactions("Shinrarta Dezhra", { showHistory: 1 });
            assertSame(result.name, "Shinrarta Dezhra");
            assertGreaterThan(result.factions.length, 0);
            assertDefined(result.factions[0].activeStatesHistory);
            assertDefined(result.factions[0].happinessHistory);
            assertDefined(result.factions[0].influenceHistory);
            assertDefined(result.factions[0].pendingStatesHistory);
            assertDefined(result.factions[0].stateHistory);
            assertDefined(result.factions[0].recoveringStatesHistory);
            testJSON(validator, result);
        });
        it("returns factions for correct system by ID", async () => {
            const result = await getSystemFactions("Doesn't matter", { systemId: 4345 });
            assertSame(result.name, "Shinrarta Dezhra");
            testJSON(validator, result);
        });
        it("returns factions for correct system by ID64", async () => {
            const result = await getSystemFactions("Doesn't matter", { systemId64: 3932277478106 });
            assertSame(result.name, "Shinrarta Dezhra");
            testJSON(validator, result);
        });
        it("throws error when system not found", async () => {
            await assertThrowWithMessage(() => getSystemFactions("Raxxla"), NotFoundException, "System not found: Raxxla");
        });
    });

    describe("getSystemTraffic", () => {
        let validator: ValidateFunction;

        before(async () => {
            validator = await createValidator("system-traffic-response");
        });

        it("returns traffic for single system without history which matches the schema", async () => {
            const result = await getSystemTraffic("Shinrarta Dezhra");
            assertSame(result.id, 4345);
            assertSame(result.id64, 3932277478106);
            assertSame(result.name, "Shinrarta Dezhra");
            assertSame(result.url, "https://www.edsm.net/en/system/id/4345/name/Shinrarta+Dezhra");
            assertDefined(result.breakdown);
            testJSON(validator, result);
        });
        it("returns traffic for correct system by ID", async () => {
            const result = await getSystemTraffic("Doesn't matter", { systemId: 4345 });
            assertSame(result.name, "Shinrarta Dezhra");
            testJSON(validator, result);
        });
        it("returns traffic for correct system by ID64", async () => {
            const result = await getSystemTraffic("Doesn't matter", { systemId64: 3932277478106 });
            assertSame(result.name, "Shinrarta Dezhra");
            testJSON(validator, result);
        });
        it("throws error when system not found", async () => {
            await assertThrowWithMessage(() => getSystemTraffic("Raxxla"), NotFoundException, "System not found: Raxxla");
        });
    });

    describe("getSystemDeaths", () => {
        let validator: ValidateFunction;

        before(async () => {
            validator = await createValidator("system-deaths-response");
        });

        it("returns deaths for single system without history which matches the schema", async () => {
            const result = await getSystemDeaths("Shinrarta Dezhra");
            assertSame(result.id, 4345);
            assertSame(result.id64, 3932277478106);
            assertSame(result.name, "Shinrarta Dezhra");
            assertSame(result.url, "https://www.edsm.net/en/system/id/4345/name/Shinrarta+Dezhra");
            assertDefined(result.deaths);
            testJSON(validator, result);
        });
        it("returns deaths for correct system by ID", async () => {
            const result = await getSystemDeaths("Doesn't matter", { systemId: 4345 });
            assertSame(result.name, "Shinrarta Dezhra");
            testJSON(validator, result);
        });
        it("returns deaths for correct system by ID64", async () => {
            const result = await getSystemDeaths("Doesn't matter", { systemId64: 3932277478106 });
            assertSame(result.name, "Shinrarta Dezhra");
            testJSON(validator, result);
        });
        it("throws error when system not found", async () => {
            await assertThrowWithMessage(() => getSystemDeaths("Raxxla"), NotFoundException, "System not found: Raxxla");
        });
    });
});
