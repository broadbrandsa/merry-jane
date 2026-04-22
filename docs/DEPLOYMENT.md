# Deployment

## Stack

- **Framework**: Next.js 16 (App Router)
- **Runtime**: Node 22 on Vercel
- **Package manager**: pnpm 10
- **Styling**: Tailwind CSS v4
- **UI**: shadcn/ui + lucide-react icons

## Local development

```bash
pnpm install
pnpm dev                # http://localhost:3000
pnpm build              # production build
pnpm start              # serve production build
pnpm lint
```

Node 22 is required (`nvm use 22` or equivalent).

## GitHub repo setup

```bash
cd /Users/mikeelmira/Desktop/Merry\ Jane/merry-jane-proposal

# from within project root:
git init
git add -A
git commit -m "Initial commit — Merry-Jane proposal site scaffold"

# create GitHub repo
gh repo create merry-jane-proposal --private --source=. --remote=origin --push
```

**Visibility**: keep the repo **private**. The content is a client deliverable.

**Branch strategy**: `main` is always deployable. Feature work in short-lived branches (`feat/…`, `fix/…`, `content/…`) merged via PR.

## Vercel project setup

1. In Vercel, click **Add New Project** → import the GitHub repo.
2. Framework preset will auto-detect as **Next.js**.
3. **Root Directory**: `/` (project root).
4. **Build Command**: leave default (`pnpm build`).
5. **Install Command**: leave default (`pnpm install`).
6. **Output Directory**: leave blank (Next.js handles it).
7. **Node Version**: 22.x.

Do **not** create a `vercel.json` unless a specific override is needed.

## Environment variables

No runtime secrets are required for v1. If analytics are wired in the future:

| Variable | Environment | Purpose |
|----------|-------------|---------|
| `NEXT_PUBLIC_GA_ID` | Preview, Production | GA4 measurement ID |
| `NEXT_PUBLIC_SITE_URL` | Preview, Production | Canonical URL for metadata |

All public environment variables must be prefixed `NEXT_PUBLIC_` per Next.js convention. Any secret key (e.g. for a future HubSpot integration) must **not** use that prefix.

## Domain setup

Once the client has approved the subdomain:

1. In Vercel Project → **Settings** → **Domains**, add `proposal.merry-jane.com`.
2. Merry-Jane IT adds a CNAME record pointing to `cname.vercel-dns.com`.
3. Verify HTTPS certificate issued automatically by Vercel.
4. Set `proposal.merry-jane.com` as the **primary** domain so Vercel redirects from the default `*.vercel.app` URL.

## Redeploy workflow

```bash
# Make changes on a branch
git checkout -b content/q3-roadmap-refresh
# … edit files …
git add -A && git commit -m "Refresh Q3 roadmap"
git push -u origin content/q3-roadmap-refresh

# Open PR — Vercel posts a preview deployment URL on the PR
# Review preview, then merge to main
# Main branch auto-deploys to production
```

Vercel preview URLs are shareable — use the PR preview link for client review before merging.

## Rollback

Vercel retains every deployment. To roll back:

- **UI**: Project → **Deployments** → find a previous good deployment → **Promote to Production**.
- **CLI**: `vercel rollback <url>` or `vercel promote <url>`.

## Performance budget

Because this is a marketing-weight surface:

- **LCP**: < 2.5s on mobile 4G.
- **Total JS**: < 200KB gzipped on the home route.
- **Images**: use `next/image`; ship WebP/AVIF.
- **Fonts**: self-host via `next/font`; subset display font.

Vercel Speed Insights will enforce this post-launch.

## Compliance / security

- No analytics pixels from ad networks.
- No third-party scripts beyond Vercel Analytics and (optional) GA4.
- Content Security Policy headers can be added via `next.config.ts` `headers()` when needed.
- All forms (future) must include POPIA consent and route through a server action — never client-side email services with exposed keys.
