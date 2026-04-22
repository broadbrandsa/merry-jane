import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";
import { competitors, seoGaps } from "@/content/audit";

const threatTone = {
  high: { label: "High", color: "text-rust", ring: "ring-rust/40" },
  "medium-high": { label: "Med-High", color: "text-ochre", ring: "ring-ochre/40" },
  medium: { label: "Medium", color: "text-ochre", ring: "ring-ochre/40" },
  low: { label: "Low", color: "text-ink/50", ring: "ring-ink/15" },
} as const;

export function Competitors() {
  return (
    <section id="competitors" className="relative py-24 md:py-32 bg-background">
      <Container>
        <SectionHeading
          number="04"
          kicker="Competitive landscape"
          title={
            <>
              Seven competitors. Two are a direct threat.{" "}
              <em className="font-display italic text-moss-deep">One is a name-confusion risk.</em>
            </>
          }
          intro="The SA cannabis market is bifurcated — a R470M licit sector sits beside an estimated R36B illicit one. The competitive arena that matters for digital is the licit sector: Section 21 networks, CBD wellness, and directory sites already capturing the organic searches Merry-Jane should own."
        />

        <Reveal className="mt-16 md:mt-20 border-y border-ink/10">
          <div className="grid grid-cols-12 gap-4 py-3 border-b border-ink/10 font-mono text-[0.675rem] tracking-[0.16em] uppercase text-ink/50">
            <span className="col-span-12 md:col-span-3">Competitor</span>
            <span className="hidden md:block md:col-span-3">Business model</span>
            <span className="hidden md:block md:col-span-4">Strength</span>
            <span className="hidden md:block md:col-span-2 text-right">Threat</span>
          </div>

          <ul className="divide-y divide-ink/10">
            {competitors.map((c) => {
              const tone = threatTone[c.threat as keyof typeof threatTone];
              return (
                <li
                  key={c.name}
                  className="grid grid-cols-12 gap-4 py-6 items-baseline hover:bg-cream/60 transition-colors duration-200"
                >
                  <div className="col-span-12 md:col-span-3">
                    <div className="flex items-baseline gap-3">
                      <span
                        className="font-display text-[1.2rem] text-ink tracking-[-0.005em]"
                        style={{ fontWeight: 400 }}
                      >
                        {c.name}
                      </span>
                    </div>
                    <span className="font-mono text-[0.72rem] text-ink/45 tracking-[0.08em]">
                      {c.domain}
                    </span>
                  </div>
                  <div className="col-span-12 md:col-span-3 text-[0.925rem] text-ink/75 leading-snug">
                    {c.model}
                    <div className="mt-1 text-[0.8rem] text-ink/45 leading-snug">
                      {c.platforms}
                    </div>
                  </div>
                  <div className="col-span-10 md:col-span-4 text-[0.925rem] text-ink/75 leading-snug">
                    {c.strength}
                    <div className="mt-1 text-[0.8rem] italic text-ink/50">{c.note}</div>
                  </div>
                  <div className="col-span-2 md:col-span-2 md:text-right">
                    <span
                      className={cn(
                        "inline-flex items-center gap-2 ring-1 ring-inset rounded-full px-3 py-1 font-mono text-[0.68rem] tracking-[0.12em] uppercase",
                        tone.color,
                        tone.ring,
                      )}
                    >
                      <span
                        aria-hidden
                        className={cn("block size-[6px] rounded-full bg-current")}
                      />
                      {tone.label}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={120} className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <span className="kicker">4.3 · Where competitors invest</span>
            <h3
              className="mt-3 font-display text-[1.85rem] md:text-[2.15rem] text-ink tracking-[-0.015em] text-balance"
              style={{ fontWeight: 380 }}
            >
              No one owns organic search. That is the prize.
            </h3>
            <p className="mt-4 text-[1.025rem] leading-[1.6] text-ink/70 text-pretty">
              Merijane and AskMaryJ capture meaningful organic traffic via informational pages.
              Releaf, Cilo Cybin and MG Health use LinkedIn for B2B signal. No competitor is running
              a serious YouTube channel, none have TikTok, and none are running compliant paid cannabis ads on Google or Meta — because they can&apos;t. SEO is the vacuum.
            </p>
          </div>

          <div className="lg:col-span-7">
            <span className="kicker">High-intent keyword vacuum</span>
            <div className="mt-3 border border-ink/10 bg-cream/50 rounded-sm p-6 md:p-8">
              <p className="text-[0.95rem] text-ink/70 leading-relaxed max-w-xl">
                The terms below are generating traffic in SA today — largely captured by directories and content sites, not the brand with the clinical authority.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {seoGaps.map((term) => (
                  <li
                    key={term}
                    className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-background px-4 py-2 text-[0.875rem] text-ink/80"
                  >
                    <span aria-hidden className="text-moss-deep">↗</span>
                    {term}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
