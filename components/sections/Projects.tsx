"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { PROJECTS, ProjectCategory } from "@/lib/data";
import { IconExternalLink, IconCode } from "@tabler/icons-react";

const FILTERS: ProjectCategory[] = ["All", "AI", "Web", "GIS", "Agri"];

export default function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>("All");

  const filtered = PROJECTS.filter(
    (p) => filter === "All" || p.category.includes(filter)
  );

  return (
    <section id="projects" className="py-24 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="What I've Built"
          title="Featured"
          highlight="Projects"
          subtitle="A showcase of real-world applications spanning AI, web, and GIS domains"
        />

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {FILTERS.map((f) => (
            <motion.button
              key={f}
              onClick={() => setFilter(f)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className={`px-5 py-2 rounded-full text-xs font-semibold font-['Space_Grotesk'] border transition-all ${
                filter === f
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-transparent shadow-[0_0_20px_rgba(37,99,235,0.35)]"
                  : "bg-white/[0.04] text-white/50 border-white/[0.08] hover:text-white hover:border-white/20"
              }`}
            >
              {f}
            </motion.button>
          ))}
        </div>

        {/* Project grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <GlassCard className="h-full flex flex-col overflow-hidden" glow="blue">
                  {/* Header gradient bar */}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${project.gradient}`} />

                  <div className="p-6 flex flex-col flex-1">
                    {/* Icon + Featured badge */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-2xl shadow-lg`}>
                        {project.icon}
                      </div>
                      {project.featured && (
                        <span className="px-2.5 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-400 text-[10px] font-semibold font-['Space_Grotesk']">
                          Featured
                        </span>
                      )}
                    </div>

                    <h3 className="text-white font-bold text-base font-['Poppins'] mb-2 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-white/50 text-xs leading-relaxed font-['Space_Grotesk'] mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Features */}
                    {project.features && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.features.map((f) => (
                          <span
                            key={f}
                            className="px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-white/50 text-[10px] font-['Space_Grotesk']"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className={`px-2.5 py-1 rounded-lg bg-gradient-to-r ${project.gradient} bg-opacity-10 text-white text-[10px] font-semibold font-['Space_Grotesk'] opacity-80`}
                          style={{ backgroundClip: "border-box" }}
                        >
                          <span className="bg-gradient-to-r from-white/80 to-white/60 bg-clip-text text-transparent">
                            {t}
                          </span>
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/[0.06]">
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-['Space_Grotesk'] font-medium transition-colors"
                        >
                          <IconExternalLink size={14} />
                          Live Demo
                        </a>
                      ) : (
                        <span className="flex items-center gap-1.5 text-xs text-white/30 font-['Space_Grotesk']">
                          <IconCode size={14} />
                          Private Project
                        </span>
                      )}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
