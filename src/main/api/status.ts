/*
 * Copyright (C) 2020 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { request } from "./common.js";

export type EliteServerStatusType = "success" | "warning" | "danger";

export interface EliteServerStatusResponse {
    lastUpdate: string;
    type: EliteServerStatusType;
    message: string;
    status: number;
}

/**
 * Returns the elite server status.
 *
 * @returns The elite server status.
 */
export async function getEliteServerStatus(): Promise<EliteServerStatusResponse> {
    return await request("api-status-v1/elite-server") as EliteServerStatusResponse;
}
