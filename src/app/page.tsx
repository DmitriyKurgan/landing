import type { CSSProperties } from "react";
import styles from "./page.module.css";
import {
  siteConfig,
  offers,
  caseStudies,
  testimonials,
  logos,
  comparison,
} from "@/lib/site";
import { Reveal } from "./Reveal";
import { TiltCard } from "./TiltCard";
import { ContactForm } from "./ContactForm";

const highlights = [
  { value: "5+ Years", label: "commercial full-stack engineering experience" },
  { value: "Remote US", label: "available for full-time contract collaboration" },
  { value: "B2+", label: "Upper-Intermediate English communication" },
  { value: "Kyiv", label: "based in Kyiv, Ukraine and working globally" },
];

const keySkills = [
  "React, Next.js, TypeScript, JavaScript",
  "Node.js, Express, REST API, GraphQL",
  "Redux Toolkit, RTK Query, Redux-Saga",
  "Power BI, enterprise analytics, data-driven UI",
  "Performance optimization and scalable architecture",
  "Git, CI/CD, Docker, cloud deployment workflows",
];

const contactsList = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    note: "Direct reply within 1–2 business days",
  },
  {
    label: "Location",
    value: siteConfig.location,
    href: "https://maps.google.com/?q=Kyiv%2C%20Ukraine",
    note: "Working remotely with US teams",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/dmytro-kurhan",
    href: siteConfig.linkedin,
    note: "Professional profile and background",
  },
  ...((siteConfig.github as string)
    ? [
        {
          label: "GitHub",
          value: (siteConfig.github as string).replace(/^https?:\/\//, ""),
          href: siteConfig.github as string,
          note: "Open-source code and experiments",
        },
      ]
    : []),
];

const schemaData = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kyiv",
      addressCountry: "UA",
    },
    knowsLanguage: [`English ${siteConfig.englishLevel}`],
    knowsAbout: [
      "Senior Full-Stack Engineering",
      "React Development",
      "Node.js Development",
      "Next.js",
      "TypeScript",
      "Power BI",
      "Business Analytics",
      "Performance Optimization",
      "Accessibility (WCAG)",
    ],
    sameAs: [siteConfig.linkedin, siteConfig.github].filter(Boolean),
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.description,
    provider: { "@type": "Person", name: siteConfig.name },
    areaServed: "Worldwide",
    serviceType: offers.map((o) => o.title),
    offers: offers.map((o) => ({
      "@type": "Offer",
      name: o.title,
      description: o.pitch,
      availability: "https://schema.org/InStock",
    })),
  },
];

const primaryCta = (siteConfig.bookingUrl as string) || "#contacts";
const primaryCtaIsExternal = (siteConfig.bookingUrl as string).startsWith("http");

