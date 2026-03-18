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
    await Promise.all(online.map(async (p) => {
        let playerImage = "";
        try {
            const existing = await storage.get(p.username, { type: "json" });
            if (existing?.image) {
                playerImage = existing.image;
            } else {
                const response = await fetch(`https://mcprofile.io/api/v1/bedrock/gamertag/${p.username}`);
                if (response.ok) {
                    const data = await response.json();
                    if (data?.textureid) {
                        playerImage = `https://mc-heads.net/avatar/${data.textureid}/64`;
                    }
                }
            }
        } catch (err) {
            console.error(`Failed to fetch profile for ${p.username}:`, err);
        }
        await storage.put(p.username, JSON.stringify({ x: p.x, z: p.z, image: playerImage, online: true }));
    }));
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
