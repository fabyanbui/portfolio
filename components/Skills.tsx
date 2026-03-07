"use client";
import { motion } from "framer-motion";
import { Code2, Brain, BarChart3, TestTube2, Database } from "lucide-react";
import { skills } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 size={20} />,
  Brain: <Brain size={20} />,
  BarChart3: <BarChart3 size={20} />,
  TestTube2: <TestTube2 size={20} />,
  Database: <Database size={20} />,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 section-alt">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-12 h-1 bg-indigo-500 rounded mb-10" />
        </motion.div>

        <div className="flex flex-col gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass glass-hover rounded-2xl px-7 py-5 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all duration-250 shrink-0">
                  {iconMap[skill.icon]}
                </div>
                <h3 className="font-semibold text-slate-800 text-base">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-full text-sm bg-indigo-50 text-indigo-700 border border-indigo-100 font-medium"
                  >
                    {item}
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
