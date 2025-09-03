import "@kayahr/vitest-matchers";

import { describe, expect, it } from "vitest";

import * as edsm from "../main/index.js";
import { streamJSON } from "../main/util.js";

describe("index", () => {
    it("exports public stuff", () => {
        expect(edsm.getCommanderCredits).toBeInstanceOf(Function);
        expect(edsm.getCommanderInventory).toBeInstanceOf(Function);
        expect(edsm.getCommanderRanks).toBeInstanceOf(Function);
        expect(edsm.getComment).toBeInstanceOf(Function);
        expect(edsm.getComments).toBeInstanceOf(Function);
        expect(edsm.getEliteServerStatus).toBeInstanceOf(Function);
        expect(edsm.getFlightLogs).toBeInstanceOf(Function);
        expect(edsm.getPosition).toBeInstanceOf(Function);
        expect(edsm.getSystemBodies).toBeInstanceOf(Function);
        expect(edsm.getSystemEstimatedValue).toBeInstanceOf(Function);
        expect(edsm.getSystemStations).toBeInstanceOf(Function);
        expect(edsm.getSystemStationsMarket).toBeInstanceOf(Function);
        expect(edsm.isPlanet).toBeInstanceOf(Function);
        expect(edsm.isStar).toBeInstanceOf(Function);
        expect(edsm.streamBodiesJSON).toBeInstanceOf(Function);
        expect(edsm.streamCodexJSON).toBeInstanceOf(Function);
        expect(edsm.streamPowerPlayJSON).toBeInstanceOf(Function);
        expect(edsm.streamStationsJSON).toBeInstanceOf(Function);
        expect(edsm.streamSystemsJSON).toBeInstanceOf(Function);
    });
    it("does not export internal utilities", () => {
        expect(edsm).not.toContainValue(streamJSON);
    });
});
