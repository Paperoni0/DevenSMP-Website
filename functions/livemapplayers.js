export async function onRequestGet(context) {
    const apiKey = context.request.headers.get("Authorization");
    if (!apiKey || apiKey !== `Bearer ${context.env.API_KEY}`) {
        return new Response("Unauthorized", { status: 401 });
    }
    const response = await fetch('http://217.160.125.126:12377/players', { headers: { "Authorization": `Bearer da9b81c4-3dec-4678-be81-f47a3b91d9e0` } });
    const players = (await response.json()).players;
    return new Response(JSON.stringify(players), {
        headers: { "Content-Type": "application/json", "Cache-Control": "no-store" }
    });
}

export async function onRequestPost(context) {
    const apiKey = context.request.headers.get("Authorization");
    if (!apiKey || apiKey !== `Bearer ${context.env.API_KEY}`) {
        return new Response("Unauthorized", { status: 401 });
    }
    const request = await context.request.json();
    const online = request.players || [];
    const storage = context.env.LIVEMAPPLAYERS;
    const players = await storage.get(PLAYERS_KEY, { type: "json" }) || {};
    const onlineNames = new Set(online.map(p => p.username));
    await Promise.all(online.map(async (p) => {
        let playerImage = players[p.username]?.image || "";
        if (!playerImage) {
            try {
                const response = await fetch(`https://mcprofile.io/api/v1/bedrock/gamertag/${p.username}`);
                if (response.ok) {
                    const data = await response.json();
                    if (data?.textureid) {
                        playerImage = `https://mc-heads.net/avatar/${data.textureid}/64`;
                    }
                }
            } catch (err) {
                console.error(`Failed to fetch profile for ${p.username}:`, err);
            }
        }
        players[p.username] = { x: p.x, z: p.z, image: playerImage, online: true };
    }));
    for (const username of Object.keys(players)) {
        if (!onlineNames.has(username) && players[username].online !== false) {
            players[username].online = false;
        }
    }
    await storage.put(PLAYERS_KEY, JSON.stringify(players));
    return new Response("Success");
}
