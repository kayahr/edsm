/*
 * Copyright (C) 2020 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

export interface Coordinates {
    x: number;
    y: number;
    z: number;
}

/** A 64 bit ID. Can be a `number` if ID does not need more then 53 bit. Must be `bigint` if ID needs more than 53 bit. */
export type Id64 = number | bigint;

/**
 * Converts the given date to a UTC date string as expected by the EDSM REST API.
 *
 * @param date - The date to convert.
 * @returns The date as an EDSM-compatible UTC date string.
 */
export function toUTCString(date: Date): string {
    const year = date.getUTCFullYear().toString().padStart(4, "0");
    const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
    const day = date.getUTCDate().toString().padStart(2, "0");
    const hour = date.getUTCHours().toString().padStart(2, "0");
    const minute = date.getUTCMinutes().toString().padStart(2, "0");
    const second = date.getUTCSeconds().toString().padStart(2, "0");
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}
