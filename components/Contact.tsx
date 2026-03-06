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
  },
  {
    icon: <Phone size={20} />,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone}`,
  },
  {
    icon: <Github size={20} />,
    label: "GitHub",
    value: "github.com/fabyanbui",
    href: profile.github,
  },
  {
    icon: <Linkedin size={20} />,
    label: "LinkedIn",
    value: "linkedin.com/in/fabyanbui",
    href: profile.linkedin,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-12 h-1 bg-accent rounded mb-4" />
          <p className="text-slate-400 mb-10 max-w-lg">
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
              className="glass rounded-2xl p-6 flex flex-col items-center text-center gap-3 hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 group"
            >
              <span className="text-accent group-hover:scale-110 transition-transform duration-200">
                {link.icon}
              </span>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wide">{link.label}</p>
                <p className="text-sm text-slate-300 mt-0.5 font-medium">{link.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
