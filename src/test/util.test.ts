
import { describe, it } from "node:test";

import { IllegalStateException, jsonReviver, parseJSONArray } from "../main/util.ts";
import { assertEquals, assertSame, assertThrowWithMessage } from "@kayahr/assert";

async function *stream(data: unknown[], terminator = "\n"): AsyncIterable<Uint8Array> {
    const encoder = new TextEncoder();
    yield encoder.encode("[\n");
    for (const item of data) {
        yield await Promise.resolve(new TextEncoder().encode(`${JSON.stringify(item)},\n`));
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
            assertEquals(actual, expected);
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
            assertEquals(actual, expected);
        });
        it("throws error when input is invalid", async () => {
            const expected = [
                { a: 1, b: 2 },
                { c: 3, d: 4 }
            ];
            const actual = [];
            await assertThrowWithMessage(async () => {
                for await (const object of parseJSONArray(stream(expected, "\nX"))) {
                    actual.push(object);
                }
            }, IllegalStateException, "Expected array start but got: X");
        });
    });

    describe("jsonReviver", () => {
        it("revives id64 property to bigint if necessary", () => {
            // oxlint-disable-next-line no-loss-of-precision
            assertSame(jsonReviver("id64", 9007199254740993, { source: "9007199254740993" }), 9007199254740993n);
        });
        it("revives id64 property to number if sufficient", () => {
            assertSame(jsonReviver("id64", 9007199254740991, { source: "9007199254740991" }), 9007199254740991);
        });
        it("revives systemId64 property to bigint if necessary", () => {
            // oxlint-disable-next-line no-loss-of-precision
            assertSame(jsonReviver("systemId64", 9007199254740993, { source: "9007199254740993" }), 9007199254740993n);
        });
        it("revives systemId64 property to number if sufficient", () => {
            assertSame(jsonReviver("systemId64", 9007199254740991, { source: "9007199254740991" }), 9007199254740991);
        });
        it("revives other property to number if sufficient", () => {
            assertSame(jsonReviver("mass", 9007199254740991, { source: "9007199254740991" }), 9007199254740991);
            assertSame(jsonReviver("mass", 957400000000000000000, { source: "957400000000000000000" }), 957400000000000000000);
        });
        it("throws error when detecting an unhandled 64 bit precision loss", () => {
            // oxlint-disable-next-line no-loss-of-precision
            assertThrowWithMessage(() => jsonReviver("id", 9007199254740993, { source: "9007199254740993" }), IllegalStateException,
                "Value of property 'id' looks like a bigint (9007199254740993) but was parsed as an imprecise number (9007199254740992)");
        });
    });
});
