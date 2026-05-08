"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValueEvent, useVelocity, useMotionTemplate } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, ArrowDown } from "lucide-react";
import { StageFigure } from "@/components/figure-silhouette";
import { SparklesText } from "@/components/ui/sparkles-text";

const captions = [
  { eyebrow: "Stage 01", title: "Where you", italics: "are.", desc: "Constant hunger. Plateau weight. Tried everything." },
  { eyebrow: "Stage 02", title: "The first", italics: "consult.", desc: "A licensed physician designs your protocol." },
  { eyebrow: "Stage 03", title: "Your body,", italics: "listening.", desc: "GLP-1 calms cravings. Appetite shifts. So does the scale." },
  { eyebrow: "Stage 04", title: "Strength,", italics: "returning.", desc: "Energy back. Posture upright. Clothes fitting differently." },
  { eyebrow: "Stage 05", title: "The new", italics: "you.", desc: "15–25% lighter. Lighter in every other way too." },
];

export function HeroStory() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 100, damping: 25, mass: 0.4 });

  /* velocity-driven motion blur */
  const velocity = useVelocity(scrollYProgress);
  const smoothVel = useSpring(velocity, { stiffness: 200, damping: 40 });
  const blurAmount = useTransform(smoothVel, [-2, 0, 2], [6, 0, 6]);
  const motionBlur = useMotionTemplate`blur(${blurAmount}px)`;

  /* camera dolly: scale + slight push */
  const figureScale = useTransform(smooth, [0, 0.5, 1], [0.95, 1.05, 1.1]);
  const figureY = useTransform(smooth, [0, 1], ["0%", "-4%"]);

  /* breathing — subtle, tied to time not scroll */
  /* environment color */
  const bg = useTransform(
    smooth,
    [0, 0.25, 0.5, 0.75, 1],
    [
      "linear-gradient(180deg, #1a1410 0%, #2a1f15 100%)",
      "linear-gradient(180deg, #2a1f15 0%, #3d2f22 100%)",
      "linear-gradient(180deg, #4a3d2e 0%, #6b6557 100%)",
      "linear-gradient(180deg, #d4dcc8 0%, #b8d4a8 100%)",
      "linear-gradient(180deg, #FAFAF7 0%, #C8F074 100%)",
    ],
  );

  /* progress line */
  const progressWidth = useTransform(smooth, [0, 1], ["0%", "100%"]);

  /* opacity for each stage figure */
  const o0 = useTransform(smooth, [0, 0.18, 0.22], [1, 1, 0]);
  const o1 = useTransform(smooth, [0.18, 0.25, 0.42, 0.46], [0, 1, 1, 0]);
  const o2 = useTransform(smooth, [0.42, 0.5, 0.62, 0.66], [0, 1, 1, 0]);
  const o3 = useTransform(smooth, [0.62, 0.7, 0.82, 0.86], [0, 1, 1, 0]);
  const o4 = useTransform(smooth, [0.82, 0.9, 1], [0, 1, 1]);

  /* active caption */
  const [activeStage, setActiveStage] = useState(0);
  useMotionValueEvent(smooth, "change", (v) => {
    const next = Math.min(4, Math.floor(v * 5));
    if (next !== activeStage) setActiveStage(next);
  });

  /* particle intensity */
  const particleOpacity = useTransform(smooth, [0, 0.5, 1], [0.2, 0.6, 1]);

  /* dark text mode kicks in once the bg gets pale (stage 3 onwards) */
  const dark = activeStage >= 3;

  return (
    <section ref={ref} className="relative h-[500vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Animated environment */}
        <motion.div style={{ background: bg }} className="absolute inset-0" />

        {/* atmospheric grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(#FAFAF7 1px, transparent 1px), linear-gradient(90deg, #FAFAF7 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />

        {/* Light streaks */}
        <LightStreaks opacity={particleOpacity} />

        {/* Progress bar — scene timeline */}
        <div className={`absolute top-24 left-1/2 -translate-x-1/2 z-30 hidden md:flex items-center gap-3 text-xs uppercase tracking-[0.2em] transition-colors duration-500 ${
          dark ? "text-[#0E120F]/60" : "text-white/60"
        }`}>
          <span>Stage</span>
          <span className={`font-serif italic text-base transition-colors duration-500 ${
            dark ? "text-[#0E120F]" : "text-white"
          }`}>
            {String(activeStage + 1).padStart(2, "0")}
          </span>
          <span>/ 05</span>
          <div className={`ml-3 h-px w-40 overflow-hidden transition-colors duration-500 ${
            dark ? "bg-[#0E120F]/15" : "bg-white/15"
          }`}>
            <motion.div
              style={{ width: progressWidth }}
              className={`h-full origin-left transition-colors duration-500 ${
                dark ? "bg-[#0B5E4F]" : "bg-[#C8F074]"
              }`}
            />
          </div>
        </div>

        {/* Center stage: figure + caption layout */}
        <div className="relative z-10 h-full grid lg:grid-cols-12 items-center max-w-7xl mx-auto px-6 gap-8">
          {/* Caption (left on desktop, top on mobile) */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <KineticCaption stage={activeStage} dark={dark} />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="#assessment"
                className={`group relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-medium transition-colors duration-500 ${
                  dark
                    ? "bg-[#0E120F] text-[#C8F074]"
                    : "bg-[#C8F074] text-[#0E120F]"
                }`}
              >
                <span className="relative z-10 inline-flex items-center gap-2">
                  Begin Your Story
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="#how"
                className={`inline-flex items-center justify-center gap-2 rounded-full border backdrop-blur px-6 py-4 text-sm font-medium transition-colors duration-500 ${
                  dark
                    ? "border-[#0E120F]/20 bg-white/40 text-[#0E120F] hover:bg-white/70"
                    : "border-white/20 bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                See How It Works
              </motion.a>
            </motion.div>

            {/* Scroll cue */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className={`mt-12 hidden lg:flex items-center gap-3 text-xs uppercase tracking-[0.25em] transition-colors duration-500 ${
                dark ? "text-[#0E120F]/50" : "text-white/50"
              }`}
            >
              <ArrowDown className="h-4 w-4" />
              Scroll to transform
            </motion.div>
          </div>

          {/* Figure stage (right on desktop, center on mobile) */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center">
            <motion.div
              style={{ scale: figureScale, y: figureY, filter: motionBlur }}
              className="relative h-[60vh] md:h-[70vh] aspect-[2/3] max-w-md mx-auto will-change-transform"
            >
              {/* breathing wrapper */}
              <motion.div
                animate={{ scale: [1, 1.012, 1] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                className="relative h-full w-full"
              >
                {/* shadow under figure */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-6 w-44 rounded-full bg-black/40 blur-2xl" />

                <motion.div style={{ opacity: o0 }} className="absolute inset-0">
                  <StageFigure stage={0} className="h-full w-full" />
                </motion.div>
                <motion.div style={{ opacity: o1 }} className="absolute inset-0">
                  <StageFigure stage={1} className="h-full w-full" />
                </motion.div>
                <motion.div style={{ opacity: o2 }} className="absolute inset-0">
                  <StageFigure stage={2} className="h-full w-full" />
                </motion.div>
                <motion.div style={{ opacity: o3 }} className="absolute inset-0">
                  <StageFigure stage={3} className="h-full w-full" />
                </motion.div>
                <motion.div style={{ opacity: o4 }} className="absolute inset-0">
                  <StageFigure stage={4} className="h-full w-full" />
                </motion.div>
              </motion.div>

              {/* Floating molecule chips */}
              <FloatingMolecules stage={activeStage} />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Hidden labels for SEO/screen-readers */}
      <span className="sr-only">
        {captions.map((c) => `${c.title} ${c.italics} — ${c.desc}`).join(" ")}
      </span>
    </section>
  );
}

function KineticCaption({ stage, dark = false }: { stage: number; dark?: boolean }) {
  const c = captions[stage];
  /* color tokens swap when the bg goes pale */
  const titleColor = dark ? "text-[#0E120F]" : "text-white";
  const italicColor = dark ? "#063128" : "#C8F074";
  const eyebrowColor = dark ? "text-[#0B5E4F]" : "text-[#C8F074]";
  const descColor = dark ? "text-[#0E120F]/65" : "text-white/70";
  const brandColor = dark ? "text-[#0E120F]/70" : "text-white/70";
  const sparkleColors = dark
    ? { first: "#0B5E4F", second: "#0E120F" }
    : { first: "#C8F074", second: "#FFFFFF" };

  return (
    <div className="relative">
      <SparklesText
        className={`!text-[11px] !font-medium uppercase tracking-[0.4em] mb-3 transition-colors duration-500 ${brandColor}`}
        colors={sparkleColors}
        sparklesCount={5}
      >
        Reduce · Wait
      </SparklesText>
      <motion.div
        key={`eb-${stage}`}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className={`text-xs uppercase tracking-[0.3em] transition-colors duration-500 ${eyebrowColor}`}
      >
        {c.eyebrow}
      </motion.div>
      <h1 className={`mt-4 font-serif text-[2.75rem] sm:text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight transition-colors duration-500 ${titleColor}`}>
        <motion.span
          key={`t-${stage}`}
          initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="block"
        >
          {c.title}
        </motion.span>
        <motion.span
          key={`i-${stage}`}
          initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="block italic transition-colors duration-500"
          style={{ color: italicColor }}
        >
          {c.italics}
        </motion.span>
      </h1>
      <motion.p
        key={`d-${stage}`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className={`mt-6 max-w-md text-base md:text-lg leading-relaxed text-balance transition-colors duration-500 ${descColor}`}
      >
        {c.desc}
      </motion.p>
    </div>
  );
}

function LightStreaks({ opacity }: { opacity: import("framer-motion").MotionValue<number> }) {
  return (
    <motion.div style={{ opacity }} className="absolute inset-0 pointer-events-none">
      {Array.from({ length: 16 }).map((_, i) => {
        const left = (i * 71) % 100;
        const delay = (i * 0.7) % 8;
        const dur = 6 + (i % 4) * 1.5;
        const w = 1 + (i % 3);
        return (
          <motion.div
            key={i}
            initial={{ y: "120vh", opacity: 0 }}
            animate={{ y: "-30vh", opacity: [0, 1, 0] }}
            transition={{ duration: dur, delay, repeat: Infinity, ease: "linear" }}
            className="absolute"
            style={{ left: `${left}%`, width: w, height: 60 + (i % 6) * 20, background: i % 3 === 0 ? "#C8F074" : "#FAFAF7", opacity: 0.4, filter: "blur(0.5px)" }}
          />
        );
      })}
    </motion.div>
  );
}

function FloatingMolecules({ stage }: { stage: number }) {
  const labels = [
    [{ k: "Hunger", v: "↑↑↑" }, { k: "BMI", v: "32+" }],
    [{ k: "Consult", v: "Booked" }, { k: "Plan", v: "Personalised" }],
    [{ k: "Cravings", v: "−60%" }, { k: "Appetite", v: "Calmer" }],
    [{ k: "Energy", v: "+38%" }, { k: "Posture", v: "Upright" }],
    [{ k: "Weight", v: "−21%" }, { k: "Confidence", v: "Restored" }],
  ];
  const items = labels[stage];
  return (
    <>
      {items.map((it, i) => (
        <motion.div
          key={`${stage}-${i}`}
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.3 + i * 0.15, type: "spring", stiffness: 200, damping: 18 }}
          className={`absolute rounded-2xl bg-white/95 backdrop-blur-xl shadow-2xl px-4 py-3 border border-white/30 ${
            i === 0 ? "-left-4 top-1/4" : "-right-4 bottom-1/3"
          }`}
        >
          <p className="text-[10px] uppercase tracking-wider text-[#6B7268]">{it.k}</p>
          <p className="font-serif text-xl text-[#0E120F]">{it.v}</p>
        </motion.div>
      ))}
    </>
  );
}
