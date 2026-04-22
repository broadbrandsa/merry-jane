"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/container";
import { pages, siteMeta } from "@/content/site";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-[padding,backdrop-filter,background-color] duration-300",
        scrolled
          ? "py-3 bg-background/80 backdrop-blur-md border-b border-ink/5"
          : "py-5 bg-transparent",
      )}
    >
      <Container className="flex items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            aria-label="Merry-Jane — return home"
            className="group inline-flex items-center"
          >
            <Image
              src="/logos/mj-logo.png"
              alt="Merry-Jane"
              width={1280}
              height={1672}
              priority
              className="h-11 w-auto object-contain transition-opacity duration-150 group-hover:opacity-80"
            />
          </Link>
          <span aria-hidden className="h-8 w-px bg-ink/15" />
          <Image
            src="/logos/broadbrand.png"
            alt="Broadbrand"
            width={12840}
            height={3210}
            className="h-7 w-auto"
          />
        </div>

        <nav
          aria-label="Pages"
          className="hidden lg:flex items-center gap-1 text-[0.82rem] tracking-wide"
        >
          {pages.map((page) => {
            const active = isActive(page.href);
            return (
              <Link
                key={page.href}
                href={page.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative px-4 py-2 transition-colors duration-150 flex items-center gap-2",
                  active ? "text-ink" : "text-ink/65 hover:text-ink",
                )}
              >
                <span
                  className={cn(
                    "font-mono text-[0.65rem] tracking-[0.2em]",
                    active ? "text-moss-deep" : "text-moss/70",
                  )}
                >
                  {page.kicker}
                </span>
                <span>{page.label}</span>
                {active && (
                  <span
                    aria-hidden
                    className="absolute left-4 right-4 -bottom-px h-[2px] bg-moss-deep"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <span className="font-mono text-[0.6875rem] tracking-[0.2em] uppercase text-ink/45">
            SA · {siteMeta.preparedDate}
          </span>
          <a
            href={`mailto:${siteMeta.contactEmail}`}
            className="inline-flex items-center gap-2 rounded-full bg-ink text-bone px-4 py-2 text-[0.78rem] hover:bg-moss-deep transition-colors duration-150"
          >
            Speak with Broadbrand
            <span aria-hidden className="text-base leading-none">→</span>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center rounded-full border border-ink/15 bg-background/80 p-2.5 text-ink hover:bg-ink hover:text-bone transition-colors"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </Container>

      {/* Mobile drawer */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 top-[56px] bg-background/97 backdrop-blur-xl transition-opacity",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        <Container className="flex flex-col gap-1 py-8">
          <span className="font-mono text-[0.68rem] tracking-[0.2em] uppercase text-ink/45 pb-3">
            SA · {siteMeta.preparedDate}
          </span>
          {pages.map((page) => {
            const active = isActive(page.href);
            return (
              <Link
                key={page.href}
                href={page.href}
                onClick={() => setOpen(false)}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex items-center justify-between border-b border-ink/10 py-5 transition-colors",
                  active ? "text-moss-deep" : "text-ink/90 hover:text-moss-deep",
                )}
              >
                <span className="flex items-center gap-4">
                  <span
                    className={cn(
                      "font-mono text-[0.72rem] tracking-[0.22em]",
                      active ? "text-moss-deep" : "text-moss/80",
                    )}
                  >
                    {page.kicker}
                  </span>
                  <span className="flex flex-col">
                    <span className="font-display text-2xl leading-tight">
                      {page.label}
                    </span>
                    <span className="text-[0.8rem] text-ink/55 mt-1">
                      {page.blurb}
                    </span>
                  </span>
                </span>
                <span aria-hidden className="text-ink/30">
                  →
                </span>
              </Link>
            );
          })}
          <div className="mt-8 flex items-center gap-3 pt-6 border-t border-ink/10">
            <span className="font-mono text-[0.65rem] tracking-[0.18em] uppercase text-ink/45">
              Prepared by
            </span>
            <Image
              src="/logos/broadbrand.png"
              alt="Broadbrand"
              width={12840}
              height={3210}
              className="h-4 w-auto opacity-80"
            />
          </div>
          <a
            href={`mailto:${siteMeta.contactEmail}`}
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-ink text-bone px-5 py-3 text-sm"
          >
            Speak with Broadbrand <span aria-hidden>→</span>
          </a>
        </Container>
      </div>
    </header>
  );
}
