"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Who is eligible for the GLP-1 weight loss program?",
    a: "Our program is designed for adults who are overweight or obese (BMI ≥ 25), especially those struggling with constant hunger or difficulty losing weight. All patients go through a doctor consultation to ensure the treatment is safe and appropriate.",
  },
  {
    q: "Is this program safe?",
    a: "Yes — GLP-1 medications are clinically approved and widely used globally.",
  },
  {
    q: "How do I take this medication?",
    a: "GLP-1 medication can be self-administered subcutaneously using a simple pen device.",
  },
  {
    q: "How do the injections work?",
    a: "GLP-1 medications are once-weekly injections using a simple pen device. They help reduce appetite, control cravings, and keep you fuller for longer.",
  },
  {
    q: "Do I need to follow a strict diet or exercise plan?",
    a: "No extreme dieting required. We provide practical, easy-to-follow nutrition guidance so you can lose weight without feeling restricted or overwhelmed.",
  },
  {
    q: "How much weight can I expect to lose?",
    a: "Most patients lose 15–25% of their body weight over a few months, depending on consistency and dosage. Many also report reduced cravings and better control over eating habits.",
  },
  {
    q: "How soon can I expect results with GLP-1 medications?",
    a: "Weight loss typically begins within the first few weeks of treatment with GLP-1 medications. The rate of weight loss varies, and it's recommended to continue treatment for at least 3 months under the doctor's supervision for maximum results.",
  },
  {
    q: "How is the medication delivered?",
    a: "Your medication is delivered across Kerala straight to your doorstep in temperature-controlled packaging, ensuring safety.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 md:py-32 bg-[#FAFAF7]">
      <div className="mx-auto max-w-4xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-[#0B5E4F]">
            FAQ
          </span>
          <h2 className="mt-3 font-serif text-4xl md:text-6xl tracking-tight text-[#0E120F] text-balance">
            Frequently asked{" "}
            <span className="italic text-[#0B5E4F]">questions.</span>
          </h2>
        </div>

        <div className="mt-14 divide-y divide-black/8">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.04 }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-xl md:text-2xl text-[#0E120F] group-hover:text-[#0B5E4F] transition-colors">
                    {item.q}
                  </span>
                  <span
                    className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "bg-[#0B5E4F] border-[#0B5E4F] rotate-45"
                        : "border-black/15 bg-white group-hover:border-[#0B5E4F]"
                    }`}
                  >
                    <Plus
                      className={`h-4 w-4 transition-colors ${
                        isOpen ? "text-[#C8F074]" : "text-[#0E120F]"
                      }`}
                    />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-7 pr-12 text-[#0E120F]/65 leading-relaxed text-base md:text-lg">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
