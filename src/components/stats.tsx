"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "15–25", suffix: "%", label: "Average body-weight reduction" },
  { value: "3", suffix: " mo", label: "Time to peak results" },
  { value: "94", suffix: "%", label: "Patient adherence rate" },
  { value: "48", suffix: " hr", label: "From consult to delivery" },
];

function Counter({ to, suffix }: { to: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(to);

  useEffect(() => {
    if (!inView) return;
    if (to.includes("–")) {
      setDisplay(to);
      return;
    }
    const target = parseInt(to, 10);
    if (Number.isNaN(target)) {
      setDisplay(to);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const dur = 1400;
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(String(Math.round(target * eased)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section
      id="results"
      className="relative py-24 md:py-32 bg-[#0B5E4F] text-white overflow-hidden grain"
    >
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#C8F074]/30 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-[#C8F074]/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.2em] text-[#C8F074]">
            Outcomes
          </span>
          <h2 className="mt-3 font-serif text-4xl md:text-6xl tracking-tight text-balance">
            Outcomes that{" "}
            <span className="italic text-[#C8F074]">change lives.</span>
          </h2>
          <p className="mt-5 text-white/70 text-lg leading-relaxed max-w-2xl">
            Backed by clinical evidence and consistent patient adherence — these
            are the numbers we report, not the ones we hope for.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className="border-t border-white/15 pt-6"
            >
              <p className="font-serif text-5xl md:text-7xl tracking-tight">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-3 text-sm text-white/60 leading-snug max-w-[180px]">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
