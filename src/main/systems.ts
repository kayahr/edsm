/*
 * Copyright (C) 2020 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { SystemBody } from "./bodies";
import { Coordinates } from "./common";
import { SystemStation } from "./stations";

export interface EstimatedCoordinates extends Coordinates {
    precision: number;
}

export interface System {
    name: string;
    id: number;
    id64: number;
    date: string;
}

export interface SystemWithCoordinates extends System {
    coords: Coordinates;
}

export interface SystemWithoutCoordinates extends System {
    estimatedCoordinates?: EstimatedCoordinates;
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

export interface PopulatedSystem extends SystemWithCoordinates {
    allegiance: string | null;
    government: string | null;
    state: string | null;
    economy: string | null;
    security: string;
    population: number | null;
    controllingFaction: ControllingFaction;
    factions?: Faction[];
    stations: SystemStation[];
    bodies: SystemBody[];
    date: string;
}
