"use client";
import { IconBrandGithub, IconBrandLinkedin, IconMail, IconHeart } from "@tabler/icons-react";
import { NAV_LINKS, CONTACT } from "@/lib/data";

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.06] bg-[#07070e]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 via-cyan-500 to-purple-600 flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                <span className="text-white font-bold text-lg font-['Poppins']">P</span>
              </div>
              <span className="text-white font-semibold text-sm font-['Space_Grotesk']">
                Purna<span className="text-cyan-400">.</span>dev
              </span>
            </div>
            <p className="text-white/40 text-xs leading-relaxed font-['Space_Grotesk'] max-w-[220px]">
              Full Stack Developer & AI Enthusiast building intelligent digital solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-white/60 text-xs font-semibold tracking-widest uppercase mb-4 font-['Space_Grotesk']">
              Quick Links
            </p>
            <div className="grid grid-cols-2 gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-white/40 hover:text-cyan-400 text-xs font-['Space_Grotesk'] py-1 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="text-white/60 text-xs font-semibold tracking-widest uppercase mb-4 font-['Space_Grotesk']">
              Connect
            </p>
            <div className="flex gap-3">
              {[
                { icon: IconBrandGithub, href: CONTACT.github, label: "GitHub" },
                { icon: IconBrandLinkedin, href: CONTACT.linkedin, label: "LinkedIn" },
                { icon: IconMail, href: `mailto:${CONTACT.email}`, label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white/50 hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-cyan-400/10 transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs font-['Space_Grotesk']">
            © {new Date().getFullYear()} Purna Chandra Sekhar. All rights reserved.
          </p>
          <p className="text-white/30 text-xs font-['Space_Grotesk'] flex items-center gap-1">
            Designed & Developed with{" "}
            <IconHeart size={12} className="text-red-400 fill-red-400" />{" "}
            by Purna
          </p>
        </div>
      </div>
    </footer>
  );
}
