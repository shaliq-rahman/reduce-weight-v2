"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ClipboardList, Video, Package, LineChart } from "lucide-react";

const steps = [
  {
    Icon: ClipboardList,
    n: "01",
    title: "Take the 2-min assessment",
    desc: "A short, private health questionnaire to determine your eligibility.",
  },
  {
    Icon: Video,
    n: "02",
    title: "Consult a physician online",
    desc: "Meet a licensed doctor over video. Get a personalised treatment plan.",
  },
  {
    Icon: Package,
    n: "03",
    title: "Receive your medication",
    desc: "Cold-chain delivery to your doorstep within 48 hours across Kerala.",
  },
  {
    Icon: LineChart,
    n: "04",
    title: "Lose weight with weekly support",
    desc: "Track progress with your care coach. Adjust dosage under doctor supervision.",
  },
];

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 60%"],
  });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="how"
      ref={ref}
      className="relative py-24 md:py-32 bg-gradient-to-b from-[#FAFAF7] to-[#F0EFE8]"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-[#0B5E4F]">
            How it works
          </span>
          <h2 className="mt-3 font-serif text-4xl md:text-6xl tracking-tight text-[#0E120F] text-balance">
            From{" "}
            <span className="italic text-[#0B5E4F]">curiosity</span> to results
            in four steps.
          </h2>
        </div>

        <div className="relative mt-20">
          {/* Animated path - desktop horizontal */}
          <svg
            className="hidden md:block absolute top-12 left-0 w-full pointer-events-none"
            height="2"
            preserveAspectRatio="none"
            viewBox="0 0 1000 2"
          >
            <line
              x1="0"
              y1="1"
              x2="1000"
              y2="1"
              stroke="#0E120F"
              strokeOpacity="0.08"
              strokeDasharray="6 6"
            />
            <motion.line
              x1="0"
              y1="1"
              x2="1000"
              y2="1"
              stroke="#0B5E4F"
              strokeWidth="2"
              style={{ pathLength }}
              strokeLinecap="round"
            />
          </svg>

          <ol className="grid md:grid-cols-4 gap-8 md:gap-6 relative">
            {steps.map((s, i) => (
              <motion.li
                key={s.n}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                whileHover={{ y: -4 }}
                className="relative group"
              >
                <motion.div
                  whileHover={{ scale: 1.08, rotate: 6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className="flex items-center justify-center h-24 w-24 rounded-full bg-white border border-[#0B5E4F]/15 shadow-sm relative z-10 group-hover:shadow-[0_20px_40px_-10px_rgba(11,94,79,0.3)] group-hover:border-[#0B5E4F]/40 transition-shadow"
                >
                  <s.Icon className="h-7 w-7 text-[#0B5E4F]" />
                  <motion.span
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-[#0E120F] text-[#C8F074] text-[11px] font-medium flex items-center justify-center"
                  >
                    {s.n}
                  </motion.span>
                </motion.div>
                <h3 className="mt-6 font-serif text-2xl text-[#0E120F] leading-tight">
                  {s.title}
                </h3>
                <p className="mt-2 text-[#0E120F]/60 leading-relaxed text-sm">
                  {s.desc}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
