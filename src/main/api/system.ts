/*
 * Copyright (C) 2020 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { type SystemBody } from "../bodies.js";
import type { Id64 } from "../common.js";
import { type Commodity, type Outfitting, type Ship, type SystemStation } from "../stations.js";
import { NotFoundException } from "../util.js";
import { edsmBaseUrl, request } from "./common.js";

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
export interface SystemMarket {
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
export interface SystemShipyard {
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
export interface SystemOutfitting {
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
    const json = await (await fetch(`${edsmBaseUrl}/api-system-v1/bodies`, {
        method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ systemName, ...ids })
    })).json() as Object;
    if (Object.keys(json).length === 0) {
        throw new NotFoundException("System not found: " + systemName);
    }
    return json as SystemBodies;
}

/**
 * Returns the estimated scan values of a system.
 *
 * @param systemName - The system name.
 * @param params     - Optional parameters.
 * @returns The scan values.
 * @throws NotFoundException - When system was not found.
 */
export async function getSystemEstimatedValue(systemName: string, params?: IdParameters): Promise<SystemEstimatedValue> {
    const json = await (await fetch(`${edsmBaseUrl}/api-system-v1/estimated-value`, {
        method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ systemName, ...params })
    })).json() as Object;
    if (Object.keys(json).length === 0) {
        throw new NotFoundException("System not found: " + systemName);
    }
    return json as SystemEstimatedValue;
}

/**
 * Returns information about stations in a system.
 *
 * @param systemName - The system name.
 * @param params     - Optional parameters.
 * @returns The information about stations in a system.
 * @throws NotFoundException - When system was not found.
 */
export async function getSystemStations(systemName: string, params?: IdParameters): Promise<SystemStations> {
    const json = await (await fetch(`${edsmBaseUrl}/api-system-v1/stations`, {
        method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ systemName, ...params })
    })).json() as Object;
    if (Object.keys(json).length === 0) {
        throw new NotFoundException("System not found: " + systemName);
    }
    return json as SystemStations;
}

/**
 * Returns information about market in a station.
 *
 * @param marketId - The market ID.
 * @returns The information about market in given station.
 * @throws NotFoundException - When market was not found.
 */
export async function getSystemMarket(marketId: number): Promise<SystemMarket>;

/**
 * Returns information about market in a station.
 *
 * @param systemName  - The system name.
 * @param stationName - The station name.
 * @param params      - Optional parameters.
 * @returns The information about market in given station.
 * @throws NotFoundException - When market was not found.
 */
export async function getSystemMarket(systemName: string, stationName: string, params?: IdParameters): Promise<SystemMarket>;

export async function getSystemMarket(marketIdOrSystemName: number | string, stationName?: string, params?: IdParameters):
        Promise<SystemMarket> {
    if (stationName == null) {
        const marketId = marketIdOrSystemName;
        const market = await request<SystemMarket>("api-system-v1/stations/market", { marketId });
        if (market == null) {
            throw new NotFoundException("Market not found: " + marketId);
        }
        return market;
    } else {
        const systemName = marketIdOrSystemName;
        const market = await request<SystemMarket>("api-system-v1/stations/market",
            { systemName, stationName, ...params });
        if (market == null) {
            throw new NotFoundException(`Market for '${stationName}' in '${systemName}' not found`);
        }
        return market;
    }
}

/**
 * Returns information about shipyard in a station.
 *
 * @param marketId - The market ID.
 * @returns The information about shipyard in given station.
 * @throws NotFoundException - When shipyard was not found.
 */
export async function getSystemShipyard(marketId: number): Promise<SystemShipyard>;

/**
 * Returns information about shipyard in a station.
 *
 * @param systemName  - The system name.
 * @param stationName - The station name.
 * @param params      - Optional parameters.
 * @returns The information about shipyard in given station.
 * @throws NotFoundException - When shipyard was not found.
 */
export async function getSystemShipyard(systemName: string, stationName: string, params?: IdParameters): Promise<SystemShipyard>;

export async function getSystemShipyard(marketIdOrSystemName: number | string, stationName?: string, params?: IdParameters):
        Promise<SystemShipyard> {
    if (stationName == null) {
        const marketId = marketIdOrSystemName;
        const market = await request<SystemShipyard>("api-system-v1/stations/shipyard", { marketId });
        if (market == null) {
            throw new NotFoundException("Shipyard not found: " + marketId);
        }
        return market;
    } else {
        const systemName = marketIdOrSystemName;
        const market = await request<SystemShipyard>("api-system-v1/stations/shipyard",
            { systemName, stationName, ...params });
        if (market == null) {
            throw new NotFoundException(`Shipyard for '${stationName}' in '${systemName}' not found`);
        }
        return market;
    }
}

/**
 * Returns information about outfitting in a station.
 *
 * @param marketId - The market ID.
 * @returns The information about outfitting in given station.
 * @throws NotFoundException - When station was not found.
 */
export async function getSystemOutfitting(marketId: number): Promise<SystemOutfitting>;

/**
 * Returns information about outfitting in a station.
 *
 * @param systemName  - The system name.
 * @param stationName - The station name.
 * @param params      - Optional parameters.
 * @returns The information about outfitting in given station.
 * @throws NotFoundException - When station was not found.
 */
export async function getSystemOutfitting(systemName: string, stationName: string, params?: IdParameters): Promise<SystemOutfitting>;

export async function getSystemOutfitting(marketIdOrSystemName: number | string, stationName?: string, params?: IdParameters):
        Promise<SystemOutfitting> {
    if (stationName == null) {
        const marketId = marketIdOrSystemName;
        const market = await request<SystemOutfitting>("api-system-v1/stations/outfitting", { marketId });
        if (market == null) {
            throw new NotFoundException("Market not found: " + marketId);
        }
        return market;
    } else {
        const systemName = marketIdOrSystemName;
        const market = await request<SystemOutfitting>("api-system-v1/stations/outfitting",
            { systemName, stationName, ...params });
        if (market == null) {
            throw new NotFoundException(`Station '${stationName}' in '${systemName}' not found`);
        }
        return market;
    }
}
