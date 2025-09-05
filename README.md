EDSM
====

This library provides typescript types, JSON schemas and utility functions for the Elite Dangerous Star Map ([EDSM]) API. It is primarily intended for Node.js and Electron applications to read EDSM data files and work with the EDSM REST API but it also works in a web browser.

Communication with the REST API is done with the standard [fetch] command which works out-of-the-box in a browser, modern Node.js or in Electron.

Usage
-----

First install the library as a dependency in your project:

```
npm install @kayahr/edsm
```

Then download the data dumps from EDSM and use this library to read them. This is not needed if you just want to access EDSM's REST API.

Working with the JSON dumps
---------------------------

The nightly dumps of EDSM are always stored as gzipped JSON files where each dataset is stored in a single line. So when ignoring the array characters in the first and last line and ignoring the comma at the end this is just like a JSONL file. This library handles these files like this so the content of these large files can easily be streamed.

The utility functions provided by this library to read the data files expect an standard readable stream as input. Here is an example which parses all station objects from the `stations.json.gz` file and outputs them to console:

```typescript
import { createReadStream} from "node:fs";
import { createGunzip } from "node:zlib";
import { parseStationsJSON } from "@kayahr/edsm";

const stream = createReadStream("stations.json.gz").pipe(createGunzip());

for await (const station of parseStationsJSON(stream)) {
    console.log(station);
}

```

There are also `parseSystemsJSON`, `parsePowerPlayJSON`, `parseCodexJSON` and `parseBodiesJSON` functions for the other data files.

EDSM REST API
-------------

Asynchronous functions are provided for all EDSM API calls. Received HTTP and EDSM errors are automatically converted to exceptions (Promise rejects).

### **[Status](https://www.edsm.net/en/api-status-v1)**

#### **getEliteServerStatus()**

Requests the Elite server status from EDSM.

```typescript
const status = await edsm.getEliteServerStatus();
```

### **[Commander](https://www.edsm.net/en/api-commander-v1)**

#### **getCommanderRanks(commanderName, apiKey?)**

Requests the ranks of the given commander. This only works when the commander has a public profile or when the API key of the commander is specified as second parameter.

```typescript
const ranks = await edsm.getCommanderRanks("Username");
```

#### **getCommanderCredits(commanderName, apiKey, period?)**

Requests the credits statistics of the given commander. API key of the commander is required for this request. The optional third parameter defines the period for the returned statistics. It can be `7DAY`, `1MONTH`, `3MONTH` or `6MONTH`.

```typescript
const credits = await edsm.getCommanderCredits("Username", "SecretAPIKey");
```

#### **getCommanderInventory(commanderName, apiKey, type?)**

Requests the inventory of the given commander. The API key of the commander is required for this request. The optional third parameter defines the type of the requested inventory. It defaults to `materials` and can also be `data` or `cargo`.

```typescript
const materials = await edsm.getCommanderInventory("Username", "SecretAPIKey", "materials");
const data = await edsm.getCommanderInventory("Username", "SecretAPIKey", "data");
const cargo = await edsm.getCommanderInventory("Username", "SecretAPIKey", "cargo");
```

### **[Logs](https://www.edsm.net/en/api-logs-v1)**

#### **getFlightLogs(commanderName, apiKey, options?)**

Requests the flight logs of the given commander. API key is required. The returned flight logs can be optionally filtered by the third options parameter which is an object with the following optional keys:

Option        | Type   | Description
--------------|--------|-------------------------------------
systemName    | string | Filters flight logs by system name.
startDateTime | string | Filters for flight logs after this date & time (inclusive). Must be specified in UTC in the format  YYYY-MM-DD HH:MM:SS.
endDateTime   | string | Filters for flight logs before this date & time (inclusive). Must be specified in UTC in the format YYYY-MM-DD HH:MM:SS.
showId        | number | Set to 1 if you want to get the EDSM internal id. Useful to handle duplicated name systems of the game.

```typescript
const flightLogs = await getFlightLogs("Username", "SecretAPIKey", {
    systemName: "Shinrarta Dezhra",
    startDateTime: "2019-01-01 00:00:00",
    endDateTime: "2020-12-31 23:59:59",
    showId: 1
});
```

Other utility functions
-----------------------

### isPlanet(body)

Type-guard function which returns true when body is a planet, false when not.

### isStar(body)

Type-guard function which returns true when body is a star, false when not.

### toUTCString(date)

Converts a JavaScript Date object to a UTC date string in the format required by various EDSM API functions. Converting in the other direction can simply be done with `date = new Date(utcDateString)`.

JSON Schemas
------------

* [body.schema.json](https://kayahr.github.io/edsm/schemas/body.schema.json)
* [codex.schema.json](https://kayahr.github.io/edsm/schemas/codex.schema.json)
* [commander-credits.schema.json](https://kayahr.github.io/edsm/schemas/commander-credits.schema.json)
* [commander-inventory.schema.json](https://kayahr.github.io/edsm/schemas/commander-inventory.schema.json)
* [commander-position.schema.json](https://kayahr.github.io/edsm/schemas/commander-position.schema.json)
* [commander-ranks.schema.json](https://kayahr.github.io/edsm/schemas/commander-ranks.schema.json)
* [elite-server-status.schema.json](https://kayahr.github.io/edsm/schemas/elite-server-status.schema.json)
* [flight-logs.schema.json](https://kayahr.github.io/edsm/schemas/flight-logs.schema.json)
* [powerplay.schema.json](https://kayahr.github.io/edsm/schemas/powerplay.schema.json)
* [station.schema.json](https://kayahr.github.io/edsm/schemas/station.schema.json)
* [system-bodies.schema.json](https://kayahr.github.io/edsm/schemas/system-bodies.schema.json)
* [system-estimated-value.schema.json](https://kayahr.github.io/edsm/schemas/system-estimated-value.schema.json)
* [system.schema.json](https://kayahr.github.io/edsm/schemas/system.schema.json)
* [system-stations.schema.json](https://kayahr.github.io/edsm/schemas/system-stations.schema.json)

[EDSM]: https://www.edsm.net/
[fetch]: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
