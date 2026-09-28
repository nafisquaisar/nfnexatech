import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { ogImage } from "@/lib/og-image";

const pageOgImage = ogImage({
  title: "Projects & Case Studies",
  category: "Portfolio",
  type: "page",
});

export const metadata: Metadata = {
  title: "Projects & Case Studies | NF Nexa Tech",
  description:
    "A look at websites, mobile apps, business software, and SaaS products built by NF Nexa Tech. Includes work across healthcare, education, home services, billing, and more.",
  alternates: {
    canonical: `${siteConfig.url}/projects`,
  },
  openGraph: {
    title: "Projects & Case Studies | NF Nexa Tech",
    description:
      "Websites, Android apps, Flutter apps, and web platforms built by NF Nexa Tech for businesses and startups across India.",
    url: `${siteConfig.url}/projects`,
    type: "website",
    images: [pageOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects & Case Studies | NF Nexa Tech",
    description:
      "Websites, Android apps, Flutter apps, and web platforms built by NF Nexa Tech for businesses and startups across India.",
    images: [pageOgImage.url],
  },
  robots: { index: true, follow: true },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
