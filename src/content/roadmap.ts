export const roadmap = [
  {
    phase: "Phase 01",
    title: "Foundations",
    range: "Days 1–30",
    description:
      "Establish the baseline: technical fixes, measurement, consent, and the infrastructure that makes every later move compound.",
    items: [
      {
        action: "Technical SEO audit of merry-jane.com — identify JS rendering, missing meta tags, sitemap gaps.",
        owner: "Dev / agency",
        priority: "Critical",
      },
      {
        action: "Google Search Console setup and property verification.",
        owner: "Dev / marketing",
        priority: "Critical",
      },
      {
        action: "Google Business Profile creation / optimisation for all 15+ collection points.",
        owner: "Marketing",
        priority: "High",
      },
      {
        action: "Social content calendar for Facebook + Instagram (first 60 days).",
        owner: "Marketing",
        priority: "High",
      },
      {
        action: "WhatsApp Business setup and welcome flow.",
        owner: "Marketing",
        priority: "High",
      },
      {
        action: "Email platform (Mailchimp / Klaviyo) with POPIA-compliant consent flow.",
        owner: "Marketing / legal",
        priority: "High",
      },
      {
        action: "Competitor SEO analysis — top 20 keyword opportunities.",
        owner: "SEO / agency",
        priority: "Medium",
      },
      {
        action: "LinkedIn Company Page creation.",
        owner: "Marketing",
        priority: "Medium",
      },
    ],
  },
  {
    phase: "Phase 02",
    title: "Build",
    range: "Days 31–60",
    description:
      "Turn the foundation into motion. First content pieces, first emails, first videos — volume low, quality high.",
    items: [
      {
        action: "Launch Education Hub with first 8 articles covering conditions, legal FAQ, Section 21 guide.",
        owner: "Dev / content",
        priority: "Critical",
      },
      {
        action: "Implement SSR or pre-rendering solution for website; validate in Google Search Console.",
        owner: "Dev",
        priority: "Critical",
      },
      {
        action: "Begin consistent social cadence: 5× Instagram / 4× Facebook per week.",
        owner: "Marketing",
        priority: "High",
      },
      {
        action: "Launch email welcome series for new member registrations.",
        owner: "Marketing",
        priority: "High",
      },
      {
        action: "Record the first 2 YouTube educational videos with registered clinicians.",
        owner: "Content",
        priority: "High",
      },
      {
        action: "Begin HCP outreach on LinkedIn — referral programme soft launch.",
        owner: "Marketing",
        priority: "High",
      },
    ],
  },
  {
    phase: "Phase 03",
    title: "Scale",
    range: "Days 61–90",
    description:
      "Push what is working, shut down what isn't. Member referral loops, YouTube publish, first paid tests, and the Q1 report.",
    items: [
      {
        action: "Assess and report SEO ranking progress against target keyword set.",
        owner: "SEO / agency",
        priority: "High",
      },
      {
        action: "Launch member referral programme via WhatsApp + email.",
        owner: "Marketing",
        priority: "High",
      },
      {
        action: "Publish YouTube channel publicly with a minimum of 4 videos.",
        owner: "Content",
        priority: "High",
      },
      {
        action: "Begin monthly Facebook Live clinician Q&A sessions.",
        owner: "Marketing / clinicians",
        priority: "High",
      },
      {
        action: "Evaluate programmatic DSP opportunities via cannabis-friendly vendors.",
        owner: "Agency / legal",
        priority: "Medium",
      },
      {
        action: "Produce the first quarterly Digital Marketing Performance Report — rankings, engagement, registrations.",
        owner: "Marketing",
        priority: "Critical",
      },
    ],
  },
] as const;
