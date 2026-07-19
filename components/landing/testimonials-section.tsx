"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "What impressed me most wasn't just the automated replies — it's that the system actually understands what each review is about before responding. The sentiment dashboard shows us exactly where we're doing well and where customers have concerns, and the review generation tool has genuinely helped more customers leave feedback in the first place. It just runs, day after day, without us touching it.",
    author: "Nirek Mutreja",
    role: "CEO",
    company: "Kismat Machinery",
    metric: "Zero downtime since deployment",
    initial: "N",
  },
  {
    quote:
      "I don't have time to manually scan arXiv every day, so this has basically replaced that habit for me. The summaries are sharp and well-written, there's zero duplicate content across emails, and it only sends when something's actually relevant — not on a forced schedule. It's also genuinely nice to look at, which most research digests aren't.",
    author: "Rudra Bhavsar",
    role: "Lucid subscriber",
    company: "",
    metric: "Daily digest, zero duplicate papers",
    initial: "R",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating || index === current) return;
      setIsAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setIsAnimating(false);
      }, 300);
    },
    [current, isAnimating]
  );

  const prev = useCallback(() => {
    goTo((current - 1 + testimonials.length) % testimonials.length);
  }, [current, goTo]);

  const next = useCallback(() => {
    goTo((current + 1) % testimonials.length);
  }, [current, goTo]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [prev, next]);

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];
  const label = `0${current + 1} / 0${testimonials.length}`;

  return (
    <section id="testimonials" className="relative py-32 lg:py-40 border-t border-foreground/10 lg:pb-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            What people say
          </span>
          <div className="flex-1 h-px bg-foreground/10" />
          <span className="font-mono text-xs text-muted-foreground">{label}</span>
        </div>

        {/* Main Quote */}
        <div
          className={`grid lg:grid-cols-12 gap-12 lg:gap-20 transition-opacity duration-300 ${
            isAnimating ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="lg:col-span-8">
            <blockquote>
              <p className="font-display text-2xl md:text-3xl lg:text-4xl leading-[1.3] tracking-tight text-foreground">
                &ldquo;{t.quote}&rdquo;
              </p>
            </blockquote>

            {/* Author */}
            <div className="mt-12 flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center">
                <span className="font-display text-2xl text-foreground">{t.initial}</span>
              </div>
              <div>
                <p className="text-lg font-medium text-foreground">{t.author}</p>
                <p className="text-muted-foreground">
                  {t.company ? `${t.role}, ${t.company}` : t.role}
                </p>
              </div>
            </div>
          </div>

          {/* Metric Highlight */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <div className="p-8 border border-foreground/10">
              <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-4">
                Key Result
              </span>
              <p className="font-display text-3xl md:text-4xl text-foreground">{t.metric}</p>
            </div>

            {/* Pagination */}
            <div className="flex items-center gap-4 mt-8">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-10 h-10 flex items-center justify-center border border-foreground/20 hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-200"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`h-2 transition-all duration-300 ${
                      i === current ? "w-8 bg-foreground" : "w-2 bg-foreground/20 hover:bg-foreground/40"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-10 h-10 flex items-center justify-center border border-foreground/20 hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-200"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
