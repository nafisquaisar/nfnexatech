import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomePageSections from "@/components/HomePageSections";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Web Development Company in Delhi, India | ${siteConfig.name}`,
  description:
    "NF Nexa Tech is a web development company based in Mahipalpur, New Delhi. We build business websites, web apps, Android & Flutter apps, and SaaS products for startups and businesses across Delhi and India.",
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