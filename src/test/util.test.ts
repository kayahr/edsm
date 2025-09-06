import "@kayahr/vitest-matchers";

import { describe, expect, it } from "vitest";

import { IllegalStateException, jsonReviver, parseJSONArray } from "../main/util.js";

async function *stream(data: unknown[], terminator = "\n"): AsyncIterable<Uint8Array> {
    const encoder = new TextEncoder();
    yield encoder.encode("[\n");
    for (const item of data) {
        yield await Promise.resolve(new TextEncoder().encode(JSON.stringify(item) + ",\n"));
    }
    yield encoder.encode("]");
    yield encoder.encode(terminator);
}

describe("util", () => {
    describe("parseJSONArray", () => {
        it("parses objects from JSON array with terminated last line", async () => {
            const expected = [
                { a: 1, b: 2 },
                { c: 3, d: 4 }
            ];
            const actual = [];
            for await (const object of parseJSONArray(stream(expected))) {
                actual.push(object);
            }
            expect(actual).toEqual(expected);
        });
        it("parses objects from JSON array with unterminated last line", async () => {
            const expected = [
                { a: 1, b: 2 },
                { c: 3, d: 4 }
            ];
            const actual = [];
            for await (const object of parseJSONArray(stream(expected, ""))) {
                actual.push(object);
            }
            expect(actual).toEqual(expected);
        });
        it("throws error when input is invalid", async () => {
            const expected = [
                { a: 1, b: 2 },
                { c: 3, d: 4 }
            ];
            const actual = [];
            await expect((async () => {
                for await (const object of parseJSONArray(stream(expected, "\nX"))) {
                    actual.push(object);
                }
            })()).rejects.toThrowWithMessage(IllegalStateException, "Expected array start but got: X");
        });
    });

    describe("jsonReviver", () => {
        it("revives id64 property to bigint if necessary", () => {
            // eslint-disable-next-line no-loss-of-precision
            expect(jsonReviver("id64", 9007199254740993, { source: "9007199254740993" })).toBe(9007199254740993n);
        });
        it("revives id64 property to number if sufficient", () => {
            expect(jsonReviver("id64", 9007199254740991, { source: "9007199254740991" })).toBe(9007199254740991);
        });
        it("revives systemId64 property to bigint if necessary", () => {
            // eslint-disable-next-line no-loss-of-precision
            expect(jsonReviver("systemId64", 9007199254740993, { source: "9007199254740993" })).toBe(9007199254740993n);
        });
        it("revives systemId64 property to number if sufficient", () => {
            expect(jsonReviver("systemId64", 9007199254740991, { source: "9007199254740991" })).toBe(9007199254740991);
        });
        it("revives other property to number if sufficient", () => {
            expect(jsonReviver("mass", 9007199254740991, { source: "9007199254740991" })).toBe(9007199254740991);
            expect(jsonReviver("mass", 957400000000000000000, { source: "957400000000000000000" })).toBe(957400000000000000000);
        });
        it("throws error when detecting an unhandled 64 bit precision loss", () => {
            // eslint-disable-next-line no-loss-of-precision
            expect(() => jsonReviver("id", 9007199254740993, { source: "9007199254740993" })).toThrowWithMessage(IllegalStateException,
                "Value of property 'id' looks like a bigint (9007199254740993) but was parsed as an imprecise number (9007199254740992)");
        });
    });
});
