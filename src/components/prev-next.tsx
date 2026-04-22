import Link from "next/link";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { pages } from "@/content/site";

type Target = (typeof pages)[number];

function findTargets(currentHref: string): { prev: Target | null; next: Target | null } {
  const index = pages.findIndex((p) => p.href === currentHref);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? pages[index - 1] : null,
    next: index < pages.length - 1 ? pages[index + 1] : null,
  };
}

export function PrevNext({ current }: { current: string }) {
  const { prev, next } = findTargets(current);

  if (!prev && !next) return null;

  return (
    <section
      aria-label="Page navigation"
      className="relative border-t border-ink/10 bg-background py-16 md:py-20"
    >
      <Container>
        <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <div>
            {prev && (
              <Link
                href={prev.href}
                className="group flex flex-col gap-3 border border-ink/10 rounded-sm p-6 md:p-8 bg-background hover:bg-cream/60 transition-colors duration-200"
              >
                <span className="flex items-center gap-3 font-mono text-[0.68rem] tracking-[0.2em] uppercase text-ink/50">
                  <span aria-hidden className="text-moss-deep">←</span>
                  Previous · {prev.kicker}
                </span>
                <span
                  className="font-display text-[1.75rem] md:text-[2rem] text-ink tracking-[-0.015em] leading-[1.05]"
                  style={{ fontWeight: 380 }}
                >
                  {prev.label}
                </span>
                <span className="text-[0.925rem] text-ink/65 leading-relaxed">
                  {prev.blurb}
                </span>
              </Link>
            )}
          </div>
          <div>
            {next && (
              <Link
                href={next.href}
                className="group flex flex-col gap-3 border border-ink/10 rounded-sm p-6 md:p-8 bg-background hover:bg-cream/60 transition-colors duration-200 md:text-right md:items-end"
              >
                <span className="flex items-center gap-3 font-mono text-[0.68rem] tracking-[0.2em] uppercase text-ink/50 md:justify-end w-full">
                  Next · {next.kicker}
                  <span aria-hidden className="text-moss-deep">→</span>
                </span>
                <span
                  className="font-display text-[1.75rem] md:text-[2rem] text-ink tracking-[-0.015em] leading-[1.05]"
                  style={{ fontWeight: 380 }}
                >
                  {next.label}
                </span>
                <span className="text-[0.925rem] text-ink/65 leading-relaxed md:max-w-[28ch]">
                  {next.blurb}
                </span>
              </Link>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
