"use client";

import { useEffect, useRef, useState } from "react";

const features = [
  {
    number: "01",
    title: "Custom RAG Systems",
    description: "Domain-aware bots that retrieve and reason from your actual business data — not generic answers. Built on production-grade retrieval pipelines, not toy demos.",
    visual: "ai",
  },
  {
    number: "02",
    title: "Agentic AI Systems",
    description: "AI that doesn't just respond — it acts. Multi-step agents that make decisions, call tools, and complete tasks on your behalf, with full guardrails and oversight.",
    visual: "agentic",
  },
  {
    number: "03",
    title: "AI Workflow Automation",
    description: "End-to-end automation that removes repetitive manual work — from customer replies to internal operations — so your team focuses on what actually needs a human.",
    visual: "deploy",
  },
  {
    number: "04",
    title: "Custom Integrations",
    description: "Connecting AI directly into your existing stack — WhatsApp, CRMs, databases, internal tools — so it works inside the systems you already run on.",
    visual: "collab",
  },
  {
    number: "05",
    title: "Cloud Deployment & Infrastructure",
    description: "Production deployment on Azure or AWS, built for reliability — not just a script running on a laptop. Monitoring, uptime, and scaling handled from day one.",
    visual: "security",
  },
];

function DeployVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <defs>
        <clipPath id="deployClip">
          <rect x="30" y="20" width="140" height="120" rx="4" />
        </clipPath>
      </defs>
      
      {/* Container */}
      <rect x="30" y="20" width="140" height="120" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
      
      {/* Animated bars */}
      <g clipPath="url(#deployClip)">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <rect
            key={i}
            x="40"
            y={35 + i * 16}
            width="120"
            height="10"
            rx="2"
            fill="currentColor"
            opacity="0.15"
          >
            <animate
              attributeName="opacity"
              values="0.15;0.8;0.15"
              dur="2s"
              begin={`${i * 0.15}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="width"
              values="20;120;20"
              dur="2s"
              begin={`${i * 0.15}s`}
              repeatCount="indefinite"
            />
          </rect>
        ))}
      </g>
      
      {/* Progress indicator */}
      <circle cx="100" cy="155" r="3" fill="currentColor" opacity="0.3">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function AIVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {/* Central node */}
      <circle cx="100" cy="80" r="12" fill="currentColor">
        <animate attributeName="r" values="12;14;12" dur="2s" repeatCount="indefinite" />
      </circle>
      
      {/* Orbiting nodes */}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const angle = (i * 60) * (Math.PI / 180);
        const radius = 50;
        return (
          <g key={i}>
            {/* Connection line */}
            <line
              x1="100"
              y1="80"
              x2={100 + Math.cos(angle) * radius}
              y2={80 + Math.sin(angle) * radius}
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.3"
            >
              <animate
                attributeName="opacity"
                values="0.3;0.8;0.3"
                dur="2s"
                begin={`${i * 0.3}s`}
                repeatCount="indefinite"
              />
            </line>
            
            {/* Outer node */}
            <circle
              cx={100 + Math.cos(angle) * radius}
              cy={80 + Math.sin(angle) * radius}
              r="6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <animate
                attributeName="r"
                values="6;8;6"
                dur="2s"
                begin={`${i * 0.3}s`}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        );
      })}
      
      {/* Pulse rings */}
      <circle cx="100" cy="80" r="30" fill="none" stroke="currentColor" strokeWidth="1" opacity="0">
        <animate attributeName="r" values="20;60" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function AgenticVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {/* Hub */}
      <circle cx="44" cy="80" r="8" fill="none" stroke="currentColor" strokeWidth="2">
        <animate attributeName="r" values="8;10;8" dur="2.4s" repeatCount="indefinite" />
      </circle>

      {/* Branch paths that light up in sequence */}
      <path d="M 52 80 L 88 80" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.25">
        <animate attributeName="opacity" values="0.25;1;0.25" dur="1.8s" begin="0s" repeatCount="indefinite" />
      </path>
      <path d="M 88 80 L 122 56" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.25">
        <animate attributeName="opacity" values="0.25;1;0.25" dur="1.8s" begin="0.3s" repeatCount="indefinite" />
      </path>
      <path d="M 88 80 L 122 80" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.25">
        <animate attributeName="opacity" values="0.25;1;0.25" dur="1.8s" begin="0.6s" repeatCount="indefinite" />
      </path>
      <path d="M 88 80 L 122 104" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.25">
        <animate attributeName="opacity" values="0.25;1;0.25" dur="1.8s" begin="0.9s" repeatCount="indefinite" />
      </path>
      <path d="M 122 56 L 156 56" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.25">
        <animate attributeName="opacity" values="0.25;1;0.25" dur="1.8s" begin="1.2s" repeatCount="indefinite" />
      </path>
      <path d="M 122 80 L 156 80" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.25">
        <animate attributeName="opacity" values="0.25;1;0.25" dur="1.8s" begin="1.5s" repeatCount="indefinite" />
      </path>
      <path d="M 122 104 L 156 104" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.25">
        <animate attributeName="opacity" values="0.25;1;0.25" dur="1.8s" begin="1.8s" repeatCount="indefinite" />
      </path>

      {/* Decision/action nodes */}
      {[56, 80, 104].map((y, i) => (
        <circle key={y} cx="156" cy={y} r="6" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.4">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="1.8s" begin={`${1.2 + i * 0.3}s`} repeatCount="indefinite" />
        </circle>
      ))}

      {/* Moving execution pulse */}
      <circle r="3.5" fill="currentColor">
        <animateMotion dur="1.8s" begin="0s" repeatCount="indefinite" path="M 52 80 L 88 80 L 122 56 L 156 56" />
      </circle>
      <circle r="3.5" fill="currentColor">
        <animateMotion dur="1.8s" begin="0.6s" repeatCount="indefinite" path="M 52 80 L 88 80 L 122 80 L 156 80" />
      </circle>
      <circle r="3.5" fill="currentColor">
        <animateMotion dur="1.8s" begin="1.2s" repeatCount="indefinite" path="M 52 80 L 88 80 L 122 104 L 156 104" />
      </circle>
    </svg>
  );
}

function CollabVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {/* User A */}
      <g>
        <rect x="30" y="50" width="50" height="60" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <text x="55" y="85" textAnchor="middle" fontSize="20" fontFamily="monospace" fill="currentColor">A</text>
        <circle cx="55" cy="35" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
      </g>
      
      {/* User B */}
      <g>
        <rect x="120" y="50" width="50" height="60" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <text x="145" y="85" textAnchor="middle" fontSize="20" fontFamily="monospace" fill="currentColor">B</text>
        <circle cx="145" cy="35" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
      </g>
      
      {/* Connection */}
      <line x1="80" y1="80" x2="120" y2="80" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4">
        <animate attributeName="stroke-dashoffset" values="0;-8" dur="0.5s" repeatCount="indefinite" />
      </line>
      
      {/* Data packet */}
      <circle r="4" fill="currentColor">
        <animateMotion dur="1.5s" repeatCount="indefinite">
          <mpath href="#dataPath" />
        </animateMotion>
      </circle>
      <path id="dataPath" d="M 80 80 L 120 80" fill="none" />
      
      {/* Sync indicator */}
      <g transform="translate(100, 130)">
        <circle r="6" fill="none" stroke="currentColor" strokeWidth="2">
          <animate attributeName="r" values="6;10;6" dur="1s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  );
}

function SecurityVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {/* Server rack — left side */}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect
            x="24"
            y={46 + i * 22}
            width="64"
            height="16"
            rx="2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          {/* Status dot */}
          <circle cx="36" cy={54 + i * 22} r="2.5" fill="currentColor" opacity="0.3">
            <animate
              attributeName="opacity"
              values="0.3;1;0.3"
              dur="1.8s"
              begin={`${i * 0.5}s`}
              repeatCount="indefinite"
            />
          </circle>
          {/* Row lines */}
          <line x1="46" y1={54 + i * 22} x2="80" y2={54 + i * 22} stroke="currentColor" strokeWidth="1" opacity="0.25" />
        </g>
      ))}

      {/* Cloud — right side */}
      <path
        d="M 116 100 Q 116 88 126 88 Q 129 78 138 78 Q 145 78 149 83 Q 153 80 157 80 Q 166 80 169 89 Q 177 90 177 100 Q 177 110 168 110 L 124 110 Q 116 110 116 100 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      {/* Connecting line — server to cloud */}
      <line x1="88" y1="80" x2="116" y2="80" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.35">
        <animate attributeName="stroke-dashoffset" values="0;-14" dur="0.8s" repeatCount="indefinite" />
      </line>

      {/* Packet travelling server → cloud */}
      {[0, 1].map((i) => (
        <circle key={i} r="3" fill="currentColor" opacity="0">
          <animateMotion dur="1.6s" begin={`${i * 0.8}s`} repeatCount="indefinite" path="M 88 80 L 116 80" />
          <animate attributeName="opacity" values="0;0.9;0" dur="1.6s" begin={`${i * 0.8}s`} repeatCount="indefinite" />
        </circle>
      ))}

      {/* Cloud activity dots */}
      <circle cx="130" cy="100" r="2" fill="currentColor" opacity="0.3">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1.4s" repeatCount="indefinite" />
      </circle>
      <circle cx="162" cy="100" r="2" fill="currentColor" opacity="0.3">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1.4s" begin="0.7s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function AnimatedVisual({ type }: { type: string }) {
  switch (type) {
    case "deploy":
      return <DeployVisual />;
    case "ai":
      return <AIVisual />;
    case "agentic":
      return <AgenticVisual />;
    case "collab":
      return <CollabVisual />;
    case "security":
      return <SecurityVisual />;
    default:
      return <DeployVisual />;
  }
}

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group relative transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 py-12 lg:py-20 border-b border-foreground/10">
        {/* Number */}
        <div className="shrink-0">
          <span className="font-mono text-sm text-muted-foreground">{feature.number}</span>
        </div>
        
        {/* Content */}
        <div className="flex-1 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl lg:text-4xl font-display mb-4 group-hover:translate-x-2 transition-transform duration-500">
              {feature.title}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {feature.description}
            </p>
          </div>
          
          {/* Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-48 h-40 text-foreground">
              <AnimatedVisual type={feature.visual} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeaturesSection() {
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

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 lg:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Services
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Everything you need.
            <br />
            <span className="text-muted-foreground">Nothing you don&apos;t.</span>
          </h2>
        </div>

        {/* Features List */}
        <div>
          {features.map((feature, index) => (
            <FeatureCard key={feature.number} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
