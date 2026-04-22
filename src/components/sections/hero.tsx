import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { siteMeta, pillars } from "@/content/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 md:pt-36 lg:pt-40 pb-24 md:pb-28 grain hero-glow"
    >
      {/* Botanical flourish — decorative SVG */}
      <BotanicalFlourish />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10">
          <div className="lg:col-span-8 flex flex-col gap-10">
            <Reveal className="flex items-center gap-3">
              <span className="kicker">SA · Apr 2026</span>
              <span aria-hidden className="h-px w-16 bg-moss/40" />
              <span className="font-mono text-[0.6875rem] tracking-[0.22em] uppercase text-ink/55">
                Prepared by {siteMeta.preparedBy.split(" — ")[0]}
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1
                className="display-1 text-ink"
                style={{ fontWeight: 340 }}
              >
                A collective of
                <span className="display-wonk italic text-moss-deep"> seventeen thousand.</span>
                <br />
                And a digital footprint
                <span className="text-ink/45"> built for fifty.</span>
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="max-w-2xl text-[1.15rem] md:text-[1.22rem] leading-[1.55] text-ink/75 text-pretty">
                Merry-Jane is South Africa's premier cannabis collective — SAHPRA-compliant, clinician-backed, and culturally rooted. This is a compliant digital strategy to match it: where{" "}
                <em className="font-display italic text-moss-deep">clinical compliance</em> meets{" "}
                <em className="font-display italic text-moss-deep">community</em>, and member growth compounds within the letter of the law.
              </p>
            </Reveal>

            <Reveal delay={260} className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#market-context"
                className="group inline-flex items-center justify-between gap-4 rounded-full bg-ink text-bone pl-6 pr-2 py-2 min-w-[14rem] transition-colors duration-200 hover:bg-moss-deep"
              >
                <span className="text-[0.925rem]">Read the strategy</span>
                <span className="flex size-9 items-center justify-center rounded-full bg-bone text-ink transition-transform duration-200 group-hover:translate-x-0.5">
                  ↓
                </span>
              </a>
              <a
                href="#roadmap"
                className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-[0.925rem] text-ink/80 hover:border-ink/60 hover:text-ink transition-colors duration-200"
              >
                Skip to the 90-day plan
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-6 lg:items-end">
            <Reveal delay={320} className="w-full max-w-sm lg:ml-auto">
              <figure className="border border-ink/12 bg-card/60 backdrop-blur-[2px] rounded-[2px] overflow-hidden">
                <div className="px-6 pt-6 flex items-center justify-between">
                  <span className="kicker">Prospectus</span>
                  <span className="font-mono text-[0.65rem] text-ink/45 tracking-widest">
                    N° 001
                  </span>
                </div>
                <figcaption className="px-6 pt-4">
                  <p
                    className="font-display text-[1.375rem] leading-[1.25] text-ink text-balance"
                    style={{ fontWeight: 380 }}
                  >
                    “A regulated medical pathway. A culturally resonant brand. One collective.”
                  </p>
                </figcaption>
                <div className="px-6 pt-5 pb-6 flex flex-col gap-2">
                  <Row label="Prepared for" value={siteMeta.preparedFor} />
                  <Row label="Contact" value={siteMeta.contactEmail} />
                  <Row label="Region" value="Republic of South Africa" />
                  <Row label="Edition" value="April 2026 · v1" />
                </div>
                <div className="border-t border-ink/10 bg-cream/70 px-6 py-3">
                  <p className="font-mono text-[0.65rem] text-ink/55 tracking-[0.16em] leading-relaxed">
                    Confidential · subject to SAHPRA-aware legal review before activation.
                  </p>
                </div>
              </figure>
            </Reveal>
          </div>
        </div>

        {/* Pillars ribbon */}
        <Reveal
          delay={400}
          className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-3 border-y border-ink/10 divide-y md:divide-y-0 md:divide-x divide-ink/10"
        >
          {pillars.map((p) => (
            <div key={p.id} className="py-8 md:py-10 md:px-8 first:md:pl-0 last:md:pr-0">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[0.7rem] tracking-[0.2em] text-moss/80">
                  {p.n}
                </span>
                <span className="kicker !text-ink/50">{p.label}</span>
              </div>
              <p
                className="mt-4 font-display text-[1.35rem] md:text-[1.5rem] leading-[1.2] text-ink tracking-[-0.01em] text-balance"
                style={{ fontWeight: 380 }}
              >
                {p.title}
              </p>
              <p className="mt-3 text-[0.975rem] text-ink/60 leading-relaxed max-w-sm">
                {p.body}
              </p>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 text-[0.825rem] border-t border-ink/8 first:border-t-0 pt-2 first:pt-0">
      <span className="font-mono text-[0.7rem] text-ink/45 tracking-[0.14em] uppercase">
        {label}
      </span>
      <span className="text-ink/85 text-right">{value}</span>
    </div>
  );
}

function BotanicalFlourish() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1200 800"
      className="absolute -right-24 -bottom-24 w-[960px] max-w-[90%] opacity-[0.09] text-moss-deep"
      fill="none"
    >
      <g stroke="currentColor" strokeWidth="1" strokeLinecap="round">
        <path d="M600 720 C 600 600, 500 480, 430 410" />
        <path d="M600 720 C 600 600, 700 480, 770 410" />
        <path d="M600 720 C 600 580, 530 460, 470 380" />
        <path d="M600 720 C 600 580, 670 460, 730 380" />
        <path d="M600 720 C 600 560, 580 420, 560 320" />
        <path d="M600 720 C 600 560, 620 420, 640 320" />
        {/* leaflets */}
        {[
          [430, 410, -28],
          [470, 380, -22],
          [560, 320, -10],
          [640, 320, 10],
          [730, 380, 22],
          [770, 410, 28],
        ].map(([x, y, r], i) => (
          <g key={i} transform={`translate(${x} ${y}) rotate(${r})`}>
            <path d="M0 0 C -18 -40, -10 -100, 0 -130 C 10 -100, 18 -40, 0 0 Z" strokeWidth="0.9" />
            <line x1="0" y1="-6" x2="0" y2="-124" strokeWidth="0.6" opacity="0.5" />
          </g>
        ))}
        {/* central spike */}
        <path d="M600 720 L 600 230" strokeWidth="1.2" />
        <path d="M600 230 C 575 200, 590 150, 600 110 C 610 150, 625 200, 600 230 Z" strokeWidth="1" />
      </g>
    </svg>
  );
}
