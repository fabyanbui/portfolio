"use client";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 section-alt">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-12 h-1 bg-indigo-500 rounded mb-10" />
        </motion.div>

        <div className="flex flex-col gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass glass-hover rounded-2xl p-8 group border-l-4 border-indigo-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-xs font-mono text-indigo-500 tracking-widest uppercase font-semibold">
                    {project.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1.5 leading-snug">
                    {project.title}
                  </h3>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-indigo-50 hover:border-indigo-200 hover:text-indigo-600 transition-all duration-200 shrink-0 ml-4"
                  aria-label="View on GitHub"
                >
                  <Github size={18} />
                </a>
              </div>

              <p className="text-slate-500 text-base leading-relaxed mb-5">
                {project.description}
              </p>

              <ul className="flex flex-col gap-2 mb-5">
                {project.highlights.map((h, j) => (
                  <li key={j} className="text-sm text-slate-500 flex gap-2 items-start">
                    <span className="text-indigo-400 shrink-0 mt-0.5 font-bold">✓</span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs bg-indigo-50 text-indigo-700 border border-indigo-100 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
