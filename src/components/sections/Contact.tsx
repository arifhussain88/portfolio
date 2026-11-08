"use client";

import { useState, FormEvent } from "react";
import { siteConfig } from "@/lib/constants";
import { ArrowUpRight, Reveal } from "@/components/ui/Reveal";

type FormState = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted transition-colors focus:border-foreground focus:outline-none";

export function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const formspreeConfigured =
    siteConfig.formspreeId && siteConfig.formspreeId !== "your_form_id_here";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${siteConfig.email}`;
    }
  };

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

    try {
      const response = await fetch(`https://formspree.io/f/${siteConfig.formspreeId}`, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setFormState("success");
        form.reset();
      } else {
        const data = await response.json().catch(() => ({}));
        setFormState("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setFormState("error");
      setErrorMessage("Network error. Please try again, or email directly.");
    }
  };

  const links = [
    { label: "LinkedIn", href: siteConfig.linkedin },
    { label: "GitHub", href: siteConfig.github },
    { label: "Résumé (PDF)", href: siteConfig.resumePath },
    { label: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}` },
  ];

  return (
    <section id="contact" className="page-wrap py-24 md:py-32">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-3 text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.98] font-semibold tracking-[-0.04em] text-foreground">
            Have a role or a product{" "}
            <span className="font-serif font-normal text-accent italic">in mind?</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
            A short note is enough. I reply by email.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex max-w-full items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium break-all text-background transition-transform hover:-translate-y-0.5"
            >
              {siteConfig.email}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="cursor-pointer rounded-full border border-border-strong px-5 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-foreground"
              aria-live="polite"
            >
              {copied ? "Copied ✓" : "Copy"}
            </button>
          </div>

          <ul className="mt-10 divide-y divide-border border-y border-border">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.href.startsWith("http") || link.href.endsWith(".pdf")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex items-center justify-between py-4 text-foreground transition-colors hover:text-accent-ink"
                >
                  {link.label}
                  <ArrowUpRight className="size-4 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-ink" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-border bg-surface p-6 shadow-card md:p-8"
          >
            <p className="text-lg font-semibold text-foreground">Send a note</p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-ink-2">
                  Name
                </label>
                <input type="text" id="name" name="name" required autoComplete="name" className={fieldClass} />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-ink-2">
                  Email
                </label>
                <input type="email" id="email" name="email" required autoComplete="email" className={fieldClass} />
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="message" className="text-sm font-medium text-ink-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className={`${fieldClass} resize-y`}
                placeholder="What are you building?"
              />
            </div>

            <div aria-live="polite" className="mt-4 min-h-6 text-sm">
              {formState === "success" && <p className="text-success">Sent. I will reply by email.</p>}
              {formState === "error" && <p className="text-accent-ink">{errorMessage}</p>}
            </div>

            <button
              type="submit"
              disabled={formState === "submitting"}
              className="mt-2 w-full cursor-pointer rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-all hover:brightness-110 disabled:cursor-wait disabled:opacity-60"
            >
              {formState === "submitting" ? "Sending…" : "Send the note"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
