"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight } from "lucide-react";

const inclusions = [
  "Unlimited doctor consultations",
  "Personalised GLP-1 prescription",
  "Monthly cold-chain medication delivery",
  "Weekly check-ins with a care coach",
  "Practical nutrition guidance",
  "24/7 priority chat support",
  "Dosage adjustments under doctor supervision",
];

export function Pricing() {
  return (
    <section id="assessment" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-[#0B5E4F]">
            The Programme
          </span>
          <h2 className="mt-3 font-serif text-4xl md:text-6xl tracking-tight text-[#0E120F] text-balance">
            One plan.{" "}
            <span className="italic text-[#0B5E4F]">Everything included.</span>
          </h2>
          <p className="mt-5 text-[#0E120F]/65 text-lg leading-relaxed">
            No hidden fees, no upsells, no gimmicks. Cancel anytime.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative mt-14 rounded-[2.5rem] bg-gradient-to-br from-white via-white to-[#C8F074]/15 border border-[#0B5E4F]/20 p-8 md:p-12 glow overflow-hidden"
        >
          <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-[#C8F074]/30 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-[#0B5E4F]/10 blur-3xl" />

          <div className="relative grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#0B5E4F] text-[#C8F074] px-3.5 py-1.5 text-xs font-medium">
                <Sparkles className="h-3.5 w-3.5" />
                Most popular
              </div>
              <h3 className="mt-5 font-serif text-4xl md:text-5xl text-[#0E120F] tracking-tight">
                The Reduce-Wait Programme
              </h3>
              <p className="mt-2 text-[#0E120F]/60">
                3-Month Physician-Led Plan
              </p>

              <div className="mt-8 flex items-baseline gap-3">
                <span className="text-sm text-[#0E120F]/50">From</span>
                <span className="font-serif text-6xl md:text-7xl text-[#0E120F] tracking-tight">
                  ₹14,999
                </span>
                <span className="text-[#0E120F]/40 line-through text-lg">
                  ₹22,000
                </span>
              </div>
              <p className="mt-2 text-sm text-[#0E120F]/60">
                per month · pay in 3 instalments
              </p>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                href="#"
                className="group mt-8 inline-flex items-center justify-center gap-2 w-full rounded-full bg-[#0E120F] text-[#FAFAF7] px-6 py-4 text-sm font-medium hover:bg-[#0B5E4F] transition-colors"
              >
                Begin My Programme
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.a>
              <p className="mt-4 text-xs text-[#0E120F]/45 text-center">
                Cancel anytime · Refunds per medical eligibility
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#0B5E4F]">
                Included
              </p>
              <ul className="mt-4 space-y-3.5">
                {inclusions.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * i }}
                    className="flex items-start gap-3 text-[#0E120F]/80"
                  >
                    <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#0B5E4F] flex-shrink-0">
                      <Check className="h-3 w-3 text-[#C8F074]" />
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
