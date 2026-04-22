# Tracking Plan

This document describes what is instrumented (or should be instrumented) on the proposal site itself — not Merry-Jane's broader marketing instrumentation.

## Scope note

The proposal site is a stakeholder deliverable. Its tracking is lightweight and exists to measure engagement with the pitch, not to drive consumer behaviour. All tracking respects POPIA and is anonymised.

## Google Analytics

**Placeholder** — add when ready.

```ts
// In src/app/layout.tsx
// Use next/third-parties to load GA4
// import { GoogleAnalytics } from "@next/third-parties/google";
// <GoogleAnalytics gaId="G-XXXXXXXXXX" />
```

Property: to be provisioned in the Merry-Jane GA account under a dedicated `Proposal Site` data stream so it does not pollute production analytics.

## Vercel Analytics (recommended)

- Enable **Vercel Web Analytics** on the project.
- Enable **Vercel Speed Insights** (core web vitals).
- No setup required beyond toggling in Project Settings — `@vercel/analytics` and `@vercel/speed-insights` can be installed and wired into `layout.tsx` once approved.

## Event tracking (placeholder spec)

Events to fire once analytics are wired:

| Event name | Trigger | Properties |
|------------|---------|------------|
| `proposal_viewed` | Page load on `/` | `variant`, `referrer` |
| `section_viewed` | Section scrolls into view (>50% visible) | `section_id` |
| `nav_clicked` | Top nav link click | `target_section` |
| `cta_clicked` | Primary CTA button click | `label`, `location` |
| `doc_download_clicked` | Link out to PDF/docx | `doc_name` |
| `contact_clicked` | Email / contact link | `location` |
| `external_link_clicked` | Outbound link to merry-jane.com | `url` |

Implementation note: use a single `track(event, props)` helper in `src/lib/analytics.ts` so all analytics providers can be swapped without touching components.

## Form submission tracking

No forms are expected on v1. If a "Schedule a review call" form is added:

- Capture `form_started`, `form_submitted`, `form_error`.
- Route to a serverless endpoint that forwards to HubSpot / email.
- POPIA consent checkbox required; store the consent state with each submission.

## Conversion goals (placeholder)

The proposal site's "conversion" is a conversation, not a checkout. Goals to track:

1. **Proposal read-through** — user scrolled past 80% of the home route.
2. **Roadmap engagement** — user expanded at least one roadmap phase.
3. **Contact click** — user clicked the email / schedule CTA.
4. **Doc access** — user opened `/audit` or `/proposal` focused views.

A weekly digest of these signals, plus a per-stakeholder link (`?utm_source=merry-jane&utm_content=ceo`) can indicate which parts of the audience have engaged.

## UTM convention

Every share of this site must use a UTM tag so attribution is clean:

```
?utm_source=merry-jane
&utm_medium=email | whatsapp | slack
&utm_campaign=proposal-apr2026
&utm_content=<stakeholder-name>
```

Enforced via a simple share helper in `/src/lib/share.ts` (future).

## What is NOT tracked

- No third-party pixels (Meta Pixel, Google Ads remarketing, TikTok pixel).
- No session replay tools (Hotjar, FullStory, PostHog recording).
- No user-identifiable PII beyond what the user enters in a future contact form.

This is deliberate — the site represents a brand whose compliance posture is the product. Instrumentation must not undermine that posture.
