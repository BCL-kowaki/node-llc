"use client";

import { useState, useEffect } from "react";

const navItems = [
  { href: "#about", label: "ABOUT" },
  { href: "#service", label: "SERVICE" },
  { href: "#access", label: "ACCESS" },
  { href: "#contact", label: "CONTACT" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Header bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
          scrolled
            ? "bg-black/60 backdrop-blur-md py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="w-[90%] mx-auto flex items-center justify-between">
          {/* Logo */}
          <span
            className="text-2xl md:text-4xl font-bold text-white tracking-wider"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            node
            <small className="text-xs md:text-sm font-normal tracking-widest ml-1.5 opacity-80 align-middle">
              LLC
            </small>
          </span>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-white/80 text-sm tracking-widest hover:text-white transition-colors duration-300 relative group"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Hamburger button (mobile only) */}
          <button
            className="md:hidden w-[30px] h-[24px] relative z-[60]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="メニュー"
          >
            <span
              className={`absolute left-0 w-[30px] h-[2px] bg-white transition-all duration-500 ${
                isOpen ? "top-[11px] rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-[11px] w-[30px] h-[2px] bg-white transition-all duration-500 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 w-[30px] h-[2px] bg-white transition-all duration-500 ${
                isOpen ? "top-[11px] -rotate-45" : "top-[22px]"
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile fullscreen overlay */}
      <div
        className={`md:hidden fixed inset-0 z-[55] transition-opacity duration-500 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "#000" }}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-10">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-white text-xl tracking-widest transition-all duration-300 hover:text-purple-400"
              style={{
                fontFamily: "var(--font-heading)",
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateY(0)" : "translateY(20px)",
                transitionDelay: isOpen ? `${300 + index * 80}ms` : "0ms",
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
