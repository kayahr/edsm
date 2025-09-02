/*
 * Copyright (C) 2020 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { NotFoundException } from "../util/NotFoundException.js";
import { request } from "./common.js";

/**
 * Commander ranks returned by [[getCommanderRanks]].
 */
export interface CommanderRanks {
    ranks: {
        Combat: number;
        Trade: number;
        Explore: number;
        Soldier: number;
        Exobiologist: number;
        CQC: number;
        Federation: number;
        Empire: number;
    };
    progress: {
        Combat: number;
        Trade: number;
        Explore: number;
        Soldier: number;
        Exobiologist: number;
        CQC: number;
        Federation: number;
        Empire: number;
    };
    ranksVerbose: {
        Combat: string;
        Trade: string;
        Explore: string;
        Soldier: string;
        Exobiologist: string;
        CQC: string;
        Federation: string;
        Empire: string;
    };
}

/** Credits period type */
export type CreditsPeriod = "7DAY" | "1MONTH" | "3MONTH" | "6MONTH";

/**
 * Commander credits information returned by [[getCommanderCredits]].
 */
export interface CommanderCredits {
    credits: Array<{
        balance: number;
        loan: 0;
        date: string;
    }>;
    period?: CreditsPeriod;
}

/** Inventory type */
export type InventoryType = "materials" | "data" | "cargo";

/**
 * Commander inventory information returned by [[getCommandInventory]].
 */
export interface CommanderInventory {
    materials?: Array<{
        type: string | number;
        name: string;
        qty: number;
    }>;
    data?: Array<{
        type: string | number;
        name: string;
        qty: number;
    }>;
    cargo?: Array<{
        type: string | null;
        name: string;
        qty: number;
    }>;
}

/**
 * Returns commander ranks.
 *
 * @param commanderName - The name of the commander as registered on EDSM.
 * @param apiKey        - The API key of the commander. If not provided, ranks will only be returned if the commander
 *                        has enabled his public profile.
 * @returns The commander ranks.
 * @throws NotFoundException - When commander was not found or is not public
 */
export async function getCommanderRanks(commanderName: string, apiKey?: string): Promise<CommanderRanks> {
    const ranks = await request<CommanderRanks>("api-commander-v1/get-ranks", { commanderName, apiKey });
    if (ranks == null) {
        throw new NotFoundException("Commander not found or not public: " + commanderName);
    }
    return ranks;
}

/**
 * Returns commander credits.
 *
 * @param commanderName - The name of the commander as registered on EDSM.
 * @param apiKey        - The API key of the commander.
 * @returns The commander credits.
 */
export async function getCommanderCredits(commanderName: string, apiKey: string, period?: CreditsPeriod):
        Promise<CommanderCredits> {
    return await request("api-commander-v1/get-credits", { commanderName, apiKey, period }) as CommanderCredits;
}

/**
 * Returns commander inventory.
 *
 * @param commanderName - The name of the commander as registered on EDSM.
 * @param apiKey        - The API key of the commander.
 * @param type          - The inventory type. Defaults to "materials".
 * @returns The commander inventory.
 */
export async function getCommanderInventory(commanderName: string, apiKey: string, type?: InventoryType):
        Promise<CommanderInventory> {
    return await request("api-commander-v1/get-materials", { commanderName, apiKey, type }) as CommanderInventory;
}
