"use client";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { CERTIFICATIONS } from "@/lib/data";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="My Learning"
          title="Certifications &"
          highlight="Credentials"
          subtitle="Validated expertise across development, AI, and design domains"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlassCard className="p-6 flex items-center gap-4" glow="blue">
                {/* Badge icon */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-2xl flex-shrink-0 shadow-lg`}
                >
                  {cert.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm font-['Poppins'] leading-snug">
                    {cert.name}
                  </h3>
                  <p className="text-white/40 text-xs font-['Space_Grotesk'] mt-1">
                    {cert.issuer}
                  </p>
                  <div className="mt-2 flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    <span className="text-green-400 text-[10px] font-['Space_Grotesk']">Certified</span>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
