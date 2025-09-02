/*
 * Copyright (C) 2020 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { type Coordinates } from "./common.js";
import { streamJSON } from "./util.js";

/** Single EDSM power play information. */
export interface PowerPlay {
    id: number;
    id64: number;
    name: string;
    coords: Coordinates;
    power: string;
    powerState: string;
    allegiance: string;
    government: string;
    state: string;
    date: string;
}

/** List of EDSM power play information. */
export type PowerPlays = PowerPlay[];

/**
 * Streams power play information from the given JSON input to the given callback function. If you want all power
 * play information in an array then use [[readPowerPlayJSON]] instead.
 *
 * @param input    - The JSON input as an async iterable.
 * @param callback - The callback function to call for each power play information. If callback returns a promise then
 *                   this function waits for the promise to be resolved before continuing with the power play
 *                   information.
 * @returns Promise resolved when all power play information have been read or rejected when reading fails.
 */
export function streamPowerPlayJSON(input: AsyncIterable<string>,
        callback: (powerPlay: PowerPlay) => Promise<void> | void): Promise<void> {
    return streamJSON(input, callback);
}

/**
 * Reads all power play information from the given CSV input and returns them as an array. Use
 * [[streamPowerPlayJSON]] if you want to stream the power play information to a callback function instead of getting
 * a huge array.
 *
 * @param input - The JSON input as an async iterable.
 * @returns The read power play information.
 */
export async function readPowerPlayJSON(input: AsyncIterable<string>): Promise<PowerPlays> {
    const powerPlays: PowerPlays = [];
    await streamPowerPlayJSON(input, powerPlay => void powerPlays.push(powerPlay));
    return powerPlays;
}
