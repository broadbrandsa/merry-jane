import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

type SectionHeadingProps = {
  kicker?: string;
  number?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  kicker,
  number,
  title,
  intro,
  align = "left",
  tone = "light",
  className,
}: SectionHeadingProps) {
  return (
    <header
      className={cn(
        "flex flex-col gap-5 md:gap-6 max-w-3xl",
        align === "center" && "mx-auto text-center items-center",
        className,
      )}
    >
      {(kicker || number) && (
        <Reveal
          className={cn(
            "flex items-center gap-3",
            tone === "dark" && "text-moss-fog",
          )}
        >
          {number && (
            <span
              className={cn(
                "font-mono text-[0.6875rem] tracking-[0.22em] uppercase",
                tone === "dark" ? "text-moss-fog/80" : "text-moss/90",
              )}
            >
              {number}
            </span>
          )}
          {kicker && (
            <>
              {number && (
                <span
                  aria-hidden
                  className={cn(
                    "h-px w-10",
                    tone === "dark" ? "bg-moss-fog/40" : "bg-moss/40",
                  )}
                />
              )}
              <span
                className={cn(
                  "font-mono text-[0.6875rem] tracking-[0.22em] uppercase",
                  tone === "dark" ? "text-moss-fog" : "text-moss",
                )}
              >
                {kicker}
              </span>
            </>
          )}
        </Reveal>
      )}

      <Reveal delay={80}>
        <h2
          className={cn(
            "font-display tracking-[-0.02em] leading-[1.04] text-balance",
            "text-[2rem] sm:text-[2.6rem] md:text-[3.2rem] lg:text-[3.6rem]",
            tone === "dark" ? "text-bone" : "text-ink",
          )}
          style={{ fontWeight: 360 }}
        >
          {title}
        </h2>
      </Reveal>

      {intro && (
        <Reveal delay={160}>
          <p
            className={cn(
              "text-[1.0625rem] md:text-[1.15rem] leading-[1.6] text-pretty",
              tone === "dark" ? "text-bone/75" : "text-ink/70",
              align === "center" && "mx-auto",
            )}
            style={{ maxWidth: "58ch" }}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </header>
  );
}
