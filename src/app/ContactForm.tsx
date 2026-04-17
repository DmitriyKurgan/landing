"use client";

import { useState } from "react";
import styles from "./page.module.css";

type Status = "idle" | "sending" | "sent" | "error";

const ENDPOINT = "https://formsubmit.co/ajax/dimakurgan123789@gmail.com";

const projectTypes = [
  "Power BI Performance Audit",
  "React + Power BI Embed Sprint",
  "Dashboard Rescue",
  "Custom full-stack build",
  "Not sure yet — let's talk",
];

const budgetRanges = [
  "Under $5k",
  "$5k–$15k",
  "$15k–$40k",
  "$40k+",
  "Ongoing monthly retainer",
];

const timelines = [
  "ASAP (this month)",
  "Within 4–6 weeks",
  "Next quarter",
  "Flexible / exploring",
];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (data.get("company_hp")) {
      setStatus("sent");
      form.reset();
      return;
    }

    setStatus("sending");
    setErrorMessage(null);

    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          company: data.get("company"),
          project_type: data.get("project_type"),
          budget: data.get("budget"),
          timeline: data.get("timeline"),
          message: data.get("message"),
          _subject: `Portfolio inquiry — ${data.get("project_type") || "general"}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const payload = (await response.json().catch(() => null)) as
        | { success?: string | boolean }
        | null;
      const ok =
        payload?.success === true ||
        payload?.success === "true" ||
        response.status === 200;

      if (!ok) throw new Error("Submission was not accepted");

      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong",
      );
    }
  }

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit} noValidate>
      <div className={styles.formRow}>
        <label className={styles.formField}>
          <span>Your name</span>
          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jane Doe"
          />
        </label>
        <label className={styles.formField}>
          <span>Work email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
          />
        </label>
      </div>
      <div className={styles.formRow}>
        <label className={styles.formField}>
          <span>Company</span>
          <input
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Acme Analytics"
          />
        </label>
        <label className={styles.formField}>
          <span>Project type</span>
          <select name="project_type" defaultValue="" required>
            <option value="" disabled>
              Select one…
            </option>
            {projectTypes.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className={styles.formRow}>
        <label className={styles.formField}>
          <span>Budget range</span>
          <select name="budget" defaultValue="">
            <option value="" disabled>
              Select one…
            </option>
            {budgetRanges.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </label>
        <label className={styles.formField}>
          <span>Timeline</span>
          <select name="timeline" defaultValue="">
            <option value="" disabled>
              Select one…
            </option>
            {timelines.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className={styles.formField}>
        <span>One-line goal</span>
        <textarea
          name="message"
          rows={4}
          required
          placeholder="e.g. Replace our 14-second exec dashboard with something finance actually opens on Monday."
        />
      </label>
      <input
        type="text"
        name="company_hp"
        tabIndex={-1}
        autoComplete="off"
        className={styles.honeypot}
        aria-hidden="true"
      />
      <div className={styles.formFooter}>
        <button
          type="submit"
          className={styles.primaryButton}
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending…" : "Send project brief"}
        </button>
        <p
          className={styles.formStatus}
          data-state={status}
          role="status"
          aria-live="polite"
        >
          {status === "sent" && "Thanks — brief received. Reply within 1–2 business days."}
          {status === "error" &&
            `Could not send right now${errorMessage ? ` (${errorMessage})` : ""}. Please email directly.`}
          {status === "idle" && "No spam. Brief used only to scope the call."}
          {status === "sending" && "Delivering to inbox…"}
        </p>
      </div>
    </form>
  );
}
