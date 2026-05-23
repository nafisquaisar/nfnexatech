import { getAllPosts } from "@/lib/blog";
import { siteConfig } from "@/config/site";

/**
 * RSS 2.0 feed for the NF Nexa Tech blog.
 * Served at /rss.xml — submit this URL to Google Search Console
 * and any RSS reader / feed aggregator.
 */
export async function GET() {
  const posts = getAllPosts();

  const items = posts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${siteConfig.url}/blog/${post.slug}</link>
      <guid isPermaLink="true">${siteConfig.url}/blog/${post.slug}</guid>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author>${siteConfig.contact.email} (${post.author.name})</author>
      <category>${post.category}</category>
      ${post.tags.map((t) => `<category>${t}</category>`).join("\n      ")}
    </item>`
    )
    .join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${siteConfig.name} Blog</title>
    <link>${siteConfig.url}/blog</link>
    <description>Expert insights on web development, mobile apps, Flutter, SaaS, and software engineering from the ${siteConfig.name} team.</description>
    <language>en-in</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteConfig.url}/rss.xml" rel="self" type="application/rss+xml"/>
    <managingEditor>${siteConfig.contact.email} (${siteConfig.founder})</managingEditor>
    <webMaster>${siteConfig.contact.email} (${siteConfig.founder})</webMaster>
    <ttl>1440</ttl>
    <image>
      <url>${siteConfig.url}/logo.png</url>
      <title>${siteConfig.name} Blog</title>
      <link>${siteConfig.url}/blog</link>
    </image>
${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
