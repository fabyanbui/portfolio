"use client";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Star } from "lucide-react";
import { profile, education } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-12 h-1 bg-accent rounded mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left — Objective */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Objective</h3>
            <p className="text-slate-400 leading-relaxed">{profile.objective}</p>

            <div className="mt-6 flex flex-col gap-2 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <MapPin size={14} className="text-accent" />
                Ho Chi Minh City, Vietnam
              </span>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <span className="text-accent">✉</span>
                {profile.email}
              </a>
            </div>
          </motion.div>

          {/* Right — Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <GraduationCap size={20} className="text-accent" />
              Education
            </h3>

            <div>
              <p className="font-semibold text-white text-base">{education.school}</p>
              <p className="text-slate-400 text-sm mt-0.5">{education.faculty}</p>

              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="text-accent">◦</span>
                  {education.degree} — {education.major}
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <Calendar size={13} className="text-accent" />
                  {education.period}
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Star size={13} className="text-accent" />
                  CGPA: <span className="text-accent font-semibold">{education.cgpa}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
