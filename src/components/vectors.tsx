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

/* 3D realistic pill capsule — multi-tone gradients, specular highlight, soft drop shadow, gentle float */
export function PillCapsule({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -3, 0], rotate: [0, 1.5, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ rotate: 12, scale: 1.06 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
        <defs>
          {/* dark green half — body */}
          <linearGradient id="pill3d-dark" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#1a8b73" />
            <stop offset="35%" stopColor="#0B5E4F" />
            <stop offset="100%" stopColor="#042822" />
          </linearGradient>
          {/* light half — body */}
          <linearGradient id="pill3d-light" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="40%" stopColor="#F2F4EE" />
            <stop offset="100%" stopColor="#C9CFC0" />
          </linearGradient>
          {/* glossy specular streak */}
          <linearGradient id="pill3d-shine" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="80%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
          {/* shadow under the pill */}
          <radialGradient id="pill3d-shadow" cx="0.5" cy="0.5">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
          {/* sparkle */}
          <radialGradient id="pill3d-spark">
            <stop offset="0%" stopColor="#C8F074" />
            <stop offset="60%" stopColor="#C8F074" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#C8F074" stopOpacity="0" />
          </radialGradient>
          <filter id="pill3d-soft" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="1.4" />
          </filter>
        </defs>

        {/* ground shadow */}
        <ellipse cx="100" cy="170" rx="62" ry="9" fill="url(#pill3d-shadow)" />

        {/* capsule body — tilted -28°, split horizontally */}
        <g transform="rotate(-28 100 100)">
          {/* dark half (left) */}
          <path
            d="M40 100 a30 30 0 0 1 30 -30 h30 v60 h-30 a30 30 0 0 1 -30 -30 z"
            fill="url(#pill3d-dark)"
          />
          {/* light half (right) */}
          <path
            d="M100 70 h30 a30 30 0 0 1 0 60 h-30 z"
            fill="url(#pill3d-light)"
          />
          {/* seam shadow */}
          <rect x="98" y="70" width="4" height="60" fill="#000000" opacity="0.18" />
          {/* deep top rim shadow */}
          <path
            d="M70 70 a30 30 0 0 0 -30 30"
            stroke="#02201B"
            strokeWidth="1.4"
            strokeOpacity="0.5"
            fill="none"
          />
          {/* specular highlight strips */}
          <ellipse cx="78" cy="80" rx="22" ry="5" fill="url(#pill3d-shine)" filter="url(#pill3d-soft)" />
          <ellipse cx="120" cy="80" rx="14" ry="3.5" fill="#FFFFFF" opacity="0.9" filter="url(#pill3d-soft)" />
          {/* subtle rim highlight bottom-left */}
          <path
            d="M44 110 a30 30 0 0 0 26 20"
            stroke="#5BCFAE"
            strokeWidth="1.2"
            strokeOpacity="0.6"
            fill="none"
          />
        </g>

        {/* floating sparkles */}
        <motion.circle
          cx="150"
          cy="60"
          r="6"
          fill="url(#pill3d-spark)"
          animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 2.4, repeat: Infinity }}
        />
        <motion.circle
          cx="40"
          cy="50"
          r="4"
          fill="url(#pill3d-spark)"
          animate={{ opacity: [0, 1, 0], scale: [0.6, 1, 0.6] }}
          transition={{ duration: 2.8, delay: 0.6, repeat: Infinity }}
        />
        <motion.circle
          cx="170"
          cy="120"
          r="3"
          fill="url(#pill3d-spark)"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, delay: 1, repeat: Infinity }}
        />
      </svg>
    </motion.div>
  );
}

