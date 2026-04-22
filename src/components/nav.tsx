"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/container";
import { navLinks, siteMeta } from "@/content/site";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
        <Link href="/" aria-label="Merry-Jane — return home" className="flex items-center gap-3">
          <Mark />
          <span className="flex flex-col leading-none">
            <span className="font-display text-[1.15rem] tracking-[-0.01em] text-ink">
              Merry-Jane
            </span>
            <span className="font-mono text-[0.625rem] tracking-[0.22em] uppercase text-moss/80">
              The Collective
            </span>
          </span>
        </Link>

        <nav
          aria-label="Sections"
          className="hidden lg:flex items-center gap-1 text-[0.78rem] tracking-wide"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-ink/70 hover:text-ink transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <span className="font-mono text-[0.6875rem] tracking-[0.2em] uppercase text-ink/55">
            {siteMeta.preparedDate}
          </span>
          <a
            href={`mailto:${siteMeta.contactEmail}`}
            className="inline-flex items-center gap-2 rounded-full bg-ink text-bone px-4 py-2 text-[0.78rem] hover:bg-moss-deep transition-colors duration-150"
          >
            Speak with DSG
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
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-ink/10 py-4 text-lg text-ink/90 hover:text-moss-deep transition-colors"
            >
              <span className="flex items-center gap-4">
                <span className="font-mono text-[0.7rem] text-moss/80 tracking-[0.2em]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-2xl">{link.label}</span>
              </span>
              <span aria-hidden className="text-ink/30">→</span>
            </a>
          ))}
          <a
            href={`mailto:${siteMeta.contactEmail}`}
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-ink text-bone px-5 py-3 text-sm"
          >
            Speak with DSG <span aria-hidden>→</span>
          </a>
        </Container>
      </div>
    </header>
  );
}

function Mark() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="size-10"
      aria-hidden
      fill="none"
    >
      <circle cx="24" cy="24" r="23" stroke="currentColor" strokeOpacity="0.15" />
      <path
        d="M24 9c-4.4 3.6-6.5 8.3-6 13 .3 3.2 2 6 4.5 8 0 0 .2 3-1.5 4.8-1 1.2-3 2.2-5 2.2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-moss-deep"
      />
      <path
        d="M24 9c4.4 3.6 6.5 8.3 6 13-.3 3.2-2 6-4.5 8 0 0-.2 3 1.5 4.8 1 1.2 3 2.2 5 2.2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-moss"
      />
      <circle cx="24" cy="24" r="2" fill="currentColor" className="text-ochre" />
    </svg>
  );
}
