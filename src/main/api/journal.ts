/*
 * Copyright (C) 2025 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import type { Coordinates, Id64 } from "../common.js";
import { request } from "./common.js";

/**
 * Response of a {@link sendEvents} request.
 */
export interface EventResponse {
    /** Responses for each sent event. */
    events: {
        /**
         * 100 means the event was accepted. Every other code means the event was rejected for some reason.
         * See https://www.edsm.net/en/api-journal-v1 for details.
         */
        msgnum: number;

        /** Response code in text form. */
        msg: string;

        /** True if new system was created, false if not. */
        systemCreated?: boolean;

        /** EDSM system ID. */
        systemId?: number;
    };
}

/**
 * Base data for EDSM event to be sent to EDSM. This must be the unmodified event read from the Journal, optionally enriched with additional
 * context information.
 */
export interface EDSMEvent {
    _systemAddress?: Id64;
    _systemName?: string;
    _systemCoordinates?: Coordinates;
    _marketId?: number;
    _stationName?: string;
    _shipId?: number;
    event: string;
}

/**
 * Sends journal events to EDSM.
 *
 * @param commanderName        - The name of the commander as registered on EDSM.
 * @param apiKey               - The API Key associated with the EDSM account.
 * @param fromSoftware         - Name of the software (YOUR software using this library, not the name of this library!) used to submit the data.
 * @param fromSoftwareVersion  - Version of the software used to submit the data.
 * @param fromGameVersion      - Version of the game which generated the journal messages.
 * @param fromGameBuild        - Build of the game which generated the journal messages.
 * @param message              - The journal event (or multiple events to send).
 */
export async function sendEvents(commanderName: string, apiKey: string, fromSoftware: string, fromSoftwareVersion: string, fromGameVersion: string,
        fromGameBuild: string, message: EDSMEvent | EDSMEvent[]): Promise<EventResponse> {
    return await request("api-journal-v1", {
        apiKey,
        fromSoftware,
        fromSoftwareVersion,
        fromGameVersion,
        fromGameBuild,
        message
    }) as EventResponse;
}

/**
 * Returns the events which must be discarded from the list of journal events sent to EDSM.
 *
 * @returns The list of event names to be discarded.
 */
export async function getDiscardEvents(): Promise<string[]> {
    return await request<string[]>("api-journal-v1/discard") ?? [];
}
