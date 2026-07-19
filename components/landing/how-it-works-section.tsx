"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "I",
    icon: "audit" as const,
    title: "Free AI Audit",
    description:
      "We map your workflows, identify where AI actually helps, and tell you honestly if it's worth building. No pitch, no pressure — just a clear picture of what's possible.",
  },
  {
    number: "II",
    icon: "blueprint" as const,
    title: "Blueprint & Pricing",
    description:
      "You get a clear scope, a fixed price, and a realistic timeline before any work begins. No hourly billing, no surprises halfway through.",
  },
  {
    number: "III",
    icon: "deploy" as const,
    title: "Deployment & Support",
    description:
      "We build and deploy your system on production-grade cloud infrastructure — then stay on to monitor, maintain, and improve it as your business grows.",
  },
];

function StepIcon({ type, size = 28 }: { type: "audit" | "blueprint" | "deploy"; size?: number }) {
  if (type === "audit") {
    return (
      <svg width={size} height={size} viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="7" />
        <line x1="17.5" y1="17.5" x2="23" y2="23" />
      </svg>
    );
  }
  if (type === "blueprint") {
    return (
      <svg width={size} height={size} viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="6" y="4" width="16" height="20" rx="1.5" />
        <line x1="10" y1="10" x2="18" y2="10" />
        <line x1="10" y1="14" x2="18" y2="14" />
        <line x1="10" y1="18" x2="14" y2="18" />
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M 8 20 Q 8 14 12 14 Q 13 10 17 10 Q 20 10 21 13 Q 23 12 25 13 Q 27 14 27 17 Q 27 20 24 20 L 10 20 Q 8 20 8 20 Z" strokeWidth="1.5" />
      <line x1="14" y1="24" x2="14" y2="17" />
      <path d="M 11 19.5 L 14 17 L 17 19.5" />
    </svg>
  );
}

function FlowVisual({ activeStep }: { activeStep: number }) {
  const nodeYs = [80, 200, 320];

  return (
    <svg viewBox="0 0 200 400" className="w-full h-full max-h-[420px]">
      {/* Connecting lines */}
      {[0, 1].map((i) => (
        <g key={i}>
          <line
            x1="100"
            y1={nodeYs[i] + 30}
            x2="100"
            y2={nodeYs[i + 1] - 30}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="5 4"
            opacity={activeStep > i ? 0.55 : 0.18}
            style={{ transition: "opacity 0.5s" }}
          />
          {/* Travelling dot when step becomes active */}
          {activeStep === i + 1 && (
            <circle r="3" fill="currentColor" opacity="0.7">
              <animateMotion
                dur="0.6s"
                fill="freeze"
                path={`M 100 ${nodeYs[i] + 30} L 100 ${nodeYs[i + 1] - 30}`}
              />
            </circle>
          )}
        </g>
      ))}

      {/* Nodes */}
      {nodeYs.map((cy, i) => {
        const isActive = activeStep === i;
        const isDone = activeStep > i;

        return (
          <g
            key={i}
            style={{
              opacity: isActive ? 1 : isDone ? 0.55 : 0.22,
              transition: "opacity 0.5s",
            }}
          >
            {/* Pulse ring — active only */}
            {isActive && (
              <circle cx="100" cy={cy} r="30" fill="none" stroke="currentColor" strokeWidth="1" opacity="0">
                <animate attributeName="r" values="30;50" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.35;0" dur="2s" repeatCount="indefinite" />
              </circle>
            )}

            {/* Outer ring */}
            <circle
              cx="100"
              cy={cy}
              r="28"
              fill="none"
              stroke="currentColor"
              strokeWidth={isActive ? 1.5 : 1}
            />

            {/* Subtle fill for active */}
            {isActive && (
              <circle cx="100" cy={cy} r="22" fill="currentColor" opacity="0.07" />
            )}

            {/* Step icon — centred inside node circle */}
            <g transform={`translate(${100}, ${cy})`} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
              {steps[i].icon === "audit" && (
                <>
                  <circle cx="0" cy="-1" r="6.5" strokeWidth="1.5" />
                  <line x1="4.5" y1="4.5" x2="8" y2="8" strokeWidth="1.5" />
                </>
              )}
              {steps[i].icon === "blueprint" && (
                <>
                  <rect x="-6" y="-9" width="12" height="15" rx="1" strokeWidth="1.5" />
                  <line x1="-3.5" y1="-4" x2="3.5" y2="-4" strokeWidth="1.2" />
                  <line x1="-3.5" y1="-1" x2="3.5" y2="-1" strokeWidth="1.2" />
                  <line x1="-3.5" y1="2" x2="1" y2="2" strokeWidth="1.2" />
                </>
              )}
              {steps[i].icon === "deploy" && (
                <>
                  <path d="M -9 2 Q -9 -4 -5 -4 Q -4 -8 0 -8 Q 3 -8 5 -6 Q 7 -7 9 -6 Q 11 -5 11 -2 Q 11 2 8 2 L -7 2 Q -9 2 -9 2 Z" strokeWidth="1.3" />
                  <line x1="0" y1="6" x2="0" y2="1" strokeWidth="1.4" />
                  <path d="M -3 3.5 L 0 0.5 L 3 3.5" strokeWidth="1.4" />
                </>
              )}
            </g>

          </g>
        );
      })}
    </svg>
  );
}

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-foreground text-background overflow-hidden"
    >
      {/* Diagonal lines pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 40px,
              currentColor 40px,
              currentColor 41px
            )`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-background/50 mb-6">
            <span className="w-8 h-px bg-background/30" />
            Process
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Three steps.
            <br />
            <span className="text-background/50">Nothing skipped.</span>
          </h2>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Steps */}
          <div className="space-y-0">
            {steps.map((step, index) => (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveStep(index)}
                className={`w-full text-left py-8 border-b border-background/10 transition-all duration-500 group ${
                  activeStep === index ? "opacity-100" : "opacity-40 hover:opacity-70"
                }`}
              >
                <div className="flex items-start gap-6">
                  <span className="shrink-0 opacity-30 mt-1">
                    <StepIcon type={step.icon} size={28} />
                  </span>
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-display mb-3 group-hover:translate-x-2 transition-transform duration-300">
                      {step.title}
                    </h3>
                    <p className="text-background/60 leading-relaxed">{step.description}</p>

                    {/* Progress bar */}
                    {activeStep === index && (
                      <div className="mt-4 h-px bg-background/20 overflow-hidden">
                        <div
                          className="h-full bg-background w-0"
                          style={{ animation: "progress 5s linear forwards" }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Flow visual */}
          <div className="lg:sticky lg:top-32 self-start flex items-center justify-center py-8">
            <div className="w-40 lg:w-48 h-[380px] lg:h-[420px] text-background">
              <FlowVisual activeStep={activeStep} />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
