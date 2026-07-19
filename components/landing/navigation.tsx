"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Moon, Sun, X, Mail, Phone } from "lucide-react";
import { useTheme } from "next-themes";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: null },
];

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

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
    <header
      className={`fixed z-50 transition-all duration-500 ${
        isScrolled 
          ? "top-4 left-4 right-4" 
          : "top-0 left-0 right-0"
      }`}
    >
      <nav 
        className={`mx-auto transition-all duration-500 ${
          isScrolled || isMobileMenuOpen
            ? "bg-background/80 backdrop-blur-xl border border-foreground/10 rounded-2xl shadow-lg max-w-[1200px]"
            : "bg-transparent max-w-[1400px]"
        }`}
      >
        <div 
          className={`flex items-center justify-between transition-all duration-500 px-6 lg:px-8 ${
            isScrolled ? "h-14" : "h-20"
          }`}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className={`font-display tracking-tight transition-all duration-500 ${isScrolled ? "text-xl" : "text-2xl"}`}>Tandem AI Labs</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) =>
              link.href ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
                </a>
              ) : (
                <button
                  key={link.name}
                  onClick={() => setShowContact(true)}
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
                </button>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              type="button"
              size="icon"
              variant="ghost"
              aria-label={mounted && isDark ? "Switch to light mode" : "Switch to dark mode"}
              onClick={toggleTheme}
              className={`rounded-full transition-all duration-500 ${isScrolled ? "h-8 w-8" : "h-9 w-9"}`}
            >
              {mounted && isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button
              asChild
              size="sm"
              className={`bg-foreground hover:bg-foreground/90 text-background rounded-full transition-all duration-500 ${isScrolled ? "px-4 h-8 text-xs" : "px-6"}`}
            >
              <a href="https://cal.com/aryandhawan" target="_blank" rel="noreferrer">Book a Free Audit</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

      </nav>
      
      {/* Mobile Menu - Full Screen Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-background z-40 transition-all duration-500 ${
          isMobileMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        }`}
        style={{ top: 0 }}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-6 right-6 p-2 z-50"
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>

        <div
          className="flex flex-col h-full w-[calc(100%-3rem)] max-w-md px-8 pt-28 pb-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Navigation Links */}
          <div className="flex-1 flex flex-col justify-center gap-8">
            {navLinks.map((link, i) =>
              link.href ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-5xl font-display text-foreground hover:text-muted-foreground transition-all duration-500 ${
                    isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: isMobileMenuOpen ? `${i * 75}ms` : "0ms" }}
                >
                  {link.name}
                </a>
              ) : (
                <button
                  key={link.name}
                  onClick={() => { setIsMobileMenuOpen(false); setShowContact(true); }}
                  className={`text-5xl font-display text-foreground hover:text-muted-foreground transition-all duration-500 text-left ${
                    isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: isMobileMenuOpen ? `${i * 75}ms` : "0ms" }}
                >
                  {link.name}
                </button>
              )
            )}
          </div>
          
          {/* Bottom CTAs */}
          <div className={`flex gap-4 pt-8 border-t border-foreground/10 transition-all duration-500 ${
            isMobileMenuOpen 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: isMobileMenuOpen ? "300ms" : "0ms" }}
          >
            <Button
              type="button"
              size="icon"
              variant="outline"
              aria-label={mounted && isDark ? "Switch to light mode" : "Switch to dark mode"}
              onClick={toggleTheme}
              className="h-14 w-14 rounded-full"
            >
              {mounted && isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button asChild className="flex-1 bg-foreground text-background rounded-full h-14 text-base">
              <a
                href="https://cal.com/aryandhawan"
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book a Free Audit
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>

    {showContact && <ContactModal onClose={() => setShowContact(false)} />}
    </>
  );
}
