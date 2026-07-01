import type { Metadata } from "next";
import { getMemberBySlug } from "@/data/team";
import VerificationCard from "@/components/verify/VerificationCard";
import { notFound } from "next/navigation";

const member = getMemberBySlug("business-development-executive");

export const metadata: Metadata = {
  title: "Business Development Executive Verification | NF Nexa Tech",
  description:
    "Official verification page for Anzar, Business Development Executive of NF Nexa Tech. Verify employment status and credentials.",
  robots: { index: false, follow: false },
};

export default function BDEVerificationPage() {
  if (!member) return notFound();
  return <VerificationCard member={member} />;
}
