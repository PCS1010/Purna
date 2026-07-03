"use client";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { EXPERIENCE } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#07070e]">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          eyebrow="My Journey"
          title="Work"
          highlight="Experience"
          subtitle="Building real-world solutions through freelancing and academic projects"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-cyan-400 to-transparent" />

          <div className="space-y-10">
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-[18px] top-6 w-3 h-3 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 shadow-[0_0_12px_rgba(37,99,235,0.6)] border-2 border-[#07070e]" />

                {/* Card */}
                <div className="rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] p-6 hover:border-blue-500/30 hover:bg-white/[0.06] transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.1)]">
                  <div className="flex flex-wrap items-start gap-3 justify-between mb-4">
                    <div>
                      <h3 className="text-white font-bold text-base font-['Poppins']">{exp.role}</h3>
                      <p className="text-cyan-400 text-sm font-['Space_Grotesk'] mt-0.5">{exp.company}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-['Space_Grotesk'] whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-white/50 text-sm font-['Space_Grotesk'] leading-relaxed"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400/70 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
