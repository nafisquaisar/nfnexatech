import type { Metadata } from "next";
import { getMemberBySlug } from "@/data/team";
import VerificationCard from "@/components/verify/VerificationCard";
import { notFound } from "next/navigation";

const member = getMemberBySlug("hr-operations-executive");

export const metadata: Metadata = {
  title: "HR & Operations Executive Verification | NF Nexa Tech",
  description:
    "Official verification page for Khushi Mishra, HR & Operations Executive of NF Nexa Tech. Verify employment status and credentials.",
  robots: { index: false, follow: false },
};

export default function HRVerificationPage() {
  if (!member) return notFound();
  return <VerificationCard member={member} />;
}
