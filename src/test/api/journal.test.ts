
import { after, before, describe, it } from "node:test";

import { getDiscardEvents, sendEvents } from "../../main/index.ts";
import { edsmAPIKey, edsmLiveTest, edsmMock, edsmUser } from "./mock.ts";
import { assertGreaterThan, assertSame } from "@kayahr/assert";

describe("journal", () => {
    before(() => {
        edsmMock.start();
    });

    after(() => {
        edsmMock.stop();
    });

    describe("getDiscardEvents", () => {
        it("return event names to be discarded", async () => {
            const result = await getDiscardEvents();
            assertGreaterThan(result.length, 0);
            assertSame(typeof result[0], "string");
        });
    });

    // Test sending events only in mocked environment
    if (!edsmLiveTest) {
        describe("sendEvents", () => {
            it("sends a single event", async () => {
                const event = { event: "FSDJump" };
                const result = await sendEvents(edsmUser, edsmAPIKey, "@kayahr/edsm", "1.0.0", "4.2.0.2", "r318329/r0 ", event);
                assertSame(result.events.length, 1);
                assertSame(result.events[0].msgnum, 100);
            });
            it("sends multiple events", async () => {
                const event1 = { event: "FSDJump" };
                const event2 = { event: "Location" };
                const result = await sendEvents(edsmUser, edsmAPIKey, "@kayahr/edsm", "1.0.0", "4.2.0.2", "r318329/r0 ", [ event1, event2 ]);
                assertSame(result.events.length, 2);
                assertSame(result.events[0].msgnum, 100);
                assertSame(result.events[1].msgnum, 100);
            });
        });
    }
});
