"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Brain,
  Battery,
  Moon,
  Activity,
  Sparkles,
} from "lucide-react";

const benefits = [
  {
    Icon: Heart,
    title: "Lower cardiovascular risk",
    desc: "Sustained weight loss reduces strain on your heart and improves blood pressure markers.",
  },
  {
    Icon: Brain,
    title: "Calmer food noise",
    desc: "GLP-1 quiets the constant cravings — clarity of mind, not constant hunger.",
  },
  {
    Icon: Battery,
    title: "More daily energy",
    desc: "Patients report a 30–40% increase in active hours within the first month.",
  },
  {
    Icon: Moon,
    title: "Deeper sleep",
    desc: "Improved sleep quality follows reduced reflux, snoring, and restless metabolism.",
  },
  {
    Icon: Activity,
    title: "Better metabolic health",
    desc: "Improvements in HbA1c, fasting glucose, and insulin sensitivity.",
  },
  {
    Icon: Sparkles,
    title: "Confidence, restored",
    desc: "The body changes. The way you walk into a room changes with it.",
  },
];

export function Benefits() {
  return (
    <section className="relative py-24 md:py-32 bg-[#FAFAF7]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-[#0B5E4F]">
            What you gain
          </span>
          <h2 className="mt-3 font-serif text-4xl md:text-6xl tracking-tight text-[#0E120F] text-balance">
            Benefits that go{" "}
            <span className="italic text-[#0B5E4F]">far beyond the scale.</span>
          </h2>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 3) * 0.08, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-3xl bg-white border border-black/5 p-7 hover:border-[#0B5E4F]/30 hover:shadow-[0_30px_60px_-25px_rgba(11,94,79,0.25)] transition-all duration-500 overflow-hidden"
            >
              <motion.div
                whileHover={{ rotate: -8, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="h-12 w-12 rounded-2xl bg-[#0B5E4F]/8 flex items-center justify-center"
              >
                <b.Icon className="h-5 w-5 text-[#0B5E4F]" />
              </motion.div>
              <h3 className="mt-6 font-serif text-2xl text-[#0E120F]">
                {b.title}
              </h3>
              <p className="mt-2 text-[#0E120F]/60 text-sm leading-relaxed">
                {b.desc}
              </p>
              <motion.div
                className="absolute inset-x-7 bottom-0 h-px bg-gradient-to-r from-transparent via-[#0B5E4F]/40 to-transparent origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
