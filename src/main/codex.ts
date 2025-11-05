/*
 * Copyright (C) 2020 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import type { Id64 } from "./common.ts";
import { parseJSONArray } from "./util.ts";

/** Single EDSM codex. */
export interface Codex {
    systemId: number;
    systemId64: Id64;
    systemName: string;
    region: string;
    type: string | null;
    name: string | number;
    reportedOn: string;
}

/** List of EDSM codices. */
export type Codices = Codex[];

/**
 * Parses codices from the given JSON stream.
 *
 * @param stream - The JSON input stream.
 * @returns Stream of codices.
 */
export function parseCodexJSON(stream: AsyncIterable<Uint8Array>): AsyncIterable<Codex> {
    return parseJSONArray(stream);
}
