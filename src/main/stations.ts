/*
 * Copyright (C) 2020 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

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
