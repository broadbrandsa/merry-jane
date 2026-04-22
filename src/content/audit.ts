export const websiteScorecard = [
  { dimension: "Technical architecture", status: "SPA / JS-Dependent", severity: "warn" },
  { dimension: "SEO crawlability", status: "Poor", severity: "crit" },
  { dimension: "Mobile responsiveness", status: "Likely good (React/SPA)", severity: "ok" },
  { dimension: "Page speed (est.)", status: "Requires testing", severity: "warn" },
  { dimension: "HTTPS / security", status: "Secure", severity: "ok" },
  { dimension: "Content depth", status: "Limited (gated member portal)", severity: "crit" },
  { dimension: "Age-gate / compliance", status: "Present", severity: "ok" },
  { dimension: "Conversion flow", status: "Clear CTA — Register / Collect", severity: "ok" },
] as const;

export const keyWebsiteIssues = [
  "SPA requires JavaScript to render — a major SEO liability without SSR/SSG.",
  "No publicly visible blog, resource hub, educational content, or keyword-rich pages.",
  "Without JavaScript, the site renders a minimal placeholder — penalises accessibility, SEO, and social link previews.",
  "No visible sitemap or canonical tags accessible externally.",
  "No schema markup (MedicalOrganization, FAQPage, Article) detected.",
] as const;

export const websiteRecommendations = [
  "Implement SSR via Next.js or Nuxt, or use a headless CMS with static generation, to restore full Googlebot crawlability.",
  "Build a public Education Hub with SAHPRA-compliant content: condition management, cannabinoid education, Section 21 FAQs.",
  "Add structured data markup: MedicalOrganization, FAQPage, BreadcrumbList, and LocalBusiness per collection point.",
  "Create publicly accessible 'About', 'How It Works', and 'Find a Collection Point' pages with location SEO.",
  "Submit XML sitemap to Google Search Console and Bing Webmaster Tools.",
] as const;

export const socialSnapshot = [
  {
    platform: "Facebook",
    handle: "@MerryJaneSouthAfrica",
    note: "6,585 followers · ~11 actively engaged · 0.17% eng. · Educational / advocacy tone.",
    status: "active",
  },
  {
    platform: "Instagram",
    handle: "@merry_jane_sa",
    note: "Active · lifestyle, wellness · follower count not publicly confirmed.",
    status: "active",
  },
  {
    platform: "Blog",
    handle: "merry-jane.blog",
    note: "WordPress — sporadic posting on brand identity and culture.",
    status: "active",
  },
  {
    platform: "WhatsApp / Member Comms",
    handle: "Private channel",
    note: "Likely primary member channel — not publicly auditable.",
    status: "private",
  },
  {
    platform: "YouTube",
    handle: "No branded channel",
    note: "Significant content gap; no SA cannabis brand dominates.",
    status: "gap",
  },
  {
    platform: "LinkedIn",
    handle: "No business page",
    note: "Gap; B2B and HCP channel left completely open.",
    status: "gap",
  },
  {
    platform: "TikTok",
    handle: "No account",
    note: "Emerging opportunity for compliant educational short-form.",
    status: "gap",
  },
  {
    platform: "X (Twitter)",
    handle: "No account",
    note: "Most permissive paid platform for cannabis — unused.",
    status: "gap",
  },
] as const;

export const maturityScorecard = [
  { dimension: "Website / technical SEO", score: 3, priority: "Critical — fix immediately" },
  { dimension: "Content marketing", score: 3, priority: "High — build education hub" },
  { dimension: "Social media presence", score: 5, priority: "Medium — increase cadence" },
  { dimension: "Email / CRM marketing", score: 5, priority: "High — build / optimise flows" },
  { dimension: "Brand & visual identity", score: 7, priority: "Low — strong foundation" },
  { dimension: "Community / advocacy", score: 7, priority: "Low — core strength" },
  { dimension: "Paid advertising", score: 0, priority: "Restricted — monitor programmatic" },
] as const;

export const competitors = [
  {
    name: "Merijane",
    domain: "merijane.co.za",
    model: "Section 21 medical access + dispensary network",
    platforms: "Website, Facebook, collection points",
    strength: "Clear SAHPRA-compliant patient registration flow.",
    threat: "high",
    note: "Near-identical model.",
  },
  {
    name: "Merry-Jane.online",
    domain: "merry-jane.online",
    model: "Cannabis collective + Section 21 pathway",
    platforms: "Website, Facebook",
    strength: "Clinical credibility, HPCSA-registered practitioners.",
    threat: "high",
    note: "Direct name confusion risk.",
  },
  {
    name: "Releaf",
    domain: "releaf",
    model: "Medical cannabis clinic / prescriptions",
    platforms: "Website, Instagram, LinkedIn",
    strength: "Professional medical framing, doctor-led content.",
    threat: "medium-high",
    note: "B2B-adjacent positioning.",
  },
  {
    name: "Cilo Cybin Holdings",
    domain: "cilocybin",
    model: "Cultivator, JSE-listed (first)",
    platforms: "Website, LinkedIn, press",
    strength: "Public listing adds credibility; B2B focus.",
    threat: "medium",
    note: "Different segment.",
  },
  {
    name: "MG Health",
    domain: "mghealth",
    model: "CBD wellness products",
    platforms: "Website, Instagram, Facebook, Takealot",
    strength: "CBD e-commerce; strong retail presence.",
    threat: "medium",
    note: "CBD overlap.",
  },
  {
    name: "Café 420 / AskMaryJ",
    domain: "askmaryj",
    model: "Directory / marketplace",
    platforms: "Web, SEO-heavy",
    strength: "Captures organic search for 'cannabis near me'.",
    threat: "medium",
    note: "Traffic aggregator.",
  },
  {
    name: "Merry2Jane",
    domain: "merry2jane.co.za",
    model: "Cultivation supplies & accessories",
    platforms: "Website, SEO",
    strength: "Targets home growers post-CPPA.",
    threat: "low",
    note: "Adjacent segment only.",
  },
] as const;

