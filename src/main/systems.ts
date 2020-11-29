/*
 * Copyright (C) 2020 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { SystemBody } from "./bodies";
import { Coordinates } from "./common";
import { SystemStation } from "./stations";
import { streamJSON } from "./util";

export interface EstimatedCoordinates extends Coordinates {
    precision: number;
}

export interface ControllingFaction {
    id: number;
    name: string | null;
    allegiance?: string;
    government?: string;
    isPlayer: boolean;
}

export interface State {
    state: string;
}

export interface TrendState extends State {
    trend: number;
}

export interface Faction {
    id: number;
    name: string;
    allegiance?: string | null;
    government?: string | null;
    influence: number;
    state: string | null;
    activeStates: State[];
    recoveringStates: TrendState[];
    pendingStates: TrendState[];
    happiness: string;
    isPlayer: boolean;
    lastUpdate: number;
}

/** A single EDSM system. */
export interface System {
    name: string;
    id: number;
    id64: number | null;
    date: string;
    coords?: Coordinates;
    estimatedCoordinates?: EstimatedCoordinates;
    allegiance?: string | null;
    government?: string | null;
    state?: string | null;
    economy?: string | null;
    security?: string;
    population?: number | null;
    controllingFaction?: ControllingFaction;
    factions?: Faction[];
    stations?: SystemStation[];
    bodies?: SystemBody[];
}

/** List of EDSM systems. */
export type Systems = System[];

/**
 * Streams systems from the given JSON input to the given callback function. If you want all systems in an array
 * then use [[readSystemsJSON]] instead.
 *
 * @param input    - The JSON input as an async iterable.
 * @param callback - The callback function to call for each system. If callback returns a promise then
 *                   this function waits for the promise to be resolved before continuing with the systems.
 * @return Promise resolved when all systems have been read or rejected when reading fails.
 */
export function streamSystemsJSON(input: AsyncIterable<string>, callback: (system: System) => Promise<void> | void):
        Promise<void> {
    return streamJSON(input, callback);
}

/**
 * Reads all systems from the given CSV input and returns them as an array. Use [[streamSystemsJSON]] if you want to
 * stream the systems to a callback function instead of getting a huge array.
 *
 * @param input - The JSON input as an async iterable.
 * @return The systems.
 */
export async function readSystemsJSON(input: AsyncIterable<string>): Promise<Systems> {
    const systems: Systems = [];
    await streamSystemsJSON(input, system => void systems.push(system));
    return systems;
}
