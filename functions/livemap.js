async function onRequestGet(context) {
  const response = await fetch(context.env.API_URL, { headers: { "Authorization": `Bearer ${context.env.API_KEY}` } });
  const players = (await response.json()).players;
  let playerMarkers = [];
  for (const username of Object.keys(players)) {
    const { x, z, online, image } = players[username];
    playerMarkers.push({ name: username, x, z, online, image });
  }
  return;
}
