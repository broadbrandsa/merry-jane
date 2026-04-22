import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import {
  influencerTypes,
  influencerBriefRules,
  influencerApproved,
  influencerAvoid,
} from "@/content/proposal";

export function Influencer() {
  return (
    <section id="influencer" className="relative py-24 md:py-32 bg-background">
      <Container>
        <SectionHeading
          number="07"
          kicker="Influencer framework"
          title={
            <>
              When the brand cannot speak,{" "}
              <em className="font-display italic text-moss-deep">trusted voices can.</em>
            </>
          }
          intro="Influencer partnerships are one of the most effective compliant channels available to Merry-Jane. Rather than the brand risking shadow-ban or removal, the right creators carry the message through their personal wellness narratives — with compliance enforced at the brief."
        />

        {/* Four types */}
        <div className="mt-14 md:mt-18 grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/10 border border-ink/10 rounded-sm overflow-hidden">
          {influencerTypes.map((t, i) => (
            <Reveal
              key={t.type}
              delay={i * 80}
              className="bg-background p-8 md:p-10 flex flex-col gap-4"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[0.7rem] tracking-[0.2em] text-moss">{t.n}</span>
                <span className="font-mono text-[0.7rem] tracking-[0.14em] uppercase text-ink/55">
                  Audience · {t.size}
                </span>
              </div>
              <h3
                className="font-display text-[1.5rem] md:text-[1.7rem] text-ink tracking-[-0.015em] leading-[1.1] text-balance"
                style={{ fontWeight: 380 }}
              >
                {t.type}
              </h3>
              <p className="text-[0.975rem] leading-[1.55] text-ink/70 text-pretty">
                {t.why}
              </p>
              <div className="mt-auto flex flex-wrap gap-2 pt-4 border-t border-ink/10">
                {t.platforms.map((p) => (
                  <span
                    key={p}
                    className="inline-flex items-center rounded-full border border-ink/15 px-3 py-1 text-[0.78rem] text-ink/70"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Brief requirements + content do / don't */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <Reveal className="lg:col-span-5">
            <span className="kicker">7.3 · Brief requirements (non-negotiable)</span>
            <h3
              className="mt-3 font-display text-[1.85rem] md:text-[2.05rem] text-ink tracking-[-0.015em] leading-[1.1] text-balance"
              style={{ fontWeight: 380 }}
            >
              Every partnership carries the same rules. No exceptions.
            </h3>
            <ul className="mt-6 flex flex-col divide-y divide-ink/10">
              {influencerBriefRules.map((rule, i) => (
                <li key={i} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                  <span className="font-mono text-[0.7rem] tracking-[0.16em] text-moss pt-1 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[0.975rem] leading-relaxed text-ink/80 text-pretty">
                    {rule}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 self-start">
            <div className="border border-moss/25 bg-moss/[0.06] rounded-sm p-6">
              <div className="flex items-center gap-2">
                <span aria-hidden className="size-2 rounded-full bg-moss-deep" />
                <span className="kicker">Approved territory</span>
              </div>
              <ul className="mt-4 flex flex-col gap-3">
                {influencerApproved.map((a) => (
                  <li
                    key={a}
                    className="text-[0.925rem] text-ink/80 leading-relaxed pl-4 relative"
                  >
                    <span
                      aria-hidden
                      className="absolute left-0 top-[0.55rem] size-[5px] rounded-full bg-moss-deep"
                    />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-rust/25 bg-rust/[0.06] rounded-sm p-6">
              <div className="flex items-center gap-2">
                <span aria-hidden className="size-2 rounded-full bg-rust" />
                <span className="kicker !text-rust">Never</span>
              </div>
              <ul className="mt-4 flex flex-col gap-3">
                {influencerAvoid.map((a) => (
                  <li
                    key={a}
                    className="text-[0.925rem] text-ink/80 leading-relaxed pl-4 relative"
                  >
                    <span
                      aria-hidden
                      className="absolute left-0 top-[0.55rem] size-[5px] rounded-full bg-rust"
                    />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
