/*
 * Copyright (C) 2020 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { streamJSON } from "./util";

/** Single EDSM codex. */
export interface Codex {
    systemId: number;
    systemId64: number;
    systemName: string;
    region: string;
    type: string | number;
    reportedOn: string;
}

/** List of EDSM codices. */
export type Codices = Codex[];

/**
 * Streams codices from the given JSON input to the given callback function. If you want all codices in an array
 * then use [[readCodexJSON]] instead.
 *
 * @param input    - The JSON input as an async iterable.
 * @param callback - The callback function to call for each codex. If callback returns a promise then
 *                   this function waits for the promise to be resolved before continuing with the codices.
 * @return Promise resolved when all codices have been read or rejected when reading fails.
 */
export function streamCodexJSON(input: AsyncIterable<string>, callback: (codex: Codex) => Promise<void> | void):
        Promise<void> {
    return streamJSON(input, callback);
}

/**
 * Reads all codices from the given CSV input and returns them as an array. Use [[streamCodexJSON]] if you want to
 * stream the codices to a callback function instead of getting a huge array.
 *
 * @param input - The JSON input as an async iterable.
 * @return The codices.
 */
export async function readCodexJSON(input: AsyncIterable<string>): Promise<Codices> {
    const codices: Codices = [];
    await streamCodexJSON(input, codex => void codices.push(codex));
    return codices;
}
