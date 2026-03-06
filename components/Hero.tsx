"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, Download } from "lucide-react";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50/40">
      {/* Subtle dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,#e0e7ff_1px,transparent_1px)] bg-[size:36px_36px] opacity-60" />

      {/* Decorative blobs */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-indigo-100/60 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-56 h-56 rounded-full bg-violet-100/60 blur-[80px] pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-medium tracking-wide mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            Available for new opportunities
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-slate-900">
            {profile.name}
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-gradient mb-3">
            {profile.tagline}
          </h2>

          <p className="text-slate-500 text-sm font-mono tracking-widest mb-6">
            {profile.subtitle}
          </p>

          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            {profile.objective}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition-colors duration-200 shadow-lg shadow-indigo-200"
            >
              <Mail size={15} />
              Get in touch
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-semibold hover:border-indigo-300 hover:text-indigo-600 transition-all duration-200 shadow-sm"
            >
              <Github size={15} />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-semibold hover:border-indigo-300 hover:text-indigo-600 transition-all duration-200 shadow-sm"
            >
              <Linkedin size={15} />
              LinkedIn
            </a>
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex items-center justify-center gap-8 md:gap-16"
          >
            {[
              { value: "3.75", label: "CGPA / 4.0" },
              { value: "6+", label: "Projects" },
              { value: "9", label: "Certificates" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-extrabold text-indigo-600">{stat.value}</p>
                <p className="text-xs text-slate-400 font-medium mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute -bottom-4 left-1/2 -translate-x-1/2"
        >
          <ArrowDown size={18} className="text-slate-300" />
        </motion.div>
      </div>
    </section>
  );
}
