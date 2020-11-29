/*
 * Copyright (C) 2018 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { streamJSON } from "./util";

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

export type SystemStar = Omit<Star, "systemId" | "systemId64" | "systemName">;
export type SystemPlanet = Omit<Planet, "systemId" | "systemId64" | "systemName">;

/**
 * Body within a system (without system information because its already in the parent object)
 */
export type SystemBody = SystemStar | SystemPlanet;

export function isPlanet(body: Body): body is Planet;
export function isPlanet(body: SystemBody): body is SystemPlanet;

/**
 * Checks if given body is a planet.
 *
 * @param body - The body to check.
 * @return True if body is a planet.
 */
export function isPlanet(body: Body | SystemBody): boolean {
    return body.type === "Planet";
}

export function isStar(body: Body): body is Star;
export function isStar(body: SystemBody): body is SystemStar;

/**
 * Checks if given body is a planet.
 *
 * @param body - The body to check.
 * @return True if body is a star.
 */
export function isStar(body: Body | SystemBody): boolean {
    return body.type === "Star";
}

/** List of EDSM bodies. */
export type Bodies = Body[];

/**
 * Streams bodies from the given JSON input to the given callback function. If you want all bodies in an array
 * then use [[readBodiesJSON]] instead.
 *
 * @param input    - The JSON input as an async iterable.
 * @param callback - The callback function to call for each body. If callback returns a promise then
 *                   this function waits for the promise to be resolved before continuing with the bodies.
 * @return Promise resolved when all bodies have been read or rejected when reading fails.
 */
export function streamBodiesJSON(input: AsyncIterable<string>, callback: (body: Body) => Promise<void> | void):
        Promise<void> {
    return streamJSON(input, callback);
}

/**
 * Reads all bodies from the given CSV input and returns them as an array. Use [[streamBodiesJSON]] if you want to
 * stream the bodies to a callback function instead of getting a huge array.
 *
 * @param input - The JSON input as an async iterable.
 * @return The bodies.
 */
export async function readBodiesJSON(input: AsyncIterable<string>): Promise<Bodies> {
    const bodies: Bodies = [];
    await streamBodiesJSON(input, body => void bodies.push(body));
    return bodies;
}
