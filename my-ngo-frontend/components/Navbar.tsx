"use client";

import { useState } from "react";
import Link from "next/link";
import type { NavbarData } from "@/lib/types";
import defaults from "@/lib/defaults";

export default function Navbar({ data = defaults.navbar }: { data?: NavbarData }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="#home" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-navy flex items-center justify-center">
              <span className="text-white font-black text-sm tracking-tighter">{data.logoText}</span>
            </div>
            <span className="text-navy font-black text-sm uppercase tracking-widest hidden sm:block">
              {data.orgName}
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {data.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-navy text-xs font-bold uppercase tracking-widest hover:text-orange transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={data.donateHref}
              className="bg-orange text-white text-xs font-black uppercase tracking-widest px-5 py-2.5 hover:bg-orange-dark transition-colors duration-150"
            >
              {data.donateLabel}
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-navy"
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-navy transition-all duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-navy transition-all duration-200 ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-navy transition-all duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-off-white px-6 py-6 flex flex-col gap-4">
          {data.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-navy text-xs font-bold uppercase tracking-widest hover:text-orange transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={data.donateHref}
            onClick={() => setOpen(false)}
            className="mt-2 bg-orange text-white text-xs font-black uppercase tracking-widest px-5 py-3 text-center hover:bg-orange-dark transition-colors"
          >
            {data.donateLabel}
          </Link>
        </div>
      )}
    </nav>
  );
}
