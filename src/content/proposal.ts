export const audienceSegments = [
  {
    label: "Medical patients",
    profile: "35–65+ · chronic pain, anxiety, sleep, cancer support",
    need: "A clear, trustworthy access pathway.",
    channels: ["SEO", "Facebook", "Email", "WhatsApp"],
  },
  {
    label: "Wellness seekers",
    profile: "25–45 · health-conscious · CBD-curious",
    need: "CBD education and product guidance.",
    channels: ["Instagram", "SEO Blog", "Email"],
  },
  {
    label: "Cannabis advocates",
    profile: "21–40 · politically aware · lifestyle-driven",
    need: "Community, culture, advocacy.",
    channels: ["Instagram", "Facebook Groups", "Events"],
  },
  {
    label: "Healthcare practitioners",
    profile: "Doctors, nurses, pharmacists, physiotherapists",
    need: "Clinical information and a referral pathway.",
    channels: ["LinkedIn", "Email", "Website"],
  },
] as const;

export const channelStrategy = [
  {
    n: "01",
    channel: "SEO & content marketing",
    priority: 1,
    priorityLabel: "Critical",
    summary:
      "The single most important channel. Build South Africa's most authoritative cannabis education and wellness resource online — own every high-intent search.",
    moves: [
      "Fix technical SEO: SSR/SSG, sitemaps, JS rendering.",
      "Build an Education Hub targeting 50+ keyword clusters.",
      "Create condition-specific landing pages (pain, insomnia, anxiety, cancer support).",
      "Develop an interactive 'How Section 21 Works' guide.",
      "Optimise each collection point as a Google Business Profile.",
      "Publish 3–5 long-form articles per month.",
    ],
  },
  {
    n: "02",
    channel: "Facebook",
    priority: 2,
    priorityLabel: "Immediate improvement",
    summary:
      "Still the dominant platform for SA's 35+ demographic — essential for the medical patient segment.",
    moves: [
      "Post 4–5× per week on a consistent content calendar.",
      "Content mix: 40% educational · 30% patient stories · 20% advocacy · 10% brand/culture.",
      "Create a private, age-gated 'Merry-Jane Collective' Facebook Group.",
      "Monthly Facebook Live Q&A with registered clinicians.",
      "Avoid all pricing, product names, or sales language.",
    ],
  },
  {
    n: "03",
    channel: "Instagram",
    priority: 2,
    priorityLabel: "Scale and systematise",
    summary:
      "Reaches wellness seekers and advocates. Lifestyle-forward, visually led — the Faces of Merry-Jane series becomes the distinctive identity.",
    moves: [
      "Post 5–7× per week: Reels, Stories, curated feed.",
      "Lead with Faces of Merry-Jane — no competitor has anything comparable.",
      "Use coded language: 'plant medicine', 'the herb', 'collective wellness'.",
      "Partner with SA wellness influencers (yoga, meditation, holistic health).",
      "Run geo-targeted Stories near collection points.",
    ],
  },
  {
    n: "04",
    channel: "Email marketing",
    priority: 2,
    priorityLabel: "Build infrastructure",
    summary:
      "The most restriction-free direct channel — critical for member retention and patient education. POPIA-compliant consent is non-negotiable.",
    moves: [
      "Welcome series — 7-email onboarding for new members.",
      "Monthly member newsletter.",
      "Renewal reminders — Section 21 authorisations expire.",
      "Educational drip campaigns (conditions, CBD science, legal updates).",
    ],
  },
  {
    n: "05",
    channel: "YouTube",
    priority: 3,
    priorityLabel: "Long-term authority",
    summary:
      "Second-largest search engine. Completely underutilised by SA cannabis — a content-authority land-grab is available now.",
    moves: [
      "Launch 'The Merry-Jane Clinic' — monthly long-form clinician sessions.",
      "Short explainers: 'What is Section 21?', 'CBD vs THC', 'How to register'.",
      "Patient documentary series — humanising, share-worthy, consented.",
    ],
  },
  {
    n: "06",
    channel: "LinkedIn",
    priority: 3,
    priorityLabel: "B2B & advocacy",
    summary:
      "Reach doctors, pharmacists, policy makers, investors. Thought-leadership channel with zero cannabis advertising restriction.",
    moves: [
      "Company page focused on regulatory commentary and collective growth.",
      "Target HCPs with Section 21 referral-pathway education.",
      "Long-form articles from Merry-Jane clinicians.",
    ],
  },
  {
    n: "07",
    channel: "WhatsApp Business",
    priority: 1,
    priorityLabel: "Member retention",
    summary:
      "South Africa's dominant mobile comms channel. POPIA-compliant broadcast lists, automated flows, 90%+ open rates.",
    moves: [
      "Automated welcome messages for new registrations.",
      "Renewal & collection-point notifications.",
      "Monthly member newsletter via broadcast list.",
      "FAQ auto-responses.",
    ],
  },
] as const;

