"use client";

import { useEffect, useState, useRef } from "react";
import { Star, FileText } from "lucide-react";

const projects = [
  {
    icon: Star,
    title: "Kismat Machinery — AI Review Automation",
    description:
      "Live AI-powered Google review response system for a Pune-based industrial manufacturer. Automatically analyzes reviews, drafts contextual replies, with human approval before every publish. Includes a live dashboard for tracking sentiment, customizable reply tone and templates, and a bundled review-generation flow to help grow ratings organically. Currently home-server deployed — fully portable to cloud infrastructure. Running daily, zero downtime.",
  },
  {
    icon: FileText,
    title: "Lucid — Autonomous Research Digest",
    description:
      "Fully autonomous agentic RAG pipeline tracking daily arXiv research, filtering for relevance, and delivering summaries via email. Serverless architecture, running daily with real subscribers.",
  },
];

const tags = ["RAG", "Agentic AI", "Cloud Native", "Production-Grade", "Full-Stack"];

export function SecuritySection() {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section id="work" ref={sectionRef} className="relative py-24 lg:py-32 bg-foreground/[0.02] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Work
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-8">
              Built. Deployed.
              <br />
              Running.
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Every project below is live, in production, solving a real problem for a real business.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              {tags.map((tag, index) => (
                <span
                  key={tag}
                  className={`px-4 py-2 border border-foreground/10 text-sm font-mono transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 50 + 200}ms` }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Project cards */}
          <div className="grid gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`p-8 border border-foreground/10 hover:border-foreground/20 transition-all duration-500 group ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 flex items-center justify-center border border-foreground/10 group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                    <project.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-3 group-hover:translate-x-1 transition-transform duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
