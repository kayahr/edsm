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
import * as fs from "fs";
import * as readline from "readline";
import * as zlib from "zlib";
import * as edsm from "@kayahr/edsm";

const stream = fs.createReadStream("data/stations.json.gz").pipe(zlib.createGunzip());
const reader = readline.createInterface({ input: stream });

await edsm.streamStationsJSON(reader, station => {
    console.log(station);
});
```

The `streamStationsJSON` function calls the specified callback for each station read from the given JSON file. It returns a promise which is resolved after the last station has been read.

Note that the callback can be asynchronous as well. If it returns a promise then JSON parsing is paused until this promise is resolved.

There are also `streamSystemsJSON`, `streamPowerPlayJSON`, `streamCodexJSON` and `streamBodiesJSON` functions for the other data files.

If you don't want to stream the data and instead you want to read all data as an array, then use `readStationsJSON`, `readSystemsJSON`, `readPowerPlayJSON`, `readCodexJSON` and `readBodiesJSON` which simply asynchronously returns an array with the corresponding data. But expect heavy memory usage when doing this for the larger files.

Other utility functions
-----------------------

### isPlanet(body)

Type-guard function which returns true when body is a planet, false when not.

### isStar(body)

Type-guard function which returns true when body is a star, false when not.

[EDSM]: https://www.edsm.net/
[fetch]: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
[isomorphic-fetch]: https://www.npmjs.com/package/isomorphic-fetch
