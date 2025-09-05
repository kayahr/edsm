/*
 * Copyright (C) 2020 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { type Coordinates, type Id64 } from "./common.js";
import { parseJSONArray } from "./util.js";

/** Single EDSM power play information. */
export interface PowerPlay {
    power: string;
    powerState: string;
    id: number;
    id64: Id64;
    name: string;
    coords: Coordinates;
    allegiance: string | null;
    government: string | null;
    state: string | null;
    date: string;
}

/** List of EDSM power play information. */
export type PowerPlays = PowerPlay[];

/**
 * Parses power play information from the given JSON stream.
 *
 * @param stream - The JSON input stream.
 * @returns Stream of power play information.
 */
export function parsePowerPlayJSON(stream: AsyncIterable<Uint8Array>): AsyncIterable<PowerPlay> {
    return parseJSONArray(stream);
}
