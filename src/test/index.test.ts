
import { describe, it } from "node:test";

import {
    type CommanderCreditsResponse, type CommanderInventoryResponse, type CommanderRanksResponse, type CreditsPeriod, type InventoryType, getCommanderCredits,
    getCommanderInventory, getCommanderRanks
} from "../main/api/commander.ts";
import { APIException, ServerException, type SystemIdRequestOptions } from "../main/api/common.ts";
import { type EDSMEvent, type EventResponse, getDiscardEvents, sendEvents } from "../main/api/journal.ts";
import {
    type CommanderPositionOptions, type CommanderPositionResponse, type FlightLog, type FlightLogFilter, type FlightLogsResponse, type SystemCommentResponse,
    type SystemCommentsOptions, type SystemCommentsResponse, getCommanderPosition, getFlightLogs, getSystemComment, getSystemComments,
    setSystemComment
} from "../main/api/logs.ts";
import { type EliteServerStatusResponse, type EliteServerStatusType, getEliteServerStatus } from "../main/api/status.ts";
import {
    type BodyScanValue, type ShortSystemFaction, type StationMarketResponse, type StationOutfittingResponse, type StationShipyardResponse,
    type SystemBodiesResponse, type SystemDeathsResponse, type SystemEstimatedValueResponse, type SystemFaction, type SystemFactionsOptions,
    type SystemFactionsResponse, type SystemStationsResponse, type SystemTrafficResponse,
    getStationMarket, getStationOutfitting, getStationShipyard, getSystemBodies, getSystemDeaths,
    getSystemEstimatedValue, getSystemFactions, getSystemStations, getSystemTraffic
} from "../main/api/system.ts";
import {
    type CubeSystemsRequestOptions, type SphereSystemsRequestOptions, type SystemRequestFlags, type SystemRequestOptions, type SystemResponse,
    type SystemsRequestOptions, getCubeSystems, getSphereSystems, getSystem, getSystems
} from "../main/api/systems.ts";
import {
    type Asteroids, type AtmosphereComposition, type Bodies, type Body, type Materials, type Planet, type SolidComposition, type Star, type SystemBody,
    type SystemPlanet, type SystemStar, isPlanet, isStar, parseBodiesJSON
} from "../main/bodies.ts";
import { type Codex, type Codices, parseCodexJSON } from "../main/codex.ts";
import { type Coordinates, type Id64, toUTCString } from "../main/common.ts";
import * as exports from "../main/index.ts";
import { type PowerPlay, type PowerPlays, parsePowerPlayJSON } from "../main/powerplay.ts";
import {
    type Commodity, type Outfitting, type Ship, type Station, type StationBody, type StationControllingFaction, type StationUpdateTime, type Stations,
    type SystemStation, parseStationsJSON
} from "../main/stations.ts";
import {
    type ControllingFaction, type EstimatedCoordinates, type Faction, type State, type System, type Systems, type TrendState, parseSystemsJSON
} from "../main/systems.ts";
import { IllegalStateException, NotFoundException } from "../main/util.ts";
import { assertEquals } from "@kayahr/assert";

describe("index", () => {
    it("exports relevant types and functions and nothing more", () => {
        // Checks if runtime includes the expected exports and nothing else
        assertEquals({ ...exports }, {
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
