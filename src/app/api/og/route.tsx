import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

// 1200×630 is the standard OG size (Twitter/X, LinkedIn, Facebook)
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Dynamic OG Image Generator — /api/og
 *
 * Query params:
 *   title    — main heading (required)
 *   category — pill label, e.g. "Blog · Mobile Development" (optional)
 *   type     — "blog" | "service" | "project" | "page" (optional, controls accent colour)
 *
 * Example:
 *   /api/og?title=Flutter+vs+React+Native&category=Mobile+Development&type=blog
 */
export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;

  const title = searchParams.get("title") ?? "NF Nexa Tech";
  const category = searchParams.get("category") ?? "";
  const type = (searchParams.get("type") ?? "page") as
    | "blog"
    | "service"
    | "project"
    | "page";

  // Accent colours by type
  const accents = {
    blog: { from: "#06b6d4", to: "#8b5cf6", label: "BLOG" },
    service: { from: "#22d3ee", to: "#a855f7", label: "SERVICE" },
    project: { from: "#34d399", to: "#06b6d4", label: "PROJECT" },
    page: { from: "#06b6d4", to: "#8b5cf6", label: "NF NEXA TECH" },
  };

  const accent = accents[type];

  // Truncate title at 72 chars to avoid overflow
  const displayTitle =
    title.length > 72 ? title.slice(0, 69) + "…" : title;

  // Strip emoji from category label so it renders cleanly on all platforms
  const displayCategory = category
    .replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, "")
    .trim();

  // Load Inter Bold from Google Fonts CDN — supported in Vercel Edge runtime
  let fontData: ArrayBuffer | null = null;
  try {
    fontData = await fetch(
      "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYAZJhiJ-Ek-_EeA.woff2"
    ).then((r) => r.arrayBuffer());
  } catch {
    // Graceful fallback — system-ui renders if CDN is unreachable
    fontData = null;
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#020617", // slate-950
          position: "relative",
          fontFamily: "Inter, system-ui, -apple-system, sans-serif",
          overflow: "hidden",
        }}
      >
        {/* ── Background grid ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* ── Radial glow top-left (cyan) ── */}
        <div
          style={{
            position: "absolute",
            top: -160,
            left: -160,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(6,182,212,0.18) 0%, transparent 70%)",
          }}
        />

        {/* ── Radial glow bottom-right (purple) ── */}
        <div
          style={{
            position: "absolute",
            bottom: -120,
            right: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)",
          }}
        />

        {/* ── Border frame ── */}
        <div
          style={{
            position: "absolute",
            inset: 24,
            borderRadius: 20,
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        />

        {/* ── Content ── */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            padding: "52px 64px",
          }}
        >
          {/* Top row — logo wordmark + type badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Wordmark */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              {/* Logo shape — gradient square */}
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  background: `linear-gradient(135deg, ${accent.from}, ${accent.to})`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 18,
                  color: "#fff",
                  fontWeight: 800,
                }}
              >
                N
              </div>
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#f1f5f9",
                  letterSpacing: "-0.01em",
                }}
              >
                NF Nexa Tech
              </div>
            </div>

            {/* Type badge */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "6px 16px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.12em",
                color: "#94a3b8",
              }}
            >
              {accent.label}
            </div>
          </div>

          {/* Centre — category pill + title */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
              maxWidth: 900,
            }}
          >
            {displayCategory && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  width: "fit-content",
                }}
              >
                {/* Gradient dot */}
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${accent.from}, ${accent.to})`,
                  }}
                />
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    color: accent.from,
                    textTransform: "uppercase",
                  }}
                >
                  {displayCategory}
                </div>
              </div>
            )}

            <div
              style={{
                fontSize: displayTitle.length > 50 ? 46 : 54,
                fontWeight: 800,
                color: "#f8fafc",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              {displayTitle}
            </div>
          </div>

          {/* Bottom row — URL + gradient divider */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                fontSize: 13,
                color: "#94a3b8",
                letterSpacing: "0.04em",
              }}
            >
              nfnexatech.com
            </div>

            {/* Gradient line */}
            <div
              style={{
                width: 180,
                height: 3,
                borderRadius: 99,
                background: `linear-gradient(90deg, ${accent.from}, ${accent.to})`,
              }}
            />
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      ...(fontData
        ? {
            fonts: [
              {
                name: "Inter",
                data: fontData,
                weight: 700,
                style: "normal",
              },
            ],
          }
        : {}),
    }
  );
}
