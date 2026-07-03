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
            <span className="hidden sm:block text-white font-semibold text-sm font-['Space_Grotesk'] tracking-wide">
              Purna<span className="text-cyan-400">.</span>dev
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const id = link.href.slice(1);
              const isActive = active === id;
              return (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`relative px-3.5 py-1.5 text-xs font-medium tracking-wide font-['Space_Grotesk'] rounded-lg transition-all ${
                    isActive
                      ? "text-white"
                      : "text-white/50 hover:text-white/80"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navpill"
                      className="absolute inset-0 rounded-lg bg-white/[0.08] border border-white/[0.1]"
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
              className="p-2 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white/70 hover:text-white transition-all hover:bg-white/[0.1] flex items-center justify-center cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <IconSun size={18} /> : <IconMoon size={18} />}
            </button>
            <a
              href="/resume.pdf"
              download
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 text-xs font-semibold font-['Space_Grotesk'] rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all hover:scale-105"
            >
              Resume
            </a>
            <button
              className="lg:hidden p-2 text-white/60 hover:text-white"
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
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            <motion.aside
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 bottom-0 z-[70] w-72 bg-[#0d0d17] border-l border-white/[0.08] p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-white font-semibold font-['Poppins']">Menu</span>
                <button onClick={() => setMenuOpen(false)} className="text-white/60 hover:text-white">
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
                      className={`text-left px-4 py-3 rounded-xl font-['Space_Grotesk'] text-sm transition-all ${
                        active === id
                          ? "bg-blue-600/20 text-blue-400 border border-blue-500/30"
                          : "text-white/60 hover:bg-white/[0.04] hover:text-white"
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
