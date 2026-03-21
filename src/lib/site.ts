const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://your-portfolio.dev";

export const siteConfig = {
  name: "Dmytro Kurhan",
  role: "Senior Full-Stack Engineer (React, Node.js, Power BI)",
  description:
    "Senior Full-Stack Engineer with 5+ years of commercial experience building production-grade React, TypeScript, Node.js, and Power BI solutions.",
  siteUrl,
  email: "dmitryfrontenddev@gmail.com",
  location: "Kyiv, Ukraine",
  availability: "Remote US",
  englishLevel: "Upper-Intermediate (B2+)",
  linkedin: "https://www.linkedin.com/in/dmytro-kurhan-40ab4191/",
} as const;
