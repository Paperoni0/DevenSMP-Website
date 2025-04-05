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
    return new Response(JSON.stringify(players), { headers: { "Content-Type": "application/json" } });
}

export async function onRequestPost(context) {
    const apiKey = context.request.headers.get("Authorization");
    if (!apiKey || apiKey !== `Bearer ${context.env.API_KEY}`) {
        return new Response("Unauthorized", { status: 401 });
    }
    const { username, x, z, online } = await context.request.json();
    const storage = context.env.LIVEMAPPLAYERS;
    if (x && z) {
        await storage.put(username, JSON.stringify({ x, z, online }));
    } else {
        const { x, z } = await storage.get(username, { type: "json" });
        await storage.put(username, JSON.stringify({ x, z, online }));
    }
    return new Response("Success");
}
