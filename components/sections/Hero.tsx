"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import ParticleField from "@/components/ui/ParticleField";
import MagneticButton from "@/components/ui/MagneticButton";
import { IconArrowRight, IconDownload, IconMail } from "@tabler/icons-react";

const sequence = [
  "Full Stack Developer", 2000,
  "AI Developer", 2000,
  "Next.js Developer", 2000,
  "Python Developer", 2000,
  "UI/UX Designer", 2000,
];

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f]"
    >
      {/* Particles */}
      <ParticleField />

      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] animate-pulse [animation-delay:1s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div>
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.0, duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-8 bg-gradient-to-r from-blue-500 to-cyan-400" />
            <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase font-['Space_Grotesk']">
              Hello, World! 👋
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.15, duration: 0.7 }}
            className="font-['Poppins'] text-2xl sm:text-3xl lg:text-4xl font-bold leading-[1.1] text-white mb-2"
          >
            I&apos;m
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.2, duration: 0.7 }}
            className="font-['Poppins'] text-2xl sm:text-3xl lg:text-4xl font-bold leading-[1.1] mb-2"
          >
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Purna
            </span>
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.25, duration: 0.7 }}
            className="font-['Poppins'] text-2xl sm:text-3xl lg:text-4xl font-bold leading-[1.1] text-white mb-2"
          >
            Chandra
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.3, duration: 0.7 }}
            className="font-['Poppins'] text-2xl sm:text-3xl lg:text-4xl font-bold leading-[1.1] text-white mb-6"
          >
            Sekhara
          </motion.h1>

          {/* Typing */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.4, duration: 0.5 }}
            className="mb-8 flex items-center gap-2"
          >
            <span className="text-white/40 text-xl font-['Space_Grotesk']">&lt;</span>
            <span className="text-xl sm:text-2xl font-semibold font-['Space_Grotesk']">
              <TypeAnimation
                sequence={sequence}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
              />
            </span>
            <span className="text-white/40 text-xl font-['Space_Grotesk']">/&gt;</span>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.55, duration: 0.6 }}
            className="text-white/50 text-base leading-relaxed font-['Space_Grotesk'] max-w-lg mb-10"
          >
            B.Tech CSE Second Year student from Andhra Pradesh, passionate about
            building intelligent digital solutions with AI, modern web technologies,
            and GIS systems.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.7, duration: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <MagneticButton
              onClick={() => scrollTo("projects")}
              className="group flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-sm font-['Space_Grotesk'] shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_50px_rgba(37,99,235,0.6)] transition-shadow"
            >
              <IconArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              View Projects
            </MagneticButton>

            <MagneticButton
              href="/resume.pdf"
              className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/[0.06] backdrop-blur border border-white/[0.12] text-white font-semibold text-sm font-['Space_Grotesk'] hover:bg-white/[0.1] hover:border-cyan-400/30 transition-all"
            >
              <IconDownload size={16} />
              Download Resume
            </MagneticButton>

            <MagneticButton
              onClick={() => scrollTo("contact")}
              className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/[0.04] backdrop-blur border border-white/[0.08] text-white/70 font-semibold text-sm font-['Space_Grotesk'] hover:text-white hover:border-purple-400/30 hover:bg-purple-500/10 transition-all"
            >
              <IconMail size={16} />
              Contact Me
            </MagneticButton>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.9, duration: 0.5 }}
            className="mt-10 flex items-center gap-6"
          >
            {[
              { val: "5+", label: "Projects" },
              { val: "10+", label: "Technologies" },
              { val: "1k+", label: "Hours Coded" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-xl font-bold font-['Poppins'] bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {s.val}
                </p>
                <p className="text-white/40 text-[11px] font-['Space_Grotesk'] mt-0.5">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Code window illustration */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 3.3, duration: 0.8, type: "spring", damping: 20 }}
          className="hidden lg:block"
        >
          <div className="relative">
            {/* Floating glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-500/20 rounded-3xl blur-2xl" />

            {/* Code Editor Window */}
            <div className="relative rounded-2xl bg-[#0d1117] border border-white/[0.08] shadow-2xl overflow-hidden">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.03] border-b border-white/[0.06]">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-3 text-white/30 text-xs font-['Space_Grotesk']">purna.tsx</span>
              </div>

              {/* Code */}
              <div className="p-6 font-mono text-sm leading-7">
                <div className="text-purple-400">const <span className="text-cyan-300">developer</span> <span className="text-white/60">=</span> {"{"}</div>
                <div className="pl-6">
                  <span className="text-blue-300">name</span>
                  <span className="text-white/60">: </span>
                  <span className="text-green-300">&quot;Purna Chandra Sekhar&quot;</span>
                  <span className="text-white/40">,</span>
                </div>
                <div className="pl-6">
                  <span className="text-blue-300">role</span>
                  <span className="text-white/60">: </span>
                  <span className="text-green-300">&quot;Full Stack Developer&quot;</span>
                  <span className="text-white/40">,</span>
                </div>
                <div className="pl-6">
                  <span className="text-blue-300">skills</span>
                  <span className="text-white/60">: [</span>
                  <span className="text-yellow-300">&quot;React&quot;</span>
                  <span className="text-white/40">, </span>
                  <span className="text-yellow-300">&quot;Next.js&quot;</span>
                  <span className="text-white/40">, </span>
                  <span className="text-yellow-300">&quot;AI&quot;</span>
                  <span className="text-white/60">],</span>
                </div>
                <div className="pl-6">
                  <span className="text-blue-300">passion</span>
                  <span className="text-white/60">: </span>
                  <span className="text-green-300">&quot;Building solutions 🚀&quot;</span>
                  <span className="text-white/40">,</span>
                </div>
                <div className="pl-6">
                  <span className="text-blue-300">available</span>
                  <span className="text-white/60">: </span>
                  <span className="text-orange-300">true</span>
                  <span className="text-white/40">,</span>
                </div>
                <div className="text-white/60">{"}"}</div>
                <div className="mt-4 text-white/30">// Currently building awesome things...</div>
                <motion.div
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="inline-block w-2 h-5 bg-cyan-400 ml-0.5"
                />
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl px-4 py-2 shadow-lg shadow-blue-500/30"
            >
              <span className="text-white text-xs font-semibold font-['Space_Grotesk']">⚡ AI Developer</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl px-4 py-2 shadow-lg shadow-purple-500/30"
            >
              <span className="text-white text-xs font-semibold font-['Space_Grotesk']">🏆 Hackathon Builder</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs font-['Space_Grotesk'] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-cyan-400/80" />
        </motion.div>
      </motion.div>
    </section>
  );
}
