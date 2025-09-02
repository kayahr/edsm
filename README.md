EDSM
====

This library provides typescript types and utility functions for the Elite Dangerous Star Map ([EDSM]) API. It is primarily intended for Node.js and Electron applications to read EDSM data files and work with the EDSM REST API but it also works in a web browser.

Communication with the REST API is done with the standard [fetch] command which works out-of-the-box in a browser or in Electron. But for Node.js you have to install a polyfill like [isomorphic-fetch].

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

The utility functions provided by this library to read the data files expect an async iterable as input. In Node.js or Electron such an input can be created with just a few lines of code. Here is an example which streams the `stations.json.gz` file into a callback function which simply prints the data to the console::

```typescript
import { createReadStream} from "node:fs";
import { createInterface } from "node:readline";
import { createGunzip} from "node:zlib";
import * as edsm from "@kayahr/edsm";

const stream = createReadStream("data/stations.json.gz").pipe(createGunzip());
const reader = createInterface({ input: stream });

await edsm.streamStationsJSON(reader, station => {
    console.log(station);
});
```

The `streamStationsJSON` function calls the specified callback for each station read from the given JSON file. It returns a promise which is resolved after the last station has been read.

Note that the callback can be asynchronous as well. If it returns a promise then JSON parsing is paused until this promise is resolved.

There are also `streamSystemsJSON`, `streamPowerPlayJSON`, `streamCodexJSON` and `streamBodiesJSON` functions for the other data files.

If you don't want to stream the data and instead you want to read all data as an array, then use `readStationsJSON`, `readSystemsJSON`, `readPowerPlayJSON`, `readCodexJSON` and `readBodiesJSON` which simply asynchronously returns an array with the corresponding data. But expect heavy memory usage when doing this for the larger files.

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

[EDSM]: https://www.edsm.net/
[fetch]: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
[isomorphic-fetch]: https://www.npmjs.com/package/isomorphic-fetch
