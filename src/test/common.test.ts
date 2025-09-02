import { describe, expect, it } from "vitest";

import * as edsm from "../main/index.js";

describe("toUTCString", () => {
    it("converts a date to an EDSM-compatible UTC string", () => {
        const date = new Date("Sun Nov 29 2020 23:18:39 GMT+0100");
        expect(edsm.toUTCString(date)).toBe("2020-11-29 22:18:39");
    });
});
