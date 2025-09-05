/*
 * Copyright (C) 2020 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import type { Id64 } from "./common.js";
import { parseJSONArray } from "./util.js";

export interface StationControllingFaction {
    id: number | null;
    name: string | null;
}

export interface StationBody {
    id: number;
    name: string;
    latitude?: number;
    longitude?: number;
}

export interface StationUpdateTime {
    information: string;
    market: string | null;
    shipyard: string | null;
    outfitting: string | null;
}

export interface Outfitting {
    id: string | null;
    name: string;
}

export interface Commodity {
    id: string | null;
    name: string;
    buyPrice: number;
    stock: number;
    sellPrice: number;
    demand: number;
    stockBracket: number;
}

export interface Ship {
    id: number;
    name: string;
}

export interface Station {
    id: number;
    marketId: number | null;
    type: string | null;
    name: string;
    body?: StationBody;
    distanceToArrival: number | null;
    allegiance: string | null;
    government: string | null;
    economy: string | null;
    secondEconomy: string | null;
    haveMarket: boolean;
    haveShipyard: boolean;
    haveOutfitting: boolean;
    otherServices: string[];
    controllingFaction?: StationControllingFaction;
    updateTime: StationUpdateTime;
    systemId?: number;
    systemId64?: Id64 | null;
    systemName?: string;
    commodities: Commodity[] | null;
    ships: Ship[] | null;
    outfitting: Outfitting[] | null;
}

/** Station data in system objects with less details. */
export type SystemStation = Omit<Station, "systemId" | "systemId64" | "systemName" | "outfitting" | "ships" | "commodities">;

/** List of EDSM stations. */
export type Stations = Station[];

/**
 * Parses stations from the given JSON stream.
 *
 * @param stream - The JSON input stream.
 * @returns Stream of stations.
 */
export function parseStationsJSON(stream: AsyncIterable<Uint8Array>): AsyncIterable<Station> {
    return parseJSONArray(stream);
}
