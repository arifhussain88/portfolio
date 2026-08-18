"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { fadeUp } from "@/lib/motion";

type FormState = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const formspreeConfigured =
    siteConfig.formspreeId && siteConfig.formspreeId !== "your_form_id_here";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formspreeConfigured) {
      setFormState("error");
      setErrorMessage(
        "Contact form not configured yet. Add NEXT_PUBLIC_FORMSPREE_ID to .env.local",
      );
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
      setErrorMessage("Network error. Please try again or email directly.");
    }
  };

  const contactLinks = [
    {
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      label: "Phone",
      value: siteConfig.phone,
      href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
    },
    {
      label: "LinkedIn",
      value: "sayed-arifhussain",
      href: siteConfig.linkedin,
    },
    {
      label: "GitHub",
      value: "arifhussain88",
      href: siteConfig.github,
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Contact"
          title="Let's build something"
          description="Open to senior engineering, full-stack, and technical leadership roles — remote or global."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-muted">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-foreground outline-none transition-colors focus:border-accent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-muted">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-foreground outline-none transition-colors focus:border-accent"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm text-muted"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 text-foreground outline-none transition-colors focus:border-accent"
                  placeholder="Tell me about the role or project..."
                />
              </div>

              <MagneticButton
                type="submit"
                variant="primary"
                className="w-full md:w-auto"
                disabled={formState === "submitting"}
              >
                {formState === "submitting" ? "Sending..." : "Send message"}
              </MagneticButton>

              {formState === "success" && (
                <p className="text-sm text-accent">
                  Message sent — I&apos;ll get back to you soon.
                </p>
              )}
              {formState === "error" && (
                <p className="text-sm text-red-400">{errorMessage}</p>
              )}
              {!formspreeConfigured && formState === "idle" && (
                <p className="text-xs text-muted-foreground">
                  Form UI ready — add your Formspree ID to .env.local to enable
                  submissions.
                </p>
              )}
            </form>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-base leading-relaxed text-muted">
              Prefer reaching out directly? Use any of the channels below.
            </p>

            <div className="space-y-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label === "Email" || link.label === "Phone" ? undefined : "_blank"}
                  rel={
                    link.label === "Email" || link.label === "Phone"
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="group flex items-center justify-between rounded-xl border border-border bg-surface p-4 transition-all hover:border-accent/30 hover:bg-surface-elevated"
                >
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      {link.label}
                    </p>
                    <p className="mt-1 text-sm text-foreground group-hover:text-accent">
                      {link.value}
                    </p>
                  </div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
