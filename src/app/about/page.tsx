import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { siteMeta } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: `${siteMeta.preparedBy} — preparation, process, and contact for the Merry-Jane proposal.`,
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="pt-40 md:pt-48 pb-24 md:pb-32 relative overflow-hidden grain hero-glow">
          <Container>
            <Reveal className="flex items-center gap-3">
              <span className="kicker">About · DSG</span>
              <span aria-hidden className="h-px w-16 bg-moss/40" />
              <span className="font-mono text-[0.7rem] tracking-[0.22em] uppercase text-ink/55">
                The preparation
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1
                className="mt-8 display-1 text-ink text-balance"
                style={{ fontWeight: 340 }}
              >
                This is a strategy.{" "}
                <em className="display-wonk italic text-moss-deep">Not an opinion.</em>
              </h1>
            </Reveal>

            <Reveal delay={160} className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-7">
                <p className="text-[1.15rem] md:text-[1.225rem] leading-[1.55] text-ink/75 text-pretty max-w-2xl">
                  This proposal was prepared by{" "}
                  <strong className="text-ink">{siteMeta.preparedBy}</strong> — a small, senior
                  practice that writes digital strategy for regulated, reputation-sensitive
                  businesses. We built this deck because Merry-Jane asked for a compliant growth
                  plan under CPPA 2024, SAHPRA, and POPIA — not a generic creative pitch. Every
                  recommendation is traceable to a specific restriction or a specific opportunity.
                </p>
              </div>
              <aside className="lg:col-span-5 border border-ink/10 rounded-sm bg-cream/60 p-6 md:p-8 flex flex-col gap-4">
                <span className="kicker">Prepared</span>
                <Row label="For" value={siteMeta.preparedFor} />
                <Row label="By" value={siteMeta.preparedBy} />
                <Row label="Date" value={siteMeta.preparedDate} />
                <Row label="Region" value="Republic of South Africa" />
                <Row label="Contact" value={siteMeta.contactEmail} />
                <Row label="Status" value="v1 · internal review" />
              </aside>
            </Reveal>

            <Reveal delay={240} className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  label: "What we won't do",
                  body: "Guarantee rankings, promise paid reach on blocked platforms, or recommend activation ahead of legal sign-off.",
                },
                {
                  label: "What we will do",
                  body: "Execute the 90-day plan, instrument measurement from day one, and schedule quarterly regulatory reviews with your legal advisor.",
                },
                {
                  label: "How we work",
                  body: "Small, senior teams. Written briefs. Compliance by default. Weekly written reporting against the scoreboard.",
                },
              ].map((b) => (
                <div
                  key={b.label}
                  className="border border-ink/10 bg-background rounded-sm p-6 flex flex-col gap-3"
                >
                  <span className="kicker">{b.label}</span>
                  <p className="text-[0.975rem] text-ink/80 leading-relaxed text-pretty">
                    {b.body}
                  </p>
                </div>
              ))}
            </Reveal>

            <Reveal delay={320} className="mt-20 flex flex-col md:flex-row gap-4">
              <Link
                href="/"
                className="inline-flex items-center justify-between gap-4 rounded-full bg-ink text-bone pl-6 pr-2 py-2 min-w-[14rem] transition-colors duration-200 hover:bg-moss-deep group"
              >
                <span className="text-[0.925rem]">Return to the proposal</span>
                <span className="flex size-9 items-center justify-center rounded-full bg-bone text-ink transition-transform duration-200 group-hover:-translate-x-0.5">
                  ←
                </span>
              </Link>
              <a
                href={`mailto:${siteMeta.contactEmail}`}
                className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-[0.925rem] text-ink/80 hover:border-ink/60 hover:text-ink transition-colors duration-200"
              >
                Email DSG · {siteMeta.contactEmail}
              </a>
            </Reveal>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-t border-ink/10 pt-3 first:border-t-0 first:pt-0">
      <span className="font-mono text-[0.7rem] text-ink/45 tracking-[0.14em] uppercase">
        {label}
      </span>
      <span className="text-ink/85 text-right text-[0.925rem]">{value}</span>
    </div>
  );
}