export const seoGaps = [
  "medical cannabis South Africa",
  "Section 21 cannabis access",
  "cannabis collective South Africa",
  "CBD oil South Africa",
  "cannabis for chronic pain South Africa",
] as const;

export const regulatoryMatrix = [
  {
    regulation: "CPPA 2024",
    restricts:
      "Advertising cannabis for sale. Any commercial promotion of cannabis products to the public — 'advertising for sale' is explicitly 'dealing' under the Act.",
    permits:
      "Advocacy content. Educational information. Member service comms. Section 21 authorisation process information.",
  },
  {
    regulation: "SAHPRA / Medicines Act",
    restricts:
      "Direct-to-consumer advertising of Schedule 6 (THC) medicines. Unsubstantiated health claims for CBD products. Marketing by unlicensed entities.",
    permits:
      "Section 21 access pathway communication to registered patients. General wellness claims for CBD under 20mg/day. Licensed practitioner communications.",
  },
  {
    regulation: "ASA Code",
    restricts:
      "Misleading health claims. Targeting minors in any cannabis-related content. Depicting cannabis use as glamorised or irresponsible.",
    permits:
      "Factual, educational content properly framed. Age-gated content with responsible-use messaging.",
  },
  {
    regulation: "Google Ads Policy",
    restricts:
      "All cannabis-related paid search globally — including CBD. Any site that mentions cannabis cannot run Google Ads.",
    permits:
      "Brand awareness via organic YouTube (with caveats). Google Business Profile listings for physical locations.",
  },
  {
    regulation: "Meta (Facebook / Instagram)",
    restricts:
      "Paid ads promoting cannabis products, sales, or acquisition. CBD product advertising in most regions.",
    permits:
      "Organic posts (shadow-ban risk). Education-forward content without pricing or sales CTAs. Private, age-gated community groups.",
  },
] as const;

export const platformPPC = [
  {
    platform: "Google Ads (Search & Display)",
    status: "blocked",
    detail:
      "Cannabis keywords cannot be bid on. Any site mentioning cannabis cannot run Google Ads — no exceptions. Do not attempt; accounts risk permanent suspension.",
  },
  {
    platform: "Meta Ads (Facebook / Instagram)",
    status: "blocked",
    detail:
      "Paid cannabis ads are prohibited globally, regardless of local legality. Even CBD brands face rejection. Running ads on a cannabis-associated account risks the entire ad account being banned.",
  },
  {
    platform: "TikTok Ads",
    status: "blocked",
    detail:
      "TikTok prohibits cannabis in all forms globally. Even indirect association risks account removal.",
  },
  {
    platform: "X (Twitter) Ads",
    status: "open",
    detail:
      "X is the most cannabis-friendly paid platform in 2026. Brands can run paid ads, post product imagery, and link to content — provided audiences are age-verified and content complies with regional laws.",
  },
  {
    platform: "YouTube Ads (Google)",
    status: "limited",
    detail:
      "Pre-roll / mid-roll available for age-restricted (18+) content. No health claims or consumption depictions. Educational pre-roll pointing to Section 21 registration is the viable format — requires legal review.",
  },
  {
    platform: "LinkedIn Sponsored Content",
    status: "open",
    detail:
      "No cannabis advertising restrictions at the professional / educational level. Ideal for HCP-targeted campaigns — the most underutilised paid channel in SA cannabis, with zero competition running it.",
  },
  {
    platform: "Programmatic DSPs (StackAdapt, MediaJel, Safe-Reach)",
    status: "available",
    detail:
      "Cannabis-specific DSPs allow geo-targeted display, native, video, and audio across mainstream publisher networks using cannabis audience segments. Primarily US/CA-optimised; SA publisher inventory is growing but limited. Minimum viable budget ~USD 500–1,000/month.",
  },
  {
    platform: "Spotify / Podcast audio",
    status: "possible",
    detail:
      "Programmatic audio via DSPs. Cannabis lifestyle and wellness messaging (no product) targeted to 18+ SA listeners is viable; requires a cannabis-compliant DSP as intermediary.",
  },
] as const;

export const ppcBudget = [
  {
    channel: "LinkedIn Sponsored Content",
    budget: "R8,000 – R15,000",
    objective: "HCP referral growth",
    outcome: "50–150 HCP impressions/day · 5–15 new referral contacts/month",
  },
  {
    channel: "X (Twitter) awareness ads",
    budget: "R5,000 – R10,000",
    objective: "Brand awareness",
    outcome: "Reach 20,000–60,000 SA adults/month",
  },
  {
    channel: "Programmatic DSP (test)",
    budget: "R15,000 – R25,000",
    objective: "Member acquisition",
    outcome: "Display across SA publisher network · 3–8 new sign-ups/month",
  },
  {
    channel: "YouTube pre-roll (test)",
    budget: "R5,000 – R8,000",
    objective: "Education & awareness",
    outcome: "10,000–30,000 age-verified views/month",
  },
  {
    channel: "Total starting budget",
    budget: "R33,000 – R58,000",
    objective: "Multi-channel coverage",
    outcome: "Review & optimise after first 90 days",
  },
] as const;
