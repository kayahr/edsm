import "jest-extended";

import * as edsm from "../main";
import { streamJSON } from "../main/util";

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
        expect(edsm.readBodiesJSON).toBeInstanceOf(Function);
        expect(edsm.readCodexJSON).toBeInstanceOf(Function);
        expect(edsm.readPowerPlayJSON).toBeInstanceOf(Function);
        expect(edsm.readStationsJSON).toBeInstanceOf(Function);
        expect(edsm.readSystemsJSON).toBeInstanceOf(Function);
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
