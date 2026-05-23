import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";

export default function Home() {
  return (
    <div className="bg-slate-950 text-slate-100">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}