"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconMenu2, IconX, IconSun, IconMoon } from "@tabler/icons-react";
import { NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === "light") {
        document.documentElement.classList.add("light");
      }
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = NAV_LINKS.map((l) => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.8 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo("#home")}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 via-cyan-500 to-purple-600 flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)] group-hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-shadow">
              <span className="text-white font-bold text-lg font-['Poppins']">P</span>
            </div>
            <span className="hidden sm:block text-white font-bold text-base font-['Space_Grotesk'] tracking-wide">
              Purna<span className="text-cyan-400">.dev</span>
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {NAV_LINKS.map((link) => {
              const id = link.href.slice(1);
              const isActive = active === id;
              return (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`relative px-3.5 py-1.5 text-xs font-semibold tracking-wide font-['Space_Grotesk'] rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"
                      : "text-white/90 hover:text-white hover:bg-white/[0.08]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navpill"
                      className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600/30 to-cyan-500/30 border border-cyan-400/40 shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-white/[0.08] border border-white/[0.15] text-white hover:text-cyan-400 transition-all hover:bg-white/[0.15] flex items-center justify-center cursor-pointer shadow-sm"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <IconSun size={18} /> : <IconMoon size={18} />}
            </button>
            <a
              href="/resume.pdf"
              download
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 text-xs font-bold font-['Space_Grotesk'] tracking-wide rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.7)] transition-all hover:scale-105"
            >
              Resume
            </a>
            <button
              className="lg:hidden p-2 text-white hover:text-cyan-400"
              onClick={() => setMenuOpen(true)}
            >
              <IconMenu2 size={22} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            <motion.aside
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 bottom-0 z-[70] w-72 bg-[#0d0d17] border-l border-white/[0.12] p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-white font-bold text-base font-['Poppins']">Navigation</span>
                <button onClick={() => setMenuOpen(false)} className="text-white/80 hover:text-white">
                  <IconX size={22} />
                </button>
              </div>
              <nav className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => {
                  const id = link.href.slice(1);
                  return (
                    <button
                      key={link.href}
                      onClick={() => scrollTo(link.href)}
                      className={`text-left px-4 py-3 rounded-xl font-['Space_Grotesk'] text-sm font-semibold transition-all ${
                        active === id
                          ? "bg-blue-600/30 text-cyan-300 border border-cyan-400/40 shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                          : "text-white/90 hover:bg-white/[0.08] hover:text-white"
                      }`}
                    >
                      {link.label}
                    </button>
                  );
                })}
              </nav>
              <a
                href="/resume.pdf"
                download
                className="mt-auto flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-semibold font-['Space_Grotesk']"
              >
                Download Resume
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
