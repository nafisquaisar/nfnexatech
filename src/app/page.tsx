import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomePageSections from "@/components/HomePageSections";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} — Premium Software Agency`,
  description: siteConfig.description,
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