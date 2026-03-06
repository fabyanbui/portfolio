"use client";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-12 h-1 bg-accent rounded mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass rounded-2xl p-6 flex flex-col hover:border-accent/30 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="text-xs font-mono text-accent/70 tracking-wide uppercase">
                    {project.subtitle}
                  </span>
                  <h3 className="text-base font-bold text-white mt-0.5 leading-snug">
                    {project.title}
                  </h3>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-accent transition-colors shrink-0 ml-2"
                  aria-label="View on GitHub"
                >
                  <Github size={18} />
                </a>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              <ul className="space-y-1 mb-4">
                {project.highlights.map((h, j) => (
                  <li key={j} className="text-xs text-slate-500 flex gap-2">
                    <span className="text-accent shrink-0">✓</span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-xs bg-slate-800 text-slate-400 border border-slate-700"
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
