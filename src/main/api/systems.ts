/*
 * Copyright (C) 2025 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import type { Coordinates, Id64 } from "../common.js";
import { NotFoundException } from "../util.js";
import { request, type SystemIdRequestOptions } from "./common.js";

/**
 * Response of a {@link getSystem} request.
 */
export interface SystemResponse {
    /** The name of the system. */
    name: string;

    /** The EDSM ID of the system. Only present when {@link SystemRequestOptions#showId} option is set to 1. */
    id?: number;

    /** The Frontier ID of the system. Only present when {@link SystemRequestOptions#showId} option is set to 1. */
    id64?: Id64;

    /**
     * The systems ID having the exact same name in the game. Only present when there are duplicated and
     * {@link SystemRequestOptions#showId} option is set to 1.
     */
    duplicates?: number[];

    /** The coordinates of the system. Only present when {@link SystemRequestOptions#showCoordinates} option is set to 1. */
    coords?: {
        x: number;
        y: number;
        z: number;
    };

    /**
     * True when exact coords are known. False when position is trilaterated. Only present when {@link SystemRequestOptions#showCoordinates}
     * option is set to 1
     */
    coordsLocked?: boolean;

    /** System information. Only present when {@link SystemRequestOptions#showInformation} option is set to 1. */
    information?: {
        allegiance?: string;
        government?: string;
        faction?: string;
        factionState?: string;
        population?: number;
        security?: string;
        economy?: string;
        secondEconomy?: string;
        reserve?: string;
    };

    /** Permit information. Only present when {@link SystemRequestOptions#showPermit} option is set to 1. */
    requirePermit?: boolean;

    /** Permit name if any. Only present when {@link SystemRequestOptions#showPermit} option is set to 1. */
    permitName?: string;

    /** Information about the primary star if any. Only present when {@link SystemRequestOptions#showPrimaryStar} option is set to 1. */
    primaryStar?: {
        type: string;
        name: string;
        isScoopable: boolean;
    };

    /** The time when the system was hidden. Only present when system is hidden and {@link SystemRequestOptions#includeHidden} is set to 1 */
    hidden_at?: string;

    /**
     * The system ID this system was merged to. Only present when system was merged and,  {@link SystemRequestOptions#includeHidden} is set to 1
     * and {@link SystemRequestOptions#showId} is also set to 1.
     */
    mergedTo?: number;
}

/**
 * Flags for enabling data in {@link SystemResponse}.
 */
export interface SystemRequestFlags {
    /** Set to 1 to get our internal ID for this system. */
    showId?: number;

    /** Set to 1 to get the system coordinates. If coordinates are unknown, the coords key will not be returned. */
    showCoordinates?: number;

    /** Set to 1 to get the system permit if there is one. If the permit is named, also return permitName. */
    showPermit?: number;

    /** Set to 1 to get the system information like allegiance, government... If no information are stored, an empty object will be returned. */
    showInformation?: number;

    /** Set to 1 to get the system primary star if known. If no primary star is stored, null will be returned.  */
    showPrimaryStar?: number;

    /** Set to 1 to get system even if hidden in the database. Hidden system are generally typo errors, renamed system in the game... */
    includeHidden?: number;
}

/**
 * Options for {@link getSystem} request.
 */
export interface SystemRequestOptions extends SystemIdRequestOptions, SystemRequestFlags {}

/**
 * Returns information about the given system.
 *
 * @param systemName - The system name.
 * @returns The system information.
 * @throws NotFoundException - When system was not found.
 */
export async function getSystem(systemName: string, options?: SystemRequestOptions): Promise<SystemResponse> {
    const system = await request<SystemResponse>("api-v1/system", { systemName, ...options });
    if (system == null) {
        throw new NotFoundException("System not found: " + systemName);
    }
    return system;
}

/**
 * Options for {@link getSystems} request.
 */
export interface SystemsRequestOptions extends SystemRequestFlags {
    /** The systems name to retrieve, can be a start of a name or an array of specific names. */
    systemName?: string | string[];

    /**
     * If you only want to receive systems updated after a specific date & time, use this parameter.
     * Parameter is inclusive. All dates must be UTC.
     * Format: YYYY-MM-DD HH:MM:SS.
     */
    startDateTime?: string;

    /**
     * If you only want to receive systems updated before a specific date & time, use this parameter.
     * Parameter is inclusive. All dates must be UTC.
     * Format: YYYY-MM-DD HH:MM:SS.
     */
    endDateTime?: string;

    /** Set to 1 to get only systems with known coordinates. */
    onlyKnownCoordinates?: number;

    /** Set to 1 to get only systems without coordinates. */
    onlyUnknownCoordinates?: number;
}

/**
 * Returns information about multiple systems.
 *
 * @param options - The request options.
 * @returns List of system information. Empty if none.
 */
export async function getSystems(options?: SystemsRequestOptions): Promise<SystemResponse[]> {
    const system = await request<SystemResponse[]>("api-v1/systems", { ...options });
    return system ?? [];
}

/**
 * Options for {@link getSphereSystems} request.
 */
export interface SphereSystemsRequestOptions extends SystemRequestFlags, SystemIdRequestOptions {
    /** Desired radius in LY. Defaults to 50, maximum is 100.  */
    radius?: number;

    /** The minimum radius in LY. Must be between 0 and {@link radius}. Defaults to 0. */
    minRadius?: number;
}

/**
 * Returns information about multiple systems in a given sphere.
 *
 * @param options - The request options.
 * @returns List of system information in given sphere. Empty if none.
 */
export async function getSphereSystems(systemNameOrCoords: string | Coordinates, options?: SphereSystemsRequestOptions): Promise<SystemResponse[]> {
    const center = typeof systemNameOrCoords === "string" ? { systemName: systemNameOrCoords } : systemNameOrCoords;
    return await request("api-v1/sphere-systems", { ...center, ...options }) as SystemResponse[];
}

/**
 * Options for {@link getCubeSystems} request.
 */
export interface CubeSystemsRequestOptions extends SystemRequestFlags, SystemIdRequestOptions {
    /** Desired cube size in LY. Defaults to 100, maximum is 200.  */
    size?: number;
}

/**
 * Returns information about multiple systems in a given cube.
 *
 * @param options - The request options.
 * @returns List of system information in given cube. Empty if none.
 */
export async function getCubeSystems(systemNameOrCoords: string | Coordinates, options?: CubeSystemsRequestOptions): Promise<SystemResponse[]> {
    const center = typeof systemNameOrCoords === "string" ? { systemName: systemNameOrCoords } : systemNameOrCoords;
    return await request("api-v1/cube-systems", { ...center, ...options }) as SystemResponse[];
}
