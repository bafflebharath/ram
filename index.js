export default {
  async fetch(request, env, ctx) {
    return new Response("Angular app is deployed via static bucket!", {
      headers: { "content-type": "text/plain" },
    });
  },
};
