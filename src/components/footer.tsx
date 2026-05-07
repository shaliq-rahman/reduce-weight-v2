"use client";

import { ArrowRight } from "lucide-react";

const InstagramIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
  </svg>
);
const TwitterIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const LinkedinIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM8.34 18.34v-7.78H5.67v7.78zM7 9.34a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zm11.34 9V13.9c0-2.4-1.28-3.52-2.99-3.52-1.38 0-2 .76-2.34 1.3v-1.12H10.34v7.78h2.67v-4.34c0-.43.03-.86.16-1.17.35-.86 1.13-1.74 2.45-1.74 1.73 0 2.42 1.32 2.42 3.25v4z" />
  </svg>
);

const cols = [
  {
    title: "Programme",
    links: ["How It Works", "Eligibility", "Medication", "Pricing", "FAQ"],
  },
  {
    title: "Company",
    links: ["About", "Our Doctors", "Careers", "Press", "Partners"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Refund Policy", "Cookie Settings", "Disclaimer"],
  },
];

export function Footer() {
  return (
    <footer className="relative bg-[#FAFAF7] border-t border-black/5 pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <a href="#" className="flex items-center gap-1.5">
              <span className="font-serif text-3xl tracking-tight text-[#0E120F]">
                Reduce
              </span>
              <span className="inline-block h-1.5 w-5 rounded-full bg-[#C8F074]" />
              <span className="font-serif text-3xl italic tracking-tight text-[#0B5E4F]">
                Wait
              </span>
            </a>
            <p className="mt-5 max-w-sm text-[#0E120F]/60 leading-relaxed">
              Physician-led GLP-1 weight loss, delivered with the dignity and
              care medicine deserves.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 flex max-w-sm overflow-hidden rounded-full border border-black/10 bg-white focus-within:border-[#0B5E4F] transition"
            >
              <input
                type="email"
                placeholder="Get clinical wellness insights"
                className="flex-1 bg-transparent px-5 py-3 text-sm placeholder:text-[#0E120F]/40 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="bg-[#0E120F] text-[#C8F074] px-4 hover:bg-[#0B5E4F] transition"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>

          {cols.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <p className="text-xs uppercase tracking-[0.2em] text-[#0B5E4F]">
                {col.title}
              </p>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-[#0E120F]/70 hover:text-[#0E120F] transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-1">
            <p className="text-xs uppercase tracking-[0.2em] text-[#0B5E4F]">
              Social
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="h-9 w-9 rounded-full border border-black/10 flex items-center justify-center hover:bg-[#0E120F] hover:text-white hover:border-[#0E120F] transition"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="h-9 w-9 rounded-full border border-black/10 flex items-center justify-center hover:bg-[#0E120F] hover:text-white hover:border-[#0E120F] transition"
              >
                <TwitterIcon className="h-3.5 w-3.5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="h-9 w-9 rounded-full border border-black/10 flex items-center justify-center hover:bg-[#0E120F] hover:text-white hover:border-[#0E120F] transition"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-black/5 flex flex-col md:flex-row gap-3 items-start md:items-center justify-between text-xs text-[#0E120F]/45">
          <p>
            © {new Date().getFullYear()} Reduce-Wait. Licensed clinical
            programme. Not a substitute for in-person medical advice.
          </p>
          <p className="font-serif italic">Made for Kerala, with care.</p>
        </div>
      </div>
    </footer>
  );
}
