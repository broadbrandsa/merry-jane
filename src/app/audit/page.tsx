import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { MarketContext } from "@/components/sections/market-context";
import { Audit } from "@/components/sections/audit";
import { Regulatory } from "@/components/sections/regulatory";
import { Competitors } from "@/components/sections/competitors";
import { ComplianceNotice } from "@/components/sections/compliance-notice";

export const metadata: Metadata = {
  title: "Digital Audit & Marketing Strategy",
  description:
    "Technical SEO, competitive landscape, and regulatory reality for Merry-Jane — South Africa's premier cannabis collective.",
};

export default function AuditPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <MarketContext />
        <Audit />
        <Regulatory />
        <Competitors />
        <ComplianceNotice />
      </main>
      <Footer />
    </>
  );
}
