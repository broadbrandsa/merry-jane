import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";
import {
  websiteScorecard,
  keyWebsiteIssues,
  websiteRecommendations,
  socialSnapshot,
  maturityScorecard,
} from "@/content/audit";

const sevMap = {
  ok: { label: "Healthy", color: "text-moss-deep" },
  warn: { label: "Needs review", color: "text-ochre" },
  crit: { label: "Critical", color: "text-rust" },
} as const;

const statusMap = {
  active: { label: "Active", color: "text-moss-deep" },
  private: { label: "Private", color: "text-ink/60" },
  gap: { label: "Gap", color: "text-rust" },
} as const;

export function Audit() {
  return (
    <section id="audit" className="relative py-24 md:py-32 bg-cream/70">
      <Container>
        <SectionHeading
          number="02"
          kicker="Digital audit"
          title={
            <>
              Seventeen thousand patients trust it.{" "}
              <em className="font-display italic text-moss-deep">Google, presently, does not know.</em>
            </>
          }
          intro="A fixable problem — but the first one. merry-jane.com is a JavaScript-rendered SPA that a search crawler cannot read, with no education hub, no structured data, and no public landing pages. It bleeds organic visibility every week it stays this way."
        />

        <div className="mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Scorecard */}
          <Reveal className="lg:col-span-7">
            <div className="border border-ink/10 bg-background rounded-sm">
              <div className="flex items-center justify-between px-6 py-4 border-b border-ink/10">
                <span className="kicker">2.1 · Website scorecard</span>
                <span className="font-mono text-[0.65rem] text-ink/40 tracking-widest">
                  merry-jane.com
                </span>
              </div>
              <ul className="divide-y divide-ink/10">
                {websiteScorecard.map((row) => {
                  const sev = sevMap[row.severity as keyof typeof sevMap];
                  return (
                    <li
                      key={row.dimension}
                      className="grid grid-cols-12 items-baseline gap-4 px-6 py-4"
                    >
                      <span className="col-span-12 sm:col-span-5 font-display text-[1.05rem] text-ink tracking-[-0.005em]">
                        {row.dimension}
                      </span>
                      <span className="col-span-8 sm:col-span-5 text-[0.925rem] text-ink/70">
                        {row.status}
                      </span>
                      <span
                        className={cn(
                          "col-span-4 sm:col-span-2 justify-self-end font-mono text-[0.7rem] tracking-[0.14em] uppercase",
                          sev.color,
                        )}
                      >
                        {sev.label}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>

          {/* Key issues + recommendations */}
          <Reveal delay={100} className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <span className="kicker">2.1 · Key issues</span>
              <ul className="mt-5 flex flex-col gap-4">
                {keyWebsiteIssues.map((issue, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="font-mono text-[0.7rem] tracking-[0.16em] text-rust pt-1 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[0.975rem] leading-relaxed text-ink/80 text-pretty">
                      {issue}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="kicker">2.1 · Recommendations</span>
              <ul className="mt-5 flex flex-col gap-4">
                {websiteRecommendations.map((rec, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="font-mono text-[0.7rem] tracking-[0.16em] text-moss-deep pt-1 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[0.975rem] leading-relaxed text-ink/80 text-pretty">
                      {rec}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Social snapshot */}
        <Reveal className="mt-24 md:mt-28">
          <div className="flex items-end justify-between gap-6 mb-8">
            <div>
              <span className="kicker">2.2 · Social media</span>
              <h3
                className="mt-3 font-display text-[1.85rem] md:text-[2.15rem] text-ink tracking-[-0.015em]"
                style={{ fontWeight: 380 }}
              >
                Strong signal on two channels. Silence on the other five.
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 border border-ink/10 rounded-sm overflow-hidden">
            {socialSnapshot.map((s) => {
              const status = statusMap[s.status as keyof typeof statusMap];
              return (
                <div
                  key={s.platform}
                  className="bg-background p-6 flex flex-col gap-3 min-h-[10rem]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-[1.075rem] text-ink tracking-[-0.005em]">
                      {s.platform}
                    </span>
                    <span
                      className={cn(
                        "font-mono text-[0.65rem] tracking-[0.14em] uppercase",
                        status.color,
                      )}
                    >
                      {status.label}
                    </span>
                  </div>
                  <span className="font-mono text-[0.75rem] text-ink/50 tracking-[0.06em]">
                    {s.handle}
                  </span>
                  <p className="text-[0.9rem] text-ink/70 leading-relaxed text-pretty">
                    {s.note}
                  </p>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Maturity scorecard */}
        <Reveal className="mt-24 md:mt-28">
          <div className="flex items-end justify-between gap-6 mb-8">
            <div>
              <span className="kicker">2.4 · Overall digital maturity</span>
              <h3
                className="mt-3 font-display text-[1.85rem] md:text-[2.15rem] text-ink tracking-[-0.015em]"
                style={{ fontWeight: 380 }}
              >
                Brand and community are strong. Everything that makes them findable is not.
              </h3>
            </div>
          </div>
          <div className="flex flex-col divide-y divide-ink/10 border-y border-ink/10">
            {maturityScorecard.map((row) => (
              <MaturityRow key={row.dimension} {...row} />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function MaturityRow({
  dimension,
  score,
  priority,
}: {
  dimension: string;
  score: number;
  priority: string;
}) {
  const pct = score === 0 ? 6 : (score / 10) * 100;
  const tone =
    score === 0
      ? "bg-ink/15"
      : score >= 7
        ? "bg-moss"
        : score >= 4
          ? "bg-ochre"
          : "bg-rust";

  return (
    <div className="grid grid-cols-12 items-center gap-4 py-5">
      <span className="col-span-12 sm:col-span-4 font-display text-[1.075rem] text-ink tracking-[-0.005em]">
        {dimension}
      </span>
      <div className="col-span-10 sm:col-span-5 flex items-center gap-4">
        <div className="relative h-[3px] w-full bg-ink/10">
          <div
            className={cn("absolute inset-y-0 left-0", tone)}
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>
      <span className="col-span-2 sm:col-span-1 text-right font-mono text-[0.85rem] text-ink/80">
        {score === 0 ? "n/a" : `${score}/10`}
      </span>
      <span className="col-span-12 sm:col-span-2 sm:text-right text-[0.85rem] text-ink/55 leading-snug">
        {priority}
      </span>
    </div>
  );
}
