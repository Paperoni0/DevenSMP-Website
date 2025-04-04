export async function onRequestGet(context) {
  const apiKey = context.request.headers.get("Authorization");
  if (!apiKey || apiKey !== `Bearer ${context.env.API_KEY}`) {
    return new Response("Unauthorized", { status: 401 });
  }
  const { searchParams } = new URL(context.request.url);
  const imageUrl = searchParams.get("url");
  const response = await fetch(imageUrl);
  const buffer = await response.arrayBuffer();
  const base64 = btoa(String.fromCharCode(...new Uint8Array(buffer)));
  const mimeType = response.headers.get("content-type");
  return new Response(`data:${mimeType};base64,${base64}`);
}
