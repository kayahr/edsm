import "@kayahr/vitest-matchers";

import { afterAll, beforeAll, describe, expect, it } from "vitest";

import { getDiscardEvents, sendEvents } from "../../main/index.js";
import { edsmAPIKey, edsmLiveTest, edsmMock, edsmUser } from "./mock.js";

describe("journal", () => {
    beforeAll(() => {
        edsmMock.start();
    });

    afterAll(() => {
        edsmMock.stop();
    });

    describe("getDiscardEvents", () => {
        it("return event names to be discarded", async () => {
            const result = await getDiscardEvents();
            expect(result.length).toBeGreaterThan(0);
            expect(typeof result[0]).toBe("string");
        });
    });

    // Test sending events only in mocked environment
    if (!edsmLiveTest) {
        describe("sendEvents", () => {
            it("sends a single event", async () => {
                const event = { event: "FSDJump" };
                const result = await sendEvents(edsmUser, edsmAPIKey, "@kayahr/edsm", "1.0.0", "4.2.0.2", "r318329/r0 ", event);
                expect(result.events.length).toBe(1);
                expect(result.events[0].msgnum).toBe(100);
            });
            it("sends multiple events", async () => {
                const event1 = { event: "FSDJump" };
                const event2 = { event: "Location" };
                const result = await sendEvents(edsmUser, edsmAPIKey, "@kayahr/edsm", "1.0.0", "4.2.0.2", "r318329/r0 ", [ event1, event2 ]);
                expect(result.events.length).toBe(2);
                expect(result.events[0].msgnum).toBe(100);
                expect(result.events[1].msgnum).toBe(100);
            });
        });
    }
});
