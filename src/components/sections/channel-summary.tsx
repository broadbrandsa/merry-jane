import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";
import { integratedChannels } from "@/content/proposal";

function statusColor(value: string) {
  const v = value.toLowerCase();
  if (v.startsWith("yes")) return "text-moss-deep";
  if (v === "no") return "text-rust";
  if (v.startsWith("limited")) return "text-ochre";
  if (v === "n/a") return "text-ink/45";
  if (v === "blocked") return "text-rust";
  return "text-ink/70";
}

function priorityColor(value: string) {
  const v = value.toLowerCase();
  if (v === "critical") return "text-rust";
  if (v.startsWith("high")) return "text-ochre";
  if (v.startsWith("medium")) return "text-moss-deep";
  if (v === "blocked") return "text-ink/40";
  return "text-ink/70";
}

export function ChannelSummary() {
  return (
    <section id="channel-summary" className="relative py-24 md:py-32 bg-cream/70">
      <Container>
        <SectionHeading
          number="12"
          kicker="Integrated summary"
          title={
            <>
              Every channel. Every verdict.{" "}
              <em className="font-display italic text-moss-deep">One page.</em>
            </>
          }
          intro="A single reference table — paid availability, organic safety, priority, and the primary use case for each channel. Print this, stick it above a desk, and the next ten creative decisions resolve themselves."
        />

        <Reveal className="mt-14 md:mt-18 border border-ink/10 bg-background rounded-sm overflow-hidden">
          <div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-ink/10 bg-moss-deep text-bone font-mono text-[0.675rem] tracking-[0.16em] uppercase">
            <span className="col-span-12 md:col-span-3">Channel</span>
            <span className="hidden md:block md:col-span-2">Paid?</span>
            <span className="hidden md:block md:col-span-2">Organic?</span>
            <span className="hidden md:block md:col-span-2">Priority</span>
            <span className="hidden md:block md:col-span-3">Primary use</span>
          </div>
          <ul className="divide-y divide-ink/10">
            {integratedChannels.map((c, i) => (
              <li
                key={c.channel}
                className={cn(
                  "grid grid-cols-12 gap-4 items-baseline px-6 py-4",
                  i % 2 === 0 ? "bg-background" : "bg-cream/40",
                )}
              >
                <span className="col-span-12 md:col-span-3 font-display text-[1.05rem] text-ink tracking-[-0.005em]">
                  {c.channel}
                </span>
                <span
                  className={cn(
                    "col-span-6 md:col-span-2 font-mono text-[0.8rem] tracking-[0.08em]",
                    statusColor(c.paid),
                  )}
                >
                  {c.paid}
                </span>
                <span
                  className={cn(
                    "col-span-6 md:col-span-2 font-mono text-[0.8rem] tracking-[0.08em]",
                    statusColor(c.organic),
                  )}
                >
                  {c.organic}
                </span>
                <span
                  className={cn(
                    "col-span-6 md:col-span-2 font-mono text-[0.8rem] tracking-[0.1em] uppercase",
                    priorityColor(c.priority),
                  )}
                >
                  {c.priority}
                </span>
                <span className="col-span-12 md:col-span-3 text-[0.9rem] text-ink/70 leading-snug">
                  {c.use}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal
          delay={120}
          className="mt-10 text-[0.825rem] text-ink/55 leading-relaxed max-w-2xl"
        >
          * Organic safe with compliant content strategy and shadow-ban prevention in place.{" "}
          Programmatic DSPs subject to SA publisher inventory availability.
        </Reveal>
      </Container>
    </section>
  );
}
