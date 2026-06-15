import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomePageSections from "@/components/HomePageSections";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Software Development Company India | ${siteConfig.name}`,
  description:
    "NF Nexa Tech is a top-rated software development company in India — specialising in web development, Android & Flutter app development, UI/UX design, and SaaS MVP development for startups and enterprises worldwide.",
  alternates: {
    canonical: siteConfig.url,
  },
};


export default function Home() {
  return (
    <div className="bg-slate-950 text-slate-100">
      <JsonLd />
      <Navbar />
      <HomePageSections />
      <Footer />
    </div>
  );
}