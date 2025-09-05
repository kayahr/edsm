/*
 * Copyright (C) 2020 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { type SystemBody } from "../bodies.js";
import type { Id64 } from "../common.js";
import { type SystemStation } from "../stations.js";
import { NotFoundException } from "../util/NotFoundException.js";
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

export interface SystemStationsMarketCommodity {
    id: string;
    name: string;
    buyPrice: number;
    stock: number;
    sellPrice: number;
    demand: number;
    stockBracket: number;
}

/**
 * Response structure of the EDSM system stations market request.
 */
export interface SystemStationsMarket {
    id: number;
    id64: Id64;
    name: string;
    marketId: number;
    sId: number;
    sName: string;
    url: string;
    commodities: SystemStationsMarketCommodity[];
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
export async function getSystemStationsMarket(marketId: number): Promise<SystemStationsMarket>;

/**
 * Returns information about market in a station.
 *
 * @param systemName  - The system name.
 * @param stationName - The station name.
 * @param params      - Optional parameters.
 * @returns The information about market in given station.
 * @throws NotFoundException - When market was not found.
 */
export async function getSystemStationsMarket(systemName: string, stationName: string, params?: IdParameters): Promise<SystemStationsMarket>;

export async function getSystemStationsMarket(marketIdOrSystemName: number | string, stationName?: string, params?: IdParameters):
        Promise<SystemStationsMarket> {
    if (stationName == null) {
        const marketId = marketIdOrSystemName;
        const market = await request<SystemStationsMarket>("api-system-v1/stations/market", { marketId });
        if (market == null) {
            throw new NotFoundException("Market not found: " + marketId);
        }
        return market;
    } else {
        const systemName = marketIdOrSystemName;
        const market = await request<SystemStationsMarket>("api-system-v1/stations/market",
            { systemName, stationName, ...params });
        if (market == null) {
            throw new NotFoundException(`Market for '${stationName}' in '${systemName}' not found`);
        }
        return market;
    }
}
