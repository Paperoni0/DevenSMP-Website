export async function onRequestGet(context) {
    const apiKey = context.request.headers.get("Authorization");
    if (!apiKey || apiKey !== `Bearer ${context.env.API_KEY}`) {
        return new Response("Unauthorized", { status: 401 });
    }
    const storage = context.env.LIVEMAPPLAYERS;
    const keys = await storage.list();
    let players = {};
    for (const key of keys.keys) {
        const data = await storage.get(key.name, { type: "json" });
        players[key.name] = data;
    }
    return new Response(JSON.stringify(players), { headers: { "Content-Type": "application/json", "Cache-Control": "no-store" } });
}

export async function onRequestPost(context) {
    const apiKey = context.request.headers.get("Authorization");
    if (!apiKey || apiKey !== `Bearer ${context.env.API_KEY}`) {
        return new Response("Unauthorized", { status: 401 });
    }
    const request = await context.request.json();
    const online = request.players || [];
    const storage = context.env.LIVEMAPPLAYERS;
    const keys = await storage.list();
    const onlineNames = new Set(online.map(p => p.username));
    for (const p of online) {
        fetch(`https://mcprofile.io/api/v1/bedrock/gamertag/${p.username}`).then()
        await storage.put(p.username, JSON.stringify({ x: p.x, z: p.z, online: true }));
    }
    for (const key of keys.keys) {
        if (!onlineNames.has(key.name)) {
            const data = await storage.get(key.name, { type: "json" });
            if (data && data.online !== false) {
                data.online = false;
                await storage.put(key.name, JSON.stringify(data));
            }
        }
    }
    return new Response("Success");
}
