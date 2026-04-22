import type { Metadata } from "next";
import { Audience } from "@/components/sections/audience";
import { Strategy } from "@/components/sections/strategy";
import { Influencer } from "@/components/sections/influencer";
import { PPC } from "@/components/sections/ppc";
import { Organic } from "@/components/sections/organic";
import { PrevNext } from "@/components/prev-next";

export const metadata: Metadata = {
  title: "II · The Strategy",
  description:
    "Audience segments, channel strategy, influencer framework, paid digital, and organic social for Merry-Jane.",
};

export default function StrategyPage() {
  return (
    <>
      <div aria-hidden className="pt-24 md:pt-28" />
      <Audience />
      <Strategy />
      <Influencer />
      <PPC />
      <Organic />
      <PrevNext current="/strategy" />
    </>
  );
}