export default function Home() {
  return (
    <main className={styles.page} id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className={styles.background} aria-hidden="true">
        <span className={`${styles.lightRay} ${styles.rayOne}`} />
        <span className={`${styles.lightRay} ${styles.rayTwo}`} />
        <span className={`${styles.lightRay} ${styles.rayThree}`} />

        <div className={styles.bubbles}>
          {Array.from({ length: 18 }).map((_, index) => (
            <span
              key={`bubble-${index}`}
              className={styles.bubble}
              style={
                {
                  "--bubble-size": `${12 + (index % 5) * 6}px`,
                  "--bubble-left": `${5 + ((index * 11) % 90)}%`,
                  "--bubble-duration": `${9 + (index % 4) * 2}s`,
                  "--bubble-delay": `${index * 0.5}s`,
                } as CSSProperties
              }
            />
          ))}
        </div>

        <span className={`${styles.wave} ${styles.wavePrimary}`} />
        <span className={`${styles.wave} ${styles.waveSecondary}`} />
      </div>

      <header className={styles.topBar}>
        <a className={styles.brand} href="#top">
          {siteConfig.name}
        </a>
        <nav className={styles.nav}>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contacts">Contact</a>
        </nav>
      </header>

      <section className={styles.hero}>
        <Reveal as="article" className={`${styles.heroCard} ${styles.heroReveal}`}>
          <p className={styles.kicker}>
            <span className={styles.pulseDot} aria-hidden="true" />
            {siteConfig.availabilitySlot}
          </p>
          <h1 className={styles.heroHeadline}>
            <span className={styles.gradientText}>{siteConfig.tagline}</span>
          </h1>
          <p className={styles.heroByline}>
            {siteConfig.name} · Senior Full-Stack Engineer · Kyiv → US clients
          </p>
          <p className={styles.heroLead}>
            5+ years shipping production React, TypeScript, Node.js and Power BI
            work for enterprise teams. Fixed-scope offers, clear handover,
            B2+ English — no agency markup.
          </p>
          <div className={styles.actions}>
            <a
              className={styles.primaryButton}
              href={primaryCta}
              target={primaryCtaIsExternal ? "_blank" : undefined}
              rel={primaryCtaIsExternal ? "noopener noreferrer" : undefined}
            >
              <span className={styles.buttonShine} aria-hidden="true" />
              {siteConfig.bookingUrl ? "Book a discovery call" : "Start a project"}
            </a>
            {siteConfig.cvUrl ? (
              <a
                className={styles.secondaryButton}
                href={siteConfig.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV (PDF)
              </a>
            ) : (
              <a className={styles.secondaryButton} href="#services">
                See services
              </a>
            )}
          </div>
        </Reveal>
        <aside className={styles.highlights} aria-label="Key highlights">
          {highlights.map((item, index) => (
            <Reveal key={item.label} delay={index * 90}>
              <TiltCard className={styles.highlightCard}>
                <h2>{item.value}</h2>
                <p>{item.label}</p>
              </TiltCard>
            </Reveal>
          ))}
        </aside>
      </section>

      {logos.length > 0 && (
        <section className={`${styles.section} ${styles.logosSection}`} aria-label="Worked with">
          <Reveal>
            <p className={styles.logosLabel}>Trusted by teams at</p>
            <div className={styles.logosStrip}>
              {logos.map((logo) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={logo.name}
                  src={logo.src}
                  alt={logo.name}
                  className={styles.logoItem}
                />
              ))}
            </div>
          </Reveal>
        </section>
      )}

      <section className={styles.section} id="services">
        <Reveal className={styles.sectionHeading}>
          <p>Services</p>
          <h2>Three fixed-scope offers you can sign off in a week</h2>
        </Reveal>
        <div className={styles.offersGrid}>
          {offers.map((offer, index) => (
            <Reveal key={offer.title} delay={index * 110}>
              <TiltCard className={styles.offerCard}>
                <span className={styles.offerDuration}>{offer.duration}</span>
                <h3>{offer.title}</h3>
                <p>{offer.pitch}</p>
                <ul className={styles.offerList}>
                  {offer.outcomes.map((outcome) => (
                    <li key={outcome}>{outcome}</li>
                  ))}
                </ul>
                <a className={styles.offerCta} href="#contacts">
                  Scope this offer →
                </a>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      {caseStudies.length > 0 && (
        <section className={styles.section} id="work">
          <Reveal className={styles.sectionHeading}>
            <p>Selected work</p>
            <h2>Problem → approach → measurable result</h2>
          </Reveal>
          <div className={styles.caseGrid}>
            {caseStudies.map((cs, index) => (
              <Reveal key={cs.title} delay={index * 90}>
                <TiltCard className={styles.caseCard} intensity={5}>
                  <span className={styles.caseIndustry}>{cs.industry}</span>
                  <h3>{cs.title}</h3>
                  <div className={styles.caseMetrics}>
                    {cs.metrics.map((m) => (
                      <div key={m.label} className={styles.caseMetric}>
                        <strong>{m.value}</strong>
                        <span>{m.label}</span>
                      </div>
                    ))}
                  </div>
                  <dl className={styles.caseBody}>
                    <dt>Problem</dt>
                    <dd>{cs.problem}</dd>
                    <dt>Approach</dt>
                    <dd>{cs.approach}</dd>
                    <dt>Result</dt>
                    <dd>{cs.result}</dd>
                  </dl>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {testimonials.length > 0 && (
        <section className={styles.section} aria-label="Testimonials">
          <Reveal className={styles.sectionHeading}>
            <p>What collaborators say</p>
            <h2>Direct quotes from past managers and teammates</h2>
          </Reveal>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((t, index) => (
              <Reveal key={t.name} delay={index * 90}>
                <TiltCard className={styles.testimonialCard} intensity={4}>
                  <p className={styles.testimonialQuote}>“{t.quote}”</p>
                  <p className={styles.testimonialMeta}>
                    <strong>{t.name}</strong>
                    <span>
                      {t.role}, {t.company}
                    </span>
                  </p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <section className={styles.section} id="about">
        <Reveal className={styles.sectionHeading}>
          <p>About</p>
          <h2>Senior full-stack engineer who treats dashboards as product</h2>
        </Reveal>
        <div className={styles.aboutGrid}>
          <Reveal delay={60}>
            <TiltCard className={styles.contentCard} intensity={5}>
              <p>
                I&apos;ve spent 5+ years shipping production React, TypeScript,
                Node.js and Power BI work — mostly for enterprise analytics
                teams where the data is real, messy, and high-stakes.
              </p>
              <p>
                I care about load times, accessibility (WCAG), and the
                handover: your team should own the code cleanly after I leave.
              </p>
              <p>English: {siteConfig.englishLevel}.</p>
            </TiltCard>
          </Reveal>
          <Reveal delay={140}>
            <TiltCard className={styles.contentCard} intensity={5}>
              <p className={styles.listTitle}>Stack I use weekly:</p>
              <ul className={styles.benefits}>
                {keySkills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </TiltCard>
          </Reveal>
        </div>
      </section>

      <section className={styles.section} aria-label="Why hire me vs alternatives">
        <Reveal className={styles.sectionHeading}>
          <p>Why me</p>
          <h2>Versus the two alternatives on your shortlist</h2>
        </Reveal>
        <Reveal delay={80}>
          <div className={styles.comparisonWrap}>
            <table className={styles.comparisonTable}>
              <thead>
                <tr>
                  <th scope="col">Decision factor</th>
                  <th scope="col" className={styles.meCol}>Working with me</th>
                  <th scope="col">Hiring an agency</th>
                  <th scope="col">Hiring full-time</th>
                </tr>
              </thead>
              <tbody>
                {comparison.rows.map((row) => (
                  <tr key={row.factor}>
                    <th scope="row">{row.factor}</th>
                    <td className={styles.meCol}>{row.me}</td>
                    <td>{row.agency}</td>
                    <td>{row.fulltime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>

      <section className={styles.section} id="contacts">
        <Reveal className={styles.sectionHeading}>
          <p>Contact</p>
          <h2>Let&apos;s scope your next React + Power BI build</h2>
        </Reveal>
        <div className={styles.contactsGrid}>
          {contactsList.map((contact, index) => (
            <Reveal key={contact.label} delay={index * 100}>
              <a
                className={`${styles.contactCard} ${styles.tilt}`}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  contact.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                <span>{contact.label}</span>
                <strong>{contact.value}</strong>
                <small>{contact.note}</small>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150} className={styles.formWrap}>
          <div className={styles.formHeading}>
            <h3>Send a project brief</h3>
            <p>
              Four fields. I reply within 1–2 business days from{" "}
              {siteConfig.email}.
            </p>
          </div>
          <ContactForm />
        </Reveal>
      </section>

      <footer className={styles.footer}>
        © {new Date().getFullYear()} {siteConfig.name}. Senior Full-Stack Engineer.
      </footer>
    </main>
  );
}
