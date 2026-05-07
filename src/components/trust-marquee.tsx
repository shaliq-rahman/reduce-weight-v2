"use client";

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
  const loop = [...items, ...items];
  return (
    <section
      aria-label="Trust signals"
      className="relative py-10 border-y border-black/5 bg-white overflow-hidden"
    >
      <div
        className="absolute inset-y-0 left-0 w-32 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, #fff 30%, transparent)",
        }}
      />
      <div
        className="absolute inset-y-0 right-0 w-32 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to left, #fff 30%, transparent)",
        }}
      />
      <div className="flex w-max animate-marquee gap-12 px-6">
        {loop.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 whitespace-nowrap text-sm tracking-wide text-[#0E120F]/60"
          >
            <span className="font-serif italic text-[#0B5E4F]">·</span>
            <span className="uppercase">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
