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
          <p className="text-indigo-600 font-mono text-sm font-medium mb-1 tracking-wide">04. projects</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-12 h-1 bg-indigo-500 rounded mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass glass-hover rounded-2xl p-6 flex flex-col group"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="text-xs font-mono text-indigo-500 tracking-wide uppercase font-medium">
                    {project.subtitle}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mt-0.5 leading-snug">
                    {project.title}
                  </h3>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-indigo-50 hover:border-indigo-200 hover:text-indigo-600 transition-all duration-200 shrink-0 ml-2"
                  aria-label="View on GitHub"
                >
                  <Github size={15} />
                </a>
              </div>

              <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              <ul className="space-y-1.5 mb-4">
                {project.highlights.map((h, j) => (
                  <li key={j} className="text-xs text-slate-500 flex gap-2 items-start">
                    <span className="text-indigo-500 shrink-0 mt-0.5">✓</span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-slate-100">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-xs bg-slate-100 text-slate-600 border border-slate-200 font-medium"
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
