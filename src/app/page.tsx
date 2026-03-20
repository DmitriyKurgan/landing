import type { CSSProperties } from "react";
import styles from "./page.module.css";
import { siteConfig } from "@/lib/site";

const highlights = [
  {
    value: "5+ years",
    label: "building fullstack solutions for digital products",
  },
  {
    value: "40+",
    label: "web and BI projects delivered",
  },
  {
    value: "1:1",
    label: "Power BI mentoring with practical business cases",
  },
  {
    value: "100%",
    label: "focus on measurable outcomes and team growth",
  },
];

const services = [
  {
    title: "Fullstack Development",
    description:
      "I design and ship fast web applications with Next.js and TypeScript, from prototype to production.",
  },
  {
    title: "Power BI & Analytics",
    description:
      "I help teams build transparent KPI systems, decision-ready dashboards, and reporting workflows that stay clear over time.",
  },
  {
    title: "Training & Enablement",
    description:
      "I teach you to work with Power BI effectively, so you can automate analytics with confidence and no data chaos.",
  },
];

const contacts = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    note: "Best for project requests",
  },
  {
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`,
    note: "Quick call for an intro brief",
  },
  {
    label: "Telegram",
    value: "@your_handle",
    href: siteConfig.telegram,
    note: "Fastest chat response",
  },
  {
    label: "LinkedIn",
    value: "Professional profile",
    href: siteConfig.linkedin,
    note: "Cases and experience in detail",
  },
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
    telephone: siteConfig.phone,
    knowsAbout: [
      "Fullstack Development",
      "Next.js",
      "TypeScript",
      "Power BI",
      "Business Analytics",
    ],
    sameAs: [siteConfig.linkedin, siteConfig.github, siteConfig.telegram],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Power BI mentoring and fullstack development",
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
        <article className={styles.heroCard}>
          <p className={styles.kicker}>Indian Ocean inspired digital craft</p>
          <h1>I build modern web products and teach Power BI the practical way</h1>
          <p className={styles.heroLead}>
            I am an experienced fullstack developer with 5+ years of
            experience, and I can help you learn how to work with Power BI
            effectively so your data leads to clear, measurable decisions.
          </p>
          <div className={styles.actions}>
            <a className={styles.primaryButton} href="#contacts">
              Discuss a project
            </a>
            <a className={styles.secondaryButton} href="#about">
              Learn more about me
            </a>
          </div>
        </article>
        <aside className={styles.highlights} aria-label="Key highlights">
          {highlights.map((item) => (
            <article key={item.label} className={styles.highlightCard}>
              <h2>{item.value}</h2>
              <p>{item.label}</p>
            </article>
          ))}
        </aside>
      </section>

      <section className={styles.section} id="about">
        <div className={styles.sectionHeading}>
          <p>About Me</p>
          <h2>I align technology, analytics, and business goals into one system</h2>
        </div>
        <div className={styles.aboutGrid}>
          <article className={styles.contentCard}>
            <p>
              I work at the intersection of engineering and analytics: building
              reliable interfaces, shaping architecture, automating reporting,
              and helping teams make decisions faster.
            </p>
            <p>
              I lead projects from idea to launch with a strong focus on
              performance, scalability, SEO, and long-term maintainability.
            </p>
          </article>
          <article className={styles.contentCard}>
            <p className={styles.listTitle}>What you get:</p>
            <ul className={styles.benefits}>
              <li>A clear process from first call to final outcome.</li>
              <li>Hands-on Power BI training with your real data.</li>
              <li>Practical decisions that improve efficiency and KPI clarity.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className={styles.section} id="expertise">
        <div className={styles.sectionHeading}>
          <p>Expertise</p>
          <h2>Services that strengthen your product and your team</h2>
        </div>
        <div className={styles.serviceGrid}>
          {services.map((service) => (
            <article key={service.title} className={styles.serviceCard}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section} id="contacts">
        <div className={styles.sectionHeading}>
          <p>Contacts</p>
          <h2>Reach out and let&apos;s start building your next result</h2>
        </div>
        <div className={styles.contactsGrid}>
          {contacts.map((contact) => (
            <a
              key={contact.label}
              className={styles.contactCard}
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
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        © {new Date().getFullYear()} {siteConfig.name}. Fullstack & Power BI.
      </footer>
    </main>
  );
}
