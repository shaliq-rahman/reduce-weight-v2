"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { DNAStrand } from "@/components/vectors";

const oldWay = [
  "Crash diets that come back stronger",
  "Gym burnout and willpower fatigue",
  "Yo-yo weight cycles for years",
  "Generic plans without medical oversight",
  "Endless apps, no real accountability",
];

const newWay = [
  "Physician-led, biology-first approach",
  "Once-weekly pen — no daily struggle",
  "Sustainable 15–25% loss in 3 months",
  "Personalised dosage, real doctor checkpoints",
  "Dedicated coach. Real human support.",
];

export function Comparison() {
  return (
    <section className="relative py-24 md:py-32 bg-[#FAFAF7] overflow-hidden">
      <DNAStrand className="hidden lg:block absolute -right-10 top-20 h-[500px] w-40 opacity-60" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-[#0B5E4F]">
            Why Reduce-Wait
          </span>
          <h2 className="mt-3 font-serif text-4xl md:text-6xl tracking-tight text-[#0E120F] text-balance">
            The old way{" "}
            <span className="italic text-[#0B5E4F]">vs.</span> the right way.
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="rounded-3xl bg-white border border-black/5 p-8 relative overflow-hidden"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-[#0E120F]/40">
              The Old Way
            </span>
            <h3 className="mt-2 font-serif text-3xl text-[#0E120F]/70">
              Diet culture
            </h3>
            <ul className="mt-8 space-y-4">
              {oldWay.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[#0E120F]/55"
                >
                  <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#0E120F]/5 flex-shrink-0">
                    <X className="h-3.5 w-3.5 text-[#0E120F]/50" />
                  </span>
                  <span className="leading-relaxed line-through decoration-[#0E120F]/20">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1 }}
            className="rounded-3xl bg-[#0B5E4F] text-white p-8 relative overflow-hidden glow"
          >
            <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-[#C8F074]/20 blur-3xl" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#C8F074]">
              The Reduce-Wait Way
            </span>
            <h3 className="mt-2 font-serif text-3xl">
              Clinical, kind, sustainable
            </h3>
            <ul className="mt-8 space-y-4 relative">
              {newWay.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#C8F074] flex-shrink-0">
                    <Check className="h-3.5 w-3.5 text-[#0E120F]" />
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
