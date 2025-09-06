/*
 * Copyright (C) 2020 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { JSONStringify } from "json-with-bigint";

import type { Id64 } from "../common.js";
import { Exception } from "../util.js";

export const edsmBaseUrl = "https://dev.edsm.net";

/**
 * Request options for referencing a system via EDSM or Frontier ID instead of name. Needed when system name is not unique.
 */
export interface SystemIdRequestOptions {
    /** The system ID if you seek for a duplicate system and want to force a specific ID. */
    systemId?: number;

    /** The system ID64 if you seek for a duplicate system and want to force a specific ID. */
    systemId64?: Id64;
}

export class ServerException extends Exception {
    public readonly status: number;

    public constructor(status: number, message: string) {
        super(message);
        this.status = status;
    }
}

export class APIException extends Exception {
    public readonly status: number;

    public constructor(status: number, message: string) {
        super(message);
        this.status = status;
    }
}

interface MessageResult {
    msgnum?: number;
    msg?: string;
}

/**
 * Sends JSON request to the given URL with the given parameters and returns the response.
 *
 * @param params - Optional parameters.
 * @returns The JSON result. Null when result was an empty object which for EDSM means "not found".
 * @throws APIException - When request failed for some unknown reason.
 */
export async function request<T>(url: string, params: object = {}): Promise<T | null> {
    const result = await fetch(`${edsmBaseUrl}/${url}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSONStringify(params)
    });
    if (result.status !== 200) {
        throw new ServerException(result.status, result.statusText);
    }
    const json = await result.json() as (T & MessageResult);
    if (json.msgnum != null && json.msg != null) {
        if (json.msgnum < 100 || json.msgnum >= 200) {
            throw new APIException(json.msgnum, json.msg);
        } else {
            delete json.msgnum;
            delete json.msg;
        }
    }
    if (Object.keys(json).length === 0) {
        return null;
    }
    return json;
}
