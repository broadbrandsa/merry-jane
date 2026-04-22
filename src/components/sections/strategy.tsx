import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";
import { channelStrategy } from "@/content/proposal";

export function Strategy() {
  return (
    <section id="strategy" className="relative py-24 md:py-32 bg-cream/70">
      <Container>
        <SectionHeading
          number="06"
          kicker="Channel strategy"
          title={
            <>
              Seven channels, three priorities.{" "}
              <em className="font-display italic text-moss-deep">SEO compounds. Everything else supports it.</em>
            </>
          }
          intro="SEO is the only channel where Merry-Jane can buy permanent authority — the only channel not restricted, and the only one no SA cannabis brand has conquered. Facebook and WhatsApp retain members. Instagram, YouTube, LinkedIn and email multiply reach. Every move below is organic-first and compliance-safe."
        />

        <div className="mt-16 md:mt-20 flex flex-col">
          {channelStrategy.map((ch, i) => (
            <Reveal
              key={ch.channel}
              delay={i * 40}
              className={cn(
                "group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 py-10 md:py-12 border-t border-ink/10",
                i === channelStrategy.length - 1 && "border-b",
              )}
            >
              <div className="lg:col-span-4 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[0.7rem] tracking-[0.22em] text-moss">
                    {ch.n}
                  </span>
                  <PriorityChip priority={ch.priority} label={ch.priorityLabel} />
                </div>
                <h3
                  className="font-display text-[2rem] md:text-[2.3rem] text-ink tracking-[-0.02em] leading-[1.02] text-balance"
                  style={{ fontWeight: 360 }}
                >
                  {ch.channel}
                </h3>
                <p className="text-[0.975rem] leading-[1.6] text-ink/70 text-pretty">
                  {ch.summary}
                </p>
              </div>
              <ul className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 self-start">
                {ch.moves.map((move, mi) => (
                  <li key={mi} className="flex gap-3 text-[0.95rem] leading-[1.55] text-ink/80">
                    <span
                      aria-hidden
                      className="mt-[0.55rem] h-px w-5 shrink-0 bg-moss-deep/40"
                    />
                    <span className="text-pretty">{move}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function PriorityChip({
  priority,
  label,
}: {
  priority: number;
  label: string;
}) {
  const tone =
    priority === 1
      ? "text-rust ring-rust/30"
      : priority === 2
        ? "text-ochre ring-ochre/30"
        : "text-moss-deep ring-moss/30";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 ring-1 ring-inset rounded-full px-3 py-1 font-mono text-[0.65rem] tracking-[0.14em] uppercase bg-background/60",
        tone,
      )}
    >
      <span aria-hidden className="size-[5px] rounded-full bg-current" />
      P{priority} · {label}
    </span>
  );
}
