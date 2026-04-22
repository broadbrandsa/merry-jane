import { Container } from "@/components/container";
import { siteMeta, legislation } from "@/content/site";

export function Footer() {
  return (
    <footer className="relative bg-moss-deep text-bone overflow-hidden grain grain-dark">
      <div
        aria-hidden
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 80% at 10% 10%, color-mix(in oklch, var(--moss) 35%, transparent), transparent 60%), radial-gradient(50% 60% at 90% 90%, color-mix(in oklch, var(--ochre) 15%, transparent), transparent 60%)",
        }}
      />

      <Container className="relative py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-14">
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span
              className="font-display text-[3.2rem] leading-none tracking-[-0.03em]"
              style={{ fontWeight: 360 }}
            >
              Merry-Jane
            </span>
            <span className="font-mono text-[0.65rem] tracking-[0.24em] uppercase text-moss-fog/70">
              SA · {siteMeta.preparedDate}
            </span>
          </div>
          <p className="text-bone/75 text-[1.05rem] leading-relaxed max-w-lg text-pretty">
            A trusted guide to legal, safe, and meaningful cannabis — where clinical compliance meets community.
          </p>
          <div className="rule-dark mt-2 max-w-lg" />
          <p className="text-bone/55 text-[0.9rem] leading-relaxed max-w-lg">
            This presentation is a directional strategy prepared for {siteMeta.preparedFor} by {siteMeta.preparedBy}. All activations require SAHPRA-aware legal review before implementation.
          </p>
        </div>

        <div className="lg:col-span-3 flex flex-col gap-4">
          <span className="kicker !text-moss-fog/80">Regulatory horizon</span>
          <dl className="flex flex-col gap-4 text-[0.9rem] leading-snug text-bone/80">
            <Row label="CPPA signed" value={legislation.cppaSigned} />
            <Row label="Policy to Cabinet" value={legislation.policyBeforeCabinet} />
            <Row label="Overarching Bill" value={legislation.overarchingBill} />
            <Row label="Commercial framework" value={legislation.fullFramework} />
          </dl>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-4">
          <span className="kicker !text-moss-fog/80">Contact</span>
          <a
            href={`mailto:${siteMeta.contactEmail}`}
            className="font-display text-[1.85rem] tracking-[-0.015em] leading-tight hover:text-ochre transition-colors duration-200 text-balance"
          >
            {siteMeta.contactEmail} <span aria-hidden>↗</span>
          </a>
          <p className="text-bone/60 text-[0.9rem] leading-relaxed max-w-sm">
            Response within two working days. Written quote, production timeline, and legal-review
            schedule will be provided on request.
          </p>
        </div>
      </Container>

      <Container className="relative border-t border-bone/10 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 font-mono text-[0.7rem] tracking-[0.18em] uppercase text-bone/50">
        <span>
          © {new Date().getFullYear()} · {siteMeta.preparedBy} · Confidential
        </span>
        <span>
          Sources: SAHPRA · DTIC · Euromonitor · BizCommunity · public competitor research
        </span>
      </Container>
    </footer>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-6 border-b border-bone/10 pb-3">
      <dt className="text-bone/55 text-[0.8rem] uppercase tracking-[0.14em] font-mono">
        {label}
      </dt>
      <dd className="text-right text-bone/90">{value}</dd>
    </div>
  );
}
