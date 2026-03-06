"use client";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-indigo-600 font-mono text-sm font-medium mb-1 tracking-wide">03. experience</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-12 h-1 bg-indigo-500 rounded mb-10" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-6 top-3 bottom-0 w-px bg-gradient-to-b from-indigo-400 via-indigo-200 to-transparent" />

          <div className="space-y-8 pl-8 md:pl-16">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[34px] md:-left-[42px] top-6 w-3 h-3 rounded-full bg-indigo-500 ring-4 ring-indigo-100" />

                <div className="glass glass-hover rounded-2xl p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-5">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{exp.role}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Briefcase size={14} className="text-indigo-500" />
                        <span className="text-indigo-600 font-semibold text-sm">{exp.company}</span>
                        <span className="text-slate-400 text-xs">· {exp.type}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-medium">
                        <Calendar size={11} />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2.5">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                        <span className="text-indigo-400 mt-0.5 shrink-0">◦</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
