/*
 * Copyright (C) 2020 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import type { Coordinates, Id64 } from "../common.ts";
import { type SystemIdRequestOptions, request } from "./common.ts";

export interface FlightLog {
    shipId: number | null;
    system: string;
    systemId?: number;
    systemId64?: Id64;
    firstDiscover: boolean;
    date: string;
}

export interface FlightLogsResponse {
    startDateTime: string;
    endDateTime: string;
    logs: FlightLog[];
}

export interface FlightLogFilter {
    /** Filters flight logs by system name. */
    systemName?: string;

    /**
     * Filters for flight logs after this date & time (inclusive). Must be specified in UTC in the format
     * YYYY-MM-DD HH:MM:SS.
     */
    startDateTime?: string;

    /**
     * Filters for flight logs before this date & time (inclusive). Must be specified in UTC in the format
     * YYYY-MM-DD HH:MM:SS.
     */
    endDateTime?: string;

    /** Set to 1 if you want to get the EDSM internal id. Useful to handle duplicated name systems of the game. */
    showId?: number;
}

/**
 * Returns the flight log entries.
 *
 * @param commanderName - The name of the commander as registered on EDSM.
 * @param apiKey        - The API key of the commander.
 * @param filter        - Optional filter properties.
 * @returns The flight log entries.
 */
export async function getFlightLogs(commanderName: string, apiKey: string, filter?: FlightLogFilter): Promise<FlightLogsResponse> {
    return (await request("api-logs-v1/get-logs", { commanderName, apiKey, ...filter }))!;
}

/**
 * Commander position response returned by {@link getCommanderPosition} request.
 */
export interface CommanderPositionResponse {
    system: string | null;
    systemId?: number;
    systemId64?: Id64;
    firstDiscover: boolean | null;
    date: string | null;
    coordinates?: Coordinates;
    isDocked?: boolean;
    station?: string;
    stationId?: number;
    dateDocked?: string;
    shipId?: number;
    shipType?: string;
    shipFuel?: number | null;
    dateLastActivity?: string;
    url?: string;
}

export interface CommanderPositionOptions {
    /**
     * If not provided, information will only be returned if the commander has enabled his public profile, and share
     * logs or map.
     */
    apiKey?: string;

    /** Set to 1 if you want to get the EDSM internal id. Useful to handle duplicated name systems of the game. */
    showId?: number;

    /** Set to 1 if you want to get the coordinates of the system. */
    showCoordinates?: number;
}

/**
 * Returns the last position of the given commander.
 *
 * @param commanderName - The name of the commander as registered on EDSM.
 * @param options       - Options.
 * @returns The last position.
 */
export async function getCommanderPosition(commanderName: string, options?: CommanderPositionOptions): Promise<CommanderPositionResponse> {
    return (await request("api-logs-v1/get-position", { commanderName, ...options }))!;
}

/** Response type of {@link setSystemComment} */
export interface SystemCommentResponse {
    comment: string | null;
    lastUpdate: string | null;
}

/**
 * Sets/Updates a comment.
 *
 * @param commanderName - The name of the commander as registered on EDSM.
 * @param apiKey        - The API key associated with the commander.
 * @param systemName    - The system name for which to set a comment.
 * @param comment       - The comment to set. Empty string to remove.
 * @param options       - Additional options.
 */
export async function setSystemComment(commanderName: string, apiKey: string, systemName: string, comment: string, options?: SystemIdRequestOptions):
        Promise<SystemCommentResponse> {
    return (await request("api-logs-v1/set-comment", { commanderName, apiKey, systemName, comment, ...options }))!;
}

/**
 * Returns a system comment.
 *
 * @param commanderName - The name of the commander as registered on EDSM.
 * @param apiKey        - The API key associated with the commander.
 * @param systemName    - The system name for which to return the comment.
 * @param options       - Additional options.
 */
export async function getSystemComment(commanderName: string, apiKey: string, systemName: string, options?: SystemIdRequestOptions):
        Promise<SystemCommentResponse> {
    return (await request("api-logs-v1/get-comment", { commanderName, apiKey, systemName, ...options }))!;
}

/** Response of a {@link getSystemComments} request. */
export interface SystemCommentsResponse {
    comments: Array<{
        system: string;
        systemId?: number;
        comment: string;
        lastUpdate: string;
    }>;
}

/** Options for {@link getSystemComments} request. */
export interface SystemCommentsOptions {
    /**
     * If you only want to receive comments updated after a specific date & time, use this parameter.
     * That parameter is inclusive. All dates must be UTC.
     */
    startDateTime?: string;

    /** Set to 1 if you want to get the EDSM internal id. Useful to handle duplicated name systems of the game. */
    showId?: number;
}

/**
 * Returns comments set for various systems.
 *
 * @param commanderName - The name of the commander as registered on EDSM.
 * @param apiKey        - The API key associated with the commander.
 * @param options       - Additional options.
 */
export async function getSystemComments(commanderName: string, apiKey: string, options?: SystemCommentsOptions): Promise<SystemCommentsResponse> {
    return (await request("api-logs-v1/get-comments", { commanderName, apiKey, ...options }))!;
}
