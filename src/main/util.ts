/*
 * Copyright (C) 2020 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { IllegalStateException } from "./util/IllegalStateException.js";

/**
 * Helper function to stream parsed JSON input to a callback function. The input must be a JSON file with an array
 * bracket in the first and last line and all other lines must contain a single dataset each. So it's actually a JSONL
 * file but wrapped in an array and with comma character suffixes.
 *
 * @param input    - The JSON input as an async iterable.
 * @param callback - The callback function to call for each parsed dataset. If callback returns a promise then this
 *                   function waits for the promise to be resolved before continuing with the next dataset.
 * @returns Promise resolved when JSON input has been fully read. Rejected when reading fails.
 */
export async function streamJSON<T>(input: AsyncIterable<string>, callback: (dataset: T) => Promise<void> | void):
        Promise<void> {
    let inData = false;
    for await (let line of input) {
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
            const promise = callback(JSON.parse(line) as T);
            if (promise != null) {
                await promise;
            }
        }
    }
}
