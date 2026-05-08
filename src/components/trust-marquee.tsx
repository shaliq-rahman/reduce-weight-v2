"use client";

import { Marquee } from "@/components/ui/marquee";

const items = [
  "Licensed Physicians",
  "Cold-Chain Delivery",
  "HIPAA-Grade Privacy",
  "India Pharmacy Council Registered",
  "4.9★ Patient Rating",
  "Discreet Packaging",
  "End-to-End Encrypted Records",
];

export function TrustMarquee() {
  return (
    <section
      aria-label="Trust signals"
      className="relative py-10 border-y border-black/5 bg-white overflow-hidden"
    >
      <Marquee pauseOnHover className="[--duration:35s] [--gap:3rem]">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-center gap-4 whitespace-nowrap text-sm tracking-wide text-[#0E120F]/60"
          >
            <span className="font-serif italic text-[#0B5E4F]">·</span>
            <span className="uppercase">{item}</span>
          </div>
        ))}
      </Marquee>

      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10"
        style={{ background: "linear-gradient(to right, #fff 30%, transparent)" }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10"
        style={{ background: "linear-gradient(to left, #fff 30%, transparent)" }}
      />
    </section>
  );
}
