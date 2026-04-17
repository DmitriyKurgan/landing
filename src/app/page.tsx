import type { CSSProperties } from "react";
import styles from "./page.module.css";
import { siteConfig } from "@/lib/site";
import { Reveal } from "./Reveal";
import { TiltCard } from "./TiltCard";
import { ContactForm } from "./ContactForm";

const highlights = [
  {
    value: "5+ Years",
    label: "commercial full-stack engineering experience",
  },
  {
    value: "Remote US",
    label: "available for full-time contract collaboration",
  },
  {
    value: "B2+",
    label: "Upper-Intermediate English communication",
  },
  {
    value: "Kyiv",
    label: "based in Kyiv, Ukraine and working globally",
  },
];

const services = [
  {
    title: "React + Node.js Engineering",
    description:
      "Production-grade web applications with React, Next.js, Node.js, and TypeScript from architecture to release.",
  },
  {
    title: "Power BI Solutions",
    description:
      "Clear KPI systems, practical data models, and dashboards that support fast and informed business decisions.",
  },
  {
    title: "Performance & Accessibility",
    description:
      "Front-end performance optimization, scalable UI architecture, and accessibility-minded implementation (WCAG).",
  },
];

const contacts = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    note: "Best channel for project inquiries",
  },
  {
    label: "Location",
    value: siteConfig.location,
    href: "https://maps.google.com/?q=Kyiv%2C%20Ukraine",
    note: "Working remotely with US teams",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/dmytro-kurhan-408ab4191",
    href: siteConfig.linkedin,
    note: "Professional profile and background",
  },
];

const keySkills = [
  "React, Next.js, TypeScript, JavaScript",
  "Node.js, Express, REST API, GraphQL",
  "Redux Toolkit, RTK Query, Redux-Saga",
  "Power BI, enterprise analytics, data-driven UI",
  "Performance optimization and scalable architecture",
  "Git, CI/CD, Docker, cloud deployment workflows",
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
    sameAs: [siteConfig.linkedin],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Senior full-stack engineering and Power BI consulting",
    provider: {
      "@type": "Person",
      name: siteConfig.name,
    },
    areaServed: "Worldwide",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
    },
  },
];

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
          <a href="#about">About</a>
          <a href="#expertise">Expertise</a>
          <a href="#contacts">Contacts</a>
        </nav>
      </header>

      <section className={styles.hero}>
        <Reveal as="article" className={`${styles.heroCard} ${styles.heroReveal}`}>
          <p className={styles.kicker}>Senior Full-Stack Engineer | {siteConfig.availability}</p>
          <h1>
            <span className={styles.gradientText}>{siteConfig.name}</span>
          </h1>
          <p className={styles.heroLead}>
            Senior Full-Stack Engineer with 5+ years of commercial experience
            building production-grade React, TypeScript, Node.js, and Power BI
            solutions. I help teams work with data effectively and turn metrics
            into clear decisions.
          </p>
          <div className={styles.actions}>
            <a className={styles.primaryButton} href="#contacts">
              <span className={styles.buttonShine} aria-hidden="true" />
              Contact me
            </a>
            <a className={styles.secondaryButton} href="#about">
              View profile
            </a>
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

      <section className={styles.section} id="about">
        <Reveal className={styles.sectionHeading}>
          <p>Profile</p>
          <h2>Production-focused engineering for web products and analytics</h2>
        </Reveal>
        <div className={styles.aboutGrid}>
          <Reveal delay={60}>
            <TiltCard className={styles.contentCard} intensity={5}>
              <p>
                Strong background in enterprise analytics platforms, front-end
                performance optimization, and complex data-driven interfaces.
              </p>
              <p>
                Hands-on experience with AI-powered voice systems, accessibility
                standards (WCAG), and large-scale financial domain products.
              </p>
              <p>English: {siteConfig.englishLevel}.</p>
            </TiltCard>
          </Reveal>
          <Reveal delay={140}>
            <TiltCard className={styles.contentCard} intensity={5}>
              <p className={styles.listTitle}>Key Skills:</p>
              <ul className={styles.benefits}>
                {keySkills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </TiltCard>
          </Reveal>
        </div>
      </section>

      <section className={styles.section} id="expertise">
        <Reveal className={styles.sectionHeading}>
          <p>Expertise</p>
          <h2>Core directions where I can support your team</h2>
        </Reveal>
        <div className={styles.serviceGrid}>
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 110}>
              <TiltCard className={styles.serviceCard}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className={styles.section} id="contacts">
        <Reveal className={styles.sectionHeading}>
          <p>Contacts</p>
          <h2>Let&apos;s connect for your next product or analytics initiative</h2>
        </Reveal>
        <div className={styles.contactsGrid}>
          {contacts.map((contact, index) => (
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
            <h3>Send a direct message</h3>
            <p>
              Share a short brief — I&apos;ll reply from {siteConfig.email}.
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
