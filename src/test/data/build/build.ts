import { createReadStream } from "node:fs";
import { writeFile } from "node:fs/promises";
import { join } from "node:path";
import { createInterface, type Interface } from "node:readline";
import { createGunzip } from "node:zlib";

import { jsonReviver } from "../../../main/util.js";

const files = [
    "bodies7days.json.gz",
    "codex.json.gz",
    "powerPlay.json.gz",
    "stations.json.gz",
    "systemsPopulated.json.gz",
    "systemsWithCoordinates7days.json.gz",
    "systemsWithCoordinates.json.gz",
    "systemsWithoutCoordinates.json.gz"
];

function createStream(jsonFile: string): NodeJS.ReadableStream {
    let stream: NodeJS.ReadableStream = createReadStream(jsonFile);
    if (jsonFile.endsWith(".gz")) {
        stream = stream.pipe(createGunzip());
    }
    return stream;
}

export function createReader(jsonFile: string): Interface {
    return createInterface({ input: createStream(jsonFile) });
}

export function addSignature(path: string, type: string, seen: Set<string>): boolean {
    const signature = `${path}=${type}`;
    if (seen.has(signature)) {
        return false;
    }
    seen.add(signature);
    return true;
}

export function isUnique(value: unknown, seen: Set<string>, seenKeysSet: Map<string, Set<string>>, optionalKeysSet: Map<string,
        Set<string>>, path = ""): boolean {
    if (value === null) {
        return addSignature(path, "null", seen);
    }
    const typeOf = typeof value;
    if (typeOf === "string" || typeOf === "number" || typeOf === "boolean" || typeOf === "bigint") {
        return addSignature(path, typeOf, seen);
    }
    if (value instanceof Array) {
        path = path + "[]";
        let result = false;
        for (const subValue of value) {
            if (isUnique(subValue, seen, seenKeysSet, optionalKeysSet, path)) {
                result = true;
            }
        }
        return result;
    }
    if (value instanceof Object) {
        let result = false;
        let seenKeys = seenKeysSet.get(path);
        if (seenKeys == null) {
            seenKeys = new Set<string>();
            seenKeysSet.set(path, seenKeys);
        }
        let optionalKeys = optionalKeysSet.get(path);
        if (optionalKeys == null) {
            optionalKeys = new Set<string>();
            optionalKeysSet.set(path, optionalKeys);
        }

        for (const [ key, subValue ] of Object.entries(value)) {
            seenKeys.add(key);
            const subPath = path + "." + key;
            if (isUnique(subValue, seen, seenKeysSet, optionalKeysSet, subPath)) {
                result = true;
            }
        }

        const existingKeys = Object.keys(value);
        for (const key of seenKeys) {
            if (!optionalKeys.has(key) && !existingKeys.includes(key)) {
                optionalKeys.add(key);
                result = true;
            }
        }

        return result;
    }
    throw new Error("Unknown type: " + value);
}

const basedir = join(import.meta.dirname, "../../../../src/test/data/build");
for (const file of files) {
    console.log("Processing", file);
    const sourceFile = join(basedir, file);
    const destFile = join(basedir, "..", file.replace(/\.gz$/, ""));
    const reader = createReader(sourceFile);
    const seen = new Set<string>();
    const seenKeys = new Map<string, Set<string>>();
    const optionalKeys = new Map<string, Set<string>>();
    let numEntries = 0;
    const lines: string[] = [];
    for await (let line of reader) {
        if (line === "[" || line === "]") {
            continue;
        }
        if (line.endsWith(",")) {
            line = line.substring(0, line.length - 1);
        }
        const json = JSON.parse(line, jsonReviver) as object;
        numEntries++;
        if (isUnique(json, seen, seenKeys, optionalKeys)) {
            lines.push(line);
        }
    }
    console.log("Unique entries:", lines.length, "of", numEntries);
    await writeFile(destFile, `[\n${lines.join(",\n")}\n]\n`);
}
