"use client";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-12 h-1 bg-accent rounded mb-10" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/30 to-transparent" />

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
                <div className="absolute -left-[34px] md:-left-[42px] top-6 w-3 h-3 rounded-full bg-accent ring-4 ring-accent/20" />

                <div className="glass rounded-2xl p-6 md:p-8 hover:border-accent/20 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Briefcase size={14} className="text-accent" />
                        <span className="text-accent font-semibold text-sm">{exp.company}</span>
                        <span className="text-slate-500 text-xs">· {exp.type}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-400 text-sm shrink-0">
                      <Calendar size={13} />
                      {exp.period}
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                        <span className="text-accent mt-1 shrink-0">◦</span>
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