/* 3D realistic stethoscope — chrome diaphragm, glossy tubing, pulsing aura */
export function StethoscopeAnim({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -3, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
        <defs>
          {/* tubing gradient — glossy rubber */}
          <linearGradient id="steth-tube" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#063128" />
            <stop offset="40%" stopColor="#0B5E4F" />
            <stop offset="60%" stopColor="#1a8b73" />
            <stop offset="100%" stopColor="#063128" />
          </linearGradient>
          {/* chrome diaphragm — outer ring */}
          <radialGradient id="steth-chrome" cx="0.35" cy="0.3">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="45%" stopColor="#C9D1C8" />
            <stop offset="100%" stopColor="#5C6358" />
          </radialGradient>
          {/* dark center */}
          <radialGradient id="steth-center" cx="0.4" cy="0.35">
            <stop offset="0%" stopColor="#3C4339" />
            <stop offset="100%" stopColor="#0E120F" />
          </radialGradient>
          {/* glow aura */}
          <radialGradient id="steth-aura">
            <stop offset="0%" stopColor="#C8F074" stopOpacity="0.45" />
            <stop offset="70%" stopColor="#C8F074" stopOpacity="0" />
          </radialGradient>
          {/* earpiece tip */}
          <radialGradient id="steth-tip" cx="0.35" cy="0.3">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#5C6358" />
          </radialGradient>
          <filter id="steth-shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>

        {/* aura behind diaphragm — pulses */}
        <motion.circle
          cx="135"
          cy="135"
          r="40"
          fill="url(#steth-aura)"
          animate={{ scale: [1, 1.3, 1], opacity: [0.7, 0.3, 0.7] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "135px 135px" }}
        />

        {/* drop shadow */}
        <ellipse cx="100" cy="180" rx="55" ry="6" fill="#000000" opacity="0.2" filter="url(#steth-shadow)" />

        {/* tubing — Y shape */}
        <path
          d="M50 30 Q35 70 50 110 Q60 130 75 135"
          stroke="url(#steth-tube)"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M150 30 Q165 70 150 110 Q140 130 125 135"
          stroke="url(#steth-tube)"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        {/* tube highlight */}
        <path
          d="M50 30 Q36 70 50 108"
          stroke="#5BCFAE"
          strokeWidth="1.5"
          strokeOpacity="0.6"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M150 30 Q164 70 150 108"
          stroke="#5BCFAE"
          strokeWidth="1.5"
          strokeOpacity="0.6"
          strokeLinecap="round"
          fill="none"
        />

        {/* earpieces */}
        <circle cx="50" cy="28" r="9" fill="url(#steth-tip)" />
        <circle cx="150" cy="28" r="9" fill="url(#steth-tip)" />
        <circle cx="48" cy="26" r="2.5" fill="#FFFFFF" opacity="0.9" />
        <circle cx="148" cy="26" r="2.5" fill="#FFFFFF" opacity="0.9" />

        {/* connector node where tubes meet */}
        <circle cx="100" cy="130" r="5" fill="#0E120F" />
        <circle cx="100" cy="130" r="2" fill="#5C6358" />

        {/* chest piece — chrome diaphragm */}
        <g transform="translate(135 135)">
          {/* outer chrome ring */}
          <circle r="32" fill="url(#steth-chrome)" />
          {/* inner dark well */}
          <circle r="24" fill="url(#steth-center)" />
          {/* membrane highlight */}
          <ellipse cx="-8" cy="-10" rx="14" ry="6" fill="#FFFFFF" opacity="0.18" />
          {/* concentric ring detail */}
          <circle r="22" fill="none" stroke="#FFFFFF" strokeWidth="0.5" strokeOpacity="0.3" />
          <circle r="18" fill="none" stroke="#FFFFFF" strokeWidth="0.5" strokeOpacity="0.15" />
          {/* center dot */}
          <motion.circle
            r="3"
            fill="#C8F074"
            animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </g>
      </svg>
    </motion.div>
  );
}

/* 3D realistic chat bubble — glossy, rim-lit, animated typing dots with shadows */
export function ChatBubbleAnim({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -2, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
        <defs>
          {/* bubble body */}
          <linearGradient id="bub-body" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="40%" stopColor="#E8F0DC" />
            <stop offset="100%" stopColor="#A6C387" />
          </linearGradient>
          {/* bubble interior shadow */}
          <radialGradient id="bub-inset" cx="0.5" cy="0.4">
            <stop offset="60%" stopColor="#FFFFFF" stopOpacity="0" />
            <stop offset="100%" stopColor="#0B5E4F" stopOpacity="0.18" />
          </radialGradient>
          {/* glossy top sheen */}
          <linearGradient id="bub-sheen" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
          {/* dot 3D */}
          <radialGradient id="bub-dot" cx="0.35" cy="0.3">
            <stop offset="0%" stopColor="#1a8b73" />
            <stop offset="60%" stopColor="#0B5E4F" />
            <stop offset="100%" stopColor="#042822" />
          </radialGradient>
          <filter id="bub-shadow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>

        {/* drop shadow */}
        <ellipse cx="100" cy="175" rx="62" ry="8" fill="#000000" opacity="0.18" filter="url(#bub-shadow)" />

        {/* main bubble */}
        <path
          d="M40 60 a22 22 0 0 1 22 -22 h76 a22 22 0 0 1 22 22 v54 a22 22 0 0 1 -22 22 H86 l-22 22 v-22 h-2 a22 22 0 0 1 -22 -22 z"
          fill="url(#bub-body)"
        />
        {/* inset shadow for depth */}
        <path
          d="M40 60 a22 22 0 0 1 22 -22 h76 a22 22 0 0 1 22 22 v54 a22 22 0 0 1 -22 22 H86 l-22 22 v-22 h-2 a22 22 0 0 1 -22 -22 z"
          fill="url(#bub-inset)"
        />
        {/* top sheen */}
        <path
          d="M50 50 a14 14 0 0 1 14 -10 h72 a14 14 0 0 1 14 10 v18 a8 8 0 0 1 -8 8 H58 a8 8 0 0 1 -8 -8 z"
          fill="url(#bub-sheen)"
        />
        {/* outer rim highlight */}
        <path
          d="M40 60 a22 22 0 0 1 22 -22 h76 a22 22 0 0 1 22 22 v54 a22 22 0 0 1 -22 22 H86 l-22 22 v-22 h-2 a22 22 0 0 1 -22 -22 z"
          fill="none"
          stroke="#FFFFFF"
          strokeOpacity="0.6"
          strokeWidth="0.8"
        />

        {/* typing dots */}
        {[70, 100, 130].map((cx, i) => (
          <motion.g
            key={cx}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 1.1, repeat: Infinity, delay: i * 0.18, ease: "easeInOut" }}
          >
            {/* dot shadow */}
            <ellipse cx={cx} cy={92} rx="6" ry="1.5" fill="#000000" opacity="0.18" />
            {/* dot ball */}
            <circle cx={cx} cy="84" r="7" fill="url(#bub-dot)" />
            {/* dot highlight */}
            <circle cx={cx - 2} cy="81" r="2" fill="#FFFFFF" opacity="0.8" />
          </motion.g>
        ))}
      </svg>
    </motion.div>
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
