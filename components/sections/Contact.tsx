"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { CONTACT } from "@/lib/data";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconWorld,
  IconSend,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";

const socials = [
  { icon: IconMail, label: "Email", value: "purnachandrasekhar@email.com", href: `mailto:${CONTACT.email}`, color: "from-orange-500 to-red-400" },
  { icon: IconBrandGithub, label: "GitHub", value: "github.com/purnachandrasekhar", href: CONTACT.github, color: "from-gray-500 to-gray-400" },
  { icon: IconBrandLinkedin, label: "LinkedIn", value: "linkedin.com/in/purnachandrasekhar", href: CONTACT.linkedin, color: "from-blue-600 to-blue-400" },
  { icon: IconWorld, label: "Portfolio", value: "purnachandrasekhar.dev", href: CONTACT.portfolio, color: "from-green-500 to-emerald-400" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's"
          highlight="Connect"
          subtitle="Have a project idea or want to collaborate? I'd love to hear from you!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {/* CTA card */}
            <GlassCard className="p-8" glow="blue">
              <h3 className="text-white font-bold text-xl font-['Poppins'] mb-3">
                Open for Opportunities 🚀
              </h3>
              <p className="text-white/50 text-sm leading-relaxed font-['Space_Grotesk'] mb-6">
                I&apos;m actively looking for full-time roles, freelance projects, and hackathon
                collaborations. Whether you have a project in mind or just want to connect, 
                feel free to reach out!
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-xs font-['Space_Grotesk']">Available for new projects</span>
              </div>
            </GlassCard>

            {/* Social links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {socials.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer">
                  <GlassCard className="p-4 flex items-center gap-3" glow="blue">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center flex-shrink-0`}>
                      <social.icon size={18} className="text-white" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-white text-xs font-semibold font-['Space_Grotesk']">{social.label}</p>
                      <p className="text-white/40 text-[10px] font-['Space_Grotesk'] truncate">{social.value}</p>
                    </div>
                  </GlassCard>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="p-8" glow="cyan">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="text-5xl mb-4">🎉</div>
                  <h3 className="text-white font-bold text-lg font-['Poppins'] mb-2">Message Sent!</h3>
                  <p className="text-white/50 text-sm font-['Space_Grotesk']">
                    Thanks for reaching out! I&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                    className="mt-6 px-5 py-2.5 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 text-sm font-['Space_Grotesk'] hover:bg-blue-600/30 transition-all"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {[
                      { id: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
                      { id: "email", label: "Email Address", type: "email", placeholder: "john@example.com" },
                    ].map((field) => (
                      <div key={field.id}>
                        <label className="block text-white/50 text-xs font-['Space_Grotesk'] mb-2">{field.label}</label>
                        <input
                          id={field.id}
                          type={field.type}
                          placeholder={field.placeholder}
                          value={form[field.id as keyof typeof form]}
                          onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white text-sm font-['Space_Grotesk'] placeholder:text-white/25 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all"
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block text-white/50 text-xs font-['Space_Grotesk'] mb-2">Subject</label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="Project Collaboration / Job Opportunity"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white text-sm font-['Space_Grotesk'] placeholder:text-white/25 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-white/50 text-xs font-['Space_Grotesk'] mb-2">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Tell me about your project or idea..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white text-sm font-['Space_Grotesk'] placeholder:text-white/25 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-sm font-['Space_Grotesk'] shadow-[0_0_30px_rgba(37,99,235,0.35)] hover:shadow-[0_0_50px_rgba(37,99,235,0.5)] transition-shadow disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <IconSend size={16} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
