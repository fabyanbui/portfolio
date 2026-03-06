"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-block font-mono text-accent text-sm mb-4 tracking-widest uppercase">
            Hello, I&apos;m
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
            <span className="text-white">{profile.name}</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-gradient mb-6">
            {profile.tagline}
          </h2>

          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            {profile.objective}
          </p>

          {/* Social links */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 text-slate-300 hover:border-accent hover:text-accent transition-all duration-200 text-sm"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 text-slate-300 hover:border-accent hover:text-accent transition-all duration-200 text-sm"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/10 border border-accent/30 text-accent hover:bg-accent/20 transition-all duration-200 text-sm"
            >
              <Mail size={16} />
              Contact
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ArrowDown size={20} className="text-slate-600" />
        </motion.div>
      </div>
    </section>
  );
}
