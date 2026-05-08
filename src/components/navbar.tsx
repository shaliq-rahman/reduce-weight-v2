"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#program", label: "Program" },
  { href: "#how", label: "How It Works" },
  { href: "#results", label: "Results" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled
            ? "py-3 backdrop-blur-xl bg-[#FAFAF7]/70 border-b border-black/5"
            : "py-5 bg-transparent",
        )}
      >
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-1.5 group">
            <span className={cn("font-serif text-2xl tracking-tight transition-colors", scrolled ? "text-[#0E120F]" : "text-white")}>
              Reduce
            </span>
            <span className="inline-block h-1.5 w-5 rounded-full bg-[#C8F074] group-hover:w-7 transition-all" />
            <span className={cn("font-serif text-2xl italic tracking-tight transition-colors", scrolled ? "text-[#0B5E4F]" : "text-[#C8F074]")}>
              Wait
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={cn(
                  "relative text-sm transition-colors group py-1",
                  scrolled ? "text-[#0E120F]/70 hover:text-[#0E120F]" : "text-white/70 hover:text-white",
                )}
              >
                {l.label}
                <span className="absolute bottom-0 left-0 h-px w-0 bg-[#C8F074] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              href="#assessment"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#0B5E4F] text-[#FAFAF7] px-5 py-2.5 text-sm font-medium hover:bg-[#0E120F] transition-colors"
            >
              Book Consultation
            </motion.a>
            <motion.button
              whileTap={{ scale: 0.9 }}
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className={cn(
                "md:hidden rounded-full p-2 transition-colors",
                scrolled ? "text-[#0E120F] hover:bg-black/5" : "text-white hover:bg-white/10",
              )}
            >
              <Menu className="h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] md:hidden bg-[#FAFAF7]"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="font-serif text-2xl">Reduce-Wait</span>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="rounded-full p-2 hover:bg-black/5"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-2 px-6 mt-8">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="font-serif text-4xl py-3 border-b border-black/5"
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href="#assessment"
                onClick={() => setOpen(false)}
                className="mt-8 inline-flex items-center justify-center rounded-full bg-[#0B5E4F] text-[#FAFAF7] px-6 py-4 text-base font-medium"
              >
                Book Consultation
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