export const influencerTypes = [
  {
    n: "01",
    type: "Wellness & holistic health micro-influencers",
    size: "5K – 50K",
    why: "Reach health-conscious audiences via natural-health framing. No direct cannabis association reduces shadow-ban risk. Ideal for CBD wellness and collective awareness.",
    platforms: ["Instagram", "TikTok", "Facebook"],
  },
  {
    n: "02",
    type: "Chronic illness & pain patient advocates",
    size: "1K – 20K",
    why: "Deeply authentic. Medical patient communities carry built-in trust. Ideal for Section 21 access messaging — speaking directly to people seeking alternatives to conventional pharma.",
    platforms: ["Facebook Groups", "Instagram", "YouTube"],
  },
  {
    n: "03",
    type: "Healthcare practitioners (HCPs)",
    size: "Varies",
    why: "The most legally clean channel available. Doctors, physiotherapists, and pharmacists promoting the Section 21 referral pathway is entirely compliant and highly credible.",
    platforms: ["LinkedIn", "Email newsletters"],
  },
  {
    n: "04",
    type: "Cannabis policy & advocacy journalists",
    size: "2K – 30K",
    why: "Builds authority and earns PR coverage. No product promotion required — focus on the collective model, advocacy, and leadership in the SA sector.",
    platforms: ["X", "LinkedIn", "Podcasts"],
  },
] as const;

export const influencerBriefRules = [
  "Disclose paid/sponsored partnerships clearly (#ad, #sponsored) on every post.",
  "Never mention pricing, product names, menus, or ordering language.",
  "All cannabis-related content must be marked 18+ and age-gated where possible.",
  "No depictions of cannabis consumption — focus on wellness, community, and the registration journey.",
  "Use compliant language: 'plant medicine', 'natural wellness', 'the collective', 'medical access'.",
  "The influencer must be 18+ and their audience predominantly adult.",
  "Content must be reviewed and approved by Merry-Jane before posting.",
  "Retain a copy of every published piece for compliance records.",
] as const;

export const influencerApproved = [
  "Personal wellness and pain-management journeys",
  "'How I accessed medical cannabis legally' — the Section 21 process",
  "CBD oil for sleep, anxiety, general wellness (no specific claims)",
  "What the Merry-Jane collective is and how to register",
  "Advocacy — why South Africans deserve safe, legal access",
  "Behind-the-scenes at collection points (lifestyle, community)",
  "Interviewing HPCSA-registered clinicians on wellness topics",
] as const;

export const influencerAvoid = [
  "Showing or naming specific cannabis products or strains",
  "Pricing, discounts, promotions, 'order now' language",
  "Depicting consumption (smoking, vaping, edibles)",
  "Unsubstantiated health claims ('cures', 'treats', 'heals')",
  "Language implying cannabis is available for recreational sale",
  "Flagged hashtags — #weed #dagga #THC #cannabiscommunity #420",
  "Targeting or including under-18 audiences",
] as const;

