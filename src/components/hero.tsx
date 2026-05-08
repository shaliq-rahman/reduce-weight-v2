"use client";

import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ShieldCheck, Truck, Stethoscope } from "lucide-react";
import { OrbitRings, ECGPulse, FloatingParticles } from "@/components/vectors";

const word: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -90]);

  return (
    <section
      ref={ref}
      className="relative pt-28 sm:pt-36 md:pt-44 pb-16 md:pb-28 overflow-hidden grain"
    >
      {/* radial gradient bg */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 h-[700px] w-[1200px] rounded-full bg-gradient-radial from-[#C8F074]/40 via-[#C8F074]/10 to-transparent blur-3xl"
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#0E120F 1px, transparent 1px), linear-gradient(90deg, #0E120F 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 70%)",
          }}
        />
        <FloatingParticles count={10} />
      </div>

      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left text */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#0B5E4F]/15 bg-white/70 backdrop-blur px-3.5 py-1.5 text-xs font-medium text-[#0B5E4F]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0B5E4F] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#0B5E4F]" />
            </span>
            Physician-led · Available across Kerala
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            className="mt-6 font-serif text-[2.75rem] sm:text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight text-[#0E120F]"
          >
            <motion.span variants={word} className="block">
              Reduce the <span className="italic text-[#0B5E4F]">wait.</span>
            </motion.span>
            <motion.span variants={word} className="block mt-2">
              Reduce the <span className="italic text-[#0B5E4F]">weight.</span>
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-7 max-w-xl text-lg text-[#0E120F]/70 leading-relaxed text-balance"
          >
            A physician-led GLP-1 weight loss programme — clinical consultation,
            prescription medication, and ongoing support. Delivered to your
            door across Kerala.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="mt-9 flex flex-col sm:flex-row gap-3"
          >
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              href="#assessment"
              className="group relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-full bg-[#0E120F] text-[#FAFAF7] px-6 py-4 text-sm font-medium hover:bg-[#0B5E4F] transition-colors"
            >
              <span className="relative z-10 inline-flex items-center gap-2">
                Start My Assessment
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              href="#how"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0E120F]/15 bg-white/60 backdrop-blur px-6 py-4 text-sm font-medium text-[#0E120F] hover:bg-white transition-colors"
            >
              How It Works
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[#0E120F]/60"
          >
            <span className="inline-flex items-center gap-2">
              <Stethoscope className="h-4 w-4 text-[#0B5E4F]" /> Doctor-supervised
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[#0B5E4F]" /> Clinically approved
            </span>
            <span className="inline-flex items-center gap-2">
              <Truck className="h-4 w-4 text-[#0B5E4F]" /> Discreet doorstep delivery
            </span>
          </motion.div>
        </div>

        {/* Right visual */}
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] w-full max-w-md mx-auto"
          >
            {/* Orbital rings around card */}
            <div className="absolute -inset-8">
              <OrbitRings />
            </div>

            {/* Glass card */}
            <motion.div
              whileHover={{ scale: 1.02, rotate: -1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white via-white/80 to-[#C8F074]/30 backdrop-blur-xl border border-white/60 shadow-[0_30px_80px_-20px_rgba(11,94,79,0.35)] overflow-hidden"
            >
              <div className="absolute inset-0 grain z-10" />
              {/* Hero Image */}
              <div className="absolute inset-0">
                <img src="/athlete_hero.png" alt="Fit athlete" className="h-full w-full object-cover opacity-90 mix-blend-overlay" />
              </div>
              {/* ECG line at top */}
              <div className="absolute top-4 left-4 right-4 z-20 opacity-70">
                <ECGPulse className="h-8 w-full" />
              </div>
              {/* Bottom plate */}
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-white via-white/95 to-transparent z-20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-serif text-2xl text-[#0E120F]">
                      Once-weekly
                    </p>
                    <p className="text-xs text-[#0E120F]/60 mt-1">
                      Pre-filled GLP-1 pen
                    </p>
                  </div>
                  <motion.div
                    animate={{ rotate: [0, 8, 0] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                    className="h-10 w-10 rounded-full bg-[#0B5E4F] text-white flex items-center justify-center"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Floating chips */}
            <motion.div
              style={{ y: y1 }}
              whileHover={{ scale: 1.05, rotate: -3 }}
              className="absolute -left-6 top-12 rounded-2xl bg-white shadow-lg px-4 py-3 border border-black/5 animate-float cursor-default"
            >
              <p className="text-[10px] uppercase tracking-wider text-[#6B7268]">
                Eligibility
              </p>
              <p className="font-serif text-xl text-[#0E120F]">BMI ≥ 25</p>
            </motion.div>

            <motion.div
              style={{ y: y2 }}
              whileHover={{ scale: 1.05, rotate: 3 }}
              className="absolute -right-4 top-1/3 rounded-2xl bg-[#0B5E4F] text-white shadow-xl px-4 py-3 cursor-default"
            >
              <p className="text-[10px] uppercase tracking-wider text-[#C8F074]">
                Weekly
              </p>
              <p className="font-serif text-xl">Single pen dose</p>
            </motion.div>

            <motion.div
              style={{ y: y3 }}
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="absolute -right-2 bottom-16 rounded-2xl bg-[#C8F074] text-[#0E120F] shadow-lg px-4 py-3 cursor-default"
            >
              <p className="text-[10px] uppercase tracking-wider text-[#0B5E4F]">
                Outcome
              </p>
              <p className="font-serif text-xl">15–25% lost</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  );
}
