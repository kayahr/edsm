import type { CallLog, RouteMatcher, RouteResponse, UserRouteConfig } from "fetch-mock";
import fetchMock from "fetch-mock";
import { JSONParse, JSONStringify } from "json-with-bigint";

import { edsmBaseUrl } from "../../main/api/common.js";
import type { SystemFactions } from "../../main/api/system.js";
import type { SystemRequestOptions, SystemResponse } from "../../main/api/systems.js";
import type { CreditsPeriod, InventoryType } from "../../main/index.js";
import {
    berenices1, berenices2, colonia, jamesonMemorialMarket, jamesonMemorialOutfitting, jamesonMemorialShipyard,
    shinrartaDezhraFactions, shinrartaDezhraStations, shinrartaDezhraTraffic
} from "../data/mock-data.js";

/**
 * Mocks the EDSM server for testing API calls.
 */
export class EDSMMock {
    readonly #comments = new Map<string, string>();

    public start(): void {
        if (!edsmLiveTest) {
            fetchMock.mockGlobal();
            this.#mockRequest("api-status-v1/elite-server", "POST", this.#getEliteServerStatus);
            this.#mockRequest("api-commander-v1/get-ranks", "POST", this.#getCommanderRanks);
            this.#mockRequest("api-commander-v1/get-credits", "POST", this.#getCommanderCredits);
            this.#mockRequest("api-commander-v1/get-materials", "POST", this.#getCommanderMaterials);
            this.#mockRequest("api-logs-v1/get-position", "POST", this.#getPosition);
            this.#mockRequest("api-logs-v1/get-logs", "POST", this.#getLogs);
            this.#mockRequest("api-logs-v1/set-comment", "POST", this.#setComment);
            this.#mockRequest("api-logs-v1/get-comment", "POST", this.#getComment);
            this.#mockRequest("api-logs-v1/get-comments", "POST", this.#getComments);
            this.#mockRequest("api-system-v1/bodies", "POST", this.#getSystemBodies);
            this.#mockRequest("api-system-v1/estimated-value", "POST", this.#getSystemEstimatedValue);
            this.#mockRequest("api-system-v1/stations/market", "POST", this.#getSystemStationsMarket);
            this.#mockRequest("api-system-v1/stations/shipyard", "POST", this.#getSystemStationsShipyard);
            this.#mockRequest("api-system-v1/stations/outfitting", "POST", this.#getSystemStationsOutfitting);
            this.#mockRequest("api-system-v1/stations", "POST", this.#getSystemStations);
            this.#mockRequest("api-system-v1/factions", "POST", this.#getSystemFactions);
            this.#mockRequest("api-system-v1/traffic", "POST", this.#getSystemTraffic);
            this.#mockRequest("api-system-v1/deaths", "POST", this.#getSystemDeaths);
            this.#mockRequest("api-v1/system", "POST", this.#getSystem);
        }
    }

    public stop(): void {
        if (!edsmLiveTest) {
            fetchMock.unmockGlobal();
        }
    }

