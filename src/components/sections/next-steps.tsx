import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { nextSteps } from "@/content/proposal";
import { siteMeta } from "@/content/site";

export function NextSteps() {
  const phases = [
    { label: "Week 1–2", title: "Immediate", items: nextSteps.immediate, tone: "rust" as const },
    { label: "Month 1–2", title: "Short term", items: nextSteps.short, tone: "ochre" as const },
    { label: "Month 3–6", title: "Medium term", items: nextSteps.medium, tone: "moss" as const },
  ];

  const toneClass = {
    rust: "text-rust border-rust/30",
    ochre: "text-ochre border-ochre/30",
    moss: "text-moss-deep border-moss/30",
  };

  return (
    <section id="next-steps" className="relative py-24 md:py-32 bg-background">
      <Container>
        <SectionHeading
          number="13"
          kicker="Recommended next steps"
          title={
            <>
              Five moves this week.{" "}
              <em className="font-display italic text-moss-deep">Four in the next month.</em> Four more by June.
            </>
          }
          intro="The list below is sequenced: legal review first, tracking second, content pages third, paid pilots fourth. Nothing here requires new infrastructure — everything is within reach of the current team once the brief is signed off."
        />

        <div className="mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {phases.map((p, pi) => (
            <Reveal key={p.title} delay={pi * 80} className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[0.72rem] tracking-[0.18em] text-ink/50 uppercase">
                  {p.label}
                </span>
                <span aria-hidden className="h-px flex-1 bg-ink/10" />
              </div>
              <h3
                className={`font-display text-[2rem] md:text-[2.35rem] text-ink tracking-[-0.02em] leading-[0.98] ${toneClass[p.tone]}`}
                style={{ fontWeight: 360 }}
              >
                {p.title}
              </h3>
              <ul className="mt-2 flex flex-col gap-4">
                {p.items.map((item, i) => (
                  <li
                    key={i}
                    className={`flex gap-4 pl-5 border-l ${toneClass[p.tone].split(" ")[1]}`}
                  >
                    <span className="font-mono text-[0.72rem] tracking-[0.14em] text-ink/40 pt-1 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[0.95rem] leading-[1.6] text-ink/80 text-pretty">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={240} className="mt-24 md:mt-28">
          <div className="relative overflow-hidden rounded-[2px] border border-ink/10 bg-moss-deep text-bone grain grain-dark">
            <div
              aria-hidden
              className="absolute inset-0 opacity-60 pointer-events-none"
              style={{
                background:
                  "radial-gradient(55% 80% at 10% 20%, color-mix(in oklch, var(--moss) 40%, transparent), transparent 60%), radial-gradient(40% 60% at 90% 90%, color-mix(in oklch, var(--ochre) 18%, transparent), transparent 60%)",
              }}
            />
            <div className="relative p-10 md:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-8">
                <span className="kicker !text-moss-fog">Book a review</span>
                <h3
                  className="mt-4 font-display text-[2.5rem] md:text-[3.4rem] text-bone tracking-[-0.02em] leading-[0.98] text-balance"
                  style={{ fontWeight: 360 }}
                >
                  Walk through this proposal live — with Broadbrand, your legal advisor, and the phase-one owner in the room.
                </h3>
              </div>
              <div className="lg:col-span-4 flex flex-col gap-4">
                <a
                  href={`mailto:${siteMeta.contactEmail}?subject=Merry-Jane%20proposal%20review`}
                  className="group inline-flex items-center justify-between gap-4 rounded-full bg-bone text-ink pl-6 pr-2 py-2 transition-colors duration-200 hover:bg-ochre"
                >
                  <span className="text-[0.925rem]">Email Broadbrand</span>
                  <span className="flex size-9 items-center justify-center rounded-full bg-ink text-bone transition-transform duration-200 group-hover:translate-x-0.5">
                    ↗
                  </span>
                </a>
                <span className="font-mono text-[0.72rem] tracking-[0.16em] text-bone/60 uppercase">
                  {siteMeta.contactEmail}
                </span>
                <span className="text-[0.85rem] text-bone/55 leading-relaxed">
                  Response within two working days. Legal-review schedule provided on request.
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
