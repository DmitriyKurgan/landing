const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://your-portfolio.dev";

export const siteConfig = {
  name: "Dmytro Kurhan",
  role: "Senior Full-Stack Engineer (React, Node.js, Power BI)",
  tagline:
    "I build React + Power BI dashboards that ship in 6 weeks — for US teams drowning in enterprise data.",
  description:
    "Senior Full-Stack Engineer (React, Node.js, Power BI) helping US teams turn enterprise data into dashboards that ship in weeks, not quarters. 5+ years commercial experience, remote.",
  siteUrl,
  email: "dmytro.kurhan@gmail.com",
  // TODO: replace with custom-domain inbox once kurhan.dev / dmytrokurhan.com is live
  // Audit flagged "dmitryfrontenddev@gmail.com" as a senior/junior signal mismatch.
  location: "Kyiv, Ukraine",
  availability: "Remote US",
  availabilitySlot: "Booking Q3 2026 · 1 contract slot open",
  englishLevel: "Upper-Intermediate (B2+)",
  linkedin: "https://www.linkedin.com/in/dmytro-kurhan-408ab4191/",
  // TODO: paste your real GitHub URL — leave empty string to hide the link
  github: "",
  // TODO: paste a Calendly / Cal.com link — leave empty to fall back to #contacts
  bookingUrl: "",
  // TODO: drop a CV PDF into /public/cv.pdf — leave empty to hide the button
  cvUrl: "",
} as const;

// Productized offers — buyers convert 3–5× higher on fixed scope vs "hire me".
// Pricing intentionally omitted ("Fixed scope, custom quote") until you set anchors.
export const offers = [
  {
    title: "Power BI Performance Audit",
    duration: "2 weeks · fixed scope",
    pitch: "I rebuild your slowest dashboards, halve refresh time, and hand back a tuned data model.",
    outcomes: [
      "Refresh + render time benchmarked before/after",
      "Data model + DAX rewrites with documentation",
      "Loom walkthrough for your analytics team",
    ],
  },
  {
    title: "React + Power BI Embed Sprint",
    duration: "6 weeks · fixed scope",
    pitch: "Embed Power BI into a production React app with SSO, row-level security, and a UX that doesn't feel like an iframe.",
    outcomes: [
      "Authenticated embed with RLS wired end-to-end",
      "TypeScript SDK wrappers for your team to extend",
      "CI/CD pipeline + observability hooks",
    ],
  },
  {
    title: "Dashboard Rescue",
    duration: "4 weeks · fixed scope",
    pitch: "For teams stuck with a half-finished BI build. I take it over, ship the v1, and leave a maintainable codebase.",
    outcomes: [
      "v1 in production within four weeks",
      "Tests + handover docs your team can run with",
      "30 days of bug-fix support included",
    ],
  },
] as const;

// Case studies — Problem → Approach → Result with metrics.
// TODO: replace placeholder entries with real numbers. Empty array hides the section.
export const caseStudies: ReadonlyArray<{
  title: string;
  industry: string;
  problem: string;
  approach: string;
  result: string;
  metrics: ReadonlyArray<{ value: string; label: string }>;
}> = [
  // {
  //   title: "Power BI refresh: 14s → 2s for a Fortune 500 finance team",
  //   industry: "Financial services",
  //   problem: "Executive dashboards timed out on 50M-row datasets, blocking Monday morning reviews.",
  //   approach: "Re-modeled the star schema, rewrote 40+ DAX measures, introduced incremental refresh.",
  //   result: "Refresh dropped 86%, executive adoption tripled in the next quarter.",
  //   metrics: [
  //     { value: "86%", label: "faster refresh" },
  //     { value: "3×", label: "exec adoption" },
  //     { value: "50M", label: "rows per model" },
  //   ],
  // },
];

// Testimonials — pull from LinkedIn recommendations or ask past managers directly.
// TODO: replace with real quotes. Empty array hides the section.
export const testimonials: ReadonlyArray<{
  quote: string;
  name: string;
  role: string;
  company: string;
}> = [
  // {
  //   quote: "Dmytro shipped in six weeks what our previous vendor couldn't ship in six months.",
  //   name: "Jane Doe",
  //   role: "VP Engineering",
  //   company: "Acme Analytics",
  // },
];

// "Worked with" logo strip — past employers / clients (logos are public; using them is fine).
// TODO: drop SVG/PNG files into /public/logos/ and reference them here.
// Example: { name: "Acme", src: "/logos/acme.svg" }
export const logos: ReadonlyArray<{ name: string; src: string }> = [];

// "Why me vs alternatives" — buyers' real shortlist for senior contract work.
export const comparison = {
  rows: [
    { factor: "Time to first deploy", me: "1–2 weeks", agency: "4–8 weeks", fulltime: "6–12 weeks (hiring loop)" },
    { factor: "React + Power BI together", me: "Yes — both stacks daily", agency: "Usually one team per stack", fulltime: "Rarely in one hire" },
    { factor: "US-hours overlap", me: "4+ hours overlap, B2+ English", agency: "Account manager only", fulltime: "Yes, but 3–6 mo to hire" },
    { factor: "Monthly cost", me: "Fixed-scope, no overhead", agency: "$30k+/mo with markup", fulltime: "$15k+/mo loaded" },
    { factor: "Knowledge transfer", me: "Docs + Loom + handover built in", agency: "Variable", fulltime: "N/A — internal" },
  ],
} as const;
