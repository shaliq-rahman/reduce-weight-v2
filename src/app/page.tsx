import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TrustMarquee } from "@/components/trust-marquee";
import { Pillars } from "@/components/pillars";
import { HowItWorks } from "@/components/how-it-works";
import { Stats } from "@/components/stats";
import { Comparison } from "@/components/comparison";
import { Testimonials } from "@/components/testimonials";
import { Pricing } from "@/components/pricing";
import { FAQ } from "@/components/faq";
import { CTABanner } from "@/components/cta-banner";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAF7] text-[#0E120F]">
      <Navbar />
      <Hero />
      <TrustMarquee />
      <Pillars />
      <HowItWorks />
      <Stats />
      <Comparison />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTABanner />
      <Footer />
    </main>
  );
}
