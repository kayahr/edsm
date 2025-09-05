/*
 * Copyright (C) 2020 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { type SystemBody } from "./bodies.js";
import { type Coordinates } from "./common.js";
import { type SystemStation } from "./stations.js";
import { parseJSONArray } from "./util.js";

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
 * Parses systems from the given JSON stream.
 *
 * @param stream - The JSON input stream.
 * @returns Stream of systems.
 */
export function parseSystemsJSON(stream: AsyncIterable<Uint8Array>): AsyncIterable<System> {
    return parseJSONArray(stream);
}
