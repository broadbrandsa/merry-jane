import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { audienceSegments } from "@/content/proposal";

export function Audience() {
  return (
    <section id="audience" className="relative py-24 md:py-32 bg-background">
      <Container>
        <SectionHeading
          number="05"
          kicker="Audience segments"
          title={
            <>
              Four audiences.{" "}
              <em className="font-display italic text-moss-deep">One collective.</em>
            </>
          }
          intro="Merry-Jane speaks to chronically different people — a 58-year-old patient seeking pain relief, a 28-year-old wellness seeker curious about CBD, an advocate in their mid-thirties, a GP deciding whether to make a Section 21 referral. Each needs a different door into the same Collective."
        />

        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/10 border border-ink/10 rounded-sm overflow-hidden">
          {audienceSegments.map((seg, i) => (
            <Reveal
              key={seg.label}
              delay={i * 80}
              className="bg-background p-8 md:p-10 flex flex-col gap-5 min-h-[18rem]"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[0.7rem] tracking-[0.18em] text-moss">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="kicker !text-ink/45">{seg.profile}</span>
              </div>
              <h3
                className="font-display text-[2rem] md:text-[2.4rem] text-ink tracking-[-0.02em] leading-[1.02] text-balance"
                style={{ fontWeight: 360 }}
              >
                {seg.label}
              </h3>
              <p className="text-[1.025rem] leading-[1.55] text-ink/70 text-pretty">
                {seg.need}
              </p>
              <div className="mt-auto flex flex-wrap gap-2 pt-4 border-t border-ink/10">
                {seg.channels.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center rounded-full border border-ink/15 px-3 py-1 text-[0.78rem] text-ink/70"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
