import "@kayahr/vitest-matchers";

import { describe, expect, it } from "vitest";

import {
    type CommanderCredits, type CommanderInventory, type CommanderRanks, type CreditsPeriod, getCommanderCredits, getCommanderInventory, getCommanderRanks,
    type InventoryType
} from "../main/api/commander.js";
import { APIException, ServerException } from "../main/api/common.js";
import {
    type CommanderPosition, type CommentResponse, type Comments, type CommentsOptions, type FlightLog, type FlightLogFilter, type FlightLogs, getComment,
    getComments, getFlightLogs, getPosition, type PositionOptions, setComment, type SetCommentOptions
} from "../main/api/logs.js";
import { type EliteServerStatus, type EliteServerStatusType, getEliteServerStatus } from "../main/api/status.js";
import {
    type BodyScanValue, getSystemBodies, getSystemEstimatedValue, getSystemStations, getSystemStationsMarket, type IdParameters, type SystemBodies,
    type SystemEstimatedValue, type SystemStations, type SystemStationsMarket, type SystemStationsMarketCommodity
} from "../main/api/system.js";
import {
    type Asteroids, type AtmosphereComposition, type Bodies, type Body, isPlanet, isStar, type Materials, parseBodiesJSON, type Planet, type SolidComposition,
    type Star, type SystemBody, type SystemPlanet, type SystemStar
} from "../main/bodies.js";
import { type Codex, type Codices, parseCodexJSON } from "../main/codex.js";
import { type Coordinates, toUTCString } from "../main/common.js";
import * as exports from "../main/index.js";
import { parsePowerPlayJSON, type PowerPlay, type PowerPlays } from "../main/powerplay.js";
import {
    type Commodity, type Outfitting, parseStationsJSON, type Ship, type Station, type StationBody, type StationControllingFaction, type Stations,
    type StationUpdateTime, type SystemStation
} from "../main/stations.js";
import {
    type ControllingFaction, type EstimatedCoordinates, type Faction, parseSystemsJSON, type State, type System, type Systems, type TrendState
} from "../main/systems.js";

describe("index", () => {
    it("exports relevant types and functions and nothing more", () => {
        // Checks if runtime includes the expected exports and nothing else
        expect({ ...exports }).toEqual({
            getCommanderCredits,
            getCommanderInventory,
            getCommanderRanks,
            APIException,
            ServerException,
            getComment,
            getComments,
            getFlightLogs,
            getPosition,
            setComment,
            isStar,
            isPlanet,
            getEliteServerStatus,
            getSystemBodies,
            getSystemEstimatedValue,
            getSystemStations,
            getSystemStationsMarket,
            parseBodiesJSON,
            parseCodexJSON,
            toUTCString,
            parsePowerPlayJSON,
            parseStationsJSON,
            parseSystemsJSON
        });

        // Interfaces and types can only be checked by TypeScript
        ((): CommanderCredits => (({} as exports.CommanderCredits)))();
        ((): CommanderInventory => (({} as exports.CommanderInventory)))();
        ((): CommanderRanks => (({} as exports.CommanderRanks)))();
        ((): CreditsPeriod => (({} as exports.CreditsPeriod)))();
        ((): InventoryType => (({} as exports.InventoryType)))();
        ((): CommanderPosition => (({} as exports.CommanderPosition)))();
        ((): CommentResponse => (({} as exports.CommentResponse)))();
        ((): Comments => (({} as exports.Comments)))();
        ((): CommentsOptions => (({} as exports.CommentsOptions)))();
        ((): FlightLog => (({} as exports.FlightLog)))();
        ((): FlightLogFilter => (({} as exports.FlightLogFilter)))();
        ((): FlightLogs => (({} as exports.FlightLogs)))();
        ((): PositionOptions => (({} as exports.PositionOptions)))();
        ((): SetCommentOptions => (({} as exports.SetCommentOptions)))();
        ((): EliteServerStatus => (({} as exports.EliteServerStatus)))();
        ((): EliteServerStatusType => (({} as exports.EliteServerStatusType)))();
        ((): BodyScanValue => (({} as exports.BodyScanValue)))();
        ((): IdParameters => (({} as exports.IdParameters)))();
        ((): SystemBodies => (({} as exports.SystemBodies)))();
        ((): SystemEstimatedValue => (({} as exports.SystemEstimatedValue)))();
        ((): SystemStations => (({} as exports.SystemStations)))();
        ((): SystemStationsMarket => (({} as exports.SystemStationsMarket)))();
        ((): SystemStationsMarketCommodity => (({} as exports.SystemStationsMarketCommodity)))();
        ((): Asteroids => (({} as exports.Asteroids)))();
        ((): AtmosphereComposition => (({} as exports.AtmosphereComposition)))();
        ((): Bodies => (({} as exports.Bodies)))();
        ((): Body => (({} as exports.Body)))();
        ((): Materials => (({} as exports.Materials)))();
        ((): Planet => (({} as exports.Planet)))();
        ((): SolidComposition => (({} as exports.SolidComposition)))();
        ((): Star => (({} as exports.Star)))();
        ((): SystemBody => (({} as exports.SystemBody)))();
        ((): SystemPlanet => (({} as exports.SystemPlanet)))();
        ((): SystemStar => (({} as exports.SystemStar)))();
        ((): Codex => (({} as exports.Codex)))();
        ((): Codices => (({} as exports.Codices)))();
        ((): Coordinates => (({} as exports.Coordinates)))();
        ((): PowerPlay => (({} as exports.PowerPlay)))();
        ((): PowerPlays => (({} as exports.PowerPlays)))();
        ((): Commodity => (({} as exports.Commodity)))();
        ((): Outfitting => (({} as exports.Outfitting)))();
        ((): Ship => (({} as exports.Ship)))();
        ((): Station => (({} as exports.Station)))();
        ((): StationBody => (({} as exports.StationBody)))();
        ((): StationControllingFaction => (({} as exports.StationControllingFaction)))();
        ((): Stations => (({} as exports.Stations)))();
        ((): StationUpdateTime => (({} as exports.StationUpdateTime)))();
        ((): SystemStation => (({} as exports.SystemStation)))();
        ((): ControllingFaction => (({} as exports.ControllingFaction)))();
        ((): EstimatedCoordinates => (({} as exports.EstimatedCoordinates)))();
        ((): Faction => (({} as exports.Faction)))();
        ((): State => (({} as exports.State)))();
        ((): System => (({} as exports.System)))();
        ((): Systems => (({} as exports.Systems)))();
        ((): TrendState => (({} as exports.TrendState)))();
    });
});
