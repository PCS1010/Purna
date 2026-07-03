"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { SKILLS } from "@/lib/data";

const CATEGORY_COLORS: Record<string, string> = {
  Frontend: "from-blue-500 to-cyan-400",
  Backend: "from-green-500 to-emerald-400",
  Database: "from-orange-500 to-yellow-400",
  "AI & ML": "from-purple-500 to-pink-400",
  GIS: "from-teal-500 to-cyan-400",
  Cloud: "from-indigo-500 to-blue-400",
  Design: "from-rose-500 to-pink-400",
};

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-white/70 text-sm font-['Space_Grotesk'] group-hover:text-white transition-colors">{name}</span>
        <span className="text-xs font-['Space_Grotesk'] text-white/40">{level}%</span>
      </div>
      <div className="h-1.5 w-full bg-white/[0.06] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
          className={`h-full rounded-full bg-gradient-to-r ${color} shadow-lg`}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const categories = Object.keys(SKILLS);
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <section id="skills" className="py-24 bg-[#07070e]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="What I Know"
          title="My"
          highlight="Skills"
          subtitle="A diverse toolkit spanning frontend, backend, AI, and cloud technologies"
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveTab(cat)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className={`px-4 py-2 rounded-xl text-xs font-semibold font-['Space_Grotesk'] tracking-wide border transition-all ${
                activeTab === cat
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-transparent shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                  : "bg-white/[0.04] text-white/50 border-white/[0.08] hover:text-white hover:border-white/20"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Skill bars */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <GlassCard className="p-8 max-w-3xl mx-auto" glow="blue">
            <div className="flex items-center gap-3 mb-8">
              <div className={`w-2 h-8 rounded-full bg-gradient-to-b ${CATEGORY_COLORS[activeTab] || "from-blue-500 to-cyan-400"}`} />
              <h3 className="text-white font-bold text-lg font-['Poppins']">{activeTab}</h3>
            </div>
            <div className="space-y-5">
              {SKILLS[activeTab as keyof typeof SKILLS].map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={CATEGORY_COLORS[activeTab] || "from-blue-500 to-cyan-400"}
                  delay={i * 0.08}
                />
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Tech cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-wrap justify-center gap-2"
        >
          {Object.values(SKILLS)
            .flat()
            .map((s) => s.name)
            .filter((v, i, a) => a.indexOf(v) === i)
            .map((name, i) => (
              <motion.span
                key={name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white/50 text-xs font-['Space_Grotesk'] cursor-default hover:text-cyan-400 hover:border-cyan-400/30 transition-all"
              >
                {name}
              </motion.span>
            ))}
        </motion.div>
      </div>
    </section>
  );
}
