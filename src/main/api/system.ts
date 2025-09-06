/*
 * Copyright (C) 2020 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { type SystemBody } from "../bodies.js";
import type { Id64 } from "../common.js";
import { type Commodity, type Outfitting, type Ship, type SystemStation } from "../stations.js";
import { NotFoundException } from "../util.js";
import { request } from "./common.js";

export interface IdParameters {
    /** The system ID if you seek for a duplicate system and want to force a specific ID. */
    systemId?: number;

    /** The system ID64 if you seek for a duplicate system and want to force a specific ID. */
    systemId64?: Id64;
}

export interface BodyScanValue {
    bodyId: number;
    bodyName: string;
    distance: number;
    valueMax: number;
}

/**
 * Response structure of the EDSM system bodies request.
 */
export interface SystemBodies {
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
export interface SystemEstimatedValue {
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
export interface SystemStations {
    id: number;
    id64: Id64;
    name: string;
    url: string;
    stations: SystemStation[];
}

/**
 * Response structure of the EDSM system stations market request.
 */
export interface StationMarket {
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
export interface StationShipyard {
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
export interface StationOutfitting {
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
export async function getSystemBodies(systemName: string, ids?: { systemId?: number, systemId64?: Id64 }): Promise<SystemBodies> {
    const response = await request<SystemBodies>("api-system-v1/bodies", { systemName, ...ids });
    if (response == null) {
        throw new NotFoundException("System not found: " + systemName);
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
export async function getSystemEstimatedValue(systemName: string, ids?: IdParameters): Promise<SystemEstimatedValue> {
    const response = await request<SystemEstimatedValue>("api-system-v1/estimated-value", { systemName, ...ids });
    if (response == null) {
        throw new NotFoundException("System not found: " + systemName);
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
export async function getSystemStations(systemName: string, ids?: IdParameters): Promise<SystemStations> {
    const response = await request<SystemStations>("api-system-v1/stations", { systemName, ...ids });
    if (response == null) {
        throw new NotFoundException("System not found: " + systemName);
    }
    return response;
}

async function getStationDetails<T>(detail: string, marketIdOrSystemName: number | string, stationName?: string, params?: IdParameters):
        Promise<T> {
    const url = `api-system-v1/stations/${detail}`;
    if (stationName == null) {
        const marketId = marketIdOrSystemName;
        const data = await request<T>(url, { marketId });
        if (data == null) {
            throw new NotFoundException("Market not found: " + marketId);
        }
        return data;
    } else {
        const systemName = marketIdOrSystemName;
        const data = await request<T>(url, { systemName, stationName, ...params });
        if (data == null) {
            throw new NotFoundException(`Station '${stationName}' in '${systemName}' not found`);
        }
        return data;
    }
}

/**
 * Returns information about market in a station.
 *
 * @param marketId - The market ID.
 * @returns The information about market in given station.
 * @throws NotFoundException - When market was not found.
 */
export async function getStationMarket(marketId: number): Promise<StationMarket>;

/**
 * Returns information about market in a station.
 *
 * @param systemName  - The system name.
 * @param stationName - The station name.
 * @param params      - Optional parameters.
 * @returns The information about market in given station.
 * @throws NotFoundException - When market was not found.
 */
export async function getStationMarket(systemName: string, stationName: string, params?: IdParameters): Promise<StationMarket>;

export async function getStationMarket(marketIdOrSystemName: number | string, stationName?: string, params?: IdParameters):
        Promise<StationMarket> {
    return getStationDetails<StationMarket>("market", marketIdOrSystemName, stationName, params);
}

/**
 * Returns information about shipyard in a station.
 *
 * @param marketId - The market ID.
 * @returns The information about shipyard in given station.
 * @throws NotFoundException - When shipyard was not found.
 */
export async function getStationShipyard(marketId: number): Promise<StationShipyard>;

/**
 * Returns information about shipyard in a station.
 *
 * @param systemName  - The system name.
 * @param stationName - The station name.
 * @param params      - Optional parameters.
 * @returns The information about shipyard in given station.
 * @throws NotFoundException - When shipyard was not found.
 */
export async function getStationShipyard(systemName: string, stationName: string, params?: IdParameters): Promise<StationShipyard>;

export async function getStationShipyard(marketIdOrSystemName: number | string, stationName?: string, params?: IdParameters):
        Promise<StationShipyard> {
    return getStationDetails<StationShipyard>("shipyard", marketIdOrSystemName, stationName, params);
}

/**
 * Returns information about outfitting in a station.
 *
 * @param marketId - The market ID.
 * @returns The information about outfitting in given station.
 * @throws NotFoundException - When station was not found.
 */
export async function getStationOutfitting(marketId: number): Promise<StationOutfitting>;

/**
 * Returns information about outfitting in a station.
 *
 * @param systemName  - The system name.
 * @param stationName - The station name.
 * @param params      - Optional parameters.
 * @returns The information about outfitting in given station.
 * @throws NotFoundException - When station was not found.
 */
export async function getStationOutfitting(systemName: string, stationName: string, params?: IdParameters): Promise<StationOutfitting>;

export async function getStationOutfitting(marketIdOrSystemName: number | string, stationName?: string, params?: IdParameters):
        Promise<StationOutfitting> {
    return getStationDetails<StationOutfitting>("outfitting", marketIdOrSystemName, stationName, params);
}

export interface SystemFactionsOptions extends IdParameters {
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
    influenceHistory?: Record<string, number>;
    state: string;
    stateHistory?: Record<string, string>;
    activeStates: Array<{ state: string }>;
    activeStatesHistory?: Record<string, Array<{ state: string }>>;
    recoveringStates: Array<{ state: string, trend: number }>;
    recoveringStatesHistory?: Record<string, Array<{ state: string, trend: number }>>;
    pendingStates: Array<{ state: string, trend: number }>;
    pendingStatesHistory?: Record<string, Array<{ state: string, trend: number }>>;
    happiness: string;
    happinessHistory?: Record<string, string>;
    isPlayer: boolean;
    lastUpdate: number;
}

/**
 * Response structure of the EDSM system factions request.
 */
export interface SystemFactions {
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
export async function getSystemFactions(systemName: string, options?: SystemFactionsOptions): Promise<SystemFactions> {
    const response = await request<SystemFactions>("api-system-v1/factions", { systemName, ...options });
    if (response == null) {
        throw new NotFoundException("System not found: " + systemName);
    }
    return response;
}

/**
 * Response structure of the EDSM system traffic request.
 */
export interface SystemTraffic {
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
export async function getSystemTraffic(systemName: string, ids?: IdParameters): Promise<SystemTraffic> {
    const response = await request<SystemTraffic>("api-system-v1/traffic", { systemName, ...ids });
    if (response == null) {
        throw new NotFoundException("System not found: " + systemName);
    }
    return response;
}
