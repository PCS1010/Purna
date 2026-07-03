"use client";
import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { STATS } from "@/lib/data";
import { IconBrain, IconCode, IconMapPin, IconRocket } from "@tabler/icons-react";

const icons = [IconBrain, IconCode, IconMapPin, IconRocket];

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-[#0a0a0f]">
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Who I Am"
          title="About"
          highlight="Me"
          subtitle="A passionate developer turning ideas into impactful digital solutions"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <GlassCard className="p-8" glow="blue">
              {/* Avatar placeholder */}
              <div className="flex items-center gap-5 mb-7">
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 via-cyan-500 to-purple-600 flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.4)]">
                    <img src="/profile.png" alt="Purna Chandra Sekhar" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green-400 border-2 border-[#0a0a0f] flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg font-['Poppins']">Purna Chandra Sekhar</h3>
                  <p className="text-cyan-400 text-sm font-['Space_Grotesk']">Full Stack Developer & AI Enthusiast</p>
                  <p className="text-white/40 text-xs font-['Space_Grotesk'] mt-0.5">📍 Andhra Pradesh, India</p>
                </div>
              </div>

              <div className="space-y-4 text-white/60 text-sm leading-relaxed font-['Space_Grotesk']">
                <p>
                  Second Year <span className="text-white font-semibold">B.Tech Computer Science Engineering</span> student 
                  from Andhra Pradesh with a passion for building intelligent digital solutions.
                </p>
                <p>
                  I enjoy solving real-world problems through <span className="text-cyan-400">AI</span>,{" "}
                  <span className="text-blue-400">web technologies</span>,{" "}
                  <span className="text-purple-400">GIS systems</span>, automation, and modern software engineering.
                </p>
                <p>
                  I actively participate in hackathons and build scalable applications for{" "}
                  <span className="text-white font-medium">government, agriculture, and enterprise</span> sectors.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {["Full Stack", "AI/ML", "GIS", "Hackathons", "Open Source", "Problem Solving"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.1] text-white/60 text-xs font-['Space_Grotesk']"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Right: Stats */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-4"
            >
              {STATS.map((stat, i) => {
                const Icon = icons[i];
                return (
                  <GlassCard key={stat.label} className="p-6 text-center" glow={i % 2 === 0 ? "blue" : "purple"}>
                    <Icon size={24} className="mx-auto mb-3 text-cyan-400" />
                    <p className="text-3xl font-bold font-['Poppins'] bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="text-white/50 text-xs font-['Space_Grotesk'] mt-1">{stat.label}</p>
                  </GlassCard>
                );
              })}
            </motion.div>

            {/* Current status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <GlassCard className="p-6" glow="cyan">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-xs font-semibold font-['Space_Grotesk'] tracking-wider uppercase">Available for Opportunities</span>
                </div>
                <p className="text-white/50 text-sm font-['Space_Grotesk']">
                  Open to full-time roles, freelance projects, and hackathon collaborations.
                </p>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
