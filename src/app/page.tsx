import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { MarketContext } from "@/components/sections/market-context";
import { Audit } from "@/components/sections/audit";
import { Regulatory } from "@/components/sections/regulatory";
import { Competitors } from "@/components/sections/competitors";
import { PrevNext } from "@/components/prev-next";

export const metadata: Metadata = {
  title: "I · The Situation",
  description:
    "Market, digital audit, regulatory framework, and competitive landscape for Merry-Jane, South Africa's premier cannabis collective.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <MarketContext />
      <Audit />
      <Regulatory />
      <Competitors />
      <PrevNext current="/" />
    </>
  );
}
