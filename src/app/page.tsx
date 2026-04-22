import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { MarketContext } from "@/components/sections/market-context";
import { Audit } from "@/components/sections/audit";
import { Regulatory } from "@/components/sections/regulatory";
import { Competitors } from "@/components/sections/competitors";
import { Audience } from "@/components/sections/audience";
import { Strategy } from "@/components/sections/strategy";
import { Influencer } from "@/components/sections/influencer";
import { PPC } from "@/components/sections/ppc";
import { Organic } from "@/components/sections/organic";
import { Roadmap } from "@/components/sections/roadmap";
import { KPIs } from "@/components/sections/kpis";
import { ChannelSummary } from "@/components/sections/channel-summary";
import { NextSteps } from "@/components/sections/next-steps";
import { ComplianceNotice } from "@/components/sections/compliance-notice";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <MarketContext />
        <Audit />
        <Regulatory />
        <Competitors />
        <Audience />
        <Strategy />
        <Influencer />
        <PPC />
        <Organic />
        <Roadmap />
        <KPIs />
        <ChannelSummary />
        <NextSteps />
        <ComplianceNotice />
      </main>
      <Footer />
    </>
  );
}
