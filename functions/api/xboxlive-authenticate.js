export async function onRequest(context) {
  const url = new URL(context.request.url);
  const code = url.searchParams.get("code");
  const discord = url.searchParams.get("state");
  if (!code || !discord) {
    return new Response("Error! Something must've gone wrong while attempting to verify you, please contact one of our developers if this problem still persists.");
  }
  const timestamp = Date.now().toString();
  const body = JSON.stringify({ code, discord });
  const key = new TextEncoder().encode(context.env.APISECRET);
  const data = new TextEncoder().encode(timestamp + body);
  const signatureBuffer = await crypto.subtle.sign({ name: "HMAC", hash: "SHA-256" }, await crypto.subtle.importKey("raw", key, { name: "HMAC", hash: "SHA-256" }, false, ["sign"]), data);
  const signature = Array.from(new Uint8Array(signatureBuffer)).map((b) => b.toString(16).padStart(2, "0")).join("");
  const response = await fetch(`http://${context.env.APIDOMAIN}:${context.env.APIPORT}/xbox-auth`, {
    method: "POST",
    headers: {
      "Authorization": `HMAC ${signature}`,
      "X-Timestamp": timestamp,
      "Content-Type": "application/json"
    },
    body
  });
  if (!response.ok) {
    switch (response.status) {
      case 400:
        return;
      case 403:
        return;
      case 500:
        return;
      case 409:
        return;
      case 403:
        return;
      default:
        return;
    }
  }
  return Response.redirect("https://discord.com/channels/1217371163345424404/1339580236341182476");
}
