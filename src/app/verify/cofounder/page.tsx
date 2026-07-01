import type { Metadata } from "next";
import { getMemberBySlug } from "@/data/team";
import VerificationCard from "@/components/verify/VerificationCard";
import { notFound } from "next/navigation";

const member = getMemberBySlug("cofounder");

export const metadata: Metadata = {
  title: "Co-Founder Verification | NF Nexa Tech",
  description:
    "Official verification page for Saheb Alam, Co-Founder of NF Nexa Tech. Verify employment status and credentials.",
  robots: { index: false, follow: false },
};

export default function CoFounderVerificationPage() {
  if (!member) return notFound();
  return <VerificationCard member={member} />;
}
