"use client";

import { useEffect, useState } from "react";
import { navLinks, personal } from "@/data/portfolio";

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onResize() {
      if (window.matchMedia("(min-width: 640px)").matches) {
        setOpen(false);
      }
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {open && (
        <button
          type="button"
          className="nav-backdrop"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        />
      )}

      <div className="relative z-50 mx-auto max-w-3xl px-5 pt-3 sm:px-6">
        <div className="nav-bar">
          <nav className="relative flex h-12 items-center justify-between px-4 sm:h-13 sm:px-5">
            <a
              href="#home"
              className="text-[15px] font-semibold tracking-tight transition-colors hover:text-accent"
              onClick={() => setOpen(false)}
            >
              {personal.brand}
              <span className="text-accent">.</span>
            </a>

            <ul className="hidden items-center gap-1 sm:flex">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="nav-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="nav-toggle"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span
                className={`nav-burger ${open ? "is-open" : ""}`}
                aria-hidden
              >
                <span />
                <span />
              </span>
            </button>
          </nav>
        </div>

        <div id="mobile-nav" className={`nav-drawer ${open ? "is-open" : ""}`}>
          <ul className="flex flex-col gap-0.5 p-2">
            {navLinks.map((link, index) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="nav-drawer-link"
                  style={{
                    animationDelay: `${index * 0.05 + 0.06}s`,
                  }}
                  onClick={() => setOpen(false)}
                >
                  <span className="nav-drawer-dot" aria-hidden />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
