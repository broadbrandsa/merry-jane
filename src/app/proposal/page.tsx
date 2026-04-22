import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { Audience } from "@/components/sections/audience";
import { Strategy } from "@/components/sections/strategy";
import { Influencer } from "@/components/sections/influencer";
import { PPC } from "@/components/sections/ppc";
import { Organic } from "@/components/sections/organic";
import { ChannelSummary } from "@/components/sections/channel-summary";
import { Roadmap } from "@/components/sections/roadmap";
import { KPIs } from "@/components/sections/kpis";
import { NextSteps } from "@/components/sections/next-steps";
import { ComplianceNotice } from "@/components/sections/compliance-notice";

export const metadata: Metadata = {
  title: "Influencer, PPC & Social Proposal",
  description:
    "A compliant, strategic approach to influencer marketing, paid digital, and organic social for Merry-Jane.",
};

export default function ProposalPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Audience />
        <Strategy />
        <Influencer />
        <PPC />
        <Organic />
        <ChannelSummary />
        <Roadmap />
        <KPIs />
        <NextSteps />
        <ComplianceNotice />
      </main>
      <Footer />
    </>
  );
}
