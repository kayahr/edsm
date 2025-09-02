/*
 * Copyright (C) 2020 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { streamJSON } from "./util.js";

export interface StationControllingFaction {
    id: number | null;
    name: string;
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

export interface Station {
    id: number;
    marketId: number | null;
    type: string;
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
    systemId: number;
    systemId64: number;
    systemName: string;
}

export type SystemStation = Omit<Station, "systemId" | "systemId64" | "systemName">;

/** List of EDSM stations. */
export type Stations = Station[];

/**
 * Streams stations from the given JSON input to the given callback function. If you want all stations in an array
 * then use [[readStationsJSON]] instead.
 *
 * @param input    - The JSON input as an async iterable.
 * @param callback - The callback function to call for each station. If callback returns a promise then
 *                   this function waits for the promise to be resolved before continuing with the stations.
 * @returns Promise resolved when all stations have been read or rejected when reading fails.
 */
export function streamStationsJSON(input: AsyncIterable<string>, callback: (station: Station) => Promise<void> | void):
        Promise<void> {
    return streamJSON(input, callback);
}

/**
 * Reads all stations from the given CSV input and returns them as an array. Use [[streamStationsJSON]] if you want to
 * stream the stations to a callback function instead of getting a huge array.
 *
 * @param input - The JSON input as an async iterable.
 * @returns The stations.
 */
export async function readStationsJSON(input: AsyncIterable<string>): Promise<Stations> {
    const stations: Stations = [];
    await streamStationsJSON(input, station => void stations.push(station));
    return stations;
}
