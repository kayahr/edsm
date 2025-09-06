import "@kayahr/vitest-matchers";

import { describe, expect, it } from "vitest";

import {
    type CommanderCreditsResponse, type CommanderInventoryResponse, type CommanderRanksResponse, type CreditsPeriod, getCommanderCredits, getCommanderInventory,
    getCommanderRanks, type InventoryType
} from "../main/api/commander.js";
import { APIException, ServerException, type SystemIdRequestOptions } from "../main/api/common.js";
import { type EDSMEvent, type EventResponse, getDiscardEvents, sendEvents } from "../main/api/journal.js";
import {
    type CommanderPositionOptions, type CommanderPositionResponse, type FlightLog, type FlightLogFilter, type FlightLogsResponse, getCommanderPosition,
    getFlightLogs, getSystemComment, getSystemComments, setSystemComment, type SystemCommentOptions, type SystemCommentResponse, type SystemCommentsOptions,
    type SystemCommentsResponse
} from "../main/api/logs.js";
import { type EliteServerStatusResponse, type EliteServerStatusType, getEliteServerStatus } from "../main/api/status.js";
import {
    type BodyScanValue, getStationMarket, getStationOutfitting, getStationShipyard, getSystemBodies, getSystemDeaths, getSystemEstimatedValue,
    getSystemFactions, getSystemStations, getSystemTraffic, type ShortSystemFaction, type StationMarketResponse, type StationOutfittingResponse,
    type StationShipyardResponse, type SystemBodiesResponse, type SystemDeathsResponse, type SystemEstimatedValueResponse, type SystemFaction,
    type SystemFactionsOptions, type SystemFactionsResponse, type SystemStationsResponse, type SystemTrafficResponse
} from "../main/api/system.js";
import {
    type CubeSystemsRequestOptions, getCubeSystems, getSphereSystems, getSystem, getSystems, type SphereSystemsRequestOptions, type SystemRequestFlags,
    type SystemRequestOptions, type SystemResponse, type SystemsRequestOptions
} from "../main/api/systems.js";
import {
    type Asteroids, type AtmosphereComposition, type Bodies, type Body, isPlanet, isStar, type Materials, parseBodiesJSON, type Planet, type SolidComposition,
    type Star, type SystemBody, type SystemPlanet, type SystemStar
} from "../main/bodies.js";
import { type Codex, type Codices, parseCodexJSON } from "../main/codex.js";
import { type Coordinates, type Id64, toUTCString } from "../main/common.js";
import * as exports from "../main/index.js";
import { parsePowerPlayJSON, type PowerPlay, type PowerPlays } from "../main/powerplay.js";
import {
    type Commodity, type Outfitting, parseStationsJSON, type Ship, type Station, type StationBody, type StationControllingFaction, type Stations,
    type StationUpdateTime, type SystemStation
} from "../main/stations.js";
import {
    type ControllingFaction, type EstimatedCoordinates, type Faction, parseSystemsJSON, type State, type System, type Systems, type TrendState
} from "../main/systems.js";
import { IllegalStateException } from "../main/util.js";
import { NotFoundException } from "../main/util.js";

describe("index", () => {
    it("exports relevant types and functions and nothing more", () => {
        // Checks if runtime includes the expected exports and nothing else
        expect({ ...exports }).toEqual({
            getCommanderCredits,
            getCommanderInventory,
            getCommanderRanks,
            APIException,
            ServerException,
            NotFoundException,
            IllegalStateException,
            getSystem,
            getSystems,
            getSphereSystems,
            getCubeSystems,
            getSystemComment,
            getSystemComments,
            getFlightLogs,
            getDiscardEvents,
            sendEvents,
            getCommanderPosition,
            setSystemComment,
            isStar,
            isPlanet,
            getEliteServerStatus,
            getSystemBodies,
            getSystemFactions,
            getSystemDeaths,
            getSystemTraffic,
            getSystemEstimatedValue,
            getSystemStations,
            getStationMarket,
            getStationShipyard,
            getStationOutfitting,
            parseBodiesJSON,
            parseCodexJSON,
            toUTCString,
            parsePowerPlayJSON,
            parseStationsJSON,
            parseSystemsJSON
        });

        // Interfaces and types can only be checked by TypeScript
        ((): CommanderCreditsResponse => (({} as exports.CommanderCreditsResponse)))();
        ((): CommanderInventoryResponse => (({} as exports.CommanderInventoryResponse)))();
        ((): CommanderRanksResponse => (({} as exports.CommanderRanksResponse)))();
        ((): CreditsPeriod => (({} as exports.CreditsPeriod)))();
        ((): InventoryType => (({} as exports.InventoryType)))();
        ((): CommanderPositionResponse => (({} as exports.CommanderPositionResponse)))();
        ((): SystemCommentResponse => (({} as exports.SystemCommentResponse)))();
        ((): SystemCommentsResponse => (({} as exports.SystemCommentsResponse)))();
        ((): SystemCommentsOptions => (({} as exports.SystemCommentsOptions)))();
        ((): FlightLog => (({} as exports.FlightLog)))();
        ((): FlightLogFilter => (({} as exports.FlightLogFilter)))();
        ((): FlightLogsResponse => (({} as exports.FlightLogsResponse)))();
        ((): CommanderPositionOptions => (({} as exports.CommanderPositionOptions)))();
        ((): SystemCommentOptions => (({} as exports.SystemCommentOptions)))();
        ((): EliteServerStatusResponse => (({} as exports.EliteServerStatusResponse)))();
        ((): EliteServerStatusType => (({} as exports.EliteServerStatusType)))();
        ((): BodyScanValue => (({} as exports.BodyScanValue)))();
        ((): SystemIdRequestOptions => (({} as exports.SystemIdRequestOptions)))();
        ((): SystemBodiesResponse => (({} as exports.SystemBodiesResponse)))();
        ((): SystemDeathsResponse => (({} as exports.SystemDeathsResponse)))();
        ((): SystemFactionsResponse => (({} as exports.SystemFactionsResponse)))();
        ((): SystemTrafficResponse => (({} as exports.SystemTrafficResponse)))();
        ((): SystemFactionsOptions => (({} as exports.SystemFactionsOptions)))();
        ((): SystemFaction => (({} as exports.SystemFaction)))();
        ((): ShortSystemFaction => (({} as exports.ShortSystemFaction)))();
        ((): SystemEstimatedValueResponse => (({} as exports.SystemEstimatedValueResponse)))();
        ((): SystemStationsResponse => (({} as exports.SystemStationsResponse)))();
        ((): StationMarketResponse => (({} as exports.StationMarketResponse)))();
        ((): StationShipyardResponse => (({} as exports.StationShipyardResponse)))();
        ((): StationOutfittingResponse => (({} as exports.StationOutfittingResponse)))();
        ((): Commodity => (({} as exports.Commodity)))();
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
        ((): Id64 => (({} as exports.Id64)))();
        ((): SystemRequestOptions => (({} as exports.SystemRequestOptions)))();
        ((): SystemResponse => (({} as exports.SystemResponse)))();
        ((): SystemRequestFlags => (({} as exports.SystemRequestFlags)))();
        ((): SystemsRequestOptions => (({} as exports.SystemsRequestOptions)))();
        ((): SphereSystemsRequestOptions => (({} as exports.SphereSystemsRequestOptions)))();
        ((): CubeSystemsRequestOptions => (({} as exports.CubeSystemsRequestOptions)))();
        ((): EDSMEvent => (({} as exports.EDSMEvent)))();
        ((): EventResponse => (({} as exports.EventResponse)))();
    });
});
