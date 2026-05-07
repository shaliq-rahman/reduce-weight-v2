"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "I lost 18kg in five months without ever feeling deprived. The weekly check-ins kept me on track and the doctor adjusted my dose perfectly.",
    name: "Ananya",
    city: "Kochi",
    weight: "−18 kg",
  },
  {
    quote:
      "The doctor consultation was thorough and reassuring. Medication arrived next-day in cold packaging. Genuinely surprised by how easy it was.",
    name: "Rahul",
    city: "Trivandrum",
    weight: "−12 kg",
  },
  {
    quote:
      "After years of yo-yo diets, this finally worked. My cravings are gone and my energy is back. I look forward to my weekly pen.",
    name: "Meera",
    city: "Kozhikode",
    weight: "−21 kg",
  },
  {
    quote:
      "Discreet, professional, and clinically sound. Worth every rupee for the doctor support alone — never felt like I was on my own.",
    name: "Vishnu",
    city: "Thrissur",
    weight: "−15 kg",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(t);
  }, [paused]);

  const t = testimonials[index];

  return (
    <section
      className="relative py-24 md:py-32 bg-gradient-to-b from-[#F0EFE8] to-[#FAFAF7]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-[#0B5E4F]">
            Real stories
          </span>
          <h2 className="mt-3 font-serif text-4xl md:text-6xl tracking-tight text-[#0E120F] text-balance">
            Patients across{" "}
            <span className="italic text-[#0B5E4F]">Kerala.</span>
          </h2>
        </div>

        <div className="relative mt-16 rounded-3xl bg-white border border-black/5 p-8 md:p-14 overflow-hidden min-h-[340px]">
          <Quote className="absolute -top-4 -left-4 h-32 w-32 text-[#C8F074]/40 -rotate-12" />

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <p className="font-serif italic text-2xl md:text-4xl leading-snug text-[#0E120F] text-balance">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-10 flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#0B5E4F] to-[#063128] text-[#C8F074] font-serif text-xl flex items-center justify-center">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-medium text-[#0E120F]">{t.name}</p>
                    <p className="text-sm text-[#0E120F]/50">{t.city}, Kerala</p>
                  </div>
                </div>
                <div className="rounded-full bg-[#C8F074]/40 text-[#0B5E4F] px-4 py-2 text-sm font-medium">
                  Result: {t.weight}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Show testimonial ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === index
                    ? "w-8 bg-[#0B5E4F]"
                    : "w-3 bg-[#0E120F]/15 hover:bg-[#0E120F]/30"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() =>
                setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
              }
              aria-label="Previous"
              className="h-10 w-10 rounded-full border border-black/10 hover:bg-white flex items-center justify-center transition"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
              aria-label="Next"
              className="h-10 w-10 rounded-full border border-black/10 hover:bg-white flex items-center justify-center transition"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
