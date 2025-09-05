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
            yield JSON.parse(line);
        }
    }
}
