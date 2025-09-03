/*
 * Copyright (C) 2020 Klaus Reimer <k@ailis.de>
 * See LICENSE.md for licensing information.
 */

import { createReadStream } from "node:fs";
import { stat, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { createInterface } from "node:readline";
import { createGunzip } from "node:zlib";

/*
 * This tool creates smaller subsets from the full EDSM data dump files located in the data directory and places
 * them in the src/test/data directory to be used in unit tests and to be submitted into Git.
 */

function createSignature(value: unknown, mapProperties: string[] = [], ignoreProperties: string[] = [],
        isMap = false): unknown {
    if (value == null) {
        return null;
    }

    if (value instanceof Array) {
        const signatures: unknown[] = [];
        const seenSignatures = new Set<string>();
        for (const subValue of value) {
            const signature = createSignature(subValue, mapProperties, ignoreProperties);
            const signatureHash = JSON.stringify(signature);
            if (!seenSignatures.has(signatureHash)) {
                seenSignatures.add(signatureHash);
                signatures.push(signature);
            }
        }
        return signatures;
    }

    if (value instanceof Object) {
        const signature: Record<string, unknown> = {};
        for (const [ key, subValue ] of Object.entries(value)) {
            if (!ignoreProperties.includes(key)) {
                signature[key] = createSignature(subValue, mapProperties, ignoreProperties,
                    mapProperties.includes(key));
            }
        }
        if (isMap) {
            const unique = new Set(Object.values(signature).map(s => JSON.stringify(s))).size;
            if (unique === 1) {
                const sig: Record<string, unknown> = {};
                sig[typeof Object.keys(signature)[0]] = Object.values(signature)[0];
                return sig;
            }
        }
        return signature;
    }

    return typeof value;
}

async function shortenJSON(file: string, mapProperties: string[] = [], ignoreProperties: string[] = []): Promise<void> {
    const inFile = join(baseDir, "data", file + ".gz");
    const outFile = join(baseDir, "src/test/data", file);

    const inTime = (await stat(inFile)).mtime;
    const outTime = (await stat(outFile)).mtime;
    if (outTime > inTime) {
        console.log("Already up-to-date");
        return;
    }

    const reader = createInterface({ input: createReadStream(inFile).pipe(createGunzip()) });
    const seenSignatures = new Set<string>();
    const retainedLines: string[] = [];
    for await (let line of reader) {
        if (line !== "[" && line !== "]") {
            if (line.endsWith(",")) {
                line = line.substring(0, line.length - 1);
            }
            const json = JSON.parse(line) as Object;
            const signature = JSON.stringify(createSignature(json, mapProperties, ignoreProperties));
            if (!seenSignatures.has(signature)) {
                seenSignatures.add(signature);
                retainedLines.push(line);
            }
        }
    }
    await writeFile(outFile, "[\n" + retainedLines.join(",\n") + "\n]\n");
}

const baseDir = join(__dirname, "../..");

void (async () => {
    console.log("Creating src/test/data/systemsPopulated.json");
    await shortenJSON("systemsPopulated.json", [ "materials", "atmosphereComposition", "solidComposition" ],
         [ "bodies", "stations", "activeStates", "recoveringStates", "pendingStates" ]);

    console.log("Creating src/test/data/systemsWithoutCoordinates.json");
    await shortenJSON("systemsWithoutCoordinates.json");

    console.log("Creating src/test/data/systemsWithCoordinates.json");
    await shortenJSON("systemsWithCoordinates.json");

    console.log("Creating src/test/data/bodies.json");
    await shortenJSON("bodies7days.json", [ "materials", "atmosphereComposition", "solidComposition" ]);

    console.log("Creating src/test/data/stations.json");
    await shortenJSON("stations.json");

    console.log("Creating src/test/data/powerPlay.json");
    await shortenJSON("powerPlay.json");

    console.log("Creating src/test/data/codex.json");
    await shortenJSON("codex.json");

    console.log("Finished");
})().catch(console.error);
