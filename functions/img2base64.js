export async function onRequest(context) {
  const { searchParams } = new URL(context.request.url);
  const imageUrl = searchParams.get("url");
  const response = await fetch(imageUrl);
  const buffer = await response.arrayBuffer();
  const base64 = btoa(String.fromCharCode(...new Uint8Array(buffer)));
  const mimeType = response.headers.get("content-type");
  return new Response(`data:${mimeType};base64,${base64}`);
}
