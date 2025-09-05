/*
 * Copyright (C) 2020 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { IllegalStateException } from "./util/IllegalStateException.js";

/**
 * Helper function to iterate over the lines of a data stream.
 *
 * @param stream - The input stream.
 * @returns The created iterable for iterating over the lines of the stream.
 */
async function *parseLines(stream: AsyncIterable<Uint8Array>): AsyncIterable<string> {
    let line = "";
    const decoder = new TextDecoder();
    for await (const chunk of stream) {
        const data = decoder.decode(chunk);
        const parts = data.split("\n");
        const numParts = parts.length;
        for (let i = 0; i < numParts; i++) {
            line += parts[i];
            if (i <  numParts - 1) {
                yield line;
                line = "";
            }
        }
    }
    if (line !== "") {
        yield line;
    }
}

/**
 * Helper function to iterate over the array entries of the given stream. The stream must be a JSON file with an array
 * bracket in the first and last line and all other lines must contain a single dataset each. So it's actually a JSONL
 * file but wrapped in an array and with comma character suffixes.
 *
 * @param stream    - The JSON input as an async iterable.
 * @returns The created iterable for iterating over the array entries of the JSON stream.
 */
export async function *parseJSONArray<T>(stream: AsyncIterable<Uint8Array>): AsyncIterable<T> {
    let inData = false;
    for await (let line of parseLines(stream)) {
        if (!inData) {
            if (line === "[") {
                inData = true;
            } else {
                throw new IllegalStateException("Expected array start but got: " + line);
            }
        } else {
            if (line === "]") {
                return;
            }
            if (line.endsWith(",")) {
                line = line.substring(0, line.length - 1);
            }
            yield JSON.parse(line, jsonReviver);
        }
    }
}

/**
 * JSON reviver function which converts numbers of ID properties (property names ending with 'ID' or 'Address') to bigint if needed.
 *
 * @param key     - The JSON property key.
 * @param value   - The parsed JSON property value.
 * @param context - The reviver context containing the raw JSON source string.
 * @returns The already parsed JSON property value if suitable or the raw source converted into a bigint.
 */
export function jsonReviver(key: string, value: unknown, context?: { source: string }): unknown {
    if (context != null && typeof value === "number" && (value > Number.MAX_SAFE_INTEGER || value < Number.MIN_SAFE_INTEGER)) {
        const source = context.source;
        if (key === "id64" || key === "systemId64") {
            return BigInt(source);
        } else if (String(value) !== source && /^[-+]?\d+$/.test(source)) {
            throw new IllegalStateException(`Value of property '${key}' looks like a bigint (${source}) but was parsed as an imprecise number (${value})`);
        }
    }
    return value;
}
