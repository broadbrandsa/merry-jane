import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { kpiTargets, influencerKPIs, growthOpportunities } from "@/content/proposal";

export function KPIs() {
  return (
    <section id="kpis" className="relative py-24 md:py-32 bg-background">
      <Container>
        <SectionHeading
          number="11"
          kicker="KPIs & opportunity"
          title={
            <>
              Nine targets that measure the brand&apos;s gravitational pull.{" "}
              <em className="font-display italic text-moss-deep">Plus eight bets that pay out in years, not quarters.</em>
            </>
          }
          intro="KPIs are targets, not forecasts — calibrated once Merry-Jane shares analytics and CRM access. The growth opportunities below sit alongside the 90-day plan: each has its own timeline, its own payoff window, and its own compliance gate."
        />

        <div className="mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Brand KPIs */}
          <Reveal className="lg:col-span-7">
            <span className="kicker">11.1 · Success metrics</span>
            <h3
              className="mt-3 font-display text-[1.85rem] md:text-[2.15rem] text-ink tracking-[-0.015em] leading-[1.1] text-balance"
              style={{ fontWeight: 380 }}
            >
              The scoreboard for the first twelve months.
            </h3>
            <ul className="mt-8 flex flex-col divide-y divide-ink/10 border-y border-ink/10">
              {kpiTargets.map((k, i) => (
                <li
                  key={k.metric}
                  className="grid grid-cols-12 gap-4 items-baseline py-5"
                >
                  <span className="col-span-12 sm:col-span-1 font-mono text-[0.7rem] tracking-[0.16em] text-moss/80 pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="col-span-12 sm:col-span-6 font-display text-[1.05rem] text-ink tracking-[-0.005em]">
                    {k.metric}
                  </span>
                  <span className="col-span-12 sm:col-span-5 text-[0.95rem] text-ink/75 sm:text-right">
                    {k.target}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Influencer KPIs */}
          <Reveal delay={120} className="lg:col-span-5">
            <span className="kicker">11.2 · Influencer KPIs</span>
            <h3
              className="mt-3 font-display text-[1.85rem] md:text-[2.05rem] text-ink tracking-[-0.015em] leading-[1.1] text-balance"
              style={{ fontWeight: 380 }}
            >
              How each partnership is judged.
            </h3>
            <ul className="mt-8 flex flex-col gap-6">
              {influencerKPIs.map((k, i) => (
                <li key={k.metric} className="flex gap-5">
                  <span className="font-display text-[1.5rem] leading-none text-moss-deep shrink-0">
                    0{i + 1}
                  </span>
                  <div>
                    <div className="font-display text-[1.075rem] text-ink tracking-[-0.005em]">
                      {k.metric}
                    </div>
                    <p className="mt-1 text-[0.925rem] leading-relaxed text-ink/70">
                      {k.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Growth opportunities */}
        <Reveal className="mt-24 md:mt-28">
          <div className="flex items-end justify-between gap-6 mb-8">
            <div>
              <span className="kicker">11.3 · Growth opportunities</span>
              <h3
                className="mt-3 font-display text-[2rem] md:text-[2.35rem] text-ink tracking-[-0.02em] leading-[1.05] text-balance"
                style={{ fontWeight: 360 }}
              >
                Eight bets beyond the 90-day window.
              </h3>
            </div>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px border border-ink/10 bg-ink/10 rounded-sm overflow-hidden">
            {growthOpportunities.map((g, i) => (
              <li
                key={g.title}
                className="bg-background p-6 md:p-7 flex flex-col gap-3 min-h-[14rem]"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="font-mono text-[0.7rem] tracking-[0.18em] text-moss/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[0.65rem] tracking-[0.14em] uppercase text-ink/55 text-right">
                    {g.timeline}
                  </span>
                </div>
                <h4
                  className="font-display text-[1.225rem] text-ink tracking-[-0.005em] leading-[1.15] text-balance"
                  style={{ fontWeight: 380 }}
                >
                  {g.title}
                </h4>
                <p className="text-[0.9rem] leading-[1.55] text-ink/70 text-pretty">
                  {g.detail}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
