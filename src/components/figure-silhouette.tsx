"use client";

/**
 * Five stylized human silhouettes representing the transformation journey.
 * Each uses the same viewBox so they crossfade in place.
 * Stage 0 (heavy) → Stage 4 (athletic).
 */

type Props = { className?: string; skinTone?: string; outline?: string };

const defaults = { skinTone: "#E8C8A8", outline: "#0E120F" };

export function StageFigure({ stage, ...rest }: { stage: 0 | 1 | 2 | 3 | 4 } & Props) {
  switch (stage) {
    case 0:
      return <Stage0 {...rest} />;
    case 1:
      return <Stage1 {...rest} />;
    case 2:
      return <Stage2 {...rest} />;
    case 3:
      return <Stage3 {...rest} />;
    case 4:
      return <Stage4 {...rest} />;
  }
}

const baseProps = {
  viewBox: "0 0 200 360",
  xmlns: "http://www.w3.org/2000/svg",
};

/* Stage 0 — heavy, slumped posture, oversized clothing */
function Stage0({ className, skinTone = defaults.skinTone, outline = defaults.outline }: Props) {
  return (
    <svg {...baseProps} className={className}>
      <defs>
        <linearGradient id="s0-cloth" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#3a2f25" />
          <stop offset="100%" stopColor="#1a1310" />
        </linearGradient>
      </defs>
      {/* head — slightly tilted forward */}
      <ellipse cx="100" cy="46" rx="22" ry="24" fill={skinTone} />
      <path d="M82 38 Q100 28 118 38 Q118 26 100 24 Q82 26 82 38 Z" fill="#2a1f17" />
      {/* neck */}
      <rect x="92" y="66" width="16" height="12" fill={skinTone} />
      {/* torso — wide oversized hoodie */}
      <path
        d="M55 78 Q60 76 75 76 H125 Q140 76 145 78 Q160 110 158 180 Q160 220 150 240 H50 Q40 220 42 180 Q40 110 55 78 Z"
        fill="url(#s0-cloth)"
      />
      {/* arms */}
      <path d="M50 90 Q30 130 28 200 Q30 220 42 218 Q44 170 56 110 Z" fill="url(#s0-cloth)" />
      <path d="M150 90 Q170 130 172 200 Q170 220 158 218 Q156 170 144 110 Z" fill="url(#s0-cloth)" />
      {/* hands */}
      <circle cx="33" cy="216" r="9" fill={skinTone} />
      <circle cx="167" cy="216" r="9" fill={skinTone} />
      {/* legs — baggy */}
      <path d="M58 240 Q58 290 64 340 H92 Q94 290 92 240 Z" fill="#2a1f17" />
      <path d="M108 240 Q106 290 108 340 H136 Q142 290 142 240 Z" fill="#2a1f17" />
      {/* shoes */}
      <ellipse cx="78" cy="346" rx="18" ry="6" fill={outline} />
      <ellipse cx="122" cy="346" rx="18" ry="6" fill={outline} />
      {/* face — neutral, eyes lowered */}
      <ellipse cx="92" cy="48" rx="1.6" ry="1.2" fill={outline} />
      <ellipse cx="108" cy="48" rx="1.6" ry="1.2" fill={outline} />
      <path d="M93 58 Q100 56 107 58" stroke={outline} strokeWidth="1.4" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/* Stage 1 — slightly slimmer, posture starting to improve */
function Stage1({ className, skinTone = defaults.skinTone, outline = defaults.outline }: Props) {
  return (
    <svg {...baseProps} className={className}>
      <defs>
        <linearGradient id="s1-cloth" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#5a4d3f" />
          <stop offset="100%" stopColor="#3a2f25" />
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="44" rx="20" ry="22" fill={skinTone} />
      <path d="M84 36 Q100 28 116 36 Q116 24 100 22 Q84 24 84 36 Z" fill="#2a1f17" />
      <rect x="93" y="64" width="14" height="11" fill={skinTone} />
      <path
        d="M62 76 Q66 74 80 74 H120 Q134 74 138 76 Q150 108 148 175 Q150 215 142 238 H58 Q50 215 52 175 Q50 108 62 76 Z"
        fill="url(#s1-cloth)"
      />
      <path d="M58 88 Q40 130 38 198 Q40 216 50 214 Q52 168 62 108 Z" fill="url(#s1-cloth)" />
      <path d="M142 88 Q160 130 162 198 Q160 216 150 214 Q148 168 138 108 Z" fill="url(#s1-cloth)" />
      <circle cx="44" cy="212" r="8" fill={skinTone} />
      <circle cx="156" cy="212" r="8" fill={skinTone} />
      <path d="M62 238 Q62 290 68 340 H92 Q94 290 92 238 Z" fill="#3a2f25" />
      <path d="M108 238 Q106 290 108 340 H132 Q138 290 138 238 Z" fill="#3a2f25" />
      <ellipse cx="80" cy="346" rx="16" ry="5" fill={outline} />
      <ellipse cx="120" cy="346" rx="16" ry="5" fill={outline} />
      <ellipse cx="93" cy="46" rx="1.5" ry="1.2" fill={outline} />
      <ellipse cx="107" cy="46" rx="1.5" ry="1.2" fill={outline} />
      <path d="M94 56 Q100 56 106 56" stroke={outline} strokeWidth="1.4" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/* Stage 2 — average build, upright posture */
function Stage2({ className, skinTone = defaults.skinTone, outline = defaults.outline }: Props) {
  return (
    <svg {...baseProps} className={className}>
      <defs>
        <linearGradient id="s2-cloth" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#7c8478" />
          <stop offset="100%" stopColor="#525a4f" />
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="42" rx="18" ry="20" fill={skinTone} />
      <path d="M86 36 Q100 26 114 36 Q114 22 100 20 Q86 22 86 36 Z" fill="#2a1f17" />
      <rect x="94" y="60" width="12" height="11" fill={skinTone} />
      <path
        d="M70 72 Q74 70 84 70 H116 Q126 70 130 72 Q140 105 138 170 Q140 210 132 232 H68 Q60 210 62 170 Q60 105 70 72 Z"
        fill="url(#s2-cloth)"
      />
      <path d="M66 84 Q50 130 50 198 Q52 214 60 212 Q62 168 68 110 Z" fill="url(#s2-cloth)" />
      <path d="M134 84 Q150 130 150 198 Q148 214 140 212 Q138 168 132 110 Z" fill="url(#s2-cloth)" />
      <circle cx="55" cy="210" r="7" fill={skinTone} />
      <circle cx="145" cy="210" r="7" fill={skinTone} />
      <path d="M70 232 Q70 286 75 340 H94 Q96 286 94 232 Z" fill="#525a4f" />
      <path d="M106 232 Q104 286 106 340 H130 Q130 286 130 232 Z" fill="#525a4f" />
      <ellipse cx="82" cy="346" rx="15" ry="5" fill={outline} />
      <ellipse cx="118" cy="346" rx="15" ry="5" fill={outline} />
      <ellipse cx="94" cy="44" rx="1.5" ry="1.2" fill={outline} />
      <ellipse cx="106" cy="44" rx="1.5" ry="1.2" fill={outline} />
      <path d="M94 54 Q100 56 106 54" stroke={outline} strokeWidth="1.4" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/* Stage 3 — fit, upright, athletic wear hint */
function Stage3({ className, skinTone = defaults.skinTone, outline = defaults.outline }: Props) {
  return (
    <svg {...baseProps} className={className}>
      <defs>
        <linearGradient id="s3-cloth" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#0B5E4F" />
          <stop offset="100%" stopColor="#063128" />
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="42" rx="17" ry="19" fill={skinTone} />
      <path d="M87 36 Q100 24 113 36 Q113 22 100 20 Q87 22 87 36 Z" fill="#2a1f17" />
      <rect x="95" y="59" width="10" height="11" fill={skinTone} />
      <path
        d="M76 70 Q80 68 88 68 H112 Q120 68 124 70 Q132 102 132 165 Q132 205 126 228 H74 Q68 205 68 165 Q68 102 76 70 Z"
        fill="url(#s3-cloth)"
      />
      {/* arm muscles */}
      <path d="M70 80 Q56 130 60 196 Q62 212 68 208 Q70 168 74 108 Z" fill={skinTone} />
      <path d="M130 80 Q144 130 140 196 Q138 212 132 208 Q130 168 126 108 Z" fill={skinTone} />
      <circle cx="64" cy="208" r="7" fill={skinTone} />
      <circle cx="136" cy="208" r="7" fill={skinTone} />
      {/* shorts */}
      <path d="M76 228 Q76 250 80 270 H100 Q102 250 102 228 Z" fill="#0E120F" />
      <path d="M104 228 Q104 250 106 270 H124 Q124 250 124 228 Z" fill="#0E120F" />
      {/* legs */}
      <path d="M80 270 Q80 305 86 340 H98 Q100 305 100 270 Z" fill={skinTone} />
      <path d="M106 270 Q104 305 106 340 H120 Q122 305 122 270 Z" fill={skinTone} />
      <ellipse cx="89" cy="346" rx="13" ry="5" fill="#FAFAF7" />
      <ellipse cx="113" cy="346" rx="13" ry="5" fill="#FAFAF7" />
      <ellipse cx="95" cy="44" rx="1.4" ry="1.2" fill={outline} />
      <ellipse cx="105" cy="44" rx="1.4" ry="1.2" fill={outline} />
      <path d="M93 53 Q100 58 107 53" stroke={outline} strokeWidth="1.4" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/* Stage 4 — athletic, arms slightly raised, confident posture */
function Stage4({ className, skinTone = defaults.skinTone, outline = defaults.outline }: Props) {
  return (
    <svg {...baseProps} className={className}>
      <defs>
        <linearGradient id="s4-cloth" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#0B5E4F" />
          <stop offset="100%" stopColor="#063128" />
        </linearGradient>
        <radialGradient id="s4-glow">
          <stop offset="0%" stopColor="#C8F074" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#C8F074" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* aura glow */}
      <circle cx="100" cy="180" r="140" fill="url(#s4-glow)" />
      <ellipse cx="100" cy="40" rx="17" ry="19" fill={skinTone} />
      <path d="M87 34 Q100 22 113 34 Q113 20 100 18 Q87 20 87 34 Z" fill="#2a1f17" />
      <rect x="95" y="57" width="10" height="11" fill={skinTone} />
      {/* tank top */}
      <path
        d="M78 68 Q82 66 90 66 H110 Q118 66 122 68 Q128 100 128 158 Q128 200 124 222 H76 Q72 200 72 158 Q72 100 78 68 Z"
        fill="url(#s4-cloth)"
      />
      {/* sculpted arms slightly out */}
      <path d="M72 76 Q50 100 42 150 Q40 170 50 174 Q58 130 76 102 Z" fill={skinTone} />
      <path d="M128 76 Q150 100 158 150 Q160 170 150 174 Q142 130 124 102 Z" fill={skinTone} />
      <circle cx="46" cy="172" r="7" fill={skinTone} />
      <circle cx="154" cy="172" r="7" fill={skinTone} />
      {/* athletic shorts */}
      <path d="M78 222 Q78 248 82 268 H100 Q102 248 102 222 Z" fill="#0E120F" />
      <path d="M104 222 Q104 248 106 268 H124 Q124 248 124 222 Z" fill="#0E120F" />
      {/* defined legs */}
      <path d="M82 268 Q80 302 86 340 H100 Q102 302 102 268 Z" fill={skinTone} />
      <path d="M106 268 Q104 302 106 340 H122 Q124 302 122 268 Z" fill={skinTone} />
      <ellipse cx="91" cy="346" rx="13" ry="5" fill="#FAFAF7" />
      <ellipse cx="115" cy="346" rx="13" ry="5" fill="#FAFAF7" />
      {/* confident smile */}
      <ellipse cx="94" cy="42" rx="1.4" ry="1.2" fill={outline} />
      <ellipse cx="106" cy="42" rx="1.4" ry="1.2" fill={outline} />
      <path d="M91 51 Q100 60 109 51" stroke={outline} strokeWidth="1.6" fill="none" strokeLinecap="round" />
    </svg>
  );
}
