"use client";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { ACHIEVEMENTS } from "@/lib/data";

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-[#07070e]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Milestones"
          title="Key"
          highlight="Achievements"
          subtitle="Highlights of my technical journey, projects, and contributions"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlassCard className="p-6 h-full" glow={i % 3 === 0 ? "blue" : i % 3 === 1 ? "cyan" : "purple"}>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-white font-bold text-sm font-['Poppins'] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-white/50 text-xs leading-relaxed font-['Space_Grotesk']">
                  {item.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
