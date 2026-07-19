"use client";

import { useEffect, useState, useRef } from "react";

const items = [
  { title: "Global Cloud Deployment", description: "Azure · AWS · GCP · DigitalOcean · Vercel · Railway", status: "Active" },
  { title: "Cross-Region Accessibility", description: "Any device, anywhere", status: "Active" },
  { title: "Post-Launch Monitoring", description: "Tracking performance & uptime", status: "Active" },
  { title: "Scalable Architecture", description: "Grows with your usage", status: "Active" },
];

export function InfrastructureSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveItem((prev) => (prev + 1) % items.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              About
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-8">
              Direct access.
              <br />
              No overhead.
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Most agencies hand you off — a salesperson closes the deal, a project manager relays updates, a developer you never meet does the actual work. Tandem AI Labs works differently. You work directly with the person designing, building, and deploying your system — from the first conversation to the last line of code. No hand-offs. No diluted context. Just one accountable builder, focused entirely on getting your system right.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-2xl lg:text-3xl font-display mb-2">Live in Production</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-display mb-2">Direct Access</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-display mb-2">End-to-End Delivery</div>
              </div>
            </div>
          </div>

          {/* Right: Panel */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="border border-foreground/10">
              {/* Header */}
              <div className="px-6 py-4 border-b border-foreground/10 flex items-center justify-between">
                <span className="text-sm font-mono text-muted-foreground">Cloud-Native. Globally Accessible.</span>
                <span className="flex items-center gap-2 text-xs font-mono text-green-600">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  All operational
                </span>
              </div>

              {/* Items */}
              <div>
                {items.map((item, index) => (
                  <div
                    key={item.title}
                    className={`px-6 py-5 border-b border-foreground/5 last:border-b-0 flex items-center justify-between transition-all duration-300 ${
                      activeItem === index ? "bg-foreground/[0.02]" : ""
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                          activeItem === index ? "bg-foreground" : "bg-foreground/20"
                        }`}
                      />
                      <div>
                        <div className="font-medium">{item.title}</div>
                        <div className="text-sm text-muted-foreground">{item.description}</div>
                      </div>
                    </div>
                    <span className="font-mono text-sm text-muted-foreground">{item.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
