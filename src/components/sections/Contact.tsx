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
      desc: "Fastest response for engineering inquiries",
    },
    {
      label: "Phone / WhatsApp",
      value: siteConfig.phone,
      href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
      desc: "Direct voice / message availability",
    },
    {
      label: "LinkedIn",
      value: "sayed-arifhussain",
      href: siteConfig.linkedin,
      desc: "Professional background & endorsements",
    },
    {
      label: "GitHub",
      value: "arifhussain88",
      href: siteConfig.github,
      desc: "Open source contributions & repositories",
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Direct Communication"
          title="Let's Build Something High-Impact"
          description="Open to senior full-stack engineering roles, systems architecture consulting, and technical leadership."
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_420px]">
          {/* Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-surface p-8 shadow-xs"
          >
            <h3 className="font-display text-xl font-bold text-foreground mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block font-mono text-xs font-semibold uppercase tracking-wider text-foreground mb-1.5"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full rounded-xl border border-border bg-surface-elevated/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-accent focus:bg-surface focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-mono text-xs font-semibold uppercase tracking-wider text-foreground mb-1.5"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="e.g. sarah@company.com"
                  className="w-full rounded-xl border border-border bg-surface-elevated/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-accent focus:bg-surface focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-mono text-xs font-semibold uppercase tracking-wider text-foreground mb-1.5"
                >
                  Project or Opportunity Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your tech stack, system requirements, or open role..."
                  className="w-full rounded-xl border border-border bg-surface-elevated/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-accent focus:bg-surface focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
              </div>

              {formState === "success" && (
                <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-4 text-sm text-emerald-900">
                  <p className="font-semibold">Message sent successfully!</p>
                  <p className="mt-0.5 text-xs">Thank you for reaching out. I will respond to your email promptly.</p>
                </div>
              )}

              {formState === "error" && (
                <div className="rounded-xl border border-red-300 bg-red-50 p-4 text-sm text-red-900">
                  <p className="font-semibold">Unable to submit form</p>
                  <p className="mt-0.5 text-xs">{errorMessage}</p>
                </div>
              )}

              <MagneticButton
                type="submit"
                variant="primary"
                disabled={formState === "submitting"}
                className="w-full sm:w-auto"
              >
                {formState === "submitting" ? "Sending..." : "Submit Message"}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </MagneticButton>
            </form>
          </motion.div>

          {/* Direct channels */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <div className="rounded-2xl border border-border bg-surface p-6 shadow-xs">
              <h3 className="font-display text-base font-bold text-foreground mb-4">
                Direct Channels
              </h3>
              <div className="space-y-4">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.label.includes("Email") || link.label.includes("Phone") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="group block rounded-xl border border-border/80 bg-surface-elevated/40 p-3.5 transition-all hover:border-accent hover:bg-surface hover:shadow-xs"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-accent">
                        {link.label}
                      </span>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 14 14"
                        fill="none"
                        className="text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                      >
                        <path d="M3 11L11 3M11 3H5M11 3v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="mt-1 font-mono text-sm font-semibold text-foreground">
                      {link.value}
                    </p>
                    <p className="text-[11px] text-muted mt-0.5">
                      {link.desc}
                    </p>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
                </span>
                <span className="font-mono text-xs font-bold text-emerald-900">
                  Global Availability
                </span>
              </div>
              <p className="mt-1.5 text-xs text-emerald-800 leading-relaxed">
                Available for full-time remote roles, consulting sprints, and technical advisory across US, UK, European, and Gulf time zones.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
