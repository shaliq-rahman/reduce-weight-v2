import { Navbar } from "@/components/navbar";
import { HeroStory } from "@/components/hero-story";
import { TrustMarquee } from "@/components/trust-marquee";
import { Pillars } from "@/components/pillars";
import { HowItWorks } from "@/components/how-it-works";
import { Stats } from "@/components/stats";
import { BeforeAfter } from "@/components/before-after";
import { Benefits } from "@/components/benefits";
import { Comparison } from "@/components/comparison";
import { Testimonials } from "@/components/testimonials";
import { BMICalculator } from "@/components/bmi-calculator";
import { Doctors } from "@/components/doctors";
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
      {/* Cinematic scroll-driven transformation */}
      <HeroStory />
      <TrustMarquee />
      {/* How GLP-1 Works */}
      <Pillars />
      <WaveDivider color="#F0EFE8" />
      {/* Transformation Timeline */}
      <HowItWorks />
      {/* Animated Success Metrics */}
      <Stats />
      <WaveDivider color="#F0EFE8" flip />
      {/* Before/After interactive comparison */}
      <BeforeAfter />
      {/* Benefits */}
      <Benefits />
      <Comparison />
      {/* Real Success Stories */}
      <Testimonials />
      {/* BMI/Weight Loss Calculator */}
      <BMICalculator />
      {/* Doctor/Expert Section */}
      <Doctors />
      {/* Pricing & Plans */}
      <Pricing />
      {/* FAQ */}
      <FAQ />
      {/* Strong CTA Footer */}
      <CTABanner />
      <Footer />
    </main>
  );
}
