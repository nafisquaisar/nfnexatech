import type { Metadata } from "next";
import { getMemberBySlug } from "@/data/team";
import VerificationCard from "@/components/verify/VerificationCard";
import { notFound } from "next/navigation";

const member = getMemberBySlug("ui-ux-designer");

export const metadata: Metadata = {
  title: "UI/UX Designer Verification | NF Nexa Tech",
  description:
    "Official verification page for Absar Quaisar, UI/UX Designer of NF Nexa Tech. Verify employment status and credentials.",
  robots: { index: false, follow: false },
};

export default function UIUXVerificationPage() {
  if (!member) return notFound();
  return <VerificationCard member={member} />;
}
