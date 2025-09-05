/*
 * Copyright (C) 2020 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { type Coordinates, type Id64 } from "../common.js";
import { request } from "./common.js";

export interface FlightLog {
    shipId: number | null;
    system: string;
    systemId?: number;
    systemId64?: Id64;
    firstDiscover: boolean;
    date: string;
}

export interface FlightLogs {
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
export async function getFlightLogs(commanderName: string, apiKey: string, filter?: FlightLogFilter):
        Promise<FlightLogs> {
    return await request("api-logs-v1/get-logs", { commanderName, apiKey, ...filter }) as FlightLogs;
}

/**
 * Commander position returned by [[getPosition]]
 */
export interface CommanderPosition {
    system: string | null;
    systemId?: number;
    systemId64?: Id64;
    firstDiscover: false | null;
    date: string | null;
    coordinates?: Coordinates;
    isDocked?: boolean;
    station?: string;
    stationId?: number;
    dateDocked?: string;
    shipId?: number;
    shipType?: string;
    shipFuel: number | null;
    dateLastActivity?: string;
    url?: string;
}

export interface PositionOptions {
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
export async function getPosition(commanderName: string, options?: PositionOptions):
        Promise<CommanderPosition> {
    return await request("api-logs-v1/get-position", { commanderName, ...options }) as CommanderPosition;
}

/** Options for [[setComment]] function. */
export interface SetCommentOptions {
    /** This parameter (or the other one) is used to bypass duplicate system names. */
    systemId?: number;

    /** This parameter (or the other one) is used to bypass duplicate system names. */
    systemId64?: Id64;
}

/** Response type of [[setComment]] */
export interface CommentResponse {
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
 * @param options       - Additional option.
 */
export async function setComment(commanderName: string, apiKey: string, systemName: string, comment: string, options?: SetCommentOptions):
        Promise<CommentResponse> {
    return await request("api-logs-v1/set-comment", { commanderName, apiKey, systemName, comment, ...options }) as CommentResponse;
}

/**
 * Returns a system comment.
 *
 * @param commanderName - The name of the commander as registered on EDSM.
 * @param apiKey        - The API key associated with the commander.
 * @param systemName    - The system name for which to return the comment.
 * @param options       - Additional option.
 */
export async function getComment(commanderName: string, apiKey: string, systemName: string, options?: SetCommentOptions): Promise<CommentResponse> {
    return await request("api-logs-v1/get-comment", { commanderName, apiKey, systemName, ...options }) as CommentResponse;
}

/** Result type of [[getComments]]. */
export interface Comments {
    comments: Array<{
        system: string;
        systemId?: number;
        comment: string;
        lastUpdate: string;
    }>;
}

/** Options for [[getComments]]. */
export interface CommentsOptions {
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
export async function getComments(commanderName: string, apiKey: string, options?: CommentsOptions): Promise<Comments> {
    return await request("api-logs-v1/get-comments", { commanderName, apiKey, ...options }) as Comments;
}
