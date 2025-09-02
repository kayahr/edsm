/*
 * Copyright (C) 2020 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

export const edsmBaseUrl = "https://www.edsm.net";

export class ServerException extends Error {
    public readonly status: number;

    public constructor(status: number, message: string) {
        super(message);
        this.status = status;
    }
}

export class APIException extends Error {
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
        body: JSON.stringify(params)
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
