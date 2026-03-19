async function onRequestGet(context) {
  const response = await fetch('http://217.160.125.126:12377/players', { headers: { "Authorization": `Bearer da9b81c4-3dec-4678-be81-f47a3b91d9e0` } });
  const players = (await response.json()).players;
  return new Response(JSON.stringify(players), {
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" }
  });
}
