export async function onRequest(context) {
  const url = new URL(context.request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  if (!code || !state) {
    return new Response("Error! Something must've gone wrong while attempting to verify you, please contact one of our developers if this problem still persists.");
  }
  const decodedState = JSON.parse(atob(state));
  const data = btoa(JSON.stringify({ code, discord: decodedState.discord, type: decodedState.type }));
  return Response.redirect(`https://devensmp.my.to?data=${data}`);
}
