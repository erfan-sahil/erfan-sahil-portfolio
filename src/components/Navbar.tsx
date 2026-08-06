"use client";

import { useEffect, useRef, useState } from "react";
import { navLinks, personal } from "@/data/portfolio";

const MENU_CLOSE_MS = 450;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [exiting, setExiting] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const menuActive = open || exiting;

  function clearCloseTimer() {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }

  function openMenu() {
    clearCloseTimer();
    setExiting(false);
    setOpen(true);
  }

  function closeMenu() {
    if (!open || exiting) return;
    setOpen(false);
    setExiting(true);
    clearCloseTimer();
    closeTimer.current = setTimeout(() => {
      setExiting(false);
      closeTimer.current = null;
    }, MENU_CLOSE_MS);
  }

  function toggleMenu() {
    if (open) closeMenu();
    else openMenu();
  }

  useEffect(() => {
    document.body.style.overflow = menuActive ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuActive]);

  useEffect(() => {
    function onResize() {
      if (window.matchMedia("(min-width: 640px)").matches) {
        clearCloseTimer();
        setOpen(false);
        setExiting(false);
      }
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => () => clearCloseTimer(), []);

  return (
    <header className="sticky top-0 z-50">
      {menuActive && (
        <button
          type="button"
          className={`nav-backdrop ${open ? "is-open" : "is-closing"}`}
          aria-label="Close menu"
          onClick={closeMenu}
        />
      )}

      <div className="relative z-50 mx-auto max-w-3xl px-5 pt-3 sm:px-6">
        <div className="nav-bar">
          <nav className="relative flex h-12 items-center justify-between px-4 sm:h-13 sm:px-5">
            <a
              href="#home"
              className="text-[15px] font-semibold tracking-tight transition-colors hover:text-accent"
              onClick={closeMenu}
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
              onClick={toggleMenu}
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
                    transitionDelay: open
                      ? `${index * 0.05 + 0.06}s`
                      : `${(navLinks.length - 1 - index) * 0.04}s`,
                  }}
                  onClick={closeMenu}
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
