"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, X, Mail, Phone } from "lucide-react";
import { AnimatedWave } from "./animated-wave";

function ContactModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-background border border-foreground/10 p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="font-display text-2xl tracking-tight mb-2">Get in touch</h3>
        <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
          Reach out directly — no forms, no bots.
        </p>

        <div className="space-y-6">
          <a href="mailto:aryan@tandem-ai.tech" className="flex items-center gap-4 group">
            <div className="w-10 h-10 flex items-center justify-center border border-foreground/10 group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-mono text-muted-foreground mb-0.5">Email</div>
              <div className="text-sm font-medium group-hover:underline">aryan@tandem-ai.tech</div>
            </div>
          </a>

          <a href="tel:+917359563504" className="flex items-center gap-4 group">
            <div className="w-10 h-10 flex items-center justify-center border border-foreground/10 group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-mono text-muted-foreground mb-0.5">Phone</div>
              <div className="text-sm font-medium group-hover:underline">+91 73595 63504</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

function DocModal({ title, children, onClose }: { title: string; children: React.ReactNode; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-background border border-foreground/10 flex flex-col"
        style={{ maxHeight: "85vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-foreground/10 shrink-0">
          <h3 className="font-display text-2xl tracking-tight">{title}</h3>
          <button
            onClick={onClose}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto px-8 py-8 text-sm leading-relaxed space-y-5">
          {children}
        </div>
      </div>
    </div>
  );
}

const privacyContent = [
  { type: "meta", text: "Last updated: July 2026" },
  { type: "p", text: 'Tandem AI Labs ("we," "us," "our") operates tandem-ai.tech (the "Site"). This Privacy Policy explains how we collect, use, and protect information when you use our Site or engage our services.' },
  { type: "h2", text: "Information We Collect" },
  { type: "ul", items: [
    "Contact information you provide (name, email, phone number) when you book a consultation, submit a contact form, or communicate with us directly",
    "Information shared during business audits or project engagements, which may include details about your business operations, workflows, and systems",
    "Basic usage data collected automatically (such as pages visited), where applicable",
  ]},
  { type: "h2", text: "How We Use Your Information" },
  { type: "ul", items: [
    "To respond to inquiries and schedule consultations",
    "To scope, propose, and deliver services you engage us for",
    "To communicate about ongoing or potential projects",
    "We do not sell, rent, or share your personal information with third parties for marketing purposes",
  ]},
  { type: "h2", text: "Client Project Data" },
  { type: "p", text: "Any business data, documents, or system access shared with us during a project engagement is used solely for the purpose of delivering that engagement, and is handled according to the confidentiality terms agreed upon in the applicable service agreement or proposal." },
  { type: "h2", text: "Data Storage and Security" },
  { type: "p", text: "We take reasonable measures to protect information shared with us, including secure cloud infrastructure and access controls. However, no method of transmission or storage is 100% secure, and we cannot guarantee absolute security." },
  { type: "h2", text: "Third-Party Services" },
  { type: "p", text: "Our Site and services may use third-party tools (such as scheduling software, cloud hosting providers, or communication platforms). These third parties have their own privacy policies governing their use of your information." },
  { type: "h2", text: "Your Rights" },
  { type: "p", text: "You may request access to, correction of, or deletion of your personal information held by us by contacting us at aryan@tandem-ai.tech." },
  { type: "h2", text: "Changes to This Policy" },
  { type: "p", text: "We may update this Privacy Policy from time to time. Continued use of the Site after changes constitutes acceptance of the updated policy." },
  { type: "h2", text: "Contact" },
  { type: "p", text: "Questions about this policy can be directed to aryan@tandem-ai.tech." },
];

const termsContent = [
  { type: "meta", text: "Last updated: July 2026" },
  { type: "p", text: 'These Terms of Service ("Terms") govern your use of tandem-ai.tech (the "Site") and any services provided by Tandem AI Labs ("we," "us," "our"). By using the Site or engaging our services, you agree to these Terms.' },
  { type: "h2", text: "Services" },
  { type: "p", text: "Tandem AI Labs provides custom AI consulting, development, and automation services, including but not limited to RAG systems, AI agents, workflow automation, and related consulting. The specific scope, deliverables, timeline, and pricing for any engagement will be defined in a separate written proposal or agreement, which takes precedence over these general Terms in the event of conflict." },
  { type: "h2", text: "Free Audit Calls" },
  { type: "p", text: "Free consultation or audit calls are provided for informational purposes to assess potential project fit. They do not constitute a binding commitment to engage in paid work by either party." },
  { type: "h2", text: "Payment Terms" },
  { type: "p", text: "Unless otherwise specified in a signed proposal, projects require an upfront deposit before work begins, with the remaining balance due upon delivery. Specific payment terms, including amounts and schedules, will be outlined in the individual project proposal." },
  { type: "h2", text: "Intellectual Property" },
  { type: "p", text: "Unless otherwise agreed in writing, ownership of custom code, systems, and deliverables built specifically for a client transfers to the client upon full payment. Tandem AI Labs retains the right to use general methodologies, frameworks, and non-confidential knowledge gained across projects, and may reference completed projects in portfolio materials unless the client has requested confidentiality in writing." },
  { type: "h2", text: "Confidentiality" },
  { type: "p", text: "We treat client business information shared during engagements as confidential and will not disclose it to third parties without consent, except as required by law." },
  { type: "h2", text: "Limitation of Liability" },
  { type: "p", text: 'Tandem AI Labs provides services on an "as-is" basis. While we take reasonable care to deliver reliable, well-tested systems, we are not liable for indirect, incidental, or consequential damages arising from the use of delivered systems, including but not limited to lost profits, business interruption, or data loss, except where such liability cannot be excluded by law. Total liability for any claim shall not exceed the amount paid by the client for the specific engagement in question.' },
  { type: "h2", text: "Client Responsibilities" },
  { type: "p", text: "Clients are responsible for providing accurate information, timely feedback, and necessary access (such as API keys, credentials, or system access) required to complete the engagement. Delays caused by incomplete or delayed client input may affect project timelines." },
  { type: "h2", text: "Termination" },
  { type: "p", text: "Either party may terminate an ongoing engagement with written notice, subject to payment for work completed up to the termination date, as outlined in the specific project agreement." },
  { type: "h2", text: "Governing Law" },
  { type: "p", text: "These Terms are governed by the laws of India, without regard to conflict of law principles." },
  { type: "h2", text: "Changes to These Terms" },
  { type: "p", text: "We may update these Terms from time to time. Continued use of the Site or engagement of Services after changes constitutes acceptance of the updated Terms." },
  { type: "h2", text: "Contact" },
  { type: "p", text: "Questions about these Terms can be directed to aryan@tandem-ai.tech." },
];

type ContentBlock =
  | { type: "meta"; text: string }
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

function renderBlocks(blocks: ContentBlock[]) {
  return blocks.map((block, i) => {
    if (block.type === "meta") {
      return (
        <p key={i} className="font-mono text-xs text-muted-foreground">
          {block.text}
        </p>
      );
    }
    if (block.type === "h2") {
      return (
        <h2 key={i} className="font-display text-base tracking-tight text-foreground pt-2 border-t border-foreground/10">
          {block.text}
        </h2>
      );
    }
    if (block.type === "p") {
      return (
        <p key={i} className="text-muted-foreground">
          {block.text}
        </p>
      );
    }
    if (block.type === "ul") {
      return (
        <ul key={i} className="space-y-2 pl-4">
          {block.items.map((item, j) => (
            <li key={j} className="text-muted-foreground flex gap-2">
              <span className="text-foreground/30 shrink-0">–</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    }
    return null;
  });
}

const socialLinks = [
  { name: "GitHub", href: "https://github.com/aryandhawan" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/aryan-dhawan-40760a160/" },
];

const exploreLinks = [
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "Process", href: "#how-it-works" },
  { name: "Contact", href: null, modal: "contact" as const },
];

export function FooterSection() {
  const [showContact, setShowContact] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  return (
    <>
      <footer className="relative border-t border-foreground/10">
        {/* Animated wave background */}
        <div className="absolute inset-0 h-64 opacity-20 pointer-events-none overflow-hidden">
          <AnimatedWave />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Main Footer */}
          <div className="py-16 lg:py-24">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-12 lg:gap-8">
              {/* Brand Column */}
              <div className="col-span-2">
                <a href="#" className="inline-flex items-center gap-2 mb-6">
                  <span className="text-2xl font-display">Tandem AI Labs</span>
                </a>

                <p className="text-muted-foreground leading-relaxed mb-8 max-w-xs">
                  Custom RAG systems, agentic AI, and workflow automation — built end-to-end.
                </p>

                {/* Social Links */}
                <div className="flex gap-6">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Explore */}
              <div>
                <h3 className="text-sm font-medium mb-6">Explore</h3>
                <ul className="space-y-4">
                  {exploreLinks.map((link) =>
                    link.href ? (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {link.name}
                        </a>
                      </li>
                    ) : (
                      <li key={link.name}>
                        <button
                          onClick={() => setShowContact(true)}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {link.name}
                        </button>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-sm font-medium mb-6">Company</h3>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="#about"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={() => setShowContact(true)}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Contact
                    </button>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 className="text-sm font-medium mb-6">Legal</h3>
                <ul className="space-y-4">
                  <li>
                    <button
                      onClick={() => setShowPrivacy(true)}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Privacy
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setShowTerms(true)}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Terms
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="py-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 Tandem AI Labs. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {showContact && <ContactModal onClose={() => setShowContact(false)} />}

      {showPrivacy && (
        <DocModal title="Privacy Policy" onClose={() => setShowPrivacy(false)}>
          {renderBlocks(privacyContent as ContentBlock[])}
        </DocModal>
      )}

      {showTerms && (
        <DocModal title="Terms of Service" onClose={() => setShowTerms(false)}>
          {renderBlocks(termsContent as ContentBlock[])}
        </DocModal>
      )}
    </>
  );
}
