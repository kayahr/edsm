/*
 * Copyright (C) 2020 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

export interface Codex {
    systemId: number;
    systemId64: number;
    systemName: string;
    region: string;
    type: string | number;
    reportedOn: string;
}
