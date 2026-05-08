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
import { ScrollProgress } from "@/components/scroll-progress";
import { WaveDivider } from "@/components/vectors";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAF7] text-[#0E120F]">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <TrustMarquee />
      <Pillars />
      <WaveDivider color="#F0EFE8" />
      <HowItWorks />
      <Stats />
      <WaveDivider color="#F0EFE8" flip />
      <Comparison />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTABanner />
      <Footer />
    </main>
  );
}
