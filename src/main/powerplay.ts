/*
 * Copyright (C) 2020 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { Coordinates } from "./common";

export interface PowerPlay {
    id: number;
    id64: number;
    name: string;
    coords: Coordinates;
    power: string;
    powerState: string;
    allegiance: string;
    government: string;
    state: string;
    date: string;
}
