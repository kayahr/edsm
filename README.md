EDSM
====

[GitHub] | [NPM] | [API Doc]

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

Here is an example listing the available ships in the shipyard of Jameson Memorial:

```typescript
import { getStationShipyard } from "@kayahr/edsm";

const shipyard = await getStationShipyard("Shinrarta Dezhra", "Jameson Memorial");
for (const ship of shipyard.ships) {
    console.log(ship.id, ship.name);
}
```

Here is a list of all available API functions linked to their API documentation:

* [getEliteServerStatus]
* [getCommanderRanks]
* [getCommanderCredits]
* [getCommanderInventory]
* [getCommanderPosition]
* [getFlightLogs]
* [setSystemComment]
* [getSystemComment]
* [getSystemComments]
* [getSystemBodies]
* [getSystemEstimatedValue]
* [getSystemStations]
* [getSystemFactions]
* [getSystemTraffic]
* [getSystemDeaths]
* [getStationMarket]
* [getStationShipyard]
* [getStationOutfitting]
* [getSystem]
* [getSystems]
* [getSphereSystems]
* [getCubeSystems]


Other utility functions
-----------------------

### isPlanet(body)

Type-guard function which returns true when body is a planet, false when not.

### isStar(body)

Type-guard function which returns true when body is a star, false when not.

### toUTCString(date)

Converts a JavaScript Date object to a UTC date string in the format required by various EDSM API functions. Converting in the other direction can simply be done with `date = new Date(utcDateString)`.


64 bit number handling
----------------------

Some EDSM JSON properties (`id64`, `systemId64`) are 64 bit integers. But the JavaScript `number` type can only handle integers up to 53 bit. So when a number exceeds this range then it is interpreted as a large floating point number which looses precision, which is very bad for IDs. To fix this problem this library uses a special JSON reviver when parsing the journal logs to convert numbers, which are too large for JavaScript, into the `BigInt` type. So the value type of an ID-like property like `id64` for example can either be `number` or `BigInt`, depending on how many bits the number actually needs. The typescript typings use an `ID` type for these properties to express that.

`BigInt` values cannot be serialized. So when you need to serialize the parsed JSON again, then it is recommended to use the [json-with-bigint] library, which automatically handles this and writes the correct 64 bit numbers into the JSON output.


JSON Schemas
------------

### Dumps

* [body.schema.json](https://kayahr.github.io/edsm/schemas/body.schema.json)
* [codex.schema.json](https://kayahr.github.io/edsm/schemas/codex.schema.json)
* [powerplay.schema.json](https://kayahr.github.io/edsm/schemas/powerplay.schema.json)
* [station.schema.json](https://kayahr.github.io/edsm/schemas/station.schema.json)
* [system.schema.json](https://kayahr.github.io/edsm/schemas/system.schema.json)

### API

* [commander-credits-response.schema.json](https://kayahr.github.io/edsm/schemas/commander-credits-response.schema.json)
* [commander-inventory-response.schema.json](https://kayahr.github.io/edsm/schemas/commander-inventory-response.schema.json)
* [commander-position-response.schema.json](https://kayahr.github.io/edsm/schemas/commander-position-response.schema.json)
* [commander-ranks-response.schema.json](https://kayahr.github.io/edsm/schemas/commander-ranks-response.schema.json)
* [elite-server-status-response.schema.json](https://kayahr.github.io/edsm/schemas/elite-server-status-response.schema.json)
* [flight-logs-response.schema.json](https://kayahr.github.io/edsm/schemas/flight-logs-response.schema.json)
* [station-market-response.schema.json](https://kayahr.github.io/edsm/schemas/station-market-response.schema.json)
* [station-outfitting-response.schema.json](https://kayahr.github.io/edsm/schemas/station-outfitting-response.schema.json)
* [station-shipyard-response.schema.json](https://kayahr.github.io/edsm/schemas/station-shipyard-response.schema.json)
* [system-bodies-response.schema.json](https://kayahr.github.io/edsm/schemas/system-bodies-response.schema.json)
* [system-deaths-response.schema.json](https://kayahr.github.io/edsm/schemas/system-deaths-response.schema.json)
* [system-estimated-value-response.schema.json](https://kayahr.github.io/edsm/schemas/system-estimated-value-response.schema.json)
* [system-factions-response.schema.json](https://kayahr.github.io/edsm/schemas/system-factions-response.schema.json)
* [system-response.schema.json](https://kayahr.github.io/edsm/schemas/system-response.schema.json)
* [system-stations-response.schema.json](https://kayahr.github.io/edsm/schemas/system-stations-response.schema.json)
* [system-traffic-response.schema.json](https://kayahr.github.io/edsm/schemas/system-traffic-response.schema.json)

[API Doc]: https://kayahr.github.io/edsm/
[GitHub]: https://github.com/kayahr/edsm
[NPM]: https://www.npmjs.com/package/@kayahr/edsm
[EDSM]: https://www.edsm.net/
[fetch]: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
[json-with-bigint]: https://www.npmjs.com/package/json-with-bigint
[getEliteServerStatus]: https://kayahr.github.io/edsm/functions/getEliteServerStatus.html
[getCommanderRanks]: https://kayahr.github.io/edsm/functions/getCommanderRanks.html
[getCommanderCredits]: https://kayahr.github.io/edsm/functions/getCommanderCredits.html
[getCommanderInventory]: https://kayahr.github.io/edsm/functions/getCommanderInventory.html
[getCommanderPosition]: https://kayahr.github.io/edsm/functions/getCommanderPosition.html
[getFlightLogs]: https://kayahr.github.io/edsm/functions/getFlightLogs.html
[setSystemComment]: https://kayahr.github.io/edsm/functions/setSystemComment.html
[getSystemComment]: https://kayahr.github.io/edsm/functions/getSystemComment.html
[getSystemComments]: https://kayahr.github.io/edsm/functions/getSystemComments.html
[getSystemBodies]: https://kayahr.github.io/edsm/functions/getSystemBodies.html
[getSystemEstimatedValue]: https://kayahr.github.io/edsm/functions/getSystemEstimatedValue.html
[getSystemStations]: https://kayahr.github.io/edsm/functions/getSystemStations.html
[getStationMarket]: https://kayahr.github.io/edsm/functions/getStationMarket.html
[getStationShipyard]: https://kayahr.github.io/edsm/functions/getStationShipyard.html
[getStationOutfitting]: https://kayahr.github.io/edsm/functions/getStationOutfitting.html
[getSystemFactions]: https://kayahr.github.io/edsm/functions/getSystemFactions.html
[getSystemTraffic]: https://kayahr.github.io/edsm/functions/getSystemTraffic.html
[getSystemDeaths]: https://kayahr.github.io/edsm/functions/getSystemDeaths.html
[getSystem]: https://kayahr.github.io/edsm/functions/getSystem.html
[getSystems]: https://kayahr.github.io/edsm/functions/getSystems.html
[getSphereSystems]: https://kayahr.github.io/edsm/functions/getSphereSystems.html
[getCubeSystems]: https://kayahr.github.io/edsm/functions/getCubeSystems.html
[getDiscardEvents]: https://kayahr.github.io/edsm/functions/getDiscardEvents.html
[sendEvents]: https://kayahr.github.io/edsm/functions/sendEvents.html
