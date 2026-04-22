import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";
import { platformPPC, ppcBudget } from "@/content/audit";

const statusTone = {
  blocked: { label: "Blocked", color: "text-rust", ring: "ring-rust/30" },
  open: { label: "Open", color: "text-moss-deep", ring: "ring-moss/35" },
  limited: { label: "Limited", color: "text-ochre", ring: "ring-ochre/35" },
  available: { label: "Available", color: "text-moss-deep", ring: "ring-moss/35" },
  possible: { label: "Possible", color: "text-ochre", ring: "ring-ochre/35" },
} as const;

export function PPC() {
  return (
    <section id="ppc" className="relative py-24 md:py-32 bg-moss-deep text-bone overflow-hidden grain grain-dark">
      <div
        aria-hidden
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          background:
            "radial-gradient(55% 70% at 80% 15%, color-mix(in oklch, var(--moss) 40%, transparent), transparent 60%)",
        }}
      />

      <Container className="relative">
        <SectionHeading
          number="08"
          kicker="Paid digital"
          tone="dark"
          title={
            <>
              Most paid channels are off-limits.{" "}
              <em className="font-display italic text-ochre">Two are wide open — and unused.</em>
            </>
          }
          intro="Google, Meta and TikTok block cannabis advertising globally — including CBD. LinkedIn and X do not, and no SA cannabis brand is running there. Programmatic DSPs (StackAdapt, MediaJel) are viable for geo-targeted display as publisher inventory grows. This section maps every option, status, and starting budget."
        />

        {/* Status grid */}
        <div className="mt-14 md:mt-18 grid grid-cols-1 md:grid-cols-2 gap-px bg-bone/10 border border-bone/10 rounded-sm overflow-hidden">
          {platformPPC.map((p, i) => {
            const tone = statusTone[p.status as keyof typeof statusTone];
            return (
              <Reveal
                key={p.platform}
                delay={i * 40}
                className="bg-moss-deep/60 backdrop-blur-[2px] p-6 md:p-8 flex flex-col gap-4 min-h-[14rem]"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3
                    className="font-display text-[1.225rem] md:text-[1.35rem] text-bone tracking-[-0.01em] leading-[1.15] text-balance"
                    style={{ fontWeight: 380 }}
                  >
                    {p.platform}
                  </h3>
                  <span
                    className={cn(
                      "inline-flex items-center gap-2 ring-1 ring-inset rounded-full px-3 py-1 font-mono text-[0.65rem] tracking-[0.14em] uppercase shrink-0",
                      tone.color,
                      tone.ring,
                      p.status === "blocked" ? "bg-rust/[0.08]" : "bg-bone/[0.04]",
                    )}
                  >
                    <span aria-hidden className="size-[5px] rounded-full bg-current" />
                    {tone.label}
                  </span>
                </div>
                <p className="text-[0.95rem] leading-relaxed text-bone/75 text-pretty">
                  {p.detail}
                </p>
              </Reveal>
            );
          })}
        </div>

        {/* Budget framework */}
        <Reveal delay={100} className="mt-20">
          <div className="flex items-end justify-between gap-6 mb-6">
            <div>
              <span className="kicker !text-moss-fog">8.3 · Recommended starting budget</span>
              <h3
                className="mt-3 font-display text-[1.85rem] md:text-[2.15rem] text-bone tracking-[-0.015em]"
                style={{ fontWeight: 380 }}
              >
                A four-channel pilot, reviewed at 90 days.
              </h3>
            </div>
          </div>

          <div className="border border-bone/15 bg-bone/[0.04] rounded-sm overflow-hidden">
            <div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-bone/10 font-mono text-[0.675rem] tracking-[0.16em] uppercase text-bone/55">
              <span className="col-span-12 md:col-span-4">Channel</span>
              <span className="hidden md:block md:col-span-3">Budget (ZAR)</span>
              <span className="hidden md:block md:col-span-2">Objective</span>
              <span className="hidden md:block md:col-span-3">Outcome</span>
            </div>
            <ul className="divide-y divide-bone/10">
              {ppcBudget.map((row, i) => {
                const isTotal = i === ppcBudget.length - 1;
                return (
                  <li
                    key={row.channel}
                    className={cn(
                      "grid grid-cols-12 gap-4 items-baseline px-6 py-5",
                      isTotal && "bg-bone/[0.06] font-display",
                    )}
                  >
                    <span
                      className={cn(
                        "col-span-12 md:col-span-4",
                        isTotal
                          ? "text-[1.1rem] text-bone"
                          : "font-display text-[1.05rem] text-bone tracking-[-0.005em]",
                      )}
                    >
                      {row.channel}
                    </span>
                    <span
                      className={cn(
                        "col-span-6 md:col-span-3",
                        isTotal ? "text-[1.05rem] text-ochre" : "text-[0.925rem] text-bone/80",
                      )}
                    >
                      {row.budget}
                    </span>
                    <span className="col-span-6 md:col-span-2 text-[0.875rem] text-bone/70">
                      {row.objective}
                    </span>
                    <span className="col-span-12 md:col-span-3 text-[0.875rem] text-bone/65 leading-snug">
                      {row.outcome}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
