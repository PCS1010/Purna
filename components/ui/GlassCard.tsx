"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: "blue" | "cyan" | "purple" | "none";
}

const glowMap = {
  blue: "hover:shadow-[0_0_30px_rgba(37,99,235,0.3)]",
  cyan: "hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]",
  purple: "hover:shadow-[0_0_30px_rgba(124,58,237,0.3)]",
  none: "",
};

export default function GlassCard({
  children,
  className = "",
  hover = true,
  glow = "blue",
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`
        rounded-2xl
        bg-white/[0.04]
        backdrop-blur-xl
        border border-white/[0.08]
        transition-all duration-300
        ${hover ? glowMap[glow] : ""}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
