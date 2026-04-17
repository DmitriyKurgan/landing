"use client";

import { useState } from "react";
import styles from "./page.module.css";

type Status = "idle" | "sending" | "sent" | "error";

const ENDPOINT = "https://formsubmit.co/ajax/dimakurgan123789@gmail.com";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (data.get("company")) {
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
          message: data.get("message"),
          _subject: "New inquiry from portfolio site",
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
          <span>Email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
          />
        </label>
      </div>
      <label className={styles.formField}>
        <span>Message</span>
        <textarea
          name="message"
          rows={5}
          required
          placeholder="Tell me about your project, stack, and timeline."
        />
      </label>
      <input
        type="text"
        name="company"
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
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        <p
          className={styles.formStatus}
          data-state={status}
          role="status"
          aria-live="polite"
        >
          {status === "sent" && "Thanks — your message is on its way."}
          {status === "error" &&
            `Could not send right now${errorMessage ? ` (${errorMessage})` : ""}. Please email directly.`}
          {status === "idle" && "Direct reply within 1–2 business days."}
          {status === "sending" && "Delivering to inbox…"}
        </p>
      </div>
    </form>
  );
}
