"use client";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Star } from "lucide-react";
import { profile, education } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-indigo-600 font-mono text-sm font-medium mb-1 tracking-wide">01. about</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-12 h-1 bg-indigo-500 rounded mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left — Objective */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass glass-hover rounded-2xl p-8"
          >
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Objective</h3>
            <p className="text-slate-600 leading-relaxed">{profile.objective}</p>

            <div className="mt-6 flex flex-col gap-2.5 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <MapPin size={14} className="text-indigo-500" />
                Ho Chi Minh City, Vietnam
              </span>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 hover:text-indigo-600 transition-colors"
              >
                <span className="text-indigo-500">✉</span>
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
            className="glass glass-hover rounded-2xl p-8"
          >
            <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <GraduationCap size={20} className="text-indigo-500" />
              Education
            </h3>

            <div>
              <p className="font-semibold text-slate-900 text-base">{education.school}</p>
              <p className="text-slate-500 text-sm mt-0.5">{education.faculty}</p>

              <div className="mt-4 space-y-2.5 text-sm">
                <div className="flex items-center gap-2 text-slate-700">
                  <span className="text-indigo-500">◦</span>
                  {education.degree} — {education.major}
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <Calendar size={13} className="text-indigo-500" />
                  {education.period}
                </div>
                <div className="flex items-center gap-2">
                  <Star size={13} className="text-indigo-500" />
                  <span className="text-slate-700">CGPA: </span>
                  <span className="text-indigo-600 font-bold">{education.cgpa}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
