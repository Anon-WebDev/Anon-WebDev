"use client";

import { useState } from "react";
import { navigationLinks, siteConfig } from "@/lib/site";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="text-lg font-semibold tracking-wide text-stone-900" aria-label="Go to top">
          {siteConfig.name}
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-6 md:flex">
          {navigationLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-stone-700 transition hover:text-stone-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 rounded-sm">
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="hidden rounded-full bg-amber-700 px-5 py-2 text-sm font-medium text-white transition hover:bg-amber-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 md:inline-block">
          Book Now
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-md p-2 text-stone-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 md:hidden"
          aria-controls="mobile-nav"
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          <span className="sr-only">Toggle menu</span>
          ☰
        </button>
      </div>

      {isOpen ? (
        <nav id="mobile-nav" aria-label="Mobile navigation" className="border-t border-stone-200 bg-white px-4 py-4 md:hidden">
          <ul className="space-y-3">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setIsOpen(false)} className="block rounded-md px-2 py-2 text-stone-700 transition hover:bg-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" onClick={() => setIsOpen(false)} className="mt-1 block rounded-full bg-amber-700 px-4 py-2 text-center font-medium text-white transition hover:bg-amber-800">
                Book Now
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
