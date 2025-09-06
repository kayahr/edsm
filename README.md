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
import { getSystemShipyard } from "@kayahr/edsm";

const shipyard = await getSystemShipyard("Shinrarta Dezhra", "Jameson Memorial");
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
* [getSystemMarket]
* [getSystemShipyard]


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
* [system-stations-market.schema.json](https://kayahr.github.io/edsm/schemas/system-stations-market.schema.json)
* [system-stations-shipyard.schema.json](https://kayahr.github.io/edsm/schemas/system-stations-shipyard.schema.json)

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
[getSystemMarket]: https://kayahr.github.io/edsm/functions/getSystemMarket.html
[getSystemShipyard]: https://kayahr.github.io/edsm/functions/getSystemShipyard.html
