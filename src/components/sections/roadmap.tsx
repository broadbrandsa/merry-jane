import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";
import { roadmap } from "@/content/roadmap";

const priorityTone = {
  Critical: "text-rust ring-rust/30",
  High: "text-ochre ring-ochre/30",
  Medium: "text-moss-deep ring-moss/30",
} as const;

export function Roadmap() {
  return (
    <section id="roadmap" className="relative py-24 md:py-32 bg-cream/70">
      <Container>
        <SectionHeading
          number="10"
          kicker="90-day roadmap"
          title={
            <>
              Thirty days of foundation.{" "}
              <em className="font-display italic text-moss-deep">Sixty of build.</em> Ninety and the first report lands.
            </>
          }
          intro="Every item below is ownable within a cross-functional team of two or three. The plan is deliberately loaded in Phase 1 — fix the crawl, set up consent, ship the Google Business Profiles — because those moves compound every subsequent week."
        />

        <div className="mt-16 md:mt-20 flex flex-col gap-16">
          {roadmap.map((phase, pi) => (
            <Reveal key={phase.phase} className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-4 lg:sticky lg:top-28 self-start flex flex-col gap-4">
                <span className="kicker">{phase.phase}</span>
                <h3
                  className="font-display text-[2.5rem] md:text-[3rem] text-ink tracking-[-0.02em] leading-[0.95] text-balance"
                  style={{ fontWeight: 360 }}
                >
                  {phase.title}
                </h3>
                <div className="flex items-center gap-3">
                  <span aria-hidden className="h-px w-10 bg-moss-deep/40" />
                  <span className="font-mono text-[0.78rem] text-moss-deep tracking-[0.14em] uppercase">
                    {phase.range}
                  </span>
                </div>
                <p className="text-[1.025rem] leading-[1.6] text-ink/70 text-pretty max-w-md">
                  {phase.description}
                </p>
              </div>

              <ol className="lg:col-span-8 flex flex-col border-t border-ink/10">
                {phase.items.map((item, ii) => {
                  const tone =
                    priorityTone[item.priority as keyof typeof priorityTone] ??
                    "text-ink/55 ring-ink/15";
                  return (
                    <li
                      key={ii}
                      className="grid grid-cols-12 items-start gap-4 py-5 border-b border-ink/10"
                    >
                      <span className="col-span-2 md:col-span-1 font-mono text-[0.78rem] tracking-[0.14em] text-ink/40 pt-1">
                        {String(pi + 1)}.{String(ii + 1).padStart(2, "0")}
                      </span>
                      <p className="col-span-10 md:col-span-7 text-[0.975rem] leading-[1.55] text-ink/85 text-pretty">
                        {item.action}
                      </p>
                      <span className="col-span-6 md:col-span-2 text-[0.825rem] text-ink/55 md:text-right">
                        {item.owner}
                      </span>
                      <span className="col-span-6 md:col-span-2 md:text-right">
                        <span
                          className={cn(
                            "inline-flex items-center gap-2 ring-1 ring-inset rounded-full px-3 py-1 font-mono text-[0.65rem] tracking-[0.14em] uppercase",
                            tone,
                          )}
                        >
                          <span aria-hidden className="size-[5px] rounded-full bg-current" />
                          {item.priority}
                        </span>
                      </span>
                    </li>
                  );
                })}
              </ol>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
