"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import { Calculator, TrendingDown, ArrowRight } from "lucide-react";

export function BMICalculator() {
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(85);

  const bmi = useMemo(() => {
    const m = height / 100;
    return weight / (m * m);
  }, [height, weight]);

  const category = useMemo(() => {
    if (bmi < 18.5) return { label: "Underweight", color: "#6B7268" };
    if (bmi < 25) return { label: "Healthy", color: "#0B5E4F" };
    if (bmi < 30) return { label: "Overweight", color: "#C89A4F" };
    return { label: "Obese", color: "#B0563E" };
  }, [bmi]);

  const eligible = bmi >= 25;
  const projected = useMemo(() => weight - weight * 0.18, [weight]);
  const lostKg = useMemo(() => weight - projected, [weight, projected]);

  /* BMI scale position 0-100 (mapping 15-40) */
  const scalePos = Math.min(100, Math.max(0, ((bmi - 15) / 25) * 100));

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#FAFAF7] to-[#F0EFE8] overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-[#0B5E4F]">
            Eligibility check
          </span>
          <h2 className="mt-3 font-serif text-4xl md:text-6xl tracking-tight text-[#0E120F] text-balance">
            See where you{" "}
            <span className="italic text-[#0B5E4F]">stand.</span>
          </h2>
          <p className="mt-5 text-[#0E120F]/65 text-lg leading-relaxed">
            Two sliders. Sixty seconds. A clinical estimate of your potential
            with the Reduce-Wait programme.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-5 gap-6">
          {/* Inputs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-3 rounded-3xl bg-white border border-black/5 p-8 md:p-10 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-[#0B5E4F]/8 flex items-center justify-center">
                <Calculator className="h-5 w-5 text-[#0B5E4F]" />
              </div>
              <p className="font-serif text-2xl">BMI Calculator</p>
            </div>

            <div className="mt-10 space-y-10">
              <Slider
                label="Height"
                value={height}
                min={140}
                max={210}
                unit="cm"
                onChange={setHeight}
              />
              <Slider
                label="Current weight"
                value={weight}
                min={40}
                max={180}
                unit="kg"
                onChange={setWeight}
              />
            </div>

            {/* BMI scale */}
            <div className="mt-10">
              <div className="relative h-3 rounded-full bg-gradient-to-r from-[#6B7268] via-[#0B5E4F] via-[#C89A4F] to-[#B0563E] overflow-hidden">
                <motion.div
                  layout
                  animate={{ left: `${scalePos}%` }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="absolute -top-1 -ml-2.5 h-5 w-5 rounded-full bg-white border-2 border-[#0E120F] shadow-lg"
                />
              </div>
              <div className="mt-3 flex justify-between text-[10px] uppercase tracking-widest text-[#0E120F]/40">
                <span>15</span>
                <span>18.5</span>
                <span>25</span>
                <span>30</span>
                <span>40</span>
              </div>
            </div>
          </motion.div>

          {/* Result */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 rounded-3xl bg-[#0E120F] text-white p-8 md:p-10 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-[#0B5E4F]/40 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-[#C8F074]/15 blur-3xl" />

            <div className="relative">
              <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                Your BMI
              </p>
              <div className="mt-3 flex items-baseline gap-3">
                <motion.span
                  key={Math.floor(bmi)}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-serif text-7xl tracking-tight"
                >
                  {bmi.toFixed(1)}
                </motion.span>
                <span
                  className="rounded-full px-3 py-1 text-xs font-medium"
                  style={{ backgroundColor: category.color, color: "#FAFAF7" }}
                >
                  {category.label}
                </span>
              </div>

              <div className="mt-8 h-px bg-white/10" />

              <AnimatePresence mode="wait">
                {eligible ? (
                  <motion.div
                    key="eligible"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-6"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-[#C8F074]">
                      Projected outcome · 6 months
                    </p>
                    <div className="mt-3 flex items-center gap-3">
                      <TrendingDown className="h-5 w-5 text-[#C8F074]" />
                      <span className="font-serif text-3xl">
                        −{lostKg.toFixed(1)} kg
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-white/60">
                      Down to ~{projected.toFixed(0)} kg, based on the median
                      18% reduction in our cohort.
                    </p>

                    <motion.a
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      href="#assessment"
                      className="group mt-8 inline-flex items-center justify-between gap-2 w-full rounded-full bg-[#C8F074] text-[#0E120F] px-5 py-3.5 text-sm font-medium hover:bg-white transition-colors"
                    >
                      Claim your protocol
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </motion.a>
                  </motion.div>
                ) : (
                  <motion.div
                    key="not"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-6"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                      Programme eligibility
                    </p>
                    <p className="mt-3 font-serif text-2xl leading-snug">
                      The programme is built for adults with{" "}
                      <span className="italic text-[#C8F074]">BMI ≥ 25</span>.
                      Speak to a doctor for a tailored recommendation.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  unit,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  unit: string;
  onChange: (n: number) => void;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-end justify-between">
        <span className="text-sm uppercase tracking-[0.15em] text-[#0E120F]/50">
          {label}
        </span>
        <span className="font-serif text-3xl text-[#0E120F]">
          {value}
          <span className="text-base text-[#0E120F]/40 ml-1">{unit}</span>
        </span>
      </div>
      <div className="relative mt-3 h-2 rounded-full bg-black/8">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-[#0B5E4F]"
          style={{ width: `${pct}%` }}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value, 10))}
          className="absolute inset-0 w-full opacity-0 cursor-pointer"
          aria-label={label}
        />
        <div
          className="absolute -top-1.5 h-5 w-5 rounded-full bg-white border-2 border-[#0B5E4F] shadow-md transition-transform"
          style={{ left: `calc(${pct}% - 10px)` }}
        />
      </div>
    </div>
  );
}
