export async function onRequest(context) {
  try {
  const url = new URL(context.request.url);
  const code = url.searchParams.get("code");
  const discord = url.searchParams.get("state");
  if (!code) {
    return new Response("Error!");
  }
  const timestamp = Date.now().toString();
  const body = JSON.stringify({ code, discord });
  const key = new TextEncoder().encode(context.env.APISECRET);
  const data = new TextEncoder().encode(timestamp + body);
  const signatureBuffer = await crypto.subtle.sign({ name: "HMAC", hash: "SHA-256" }, await crypto.subtle.importKey("raw", key, { name: "HMAC", hash: "SHA-256" }, false, ["sign"]), data);
  const signature = Array.from(new Uint8Array(signatureBuffer)).map((b) => b.toString(16).padStart(2, "0")).join("");
  const response = await fetch("https://helya.pylex.xyz:9134/xbox-auth", {
    method: "POST",
    headers: {
      "Authorization": `HMAC ${signature}`,
      "X-Timestamp": timestamp,
      "Content-Type": "application/json"
    },
    body
  });
  return new Response("Success!");
  } catch (error) {
    return new Response(error);
  }
}
