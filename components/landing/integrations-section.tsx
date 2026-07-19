"use client";

import { useEffect, useState, useRef } from "react";

const integrations = [
  { name: "OpenAI", category: "LLM" },
  { name: "Groq", category: "LLM" },
  { name: "Gemini", category: "LLM" },
  { name: "LangChain", category: "AI Framework" },
  { name: "HuggingFace", category: "AI Framework" },
  { name: "PyTorch", category: "Deep Learning" },
  { name: "TensorFlow", category: "Deep Learning" },
  { name: "Scikit-Learn", category: "Machine Learning" },
  { name: "Weights & Biases", category: "Experiment Tracking" },
  { name: "MLflow", category: "MLOps" },
  { name: "DagsHub", category: "MLOps" },
  { name: "Python", category: "Language" },
  { name: "FastAPI", category: "Backend" },
  { name: "n8n", category: "Automation" },
  { name: "Zapier", category: "Automation" },
  { name: "Make.com", category: "Automation" },
  { name: "Azure", category: "Cloud" },
  { name: "AWS", category: "Cloud" },
  { name: "GCP", category: "Cloud" },
  { name: "DigitalOcean", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "GitHub Actions", category: "DevOps" },
  { name: "Redis", category: "Infrastructure" },
  { name: "PostgreSQL", category: "Infrastructure" },
  { name: "OpenCV", category: "Computer Vision" },
  { name: "YOLO", category: "Computer Vision" },
  { name: "MediaPipe", category: "Computer Vision" },
  { name: "Notion", category: "Documentation" },
];

export function IntegrationsSection() {
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
    <section id="integrations" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 lg:mb-24 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Tech Stack
            <span className="w-8 h-px bg-foreground/30" />
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-6">
            Built on tools that
            <br />
            actually scale.
          </h2>
          <p className="text-xl text-muted-foreground">
            The technology behind every system we build — from prototype to production.
          </p>
        </div>

      </div>
      
      {/* Full-width marquees outside container */}
      <div className="w-full mb-6">
        <div className="flex gap-6 marquee">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-6 shrink-0">
              {integrations.map((integration) => (
                <div
                  key={`${integration.name}-${setIndex}`}
                  className="shrink-0 px-8 py-6 border border-foreground/10 hover:border-foreground/30 hover:bg-foreground/[0.02] transition-all duration-300 group"
                >
                  <div className="text-lg font-medium group-hover:translate-x-1 transition-transform">
                    {integration.name}
                  </div>
                  <div className="text-sm text-muted-foreground">{integration.category}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      {/* Reverse marquee */}
      <div className="w-full">
        <div className="flex gap-6 marquee-reverse">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-6 shrink-0">
              {[...integrations].reverse().map((integration) => (
                <div
                  key={`${integration.name}-reverse-${setIndex}`}
                  className="shrink-0 px-8 py-6 border border-foreground/10 hover:border-foreground/30 hover:bg-foreground/[0.02] transition-all duration-300 group"
                >
                  <div className="text-lg font-medium group-hover:translate-x-1 transition-transform">
                    {integration.name}
                  </div>
                  <div className="text-sm text-muted-foreground">{integration.category}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
