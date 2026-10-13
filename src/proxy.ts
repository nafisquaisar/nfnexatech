/**
 * proxy.ts — Next.js 16 Proxy for domain canonicalization
 *
 * PHASE 1: Permanent 301 redirect from nfnexatech.tech → nfnexatech.in
 *
 * WHY PROXY (not vercel.json redirects):
 *   Both domains point to the same Vercel project deployment. A vercel.json
 *   "redirects" rule applies to the entire project and would match .in traffic
 *   too if not carefully guarded. Host-based proxy logic is the correct,
 *   safe, and recommended Next.js 16 approach for this scenario.
 *
 * WHAT IT DOES:
 *   - Reads the incoming Host header
 *   - If the host is nfnexatech.tech (or www.nfnexatech.tech), it constructs
 *     a full redirect URL to nfnexatech.in preserving the pathname and search
 *     query string, and returns HTTP 301 (permanent redirect)
 *   - All other hosts (nfnexatech.in) pass through normally
 *
 * WHY 301 (PERMANENT REDIRECT):
 *   HTTP 301 is the standard permanent redirect. Google treats 301 as a
 *   signal to transfer full PageRank (link equity) from the redirected URL
 *   to the destination. It also tells crawlers to update their URL index
 *   from .tech to .in.
 *
 * REDIRECT EXAMPLES:
 *   https://nfnexatech.tech/                                  → https://nfnexatech.in/
 *   https://nfnexatech.tech/about                             → https://nfnexatech.in/about
 *   https://nfnexatech.tech/services/web-development          → https://nfnexatech.in/services/web-development
 *   https://nfnexatech.tech/blog/example?utm_source=test      → https://nfnexatech.in/blog/example?utm_source=test
 *
 * MATCHER:
 *   Runs on all routes. Static assets (_next/static, images, favicon) are
 *   excluded via the matcher pattern to avoid intercepting Next.js internals.
 */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const TECH_HOSTS = new Set(["nfnexatech.tech", "www.nfnexatech.tech"]);
const PRIMARY_ORIGIN = "https://nfnexatech.in";

// In Next.js 16, the proxy file convention replaces middleware.ts.
// The exported function must be named `proxy` (not `middleware`).
export function proxy(request: NextRequest): NextResponse {
  const host = request.headers.get("host") ?? "";

  if (TECH_HOSTS.has(host)) {
    // Preserve pathname + search query, replace origin
    const destination =
      PRIMARY_ORIGIN + request.nextUrl.pathname + request.nextUrl.search;

    return NextResponse.redirect(destination, {
      status: 301, // Permanent redirect — SEO equity passes to .in
      headers: {
        // Prevent caching of the redirect itself — the canonical is .in
        "Cache-Control": "no-store",
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths EXCEPT:
     *   - _next/static  (Next.js build output — CSS, JS, etc.)
     *   - _next/image   (Next.js image optimization service)
     *   - favicon.ico, favicon.png, logo.png, bg.webp (root static files)
     *   - /api/og       (OG image generation — must remain accessible)
     *
     * The negative lookahead below excludes these from middleware execution
     * to avoid any performance overhead on static asset delivery.
     */
    "/((?!_next/static|_next/image|favicon\\.ico|favicon\\.png|logo\\.png|bg\\.webp).*)",
  ],
};
