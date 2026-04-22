import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { siteMeta, legislation } from "@/content/site";

export function ComplianceNotice() {
  return (
    <section id="compliance" className="relative py-20 md:py-24 bg-background border-t border-ink/10">
      <Container>
        <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-3">
            <span className="kicker">14 · Regulatory notice</span>
            <p className="mt-3 font-mono text-[0.78rem] text-ink/55 tracking-[0.1em] uppercase">
              Mandatory before activation
            </p>
          </div>
          <div className="lg:col-span-9 flex flex-col gap-6">
            <h2
              className="font-display text-[1.75rem] md:text-[2.15rem] text-ink tracking-[-0.015em] leading-[1.08] text-balance"
              style={{ fontWeight: 380 }}
            >
              All marketing activities must be reviewed by a SAHPRA-aware legal advisor before any campaign, influencer brief, or paid creative goes live.
            </h2>
            <p className="text-[1.0125rem] leading-[1.6] text-ink/70 text-pretty">
              Relevant legislation: the Cannabis for Private Purposes Act 2024, SAHPRA regulations, the Medicines and Related Substances Act, the Consumer Protection Act, the POPIA, and the ASA Code. The regulatory environment is actively evolving — the Hemp and Cannabis Commercialisation Policy is expected before Cabinet in {legislation.policyBeforeCabinet.toLowerCase()}, and the Overarching Cannabis Bill is targeted for Parliament by {legislation.overarchingBill.toLowerCase()}.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-ink/10 pt-6">
              <div>
                <span className="font-mono text-[0.68rem] tracking-[0.16em] text-ink/45 uppercase">
                  Review cadence
                </span>
                <p className="mt-2 text-[0.95rem] text-ink/80 leading-relaxed">
                  Strategy is reviewed against regulation quarterly, in perpetuity.
                </p>
              </div>
              <div>
                <span className="font-mono text-[0.68rem] tracking-[0.16em] text-ink/45 uppercase">
                  Source snapshot
                </span>
                <p className="mt-2 text-[0.95rem] text-ink/80 leading-relaxed">
                  SAHPRA · DTIC · Euromonitor · BizCommunity · GrowerIQ · public competitor research.
                </p>
              </div>
              <div>
                <span className="font-mono text-[0.68rem] tracking-[0.16em] text-ink/45 uppercase">
                  Prepared
                </span>
                <p className="mt-2 text-[0.95rem] text-ink/80 leading-relaxed">
                  {siteMeta.preparedDate} · for {siteMeta.preparedFor} · by {siteMeta.preparedBy} · confidential.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
