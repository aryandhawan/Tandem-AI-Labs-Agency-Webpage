"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, X, Mail, Phone } from "lucide-react";
import { AnimatedTetrahedron } from "./animated-tetrahedron";

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
        {/* Close button */}
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
          <a
            href="mailto:aryan@tandem-ai.tech"
            className="flex items-center gap-4 group"
          >
            <div className="w-10 h-10 flex items-center justify-center border border-foreground/10 group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-mono text-muted-foreground mb-0.5">Email</div>
              <div className="text-sm font-medium group-hover:underline">aryan@tandem-ai.tech</div>
            </div>
          </a>

          <a
            href="tel:+917359563504"
            className="flex items-center gap-4 group"
          >
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

export function CtaSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <>
      <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div
            className={`relative border border-foreground transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            onMouseMove={handleMouseMove}
          >
            {/* Spotlight effect */}
            <div
              className="absolute inset-0 opacity-10 pointer-events-none transition-opacity duration-300"
              style={{
                background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0,0,0,0.15), transparent 40%)`,
              }}
            />

            <div className="relative z-10 px-8 lg:px-16 py-16 lg:py-24">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                {/* Left content */}
                <div className="flex-1">
                  <h2 className="text-4xl lg:text-7xl font-display tracking-tight mb-8 leading-[0.95]">
                    Ready to build
                    <br />
                    something great?
                  </h2>

                  <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-xl">
                    Every project starts with a conversation, not a sales pitch. Let&apos;s talk about what&apos;s actually worth automating.
                  </p>

                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <Button
                      asChild
                      size="lg"
                      className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group"
                    >
                      <a href="https://cal.com/aryandhawan" target="_blank" rel="noreferrer">
                        Book a Free Audit
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="h-14 px-8 text-base rounded-full border-foreground/20 hover:bg-foreground/5"
                      onClick={() => setShowContact(true)}
                    >
                      Contact Us
                    </Button>
                  </div>
                </div>

                {/* Right animation */}
                <div className="hidden lg:flex items-center justify-center w-[500px] h-[500px] -mr-16">
                  <AnimatedTetrahedron />
                </div>
              </div>
            </div>

            {/* Decorative corners */}
            <div className="absolute top-0 right-0 w-32 h-32 border-b border-l border-foreground/10" />
            <div className="absolute bottom-0 left-0 w-32 h-32 border-t border-r border-foreground/10" />
          </div>
        </div>
      </section>

      {showContact && <ContactModal onClose={() => setShowContact(false)} />}
    </>
  );
}
