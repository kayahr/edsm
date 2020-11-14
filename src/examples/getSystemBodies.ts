import "isomorphic-fetch";

import { getSystemBodies } from "../main/bodies";

void (async () => {
    const bodies = await getSystemBodies("Colonia");
    if (bodies != null) {
        console.log(bodies);
    }
})().catch(e => console.error(e));
