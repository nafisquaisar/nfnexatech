import { siteConfig } from "@/config/site";

type OgType = "blog" | "service" | "project" | "page";

interface OgImageOptions {
  title: string;
  category?: string;
  type?: OgType;
}

/**
 * Builds the URL for the dynamic OG image generator.
 *
 * Usage in generateMetadata:
 *   images: [ogImage({ title: post.title, category: post.category, type: "blog" })]
 *
 * The returned object matches Next.js OG image metadata shape.
 */
export function ogImage({ title, category, type = "page" }: OgImageOptions) {
  const params = new URLSearchParams({ title, type });
  if (category) params.set("category", category);

  const url = `${siteConfig.url}/api/og?${params.toString()}`;

  return {
    url,
    width: 1200,
    height: 630,
    alt: `${title} | ${siteConfig.name}`,
  };
}