    #mockRequest(url: string, method: string, handler: (callLog: CallLog) => RouteResponse, options?: UserRouteConfig): void {
        const match = (url: string): RouteMatcher => {
            const fullUrl = `${edsmBaseUrl}/${url}`;
            return callLog => {
                const url = callLog.url;
                return url === fullUrl || url.startsWith(`${fullUrl};`) || url.startsWith(`${fullUrl}/`) || url.startsWith(`${fullUrl}?`);
            };
        };
        function catchError(handler: (callLog: CallLog) => RouteResponse): RouteResponse {
            return async (callLog: CallLog) => {
                try {
                    let result = handler(callLog);
                    if (result instanceof Promise) {
                        result = await result;
                    }
                    return result;
                } catch (e) {
                    const statusText = e instanceof Error ? e.message : String(e);
                    return ({
                        status: 500,
                        headers: {
                            "Content-Type": "text/plain"
                        },
                        body: statusText
                    });
                }
            };
        }
        fetchMock.route(match(url), catchError(handler.bind(this)), { method, ...options });
    }

    #createJSONResponse<T>(status: number, data: T, headers: Record<string, string> = {}): RouteResponse {
        return {
            status,
            headers: {
                "Content-Type": "application/json",
                "X-Powered-By": "EDSM.NET API-STATUSv1",
                ...headers
            },
            body: JSONStringify(data)
        };
    }

    #readJSONBody<T>(callLog: CallLog): T {
        return JSON.parse(callLog.options?.body as string) as T;
    }

    #getEliteServerStatus(callLog: CallLog): RouteResponse {
        return this.#createJSONResponse(200,
            {
                lastUpdate: "2025-09-05 21:30:58",
                type: "success",
                message: "Good",
                status: 1
            }
        );
    }

    #getCommanderRanks(callLog: CallLog): RouteResponse {
        const { commanderName } = this.#readJSONBody<{ commanderName: string }>(callLog);
        if (commanderName !== "MockUser") {
            return this.#createJSONResponse(200, { msgnum: 203, msg: "Commander name/API Key not found" });
        }
        return this.#createJSONResponse(200,
            {
                msgnum: 100,
                msg: "OK",
                ranks: {
                    Combat: 8,
                    Trade: 11,
                    Explore: 11,
                    Soldier: 4,
                    Exobiologist: 13,
                    CQC: 0,
                    Federation: 14,
                    Empire: 14
                },
                progress: {
                    Combat: 13,
                    Trade: 45,
                    Explore: 45,
                    Soldier: 29,
                    Exobiologist: 100,
                    CQC: 26,
                    Federation: 100,
                    Empire: 100
                },
                ranksVerbose: {
                    Combat: "Elite",
                    Trade: "Elite III",
                    Explore: "Elite III",
                    Soldier: "Gunslinger",
                    Exobiologist: "Elite V",
                    CQC: "Helpless",
                    Federation: "Admiral",
                    Empire: "King"
                }
            }
        );
    }

    #getCommanderCredits(callLog: CallLog): RouteResponse {
        const { commanderName, period } = this.#readJSONBody<{ commanderName: string, period?: CreditsPeriod }>(callLog);
        if (commanderName !== "MockUser") {
            return this.#createJSONResponse(200, { msgnum: 203, msg: "Commander name/API Key not found" });
        }
        if (period == null) {
            return this.#createJSONResponse(200, { msgnum: 100, msg: "OK", credits: [ { balance: 10, loan: 1, date: "2025-09-05 15:54:41" } ] });
        } else {
            return this.#createJSONResponse(200, {
                msgnum: 100,
                msg: "OK",
                credits: [
                    { balance: 10, loan: 1, date: "2025-08-29 11:56:25" },
                    { balance: 11, loan: 2, date: "2025-08-29 17:38:46" },
                    { balance: 12, loan: 3, date: "2025-08-29 21:25:41" }
                ],
                period
            });
        }
    }

    #getCommanderMaterials(callLog: CallLog): RouteResponse {
        const { commanderName, type } = this.#readJSONBody<{ commanderName: string, type?: InventoryType }>(callLog);
        if (commanderName !== "MockUser") {
            return this.#createJSONResponse(200, { msgnum: 203, msg: "Commander name/API Key not found" });
        }
        if (type === "cargo") {
            return this.#createJSONResponse(200, {
                msgnum: 100,
                msg: "OK",
                cargo: [
                    {
                        type: "explosives",
                        name: "Explosives",
                        qty: 0
                    },
                    {
                        type: null,
                        name: "Xeno-Defence Protocols",
                        qty: 0
                    }
                ]
            });
        }
        if (type === "data") {
            return this.#createJSONResponse(200, {
                msgnum: 100,
                msg: "OK",
                data: [
                    {
                        type: 128681633,
                        name: "Aberrant Shield Pattern Analysis",
                        qty: 108
                    },
                    {
                        type: 128681611,
                        name: "Unusual Encrypted Files",
                        qty: 127
                    }
                ]
            });
        }
        return this.#createJSONResponse(200, {
            msgnum: 100,
            msg: "OK",
            materials: [
                {
                    type: 128672342,
                    name: "Antimony",
                    qty: 118
                },
                {
                    type: 128672335,
                    name: "Zirconium",
                    qty: 94
                }
            ]
        });
    }

    #getPosition(callLog: CallLog): RouteResponse {
        const { commanderName, showId, showCoordinates } = this.#readJSONBody<{ commanderName: string, showId?: number, showCoordinates?: number }>(callLog);
        if (commanderName !== "MockUser") {
            return this.#createJSONResponse(200, { msgnum: 203, msg: "Commander name/API Key not found" });
        }
        const response: Record<string, unknown> = {
            msgnum: 100,
            msg: "OK",
            system: "Col 359 Sector AE-N b9-4",
            firstDiscover: false,
            date: "2025-09-05 07:04:15",
            isDocked: false,
            shipId: 118,
            shipType: "Mandalay",
            shipFuel: null,
            dateLastActivity: "2025-09-05 22:42:09",
            url: "https://www.edsm.net/en/user/profile/id/11120/cmdr/Kayahr"
        };
        if (showId === 1) {
            response["systemId"] = 46319102;
            response["systemId64"] = 9463826621993;
        }
        if (showCoordinates === 1) {
            response["coordinates"] = {
                x: -225.1875,
                y: 103.125,
                z: 322.25
            };
        }
        return this.#createJSONResponse(200, response);
    }

    #getLogs(callLog: CallLog): RouteResponse {
        const { commanderName, showId } = this.#readJSONBody<{ commanderName: string, showId?: number }>(callLog);
        if (commanderName !== "MockUser") {
            return this.#createJSONResponse(200, { msgnum: 203, msg: "Commander name/API Key not found" });
        }
        const response = {
            msgnum: 100,
            msg: "OK",
            endDateTime: "2025-09-06 08:11:13",
            startDateTime: "2025-08-30 08:11:13",
            logs: [
                {
                    shipId: 118,
                    system: "Col 359 Sector AE-N b9-4",
                    systemId: 46319102,
                    systemId64: 9463826621993,
                    firstDiscover: false,
                    date: "2025-09-05 07:04:15"
                },
                {
                    shipId: 118,
                    system: "Col 359 Sector XX-O b8-4",
                    systemId: 4177279,
                    systemId64: 9464095057441,
                    firstDiscover: false,
                    date: "2025-09-05 07:03:12"
                }
            ]
        };
        if (showId !== 1) {
            response.logs.forEach((log: Record<string, unknown>) => {
                delete log.systemId;
                delete log.systemId64;
            });
        }
        return this.#createJSONResponse(200, response);
    }

    #setComment(callLog: CallLog): RouteResponse {
        const { commanderName, systemName, comment } = this.#readJSONBody<{ commanderName: string, systemName: string, comment: string }>(callLog);
        if (commanderName !== "MockUser") {
            return this.#createJSONResponse(200, { msgnum: 203, msg: "Commander name/API Key not found" });
        }
        if (comment === "") {
            this.#comments.delete(systemName);
        } else {
            this.#comments.set(systemName, comment);
        }
        return this.#getComment(callLog);
    }

    #getComment(callLog: CallLog): RouteResponse {
        const { commanderName, systemName } = this.#readJSONBody<{ commanderName: string, systemName: string }>(callLog);
        if (commanderName !== "MockUser") {
            return this.#createJSONResponse(200, { msgnum: 203, msg: "Commander name/API Key not found" });
        }
        const comment = this.#comments.get(systemName);
        if (comment == null) {
            return this.#createJSONResponse(200, {
                msgnum: 101, msg: "OK, but no private comment stored for this system", comment: comment ?? null, lastUpdate: "2025-09-06 08:20:44"
            });
        }
        return this.#createJSONResponse(200, { msgnum: 100, msg: "OK", comment, lastUpdate: "2025-09-06 08:20:44" });
    }

    #getComments(callLog: CallLog): RouteResponse {
        const { commanderName } = this.#readJSONBody<{ commanderName: string }>(callLog);
        if (commanderName !== "MockUser") {
            return this.#createJSONResponse(200, { msgnum: 203, msg: "Commander name/API Key not found" });
        }
        const comments = Array.from(this.#comments.entries()).map(([ system, comment ]) => ({ system, comment, lastUpdate: "2016-08-09 19:58:08" }));
        return this.#createJSONResponse(200, {
            msgnum: 100,
            msg: "OK",
            comments
        });
    }

    #getSystemBodies(callLog: CallLog): RouteResponse {
        const { systemName, systemId64, systemId } = this.#readJSONBody<{ systemName: string, systemId64?: number, systemId?: number }>(callLog);
        let result;
        if (systemName === "Colonia") {
            result = colonia;
        } else if (systemName === "24 Comae Berenices") {
            if (systemId === 5410650 || systemId64 === 84054348506) {
                result = berenices1;
            } else {
                result = berenices2;
            }
        } else {
            result = null;
        }
        if (result == null) {
            return this.#createJSONResponse(200, {});
        }
        return this.#createJSONResponse(200, result);
    }

    #getSystemEstimatedValue(callLog: CallLog): RouteResponse {
        const { systemName, systemId64, systemId } = this.#readJSONBody<{ systemName: string, systemId64?: number, systemId?: number }>(callLog);
        let result;
        if (systemName === "Sol") {
            result = {
                id: 27,
                id64: 10477373803,
                name: "Sol",
                url: "https://www.edsm.net/en/system/bodies/id/27/name/Sol",
                estimatedValue: 605867,
                estimatedValueMapped: 2000900,
                valuableBodies: [
                    {
                        bodyId: 7497,
                        bodyName: "Earth",
                        distance: 499,
                        valueMax: 945428
                    },
                    {
                        bodyId: 1828,
                        bodyName: "Mars",
                        distance: 743,
                        valueMax: 822273
                    }
                ]
            };
        } else if (systemName === "24 Comae Berenices") {
            if (systemId === 5410650 || systemId64 === 84054348506) {
                result = {
                    id: 5410650,
                    id64: 84054348506,
                    name: "24 Comae Berenices",
                    url: "https://www.edsm.net/en/system/bodies/id/5410650/name/24+Comae+Berenices",
                    estimatedValue: 46999,
                    estimatedValueMapped: 126209,
                    valuableBodies: []
                };
            } else {
                result = {
                    id: 53494504,
                    id64: 1323435196,
                    name: "24 Comae Berenices",
                    url: "https://www.edsm.net/en/system/bodies/id/53494504/name/24+Comae+Berenices",
                    estimatedValue: 25337,
                    estimatedValueMapped: 76027,
                    valuableBodies: []
                };
            }
        } else {
            result = null;
        }
        if (result == null) {
            return this.#createJSONResponse(200, {});
        }
        return this.#createJSONResponse(200, result);
    }

    #getSystemStations(callLog: CallLog): RouteResponse {
        const { systemName, systemId64, systemId } = this.#readJSONBody<{ systemName: string, systemId64?: number, systemId?: number }>(callLog);
        let result;
        if (systemName === "Shinrarta Dezhra") {
            result = shinrartaDezhraStations;
        } else if (systemName === "24 Comae Berenices") {
            if (systemId === 5410650 || systemId64 === 84054348506) {
                result = {
                    id: 5410650,
                    id64: 84054348506,
                    name: "24 Comae Berenices",
                    url: "https://www.edsm.net/en/system/stations/id/5410650/name/24+Comae+Berenices",
                    stations: []
                };
            } else {
                result = {
                    id: 53494504,
                    id64: 1323435196,
                    name: "24 Comae Berenices",
                    url: "https://www.edsm.net/en/system/stations/id/53494504/name/24+Comae+Berenices",
                    stations: []
                };
            }
        } else {
            result = null;
        }
        if (result == null) {
            return this.#createJSONResponse(200, {});
        }
        return this.#createJSONResponse(200, result);
    }

    #getSystemStationsMarket(callLog: CallLog): RouteResponse {
        const { systemName, stationName, marketId } = this.#readJSONBody<{ systemName?: string, stationName?: string, marketId?: number }>(callLog);
        let result;
        if ((systemName === "Shinrarta Dezhra" && stationName === "Jameson Memorial") || (marketId == 128666762)) {
            result = jamesonMemorialMarket;
        } else if (marketId != null && marketId < 0) {
            return this.#createJSONResponse(500, {});
        } else {
            result = null;
        }
        if (result == null) {
            return this.#createJSONResponse(200, {});
        }
        return this.#createJSONResponse(200, result);
    }

    #getSystemStationsShipyard(callLog: CallLog): RouteResponse {
        const { systemName, stationName, marketId } = this.#readJSONBody<{ systemName?: string, stationName?: string, marketId?: number }>(callLog);
        let result;
        if ((systemName === "Shinrarta Dezhra" && stationName === "Jameson Memorial") || (marketId == 128666762)) {
            result = jamesonMemorialShipyard;
        } else if (marketId != null && marketId < 0) {
            return this.#createJSONResponse(500, {});
        } else {
            result = null;
        }
        if (result == null) {
            return this.#createJSONResponse(200, {});
        }
        return this.#createJSONResponse(200, result);
    }

    #getSystemStationsOutfitting(callLog: CallLog): RouteResponse {
        const { systemName, stationName, marketId } = this.#readJSONBody<{ systemName?: string, stationName?: string, marketId?: number }>(callLog);
        let result;
        if ((systemName === "Shinrarta Dezhra" && stationName === "Jameson Memorial") || (marketId == 128666762)) {
            result = jamesonMemorialOutfitting;
        } else if (marketId != null && marketId < 0) {
            return this.#createJSONResponse(500, {});
        } else {
            result = null;
        }
        if (result == null) {
            return this.#createJSONResponse(200, {});
        }
        return this.#createJSONResponse(200, result);
    }

    #getSystemFactions(callLog: CallLog): RouteResponse {
        const { systemName, systemId64, systemId, showHistory }
            = this.#readJSONBody<{ systemName: string, systemId64?: number, systemId?: number, showHistory?: number }>(callLog);
        let result;
        if (systemName === "Shinrarta Dezhra" || systemId == 4345 || systemId64 == 3932277478106) {
            result = shinrartaDezhraFactions;
        } else {
            result = null;
        }
        if (result == null) {
            return this.#createJSONResponse(200, {});
        }
        if (showHistory !== 1) {
            result = JSONParse(JSONStringify(result)) as SystemFactions;
            result.factions.forEach(faction => {
                delete faction.activeStatesHistory;
                delete faction.happinessHistory;
                delete faction.influenceHistory;
                delete faction.pendingStatesHistory;
                delete faction.recoveringStatesHistory;
                delete faction.stateHistory;
            });
        }
        return this.#createJSONResponse(200, result);
    }

    #getSystemTraffic(callLog: CallLog): RouteResponse {
        const { systemName, systemId64, systemId } = this.#readJSONBody<{ systemName: string, systemId64?: number, systemId?: number }>(callLog);
        let result;
        if (systemName === "Shinrarta Dezhra" || systemId == 4345 || systemId64 == 3932277478106) {
            result = shinrartaDezhraTraffic;
        } else {
            result = null;
        }
        if (result == null) {
            return this.#createJSONResponse(200, {});
        }
        return this.#createJSONResponse(200, result);
    }

    #getSystemDeaths(callLog: CallLog): RouteResponse {
        const { systemName, systemId64, systemId } = this.#readJSONBody<{ systemName: string, systemId64?: number, systemId?: number }>(callLog);
        let result;
        if (systemName === "Shinrarta Dezhra" || systemId == 4345 || systemId64 == 3932277478106) {
            result = {
                id: 4345,
                id64: 3932277478106,
                name: "Shinrarta Dezhra",
                url: "https://www.edsm.net/en/system/id/4345/name/Shinrarta+Dezhra",
                deaths: {
                    total: 8178,
                    week: 22,
                    day: 1
                }
            };
        } else {
            result = null;
        }
        if (result == null) {
            return this.#createJSONResponse(200, {});
        }
        return this.#createJSONResponse(200, result);
    }

    #getSystem(callLog: CallLog): RouteResponse {
        const { systemName, systemId, systemId64, showCoordinates, showId, showPermit, showInformation, showPrimaryStar }
            = this.#readJSONBody<SystemRequestOptions & { systemName: string }>(callLog);
        let result: null | SystemResponse;
        if (systemName === "Shinrarta Dezhra" || systemId == 4345 || systemId64 == 3932277478106) {
            result = {
                name: "Shinrarta Dezhra",
                id: 4345,
                id64: 3932277478106,
                coords: { x: 55.71875, y: 17.59375, z: 27.15625 },
                coordsLocked: true,
                requirePermit: true,
                permitName: "Founders World",
                information: {
                    allegiance: "Pilots Federation",
                    government: "Democracy",
                    faction: "Pilots' Federation Local Branch",
                    factionState: "None",
                    population: 85287324,
                    security: "High",
                    economy: "High Tech",
                    secondEconomy: "Industrial",
                    reserve: "Common"
                },
                primaryStar: {
                    type: "K (Yellow-Orange) Star",
                    name: "Shinrarta Dezhra",
                    isScoopable: true
                }
            };
        } else {
            result = null;
        }
        if (result == null) {
            return this.#createJSONResponse(200, {});
        }
        if (showCoordinates !== 1) {
            delete result.coords;
            delete result.coordsLocked;
        }
        if (showPermit !== 1) {
            delete result.permitName;
            delete result.requirePermit;
        }
        if (showInformation !== 1) {
            delete result.information;
        }
        if (showPrimaryStar !== 1) {
            delete result.primaryStar;
        }
        if (showId !== 1) {
            delete result.id;
            delete result.id64;
        }
        return this.#createJSONResponse(200, result);
    }
}

function throwError(message: string): never {
    throw new Error(message);
}

export const edsmLiveTest = process.env["EDSM_LIVE_TEST"] != null;
export const edsmAPIKey = edsmLiveTest
    ? process.env["EDSM_API_KEY"] ?? throwError("For EDSM live testing the environment variable EDSM_API_KEY must be set to your own API key")
    : "0123456789abcdef0123456789abcdef01234567";
export const edsmUser = edsmLiveTest
    ? process.env["EDSM_USER"] ?? throwError("For EDSM live testing the environment variable EDSM_USER must be set to your own username with a public profile")
    : "MockUser";
export const edsmMock = new EDSMMock();
