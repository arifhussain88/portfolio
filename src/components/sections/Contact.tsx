"use client";

import { useState, FormEvent } from "react";
import { siteConfig } from "@/lib/constants";

type FormState = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "mt-2 w-full border-0 border-b border-border bg-transparent px-0 py-2 text-lg text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none";

export function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const formspreeConfigured =
    siteConfig.formspreeId && siteConfig.formspreeId !== "your_form_id_here";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formspreeConfigured) {
      setFormState("error");
      setErrorMessage("The form is not set up yet. Email is the direct way.");
      return;
    }

    setFormState("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        `https://formspree.io/f/${siteConfig.formspreeId}`,
        {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        },
      );

      if (response.ok) {
        setFormState("success");
        form.reset();
      } else {
        const data = await response.json();
        setFormState("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setFormState("error");
      setErrorMessage("Network error. Please try again, or email directly.");
    }
  };

  const secondary = [
    {
      label: "Phone",
      value: siteConfig.phone,
      href: `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`,
      external: false,
    },
    {
      label: "LinkedIn",
      value: "LinkedIn",
      href: siteConfig.linkedin,
      external: true,
    },
    {
      label: "GitHub",
      value: "GitHub",
      href: siteConfig.github,
      external: true,
    },
    {
      label: "Résumé",
      value: "Résumé",
      href: siteConfig.resumePath,
      external: false,
    },
  ];

  return (
    <section id="contact" className="page-wrap py-24 md:py-32">
      <p className="text-sm text-muted">Write</p>
      <h2 className="mt-4 max-w-full font-display text-[clamp(1.7rem,7vw,3.75rem)] leading-[1.15] font-medium tracking-tight break-words text-foreground">
        <a href={`mailto:${siteConfig.email}`} className="link decoration-accent/30">
          {siteConfig.email}
        </a>
      </h2>
      <p className="reading mt-6 text-lg leading-relaxed text-foreground">
        A short note is enough. I reply by email.
      </p>

      <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
        {secondary.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="link"
            >
              {link.value}
            </a>
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit} className="mt-16 max-w-xl space-y-8">
        <div>
          <label htmlFor="name" className="text-sm text-muted">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            autoComplete="name"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="email" className="text-sm text-muted">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="message" className="text-sm text-muted">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className={fieldClass}
          />
        </div>

        <div aria-live="polite">
          {formState === "success" && (
            <p className="text-base text-foreground">Sent. I will reply by email.</p>
          )}
          {formState === "error" && (
            <p className="text-base text-foreground">{errorMessage}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={formState === "submitting"}
          className="cursor-pointer bg-foreground px-6 py-3 text-sm text-background transition-colors duration-200 hover:bg-accent disabled:cursor-wait disabled:opacity-60"
        >
          {formState === "submitting" ? "Sending" : "Send the note"}
        </button>
      </form>
    </section>
  );
}
