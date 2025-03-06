export async function onRequest(context) {
  const url = new URL(context.request.url);
  const code = url.searchParams.get("code");
  const data = url.searchParams.get("state");
  if (!code || !data) {
    return new Response("Error! Something must've gone wrong while attempting to verify you, please contact one of our developers if this problem still persists.");
  }
  return Response.redirect("https://devensmp.my.to");
}