export const organicPlatforms = [
  {
    platform: "Instagram",
    allowed:
      "Product imagery (no sales CTAs), lifestyle, educational Reels, patient journeys, BTS, wellness, age-gated Stories.",
    prohibited:
      "Sales offers, pricing, 'DM to buy', purchase links, consumption depictions, flagged keywords, misleading health claims.",
    shadowBan: "High — avoid cannabis keywords in captions and hashtags. Use coded language.",
    cadence: "5–7 posts/week: 3 feed, 2 Reels, daily Stories.",
    mix:
      "40% education · 30% lifestyle & 'Faces of Merry-Jane' · 20% community & advocacy · 10% brand.",
    tactic: "Reels get 4× more reach than static — prioritise short-form video.",
  },
  {
    platform: "Facebook",
    allowed:
      "Educational posts, advocacy, anonymised patient stories, event promotion, external article sharing, private community groups.",
    prohibited: "Paid ads, sales language, pricing, product promotion, under-18 targeting.",
    shadowBan: "Medium — public page posts are higher risk than private group activity.",
    cadence: "4–5 posts/week on the public page · daily activity in the private group.",
    mix: "40% education · 30% patient stories · 20% SA cannabis news & advocacy · 10% milestones.",
    tactic: "Monthly Facebook Live Q&A with an HPCSA-registered clinician.",
  },
  {
    platform: "YouTube",
    allowed: "Educational videos, reviews, documentaries, clinician interviews, patient journeys — 18+.",
    prohibited: "Direct store links. Monetisation is typically blocked on cannabis content.",
    shadowBan: "Low — underutilised by the entire SA cannabis sector.",
    cadence: "2–4 videos/month to start · quality over quantity.",
    mix:
      "'The Section 21 Journey', monthly clinician Q&A series, 'CBD vs THC', patient documentaries, 'Ask the Doctor' shorts.",
    tactic: "Optimise titles/descriptions for SEO search terms ('medical cannabis South Africa').",
  },
  {
    platform: "X (Twitter)",
    allowed:
      "Brand voice, advocacy, industry news sharing, product education, links to site content, paid ads.",
    prohibited: "Direct sales, content targeting minors.",
    shadowBan: "Very low — most permissive mainstream platform for cannabis in 2026.",
    cadence: "3–5 posts/day — short-form commentary on news, regulation, wellness.",
    mix: "Real-time takes on SAHPRA announcements, legislation, policy — the go-to voice on SA cannabis regulation.",
    tactic: "Use X as the regulatory-news commentary channel.",
  },
  {
    platform: "LinkedIn",
    allowed: "Company news, industry analysis, HCP education, thought leadership, job postings, policy commentary.",
    prohibited: "Direct product sales (irrelevant to B2B context anyway).",
    shadowBan: "None.",
    cadence: "3–4 posts/week · long-form articles weekly.",
    mix:
      "SA doctors, pharmacists, oncologists, nurses, policy makers, investors — all at once.",
    tactic: "'Understanding Section 21 Cannabis Access for Your Patients' — referrals, zero restriction.",
  },
  {
    platform: "WhatsApp Business",
    allowed: "Member comms, renewals, education, collection notifications, POPIA-consented broadcasts.",
    prohibited: "Unsolicited outreach, broadcast without opt-in.",
    shadowBan: "N/A.",
    cadence: "Automated welcome flow · monthly newsletter broadcast · appointment reminders · FAQ auto-responses.",
    mix: "Member retention first, acquisition second.",
    tactic: "90%+ open rates vs 20–30% for email — use for the most important messages.",
  },
] as const;

export const goldenRules = [
  {
    n: "01",
    rule: "Never mention pricing, product names, or sales language in any post.",
  },
  {
    n: "02",
    rule: "Never depict cannabis consumption (smoking, vaping, ingesting).",
  },
  {
    n: "03",
    rule:
      "Always age-gate cannabis content: add 18+ to bio, use platform age-restriction tools.",
  },
  {
    n: "04",
    rule:
      "Replace high-risk keywords with compliant alternatives: 'plant medicine' not 'cannabis', 'the collective' not 'dispensary', 'natural wellness' not 'getting high'.",
  },
  {
    n: "05",
    rule: "Never make specific therapeutic claims. 'May support sleep' — not 'cures insomnia'.",
  },
] as const;

export const shadowBanPlaybook = [
  "Build a secondary hashtag library of non-cannabis wellness terms: #holistichealth #naturalwellness #plantmedicine #alternativetherapy #wellnessjourney #painmanagement.",
  "Audit hashtags before every post — some cannabis-adjacent tags are permanently flagged. Rotate sets to avoid pattern detection.",
  "Post consistently at the same times each day — the algorithm favours predictable schedules.",
  "Prioritise engagement in the first 30 minutes — reply immediately to signal value.",
  "Do not use more than 5 hashtags per post on Instagram in 2026.",
  "Keep a backup account ready — continuity if the primary is shadow-banned.",
  "Add 'Nothing for Sale · 18+ Only · Educational Content' to bios.",
] as const;

export const integratedChannels = [
  { channel: "Instagram", paid: "No", organic: "Yes *", priority: "High", use: "Lifestyle, education, influencers, Reels" },
  { channel: "Facebook", paid: "No", organic: "Yes *", priority: "High", use: "Community group, patient education, Live Q&A" },
  { channel: "LinkedIn", paid: "Yes", organic: "Yes", priority: "High", use: "HCP referrals, B2B, thought leadership, paid ads" },
  { channel: "X (Twitter)", paid: "Yes", organic: "Yes", priority: "Medium-high", use: "Advocacy, news commentary, paid awareness" },
  { channel: "YouTube", paid: "Limited", organic: "Yes", priority: "High", use: "Education series, clinician content, SEO video" },
  { channel: "WhatsApp Business", paid: "N/A", organic: "Yes", priority: "Critical", use: "Member comms, renewal, onboarding, retention" },
  { channel: "Google Ads", paid: "No", organic: "N/A", priority: "Blocked", use: "Not available — SEO is the organic alternative" },
  { channel: "Meta Ads", paid: "No", organic: "N/A", priority: "Blocked", use: "Not available — organic content only" },
  { channel: "Programmatic DSP", paid: "Yes *", organic: "N/A", priority: "Medium", use: "Geo-targeted SA display/native/audio" },
  { channel: "Influencer partnerships", paid: "Yes", organic: "Yes", priority: "High", use: "Wellness micros, HCP advocates, patient voices" },
] as const;

