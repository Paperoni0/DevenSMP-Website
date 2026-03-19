async function onRequestGet(context) {
  const response = await fetch(context.env.API_URL, { headers: { "Authorization": `Bearer ${context.env.API_KEY}` } });
  const players = (await response.json()).players;
  return new Response(JSON.stringify(players), {
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" }
  });
}
