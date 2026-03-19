export async function onRequestGet(context) {
    const response = await fetch('http://217.160.125.126:12377/players', { headers: { "Authorization": `Bearer ${context.env.API_KEY}` } });
    const players = (await response.json()).players;
    return new Response(JSON.stringify(players), {
        headers: { "Content-Type": "application/json", "Cache-Control": "no-store" }
    });
}
