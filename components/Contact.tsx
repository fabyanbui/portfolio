"use client";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { profile } from "@/lib/data";

const contactLinks = [
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    color: "from-indigo-500 to-indigo-600",
    bg: "bg-indigo-50 border-indigo-100",
  },
  {
    icon: <Phone size={20} />,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone}`,
    color: "from-violet-500 to-violet-600",
    bg: "bg-violet-50 border-violet-100",
  },
  {
    icon: <Github size={20} />,
    label: "GitHub",
    value: "fabyanbui",
    href: profile.github,
    color: "from-slate-600 to-slate-700",
    bg: "bg-slate-50 border-slate-200",
  },
  {
    icon: <Linkedin size={20} />,
    label: "LinkedIn",
    value: "in/fabyanbui",
    href: profile.linkedin,
    color: "from-blue-500 to-blue-600",
    bg: "bg-blue-50 border-blue-100",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 section-alt">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-indigo-600 font-mono text-sm font-medium mb-1 tracking-wide">06. contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-12 h-1 bg-indigo-500 rounded mb-4" />
          <p className="text-slate-500 mb-10 max-w-lg text-sm leading-relaxed">
            I&apos;m open to new opportunities. Whether you have a question, a project, or just want to say hi — feel free to reach out!
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              className="glass glass-hover rounded-2xl p-6 flex flex-col items-center text-center gap-3 group"
            >
              <div className={`w-11 h-11 rounded-xl border flex items-center justify-center bg-gradient-to-br ${link.color} text-white shadow-sm group-hover:scale-105 transition-transform duration-200`}>
                {link.icon}
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-medium">{link.label}</p>
                <p className="text-sm text-slate-700 mt-0.5 font-semibold break-all">{link.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
