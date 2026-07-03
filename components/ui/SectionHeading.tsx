"use client";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      {eyebrow && (
        <span className="inline-block mb-3 text-xs font-semibold tracking-[0.25em] uppercase text-cyan-400 font-['Space_Grotesk']">
          {eyebrow}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-bold font-['Poppins'] text-white leading-tight">
        {title}{" "}
        {highlight && (
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </h2>
      {subtitle && (
        <p className="mt-4 text-white/50 max-w-xl mx-auto text-sm leading-relaxed font-['Space_Grotesk']">
          {subtitle}
        </p>
      )}
      <div className="mt-5 flex items-center justify-center gap-2">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-500" />
        <div className="w-2 h-2 rounded-full bg-cyan-400" />
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-purple-500" />
      </div>
    </motion.div>
  );
}
