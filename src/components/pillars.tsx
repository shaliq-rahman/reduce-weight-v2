"use client";

import { motion } from "framer-motion";
import { StethoscopeAnim, PillCapsule, ChatBubbleAnim } from "@/components/vectors";

const pillars = [
  {
    Vector: StethoscopeAnim,
    title: "Doctor Consultation",
    desc: "One-on-one video consult with a licensed physician to assess eligibility and personalise your dosage.",
    tag: "Step 01",
  },
  {
    Vector: PillCapsule,
    title: "Prescription Medication",
    desc: "Once-weekly GLP-1 pen, delivered cold-chain to your door anywhere in Kerala.",
    tag: "Step 02",
  },
  {
    Vector: ChatBubbleAnim,
    title: "Continuous Support",
    desc: "Dedicated care coach, nutrition guidance, and dosage check-ins via WhatsApp.",
    tag: "Step 03",
  },
];

export function Pillars() {
  return (
    <section id="program" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xs uppercase tracking-[0.2em] text-[#0B5E4F]"
          >
            The Programme
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="mt-3 font-serif text-4xl md:text-6xl tracking-tight text-[#0E120F] text-balance"
          >
            Everything you need.{" "}
            <span className="italic text-[#0B5E4F]">Nothing you don&apos;t.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-[#0E120F]/65 text-lg leading-relaxed"
          >
            Three pillars, one outcome. Built around your biology — not
            buzzwords.
          </motion.p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl bg-white border border-black/5 p-7 hover:border-[#0B5E4F]/30 transition-all duration-500 hover:shadow-[0_30px_60px_-20px_rgba(11,94,79,0.25)] overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-[#C8F074]/0 group-hover:bg-[#C8F074]/30 blur-2xl transition-all duration-700" />

              <div className="relative flex items-center justify-between">
                <div className="h-16 w-16 rounded-2xl bg-[#0B5E4F]/8 flex items-center justify-center group-hover:bg-[#0B5E4F]/12 transition-colors">
                  <p.Vector className="h-9 w-9" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#0E120F]/40">
                  {p.tag}
                </span>
              </div>
              <h3 className="relative mt-8 font-serif text-3xl text-[#0E120F]">
                {p.title}
              </h3>
              <p className="relative mt-3 text-[#0E120F]/60 leading-relaxed">{p.desc}</p>

              <motion.div
                className="absolute inset-x-7 bottom-0 h-px bg-gradient-to-r from-transparent via-[#0B5E4F]/40 to-transparent"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
