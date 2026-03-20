export async function onRequestGet(context) {
    const response = await fetch(`${context.env.API_URL}/players`, { headers: { "Authorization": `Bearer ${context.env.API_KEY}` } });
    if (!response.ok) {
        return new Response('Failed to fetch players', { status: 502 });
    }
    const data = await response.json();
    return new Response(JSON.stringify(data.players), {
        headers: { "Content-Type": "application/json", "Cache-Control": "no-store", "Access-Control-Allow-Origin": "https://devensmp.us.to" }
    });
}
