/*
 * Copyright (C) 2020 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import type { SystemBody } from "../bodies.ts";
import type { Id64 } from "../common.ts";
import type { Commodity, Outfitting, Ship, SystemStation } from "../stations.ts";
import { NotFoundException } from "../util.ts";
import { type SystemIdRequestOptions, request } from "./common.ts";

export interface BodyScanValue {
    bodyId: number;
    bodyName: string;
    distance: number;
    valueMax: number;
}

/**
 * Response structure of the EDSM system bodies request.
 */
export interface SystemBodiesResponse {
    id: number;
    id64: Id64;
    name: string;
    url: string;
    bodies: SystemBody[];
    bodyCount: number;
}

/**
 * Response structure of the EDSM system estimated value request.
 */
export interface SystemEstimatedValueResponse {
    id: number;
    id64: Id64;
    name: string;
    url: string;
    estimatedValue: number;
    estimatedValueMapped: number;
    valuableBodies: BodyScanValue[];
}

/**
 * Response structure of the EDSM system stations request.
 */
export interface SystemStationsResponse {
    id: number;
    id64: Id64;
    name: string;
    url: string;
    stations: SystemStation[];
}

/**
 * Response structure of the EDSM system stations market request.
 */
export interface StationMarketResponse {
    id: number;
    id64: Id64;
    name: string;
    marketId: number;
    sId: number;
    sName: string;
    url: string;
    commodities: Commodity[];
}

/**
 * Response structure of the EDSM system stations shipyard request.
 */
export interface StationShipyardResponse {
    id: number;
    id64: Id64;
    name: string;
    marketId: number;
    sId: number;
    sName: string;
    url: string;
    ships: Ship[];
}

/**
 * Response structure of the EDSM system stations outfitting request.
 */
export interface StationOutfittingResponse {
    id: number;
    id64: Id64;
    name: string;
    marketId: number;
    sId: number;
    sName: string;
    url: string;
    outfitting: Outfitting[];
}

/**
 * Returns the system bodies of the given star system.
 *
 * @param systemName - The system name.
 * @param ids        - Optional system IDs if you seek for a duplicate system and want to force a specific ID.
 * @returns The bodies found on EDSM.
 * @throws NotFoundException - When system was not found.
 */
export async function getSystemBodies(systemName: string, ids?: { systemId?: number, systemId64?: Id64 }): Promise<SystemBodiesResponse> {
    const response = await request<SystemBodiesResponse>("api-system-v1/bodies", { systemName, ...ids });
    if (response == null) {
        throw new NotFoundException(`System not found: ${systemName}`);
    }
    return response;
}

/**
 * Returns the estimated scan values of a system.
 *
 * @param systemName - The system name.
 * @param ids        - Optional parameters.
 * @returns The scan values.
 * @throws NotFoundException - When system was not found.
 */
export async function getSystemEstimatedValue(systemName: string, ids?: SystemIdRequestOptions): Promise<SystemEstimatedValueResponse> {
    const response = await request<SystemEstimatedValueResponse>("api-system-v1/estimated-value", { systemName, ...ids });
    if (response == null) {
        throw new NotFoundException(`System not found: ${systemName}`);
    }
    return response;
}

/**
 * Returns information about stations in a system.
 *
 * @param systemName - The system name.
 * @param ids        - Optional parameters.
 * @returns The information about stations in a system.
 * @throws NotFoundException - When system was not found.
 */
export async function getSystemStations(systemName: string, ids?: SystemIdRequestOptions): Promise<SystemStationsResponse> {
    const response = await request<SystemStationsResponse>("api-system-v1/stations", { systemName, ...ids });
    if (response == null) {
        throw new NotFoundException(`System not found: ${systemName}`);
    }
    return response;
}

async function getStationDetails<T>(detail: string, marketIdOrSystemName: number | string, stationName?: string, params?: SystemIdRequestOptions): Promise<T> {
    const url = `api-system-v1/stations/${detail}`;
    let data: T | null;
    if (stationName == null) {
        const marketId = marketIdOrSystemName;
        data = await request<T>(url, { marketId });
        if (data == null) {
            throw new NotFoundException(`Market not found: ${marketId}`);
        }
    } else {
        const systemName = marketIdOrSystemName;
        data = await request<T>(url, { systemName, stationName, ...params });
        if (data == null) {
            throw new NotFoundException(`Station '${stationName}' in '${systemName}' not found`);
        }
    }
    return data;
}

/**
 * Returns information about market in a station.
 *
 * @param marketId - The market ID.
 * @returns The information about market in given station.
 * @throws NotFoundException - When market was not found.
 */
export async function getStationMarket(marketId: number): Promise<StationMarketResponse>;

/**
 * Returns information about market in a station.
 *
 * @param systemName  - The system name.
 * @param stationName - The station name.
 * @param params      - Optional parameters.
 * @returns The information about market in given station.
 * @throws NotFoundException - When market was not found.
 */
export async function getStationMarket(systemName: string, stationName: string, params?: SystemIdRequestOptions): Promise<StationMarketResponse>;

export async function getStationMarket(marketIdOrSystemName: number | string, stationName?: string, params?: SystemIdRequestOptions):
        Promise<StationMarketResponse> {
    return getStationDetails<StationMarketResponse>("market", marketIdOrSystemName, stationName, params);
}

