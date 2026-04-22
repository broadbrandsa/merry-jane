export const siteMeta = {
  brand: "Merry-Jane",
  title: "Merry-Jane — Digital Strategy, Influencer, PPC & Social Proposal",
  description:
    "A compliant digital strategy for South Africa's premier cannabis collective. Prepared by DSG, April 2026.",
  domain: "merry-jane.com",
  preparedFor: "Merry-Jane",
  preparedBy: "DSG — Digital Strategy Group",
  preparedDate: "April 2026",
  contactEmail: "mikee@dsg.co.za",
  location: "South Africa",
} as const;

export const pillars = [
  {
    id: "trust",
    n: "01",
    label: "Trust",
    title: "SAHPRA-compliant, clinician-backed, legitimate.",
    body: "Every communication reinforces that Merry-Jane operates within the letter of the CPPA 2024 and Section 21 pathway — no grey areas, no hedging.",
  },
  {
    id: "access",
    n: "02",
    label: "Access",
    title: "A simple Section 21 journey, nationally.",
    body: "17,000+ members, 15+ collection points, and a registration process that is findable, clear, and well explained — especially for patients new to medical cannabis.",
  },
  {
    id: "community",
    n: "03",
    label: "Community",
    title: "Inclusive, stigma-free, culturally rooted.",
    body: "The Faces of Merry-Jane are South African. Advocacy, healing, and warmth — the 'Collective' is not branding, it is who the members are to one another.",
  },
] as const;

export const navLinks = [
  { href: "#market-context", label: "Market" },
  { href: "#audit", label: "Audit" },
  { href: "#competitors", label: "Competitors" },
  { href: "#regulatory", label: "Regulatory" },
  { href: "#strategy", label: "Strategy" },
  { href: "#influencer", label: "Influencer" },
  { href: "#ppc", label: "PPC" },
  { href: "#organic", label: "Organic" },
  { href: "#roadmap", label: "90-Day" },
  { href: "#kpis", label: "KPIs" },
] as const;

export const marketFacts = [
  {
    value: "R470m",
    label: "CBD + medical cannabis market",
    context: "South Africa, 2024 baseline.",
  },
  {
    value: "R11bn",
    label: "Forecast market by 2028",
    context: "Subject to full commercialisation.",
  },
  {
    value: "17,000+",
    label: "Registered members",
    context: "Merry-Jane collective, as of April 2026.",
  },
  {
    value: "15+",
    label: "Collection points",
    context: "National footprint, major metros.",
  },
] as const;

export const legislation = {
  cppaSigned: "28 May 2024",
  fullFramework: "No earlier than 2027–2028",
  overarchingBill: "Parliament targeted mid-2027",
  policyBeforeCabinet: "Expected before Cabinet April 2026",
} as const;
