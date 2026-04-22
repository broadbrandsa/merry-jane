import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { marketFacts, legislation } from "@/content/site";

export function MarketContext() {
  return (
    <section
      id="market-context"
      className="relative py-24 md:py-32 bg-background"
    >
      <Container>
        <SectionHeading
          number="01"
          kicker="Market context"
          title={
            <>
              A market quietly{" "}
              <em className="font-display italic text-moss-deep">twenty-three times</em> the size it is today.
            </>
          }
          intro="South Africa's combined CBD and medical cannabis market was worth R470 million in 2024 and is forecast to reach R11 billion by 2028 — subject to full commercialisation. The Cannabis for Private Purposes Act was signed into law on 28 May 2024. The window to build authority before licensing opens is now."
        />

        <Reveal
          delay={80}
          className="mt-14 md:mt-18 grid grid-cols-2 lg:grid-cols-4 border-y border-ink/10 divide-ink/10"
        >
          {marketFacts.map((fact, i) => (
            <div
              key={fact.label}
              className={`px-5 py-8 md:py-10 md:px-8 ${
                i !== 0 ? "border-l border-ink/10" : ""
              }`}
            >
              <div className="font-mono text-[0.65rem] text-ink/45 tracking-[0.18em] uppercase">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div
                className="mt-3 font-display text-[2.6rem] md:text-[3.2rem] lg:text-[3.8rem] text-ink leading-[0.95] tracking-[-0.025em]"
                style={{ fontWeight: 360 }}
              >
                {fact.value}
              </div>
              <div className="mt-3 text-[0.975rem] text-ink/80 leading-snug text-pretty">
                {fact.label}
              </div>
              <div className="mt-1 text-[0.825rem] text-ink/50 leading-snug">
                {fact.context}
              </div>
            </div>
          ))}
        </Reveal>

        <div className="mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          <Reveal className="lg:col-span-7">
            <p
              className="dropcap font-display text-[1.3rem] md:text-[1.45rem] leading-[1.5] text-ink text-pretty"
              style={{ fontWeight: 380 }}
            >
              Merry-Jane occupies a uniquely defensible position — at the intersection of clinical compliance and lifestyle advocacy. No SA competitor fully inhabits both spaces at once. That is the category of one this strategy is designed to consolidate before the regulatory landscape opens in 2027–2028.
            </p>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5">
            <div className="border border-ink/10 rounded-sm bg-cream/60 p-6 md:p-8 h-full flex flex-col gap-5">
              <span className="kicker">Regulatory horizon</span>
              <ul className="flex flex-col divide-y divide-ink/10">
                {[
                  ["CPPA signed", legislation.cppaSigned],
                  ["Policy to Cabinet", legislation.policyBeforeCabinet],
                  ["Overarching Bill", legislation.overarchingBill],
                  ["Commercial framework", legislation.fullFramework],
                ].map(([label, value]) => (
                  <li key={label} className="flex items-baseline justify-between gap-4 py-3 first:pt-0 last:pb-0">
                    <span className="font-mono text-[0.72rem] tracking-[0.14em] uppercase text-ink/55">
                      {label}
                    </span>
                    <span className="text-ink/85 text-right text-[0.95rem] font-display tracking-[-0.005em]">
                      {value}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-[0.85rem] text-ink/55 leading-relaxed">
                All recommendations in this strategy are valid under the <strong className="text-ink/80">April 2026</strong> regulatory environment. Quarterly legal review is built into the plan.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