/**
 * Returns information about shipyard in a station.
 *
 * @param marketId - The market ID.
 * @returns The information about shipyard in given station.
 * @throws NotFoundException - When shipyard was not found.
 */
export async function getStationShipyard(marketId: number): Promise<StationShipyardResponse>;

/**
 * Returns information about shipyard in a station.
 *
 * @param systemName  - The system name.
 * @param stationName - The station name.
 * @param params      - Optional parameters.
 * @returns The information about shipyard in given station.
 * @throws NotFoundException - When shipyard was not found.
 */
export async function getStationShipyard(systemName: string, stationName: string, params?: SystemIdRequestOptions): Promise<StationShipyardResponse>;

export async function getStationShipyard(marketIdOrSystemName: number | string, stationName?: string, params?: SystemIdRequestOptions):
        Promise<StationShipyardResponse> {
    return getStationDetails<StationShipyardResponse>("shipyard", marketIdOrSystemName, stationName, params);
}

/**
 * Returns information about outfitting in a station.
 *
 * @param marketId - The market ID.
 * @returns The information about outfitting in given station.
 * @throws NotFoundException - When station was not found.
 */
export async function getStationOutfitting(marketId: number): Promise<StationOutfittingResponse>;

/**
 * Returns information about outfitting in a station.
 *
 * @param systemName  - The system name.
 * @param stationName - The station name.
 * @param params      - Optional parameters.
 * @returns The information about outfitting in given station.
 * @throws NotFoundException - When station was not found.
 */
export async function getStationOutfitting(systemName: string, stationName: string, params?: SystemIdRequestOptions): Promise<StationOutfittingResponse>;

export async function getStationOutfitting(marketIdOrSystemName: number | string, stationName?: string, params?: SystemIdRequestOptions):
        Promise<StationOutfittingResponse> {
    return getStationDetails<StationOutfittingResponse>("outfitting", marketIdOrSystemName, stationName, params);
}

export interface SystemFactionsOptions extends SystemIdRequestOptions {
    /** Set to 1 to get the factions history under the requested system. */
    showHistory?: number;
}

export interface ShortSystemFaction {
    id: number;
    name: string;
    allegiance: string;
    government: string;
}

export interface SystemFaction extends ShortSystemFaction {
    influence: number;
    influenceHistory?: Record<string, number> | [];
    state: string;
    stateHistory?: Record<string, string> | [];
    activeStates: Array<{ state: string }>;
    activeStatesHistory?: Record<string, Array<{ state: string }>> | [];
    recoveringStates: Array<{ state: string, trend?: number }>;
    recoveringStatesHistory?: Record<string, Array<{ state: string, trend?: number }>> | [];
    pendingStates: Array<{ state: string, trend?: number }>;
    pendingStatesHistory?: Record<string, Array<{ state: string, trend?: number }>> | [];
    happiness: string;
    happinessHistory?: Record<string, string> | [];
    isPlayer: boolean;
    lastUpdate: number;
}

/**
 * Response structure of the EDSM system factions request.
 */
export interface SystemFactionsResponse {
    id: number;
    id64: Id64;
    name: string;
    url: string;
    controllingFaction?: ShortSystemFaction;
    factions: SystemFaction[];
}

/**
 * Returns information about factions in a system.
 *
 * @param systemName - The system name.
 * @param options    - Optional parameters.
 * @returns The information about stations in a system.
 * @throws NotFoundException - When system was not found.
 */
export async function getSystemFactions(systemName: string, options?: SystemFactionsOptions): Promise<SystemFactionsResponse> {
    const response = await request<SystemFactionsResponse>("api-system-v1/factions", { systemName, ...options });
    if (response == null) {
        throw new NotFoundException(`System not found: ${systemName}`);
    }
    return response;
}

/**
 * Response structure of the EDSM system traffic request.
 */
export interface SystemTrafficResponse {
    id: number;
    id64: Id64;
    name: string;
    url: string;
    discovery: {
        commander: string;
        date: string;
    };
    traffic: {
        total: number;
        week: number;
        day: number;
    };
    breakdown: Record<string, number>;
}

/**
 * Returns information about traffic in a system.
 *
 * @param systemName - The system name.
 * @param ids        - Optional parameters.
 * @returns The information about traffic in a system.
 * @throws NotFoundException - When system was not found.
 */
export async function getSystemTraffic(systemName: string, ids?: SystemIdRequestOptions): Promise<SystemTrafficResponse> {
    const response = await request<SystemTrafficResponse>("api-system-v1/traffic", { systemName, ...ids });
    if (response == null) {
        throw new NotFoundException(`System not found: ${systemName}`);
    }
    return response;
}

/**
 * Response structure of the EDSM system deaths request.
 */
export interface SystemDeathsResponse {
    id: number;
    id64: Id64;
    name: string;
    url: string;
    deaths: {
        total: number;
        week: number;
        day: number;
    };
}

/**
 * Returns information about deaths in a system.
 *
 * @param systemName - The system name.
 * @param ids        - Optional parameters.
 * @returns The information about deaths in a system.
 * @throws NotFoundException - When system was not found.
 */
export async function getSystemDeaths(systemName: string, ids?: SystemIdRequestOptions): Promise<SystemDeathsResponse> {
    const response = await request<SystemDeathsResponse>("api-system-v1/deaths", { systemName, ...ids });
    if (response == null) {
        throw new NotFoundException(`System not found: ${systemName}`);
    }
    return response;
}
