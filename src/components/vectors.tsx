"use client";

import { motion } from "framer-motion";

/* Animated background blobs */
export function AnimatedBlobs({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <motion.div
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-20 h-[400px] w-[400px] rounded-full bg-[#C8F074]/30 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -50, 30, 0], y: [0, 40, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 -right-24 h-[500px] w-[500px] rounded-full bg-[#0B5E4F]/10 blur-3xl"
      />
    </div>
  );
}

/* Orbital rings — used around hero photo */
export function OrbitRings() {
  return (
    <svg
      className="absolute inset-0 h-full w-full pointer-events-none"
      viewBox="0 0 400 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="orbit-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0B5E4F" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#0B5E4F" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.ellipse
        cx="200"
        cy="250"
        rx="180"
        ry="220"
        stroke="url(#orbit-grad)"
        strokeWidth="1"
        strokeDasharray="3 6"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "200px 250px" }}
      />
      <motion.circle
        cx="200"
        cy="250"
        r="240"
        stroke="#0B5E4F"
        strokeOpacity="0.08"
        strokeWidth="1"
        initial={{ rotate: 0 }}
        animate={{ rotate: -360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "200px 250px" }}
      />
    </svg>
  );
}

/* Animated heartbeat / ECG line */
export function ECGPulse({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 60"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M0 30 L80 30 L100 30 L110 10 L120 50 L130 20 L140 30 L220 30 L240 30 L250 12 L260 48 L270 30 L400 30"
        stroke="#0B5E4F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}

/* Animated DNA strand */
export function DNAStrand({ className = "" }: { className?: string }) {
  const points = Array.from({ length: 12 });
  return (
    <svg
      viewBox="0 0 200 400"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "100px 200px" }}
      >
        {points.map((_, i) => {
          const y = (i / points.length) * 400;
          const phase = (i / points.length) * Math.PI * 4;
          const x1 = 100 + Math.sin(phase) * 50;
          const x2 = 100 - Math.sin(phase) * 50;
          return (
            <g key={i}>
              <line
                x1={x1}
                y1={y}
                x2={x2}
                y2={y}
                stroke="#0B5E4F"
                strokeOpacity="0.15"
                strokeWidth="1"
              />
              <circle cx={x1} cy={y} r="3" fill="#0B5E4F" opacity="0.4" />
              <circle cx={x2} cy={y} r="3" fill="#C8F074" />
            </g>
          );
        })}
      </motion.g>
    </svg>
  );
}

/* Animated pill capsule icon */
export function PillCapsule({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      whileHover={{ rotate: 12 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <defs>
        <linearGradient id="pill-l" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#0B5E4F" />
          <stop offset="100%" stopColor="#063128" />
        </linearGradient>
      </defs>
      <g transform="rotate(-30 32 32)">
        <rect x="14" y="22" width="36" height="20" rx="10" fill="#FAFAF7" stroke="#0B5E4F" strokeWidth="1.5" />
        <rect x="14" y="22" width="18" height="20" rx="10" fill="url(#pill-l)" />
        <motion.circle
          cx="40"
          cy="32"
          r="1.5"
          fill="#C8F074"
          animate={{ opacity: [0, 1, 0], cx: [40, 46, 40] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </g>
    </motion.svg>
  );
}

/* Animated stethoscope */
export function StethoscopeAnim({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 12 V28 a10 10 0 0 0 20 0 V12"
        stroke="#0B5E4F"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M26 38 v8 a8 8 0 0 0 16 0 V36"
        stroke="#0B5E4F"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
      <motion.circle
        cx="46"
        cy="34"
        r="6"
        fill="#0B5E4F"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "46px 34px" }}
      />
      <circle cx="16" cy="12" r="2.5" fill="#0B5E4F" />
      <circle cx="36" cy="12" r="2.5" fill="#0B5E4F" />
    </svg>
  );
}

/* Animated chat bubble */
export function ChatBubbleAnim({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 18 a6 6 0 0 1 6-6 h32 a6 6 0 0 1 6 6 v18 a6 6 0 0 1-6 6 H28 l-10 8 v-8 h-2 a6 6 0 0 1-6-6 z"
        fill="none"
        stroke="#0B5E4F"
        strokeWidth="2"
      />
      {[20, 32, 44].map((cx, i) => (
        <motion.circle
          key={cx}
          cx={cx}
          cy="27"
          r="2.5"
          fill="#0B5E4F"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </svg>
  );
}

/* Wave divider */
export function WaveDivider({ flip = false, color = "#FAFAF7" }: { flip?: boolean; color?: string }) {
  return (
    <div className={`-mb-px ${flip ? "rotate-180" : ""}`}>
      <svg viewBox="0 0 1440 80" className="w-full h-12 md:h-20" preserveAspectRatio="none">
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

/* Floating particles */
export function FloatingParticles({ count = 12 }: { count?: number }) {
  const particles = Array.from({ length: count });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((_, i) => {
        const left = (i * 97) % 100;
        const delay = (i * 0.4) % 6;
        const size = 4 + ((i * 7) % 8);
        return (
          <motion.div
            key={i}
            initial={{ y: "110vh", opacity: 0 }}
            animate={{ y: "-10vh", opacity: [0, 0.6, 0] }}
            transition={{
              duration: 12 + (i % 5),
              delay,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute rounded-full"
            style={{
              left: `${left}%`,
              width: size,
              height: size,
              background: i % 3 === 0 ? "#C8F074" : "#0B5E4F",
            }}
          />
        );
      })}
    </div>
  );
}
