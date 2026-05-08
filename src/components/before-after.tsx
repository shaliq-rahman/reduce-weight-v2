"use client";

import { motion, useMotionValue, useTransform, useMotionTemplate } from "framer-motion";
import { useRef, useState } from "react";
import { GripVertical } from "lucide-react";
import { StageFigure } from "@/components/figure-silhouette";

export function BeforeAfter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(50);
  const [isDragging, setIsDragging] = useState(false);

  const updateFromPointer = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    x.set(Math.min(100, Math.max(0, pct)));
  };

  /* width of the "after" reveal — the after side is on the right, fixed underneath; before side covers it via clip */
  const beforeClip = useMotionTemplate`inset(0 ${useTransform(x, (v) => 100 - v)}% 0 0)`;
  const handleLeft = useMotionTemplate`${x}%`;

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#FAFAF7] to-[#F0EFE8] overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-[#0B5E4F]">
            Before · After
          </span>
          <h2 className="mt-3 font-serif text-4xl md:text-6xl tracking-tight text-[#0E120F] text-balance">
            Drag to see the{" "}
            <span className="italic text-[#0B5E4F]">transformation.</span>
          </h2>
          <p className="mt-5 text-[#0E120F]/65 text-lg leading-relaxed">
            Six months of physician-led GLP-1 protocol — represented as the
            stages our patients move through. Drag the handle.
          </p>
        </div>

        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          onPointerDown={(e) => {
            setIsDragging(true);
            updateFromPointer(e.clientX);
            (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
          }}
          onPointerMove={(e) => {
            if (isDragging) updateFromPointer(e.clientX);
          }}
          onPointerUp={() => setIsDragging(false)}
          onPointerCancel={() => setIsDragging(false)}
          className="relative mt-14 aspect-[16/10] md:aspect-[16/9] rounded-3xl overflow-hidden cursor-ew-resize select-none border border-black/5 shadow-2xl touch-none"
        >
          {/* AFTER — bright wellness side, base layer */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#FAFAF7] via-[#E5F0D8] to-[#C8F074]/60">
            <Rays />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative h-[85%] aspect-[2/3]">
                <StageFigure stage={4} className="h-full w-full drop-shadow-2xl" />
              </div>
            </div>
            <div className="absolute top-6 right-6 rounded-full bg-[#0B5E4F] text-[#C8F074] px-3.5 py-1.5 text-[10px] uppercase tracking-[0.2em]">
              After · 6 mo
            </div>
            <div className="absolute bottom-6 right-6 text-right">
              <p className="font-serif text-3xl md:text-5xl text-[#0E120F]">
                −21<span className="text-2xl text-[#0B5E4F]">%</span>
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-[#0E120F]/50 mt-1">
                Body weight
              </p>
            </div>
          </div>

          {/* BEFORE — dark moody side, clipped */}
          <motion.div
            style={{ clipPath: beforeClip }}
            className="absolute inset-0 bg-gradient-to-br from-[#1a1410] via-[#2a1f15] to-[#3d2f22]"
          >
            <DarkParticles />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative h-[85%] aspect-[2/3]">
                <StageFigure stage={0} className="h-full w-full drop-shadow-2xl" />
              </div>
            </div>
            <div className="absolute top-6 left-6 rounded-full bg-white/10 backdrop-blur text-white/80 border border-white/20 px-3.5 py-1.5 text-[10px] uppercase tracking-[0.2em]">
              Before · Day 0
            </div>
            <div className="absolute bottom-6 left-6 text-left">
              <p className="font-serif text-3xl md:text-5xl text-white">
                BMI <span className="italic text-[#C8F074]">32+</span>
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-white/50 mt-1">
                Starting point
              </p>
            </div>
          </motion.div>

          {/* Divider line + handle */}
          <motion.div
            style={{ left: handleLeft }}
            className="absolute top-0 bottom-0 -translate-x-1/2 w-[2px] bg-gradient-to-b from-transparent via-white/90 to-transparent z-20 pointer-events-none"
          >
            <motion.div
              animate={isDragging ? { scale: 1.1 } : { scale: [1, 1.05, 1] }}
              transition={
                isDragging
                  ? { type: "spring", stiffness: 400, damping: 20 }
                  : { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white shadow-2xl flex items-center justify-center border border-black/10 pointer-events-none"
            >
              <GripVertical className="h-5 w-5 text-[#0E120F]" />
            </motion.div>
          </motion.div>

          {/* Hint text */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.2em] text-white/40 pointer-events-none">
            Drag · or click anywhere
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Rays() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scaleY: 0.5 }}
          animate={{ opacity: [0, 0.4, 0], scaleY: [0.5, 1.2, 0.5] }}
          transition={{ duration: 4 + i * 0.5, delay: i * 0.7, repeat: Infinity }}
          className="absolute top-0 h-full w-px bg-gradient-to-b from-transparent via-white to-transparent origin-top"
          style={{ left: `${10 + i * 16}%` }}
        />
      ))}
    </div>
  );
}

function DarkParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {Array.from({ length: 10 }).map((_, i) => {
        const left = (i * 89) % 100;
        const delay = (i * 0.5) % 5;
        return (
          <motion.div
            key={i}
            initial={{ y: "120%", opacity: 0 }}
            animate={{ y: "-20%", opacity: [0, 0.4, 0] }}
            transition={{ duration: 8 + (i % 4), delay, repeat: Infinity, ease: "linear" }}
            className="absolute h-1.5 w-1.5 rounded-full bg-white/30"
            style={{ left: `${left}%` }}
          />
        );
      })}
    </div>
  );
}