export const kpiTargets = [
  { metric: "Organic website traffic", target: "Baseline M1 · +40% by M6" },
  { metric: "Google keyword rankings", target: "Top 5 for 10 primary terms in 12 months" },
  { metric: "Facebook engagement rate", target: "2%+ (from current ~0.17%)" },
  { metric: "Instagram follower growth", target: "+1,000 net new/month" },
  { metric: "Email list growth", target: "+500 organic subscribers/month" },
  { metric: "Digital-origin member registrations", target: "60%+ of new registrations" },
  { metric: "YouTube subscribers", target: "1,000 within 6 months of launch" },
  { metric: "Google Business Profile views", target: "10,000+ monthly across all locations" },
  { metric: "WhatsApp broadcast open rate", target: "70%+ (benchmark 90%+)" },
] as const;

export const influencerKPIs = [
  { metric: "Reach", detail: "Unique accounts that saw influencer content." },
  { metric: "Engagement rate", detail: "3–6% for micro-influencers (industry benchmark)." },
  { metric: "Link-in-bio clicks", detail: "Track outbound clicks to merry-jane.com per partnership." },
  { metric: "Registration attribution", detail: "UTM-tagged links per influencer — sign-ups attributed." },
  { metric: "Story views / saves", detail: "High saves indicate educational content resonating." },
  { metric: "Sentiment", detail: "Qualitative review of comment tone — trust and curiosity." },
] as const;

export const growthOpportunities = [
  {
    title: "SEO dominance",
    timeline: "0–12 months",
    detail:
      "No SA cannabis brand dominates organic search. A 12-month SEO investment establishes Merry-Jane as the authoritative destination for 'medical cannabis South Africa' and adjacent terms.",
  },
  {
    title: "Commercial licensing prep",
    timeline: "12–24 months",
    detail:
      "The Overarching Cannabis Bill (Parliament mid-2027) opens commercial licensing. Brands building compliance + digital authority now gain first-mover advantage.",
  },
  {
    title: "HCP referral network",
    timeline: "3–9 months",
    detail:
      "A GP / specialist referral programme via LinkedIn + email becomes a sustainable, compliant acquisition channel.",
  },
  {
    title: "Branded CBD sub-20mg line",
    timeline: "6–18 months",
    detail:
      "A Schedule 0 Merry-Jane CBD range can be marketed with far fewer restrictions — a lower-barrier entry product that feeds into the Section 21 pipeline.",
  },
  {
    title: "Programmatic display",
    timeline: "12–24 months",
    detail:
      "As SA market matures, cannabis-friendly DSPs (StackAdapt, Basis, TradeDesk) become viable for awareness.",
  },
  {
    title: "Community events & pop-ups",
    timeline: "6–12 months",
    detail:
      "Post-CPPA, 'cannabis social clubs' and educational events in JHB, CPT, DBN — Merry-Jane-branded events drive awareness and acquisition.",
  },
  {
    title: "Podcast / audio content",
    timeline: "3–9 months",
    detail:
      "A 'Cannabis Conversations' podcast with clinicians, advocates, and patients builds authority with no advertising restrictions.",
  },
  {
    title: "Affiliate / member-get-member",
    timeline: "3–6 months",
    detail:
      "Referral programme (app or WhatsApp) with rewards for bringing new members into the collective.",
  },
] as const;

export const nextSteps = {
  immediate: [
    "Legal review of this proposal by a SAHPRA-aware attorney — before activation of any campaign, influencer brief, YouTube ad creative, or programmatic DSP content.",
    "Set up UTM tracking links across all channels so member-registration sources are attributable from day one.",
    "Create a written Influencer Brief Template incorporating every compliance rule.",
    "Launch LinkedIn Company Page and begin organic posting — zero risk, zero cost, zero competitors.",
    "Set up WhatsApp Business with automated welcome and renewal flows for the current 17,000+ member base.",
  ],
  short: [
    "Identify and brief 3–5 SA wellness micro-influencers for a pilot programme. Start with one paid partnership, measure attribution, scale from there.",
    "Launch LinkedIn Sponsored Content targeting SA HCPs — the single highest-ROI paid channel available.",
    "Begin an Instagram Reels content calendar with educational and lifestyle content — 3 Reels/week minimum.",
    "Create a private Facebook Group ('The Merry-Jane Collective') and migrate engaged followers into the safer community environment.",
  ],
  medium: [
    "Test programmatic DSP (StackAdapt or equivalent) with a R15,000 pilot budget. Evaluate SA publisher inventory and conversion data before scaling.",
    "Launch a YouTube channel with the first 4 videos — at least one clinician education piece and one patient documentary.",
    "Begin an X paid awareness campaign targeting SA wellness and advocacy audiences.",
    "Review all KPIs and produce a 90-day performance report to inform the next strategy phase.",
  ],
} as const;
