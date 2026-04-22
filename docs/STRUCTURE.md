# Structure

## Folder structure

```
merry-jane-proposal/
├── docs/                           # This folder — project documentation
│   ├── PROJECT_OVERVIEW.md
│   ├── ASSUMPTIONS.md
│   ├── SCOPE.md
│   ├── STRUCTURE.md
│   ├── TRACKING_PLAN.md
│   └── DEPLOYMENT.md
├── public/
│   └── images/                     # Illustrations, brand marks, texture overlays
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── (marketing)/
│   │   │   ├── page.tsx            # Home — full proposal scroll
│   │   │   ├── audit/page.tsx      # Digital audit focused view
│   │   │   ├── proposal/page.tsx   # Influencer/PPC focused view
│   │   │   └── about/page.tsx
│   │   ├── globals.css             # Theme tokens + base styles
│   │   └── layout.tsx              # Root layout, fonts, metadata
│   ├── components/
│   │   ├── sections/               # One file per page section
│   │   │   ├── hero.tsx
│   │   │   ├── market-context.tsx
│   │   │   ├── audit-scorecard.tsx
│   │   │   ├── competitive-landscape.tsx
│   │   │   ├── regulatory-reality.tsx
│   │   │   ├── audience-segments.tsx
│   │   │   ├── channel-strategy.tsx
│   │   │   ├── influencer-framework.tsx
│   │   │   ├── ppc-status.tsx
│   │   │   ├── organic-playbook.tsx
│   │   │   ├── roadmap.tsx
│   │   │   ├── kpis.tsx
│   │   │   ├── next-steps.tsx
│   │   │   └── compliance-notice.tsx
│   │   ├── ui/                     # shadcn primitives (generated)
│   │   ├── nav.tsx                 # Top navigation
│   │   ├── footer.tsx
│   │   ├── container.tsx           # Shared layout wrapper
│   │   ├── section-heading.tsx     # Kicker + title + intro block
│   │   ├── stat.tsx                # Large stat with label
│   │   ├── grain.tsx               # Noise overlay component
│   │   └── fade-in.tsx             # Scroll-triggered fade wrapper
│   ├── content/                    # In-code content sources (typed)
│   │   ├── site.ts                 # Brand strings, nav items, metadata
│   │   ├── audit.ts                # Audit scorecard, competitor data, etc.
│   │   ├── proposal.ts             # Influencer, PPC, organic data
│   │   └── roadmap.ts              # 90-day phase breakdown
│   └── lib/
│       ├── utils.ts                # shadcn cn() helper
│       └── fonts.ts                # next/font config
├── package.json
├── tsconfig.json
├── next.config.ts
└── postcss.config.mjs
```

## Section composition rules

Every `sections/*.tsx` follows the same shape so that any section can be lifted and placed on an alternate page:

```tsx
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

export function SectionName() {
  return (
    <section id="section-name" className="py-24 md:py-32">
      <Container>
        <SectionHeading
          kicker="02 · Market Context"
          title="Short, confident title"
          intro="One or two supporting sentences."
        />
        {/* section body */}
      </Container>
    </section>
  );
}
```

Guidelines:

- **IDs are slug-case** matching the section. The top nav jumps to `#id`.
- **Spacing**: `py-24 md:py-32` unless the section needs to breathe more (hero, CTA).
- **Color alternation**: alternate between `bg-background` and `bg-card` (cream) to break the scroll.
- **Every section has a kicker** in the `section-heading` component — numbered (01, 02, 03…) to give the page a document-like rhythm.

## Content management approach

All proposal content lives as **typed data** in `src/content/*.ts`. Sections import the data and render it. This keeps the design separated from the copy and makes copy edits trivial.

Example:
```ts
// src/content/audit.ts
export const auditScorecard = [
  { dimension: "Website / Technical SEO", score: "3/10", priority: "CRITICAL" },
  { dimension: "Content Marketing", score: "3/10", priority: "HIGH" },
  // ...
] as const;
```

When strategy is updated:
1. Update the source `.docx` in `/Users/mikeelmira/Desktop/Merry Jane/`.
2. Update the corresponding `src/content/*.ts` entries.
3. Re-render (no rebuild needed in dev; `pnpm build` for production).

No CMS. No markdown processing at runtime. Fast, typed, and commit-reviewable.
