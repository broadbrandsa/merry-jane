import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { regulatoryMatrix } from "@/content/audit";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Regulatory() {
  return (
    <section
      id="regulatory"
      className="relative py-24 md:py-32 bg-moss-deep text-bone overflow-hidden grain grain-dark"
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-70"
        style={{
          background:
            "radial-gradient(55% 70% at 15% 15%, color-mix(in oklch, var(--moss) 35%, transparent), transparent 60%), radial-gradient(45% 55% at 90% 90%, color-mix(in oklch, var(--ochre) 12%, transparent), transparent 60%)",
        }}
      />

      <Container className="relative">
        <SectionHeading
          number="03"
          kicker="Regulatory reality"
          tone="dark"
          title={
            <>
              Five frameworks sit between Merry-Jane and its audience.{" "}
              <em className="font-display italic text-ochre">Knowing them is the strategy.</em>
            </>
          }
          intro="Cannabis advertising in South Africa operates under a multi-layered regulatory environment. The table below distinguishes — for each framework — what is explicitly restricted from what is permitted. Every activation in this strategy begins here."
        />

        <Reveal delay={80} className="mt-14 md:mt-18">
          <Accordion multiple className="flex flex-col divide-y divide-bone/10 border-y border-bone/10">
            {regulatoryMatrix.map((row, i) => (
              <AccordionItem
                key={row.regulation}
                value={row.regulation}
                className="border-b-0"
              >
                <AccordionTrigger className="py-6 px-0 hover:no-underline group">
                  <div className="flex flex-1 items-baseline gap-6">
                    <span className="font-mono text-[0.7rem] text-moss-fog/80 tracking-[0.2em]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="font-display text-[1.35rem] md:text-[1.55rem] text-bone tracking-[-0.01em] text-left"
                      style={{ fontWeight: 380 }}
                    >
                      {row.regulation}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pl-0 md:pl-14">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span aria-hidden className="size-2 rounded-full bg-rust" />
                        <span className="font-mono text-[0.7rem] tracking-[0.18em] uppercase text-rust/90">
                          Restricted
                        </span>
                      </div>
                      <p className="text-[0.975rem] leading-relaxed text-bone/80 text-pretty">
                        {row.restricts}
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span aria-hidden className="size-2 rounded-full bg-moss-fog" />
                        <span className="font-mono text-[0.7rem] tracking-[0.18em] uppercase text-moss-fog">
                          Permitted
                        </span>
                      </div>
                      <p className="text-[0.975rem] leading-relaxed text-bone/80 text-pretty">
                        {row.permits}
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        <Reveal delay={180} className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              label: "CBD Schedule 0 (≤20mg/day)",
              copy: "Over-the-counter. Can carry general wellness claims — but not specific therapeutic claims.",
            },
            {
              label: "Section 21 (THC)",
              copy: "Prescription medicine. The legal access pathway. The process is advertisable; specific products and prices are not.",
            },
            {
              label: "Shadow-ban reality",
              copy: "Meta and Instagram algorithmically hide posts using 'cannabis', 'weed', 'THC', 'dagga'. Coded language is mandatory.",
            },
          ].map((box) => (
            <div
              key={box.label}
              className="border border-bone/15 bg-bone/[0.04] rounded-sm p-6 backdrop-blur-[2px]"
            >
              <span className="kicker !text-moss-fog">{box.label}</span>
              <p className="mt-3 text-[0.975rem] leading-relaxed text-bone/80 text-pretty">
                {box.copy}
              </p>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
