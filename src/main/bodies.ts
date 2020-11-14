/*
 * Copyright (C) 2018 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { edsmBaseUrl } from "./constants";

/**
 * EDSM data about asteroid ring/belt.
 */
export interface Asteroids {
    name: string;
    type: string;
    mass: number;
    innerRadius: number;
    outerRadius: number;
}

/**
 * EDSM data about raw materials on a planet.
 */
export interface Materials {
    [ name: string ]: number;
}

/**
 * EDSM data about solid composition of a planet.
 */
export interface SolidComposition {
    [ name: string ]: number;
}

/**
 * EDSM data about atmosphere composition of a planet.
 */
export interface AtmosphereComposition {
    [ name: string ]: number;
}

/**
 * EDSM base body data shared by planets and stars.
 */
export interface BaseBody {
    id: number;
    id64: number | null;
    bodyId: number | null;
    systemId: number;
    systemId64: number;
    systemName: string;
    name: string;
    discovery?: {
        commander: string;
        date: string;
    };
    subType: string;
    parents: null | Array<
        { Star: number } | { Planet: number } | { Null: number }
    >;
    distanceToArrival: number;
    surfaceTemperature: number;
    orbitalPeriod: number | null;
    semiMajorAxis: number | null;
    orbitalEccentricity: number | null;
    orbitalInclination: number | null;
    argOfPeriapsis: number | null;
    rotationalPeriod: number;
    rotationalPeriodTidallyLocked: boolean;
    axialTilt: number | null;
    rings?: Asteroids[];
    reserveLevel?: string | null;
    belts?: Asteroids[];
    updateTime: string;
}

/**
 * EDSM star data.
 */
export interface Star extends BaseBody {
    type: "Star";
    isMainStar: boolean;
    isScoopable: boolean;
    age: number;
    spectralClass: string | null;
    luminosity: string | null;
    absoluteMagnitude: number;
    solarMasses: number;
    solarRadius: number;
    surfaceTemperature: number;
}

/**
 * EDSM planet data.
 */
export interface Planet extends BaseBody {
    type: "Planet";
    isLandable: boolean;
    gravity: number;
    earthMasses: number;
    radius: number;
    surfacePressure: number | null;
    volcanismType: string | null;
    atmosphereType: string | null;
    atmosphereComposition: AtmosphereComposition | null;
    solidComposition: SolidComposition | null;
    terraformingState: string | null;
    materials?: Materials;
}

/**
 * Union type for EDSM star and planet data.
 */
export type Body = Planet | Star;

/**
 * Body within a system (without system information because its already in the parent object)
 */
export type SystemBody = Omit<Planet, "systemId" | "systemId64" | "systemName">
    | Omit<Star, "systemId" | "systemId64" | "systemName">;

/**
 * Response structure of the EDSM system bodies request.
 */
export interface SystemBodies {
    id: number;
    id64: number;
    name: string;
    url: string;
    bodies: SystemBody;
}

/**
 * Checks if given body is a planet.
 *
 * @param body - The body to check.
 * @return True if body is a planet.
 */
export function isPlanet(body: Body): body is Planet {
    return body.type === "Planet";
}

/**
 * Checks if given body is a planet.
 *
 * @param body - The body to check.
 * @return True if body is a star.
 */
export function isStar(body: Body): body is Star {
    return body.type === "Star";
}

/**
 * Returns the system bodies of the given star system.
 *
 * @param systemName - The system name.
 * @param id         - Optional system ID if you seek for a duplicate system and want to force a specific ID.
 * @return The bodies found on EDSM. Null if system not found.
 */
export async function getSystemBodies(systemName: string, ids?: { systemId?: number, systemId64?: number }):
        Promise<SystemBodies | null> {
    const json = await (await fetch(`${edsmBaseUrl}/api-system-v1/bodies`, {
        method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ systemName, ...ids })
    })).json() as Object;
    return Object.keys(json).length === 0 ? null : json as SystemBodies;
}
