import type { Metadata } from "next";
import { Roadmap } from "@/components/sections/roadmap";
import { KPIs } from "@/components/sections/kpis";
import { ChannelSummary } from "@/components/sections/channel-summary";
import { NextSteps } from "@/components/sections/next-steps";
import { ComplianceNotice } from "@/components/sections/compliance-notice";
import { PrevNext } from "@/components/prev-next";

export const metadata: Metadata = {
  title: "III · The Execution",
  description:
    "The 90-day roadmap, KPIs, integrated channel summary, next steps, and regulatory compliance notice for Merry-Jane.",
};

export default function ExecutionPage() {
  return (
    <>
      <div aria-hidden className="pt-24 md:pt-28" />
      <Roadmap />
      <KPIs />
      <ChannelSummary />
      <NextSteps />
      <ComplianceNotice />
      <PrevNext current="/execution" />
    </>
  );
}
