Building test data
==================

1. Run `./update.sh` to download current dumps from EDSM.
2. Run `node lib/test/data/build/build.js` to identify structural unique entries in the original JSON dumps and update the actual test data. This takes a long time.
3. Run unit tests and fix problems.
4. Commit.
