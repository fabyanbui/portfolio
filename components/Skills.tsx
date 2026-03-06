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
    <section id="skills" className="py-24 px-6 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-12 h-1 bg-accent rounded mb-10" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass rounded-2xl p-6 hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-accent group-hover:scale-110 transition-transform duration-200">
                  {iconMap[skill.icon]}
                </span>
                <h3 className="font-semibold text-white text-sm">{skill.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 rounded-full text-xs bg-accent/10 text-accent border border-accent/20"
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
