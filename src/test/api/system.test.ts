import "jest-extended";
import "isomorphic-fetch";

import { NotFoundException } from "@kayahr/kaylib/lib/main/util/exception";
import * as path from "path";

import { getSystemBodies, getSystemEstimatedValue, getSystemStations } from "../../main/api/system";
import { createValidator, describeWhenTestAPI, testJSON } from "../util";

const baseDir = path.join(__dirname, "../../..");
const sourceFiles = [
    path.join(baseDir, "src/main/api/system.ts")
];

describeWhenTestAPI("getSystemBodies", () => {
    const validator = createValidator("systemBodies", "SystemBodies", sourceFiles);
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
            fail("Did not throw exception");
        } catch (e) {
            expect(() => { throw e; }).toThrowWithMessage(NotFoundException, "System not found: Raxxla");
        }
    });
});

describeWhenTestAPI("getSystemEstimatedValue", () => {
    const validator = createValidator("systemEstimatedValue", "SystemEstimatedValue", sourceFiles);
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
            fail("Did not throw exception");
        } catch (e) {
            expect(() => { throw e; }).toThrowWithMessage(NotFoundException, "System not found: Raxxla");
        }
    });
});

describeWhenTestAPI("getSystemStations", () => {
    const validator = createValidator("systemStations", "SystemStations", sourceFiles);
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
        try {
            await getSystemBodies("Raxxla");
            fail("Did not throw exception");
        } catch (e) {
            expect(() => { throw e; }).toThrowWithMessage(NotFoundException, "System not found: Raxxla");
        }
    });
});
