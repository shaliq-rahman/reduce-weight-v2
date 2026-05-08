"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Stethoscope } from "lucide-react";

const doctors = [
  {
    name: "Dr. Anjali Menon",
    role: "Lead Physician · Endocrinology",
    creds: "MBBS, MD · 14 yrs",
    quote:
      "GLP-1 isn't a shortcut. It's a tool — and the doctor matters more than the molecule.",
    initial: "AM",
  },
  {
    name: "Dr. Rohan Pillai",
    role: "Internal Medicine · Metabolic Health",
    creds: "MBBS, DNB · 11 yrs",
    quote:
      "We don't prescribe before we listen. Every plan starts with the patient's story, not the scale.",
    initial: "RP",
  },
  {
    name: "Dr. Priya Nair",
    role: "Clinical Nutritionist",
    creds: "MSc Nutrition · 9 yrs",
    quote:
      "Sustainable weight loss is built on small, livable habits — not punishment.",
    initial: "PN",
  },
];

export function Doctors() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#FAFAF7] to-[#F0EFE8] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-[#0B5E4F]">
            The Care Team
          </span>
          <h2 className="mt-3 font-serif text-4xl md:text-6xl tracking-tight text-[#0E120F] text-balance">
            Real doctors.{" "}
            <span className="italic text-[#0B5E4F]">Real protocols.</span>
          </h2>
          <p className="mt-5 text-[#0E120F]/65 text-lg leading-relaxed">
            No call-centre scripts, no AI-only consultations. Every prescription
            is signed by a licensed physician practising in Kerala.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {doctors.map((d, i) => (
            <motion.article
              key={d.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl bg-white border border-black/5 p-7 hover:border-[#0B5E4F]/30 hover:shadow-[0_30px_60px_-25px_rgba(11,94,79,0.3)] transition-all duration-500 overflow-hidden"
            >
              <motion.div
                className="absolute -top-24 -right-24 h-52 w-52 rounded-full bg-[#C8F074]/30 blur-3xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: i * 1.2 }}
              />

              <div className="relative">
                <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-[#0B5E4F] to-[#063128] text-[#C8F074] font-serif text-3xl flex items-center justify-center shadow-lg">
                  {d.initial}
                </div>

                <h3 className="mt-6 font-serif text-2xl text-[#0E120F]">
                  {d.name}
                </h3>
                <p className="mt-1 text-sm text-[#0E120F]/60">{d.role}</p>

                <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#0B5E4F]/8 px-3 py-1 text-[11px] uppercase tracking-wider text-[#0B5E4F]">
                  <GraduationCap className="h-3 w-3" />
                  {d.creds}
                </div>

                <p className="mt-6 font-serif italic text-lg text-[#0E120F]/80 leading-snug">
                  &ldquo;{d.quote}&rdquo;
                </p>

                <div className="mt-8 pt-6 border-t border-black/5 flex items-center gap-4 text-[11px] uppercase tracking-wider text-[#0E120F]/40">
                  <span className="inline-flex items-center gap-1.5">
                    <Award className="h-3 w-3" /> Licensed
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Stethoscope className="h-3 w-3" /> Practising
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
