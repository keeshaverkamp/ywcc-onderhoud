// Cloudflare Pages middleware: elke URL krijgt de onderhoudspagina met HTTP 503.
// Plaats dit bestand als functions/_middleware.js naast index.html.
export async function onRequest(context) {
  const page = await context.env.ASSETS.fetch(new URL("/", context.request.url));
  return new Response(page.body, {
    status: 503,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Retry-After": "86400",
      "Cache-Control": "no-store",
    },
  });
}
