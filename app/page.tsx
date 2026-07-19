import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { FeaturesSectionNoSSR } from "@/components/landing/features-section-shell";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { InfrastructureSection } from "@/components/landing/infrastructure-section";
import { MetricsSectionNoSSR } from "@/components/landing/metrics-section-shell";
import { IntegrationsSection } from "@/components/landing/integrations-section";
import { SecuritySection } from "@/components/landing/security-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { CtaSection } from "@/components/landing/cta-section";
import { FooterSection } from "@/components/landing/footer-section";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />
      <HeroSection />
      <FeaturesSectionNoSSR />
      <HowItWorksSection />
      <InfrastructureSection />
      <MetricsSectionNoSSR />
      <IntegrationsSection />
      <SecuritySection />
      <TestimonialsSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
