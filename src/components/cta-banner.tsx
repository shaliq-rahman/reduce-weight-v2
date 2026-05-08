"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FloatingParticles } from "@/components/vectors";

export function CTABanner() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-[#0E120F] text-white overflow-hidden grain"
    >
      <div className="absolute inset-0 -z-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[900px] rounded-full bg-[#0B5E4F]/40 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#C8F074]/15 blur-3xl"
        />
        <FloatingParticles count={14} />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight text-balance leading-[1]"
        >
          Stop <span className="italic text-[#C8F074]">waiting.</span>
          <br />
          Start <span className="italic text-[#C8F074]">reducing.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.15 }}
          className="mt-8 max-w-xl mx-auto text-white/70 text-lg leading-relaxed"
        >
          Take the 2-minute eligibility check. No commitment, no payment until
          your doctor approves.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.25 }}
          className="mt-10"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            href="#"
            className="group relative overflow-hidden inline-flex items-center gap-2 rounded-full bg-[#C8F074] text-[#0E120F] px-8 py-5 text-base font-medium hover:bg-white transition-colors"
          >
            <span className="relative z-10 inline-flex items-center gap-2">
              Start My Free Assessment
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
            <motion.span
              className="absolute inset-0 -z-0 bg-white"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.4 }}
            />
          </motion.a>
        </motion.div>
        <p className="mt-8 text-xs uppercase tracking-[0.2em] text-white/40">
          Available across Kerala · Doctor approval required
        </p>
      </div>
    </section>
  );
}
