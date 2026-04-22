"use client";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";
import { useState } from "react";
import {
  organicPlatforms,
  goldenRules,
  shadowBanPlaybook,
} from "@/content/proposal";

export function Organic() {
  const [active, setActive] = useState(0);
  const current = organicPlatforms[active];

  return (
    <section id="organic" className="relative py-24 md:py-32 bg-background">
      <Container>
        <SectionHeading
          number="09"
          kicker="Organic social"
          title={
            <>
              Platform-native rules.{" "}
              <em className="font-display italic text-moss-deep">One playbook that keeps accounts alive.</em>
            </>
          }
          intro="Organic social is the brand-building engine — more valuable than paid in this regulatory environment when executed correctly. Each platform has its own tolerance, its own algorithmic risk, and its own shadow-ban triggers. This is what each allows, and what it punishes."
        />

        {/* Platform switcher */}
        <div className="mt-14 md:mt-18">
          <div className="flex flex-wrap gap-2 border-b border-ink/10 pb-1">
            {organicPlatforms.map((p, i) => (
              <button
                key={p.platform}
                type="button"
                onClick={() => setActive(i)}
                className={cn(
                  "relative px-4 py-3 text-[0.9rem] transition-colors duration-150",
                  active === i ? "text-ink" : "text-ink/55 hover:text-ink/80",
                )}
                aria-pressed={active === i}
              >
                <span className="flex items-baseline gap-2">
                  <span className="font-mono text-[0.65rem] text-moss/70 tracking-[0.16em]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display tracking-[-0.005em]" style={{ fontWeight: 380 }}>
                    {p.platform}
                  </span>
                </span>
                {active === i && (
                  <span
                    aria-hidden
                    className="absolute left-0 right-0 -bottom-px h-[2px] bg-moss-deep"
                  />
                )}
              </button>
            ))}
          </div>

          <Reveal key={active} className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card tone="ok" label="What's allowed" body={current.allowed} />
                <Card tone="bad" label="What's prohibited" body={current.prohibited} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card tone="warn" label="Shadow-ban risk" body={current.shadowBan} />
                <Card tone="ink" label="Recommended cadence" body={current.cadence} />
              </div>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="border border-ink/10 bg-cream/70 rounded-sm p-6">
                <span className="kicker">Content mix</span>
                <p className="mt-3 text-[0.975rem] leading-[1.6] text-ink/80 text-pretty">
                  {current.mix}
                </p>
              </div>
              <div className="border border-moss-deep/30 bg-moss-deep/[0.05] rounded-sm p-6">
                <span className="kicker">Key tactic</span>
                <p className="mt-3 font-display text-[1.15rem] leading-[1.4] text-ink tracking-[-0.005em] text-balance">
                  {current.tactic}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Golden rules + shadow-ban playbook */}
        <div className="mt-24 md:mt-28 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <Reveal className="lg:col-span-5">
            <span className="kicker">9.2 · Five golden rules</span>
            <h3
              className="mt-3 font-display text-[1.85rem] md:text-[2.1rem] text-ink tracking-[-0.015em] leading-[1.1] text-balance"
              style={{ fontWeight: 380 }}
            >
              Violate any of these and the account dies.
            </h3>
            <ul className="mt-6 flex flex-col divide-y divide-ink/10">
              {goldenRules.map((r) => (
                <li key={r.n} className="flex gap-5 py-5 first:pt-0 last:pb-0">
                  <span className="font-display text-[1.5rem] leading-none text-moss-deep shrink-0">
                    {r.n}
                  </span>
                  <p className="text-[0.975rem] leading-relaxed text-ink/80 text-pretty">
                    {r.rule}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7">
            <span className="kicker">9.3 · Shadow-ban prevention playbook</span>
            <h3
              className="mt-3 font-display text-[1.85rem] md:text-[2.1rem] text-ink tracking-[-0.015em] leading-[1.1] text-balance"
              style={{ fontWeight: 380 }}
            >
              Tactics the algorithm rewards — hashtag hygiene, timing, and a backup account.
            </h3>
            <ol className="mt-6 flex flex-col gap-4">
              {shadowBanPlaybook.map((tip, i) => (
                <li
                  key={i}
                  className="flex gap-5 border-l border-moss-deep/40 pl-5 py-1"
                >
                  <span className="font-mono text-[0.72rem] tracking-[0.18em] text-moss/80 pt-1 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[0.95rem] leading-relaxed text-ink/80 text-pretty">
                    {tip}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

type CardTone = "ok" | "bad" | "warn" | "ink";

function Card({
  tone,
  label,
  body,
}: {
  tone: CardTone;
  label: string;
  body: string;
}) {
  const map = {
    ok: {
      dot: "bg-moss-deep",
      text: "text-moss-deep",
    },
    bad: {
      dot: "bg-rust",
      text: "text-rust",
    },
    warn: {
      dot: "bg-ochre",
      text: "text-ochre",
    },
    ink: {
      dot: "bg-ink/60",
      text: "text-ink/55",
    },
  };
  return (
    <div className="border border-ink/10 bg-background rounded-sm p-6 h-full flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <span aria-hidden className={cn("size-2 rounded-full", map[tone].dot)} />
        <span
          className={cn(
            "font-mono text-[0.68rem] tracking-[0.18em] uppercase",
            map[tone].text,
          )}
        >
          {label}
        </span>
      </div>
      <p className="text-[0.95rem] leading-relaxed text-ink/80 text-pretty">{body}</p>
    </div>
  );
}
