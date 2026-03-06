"use client";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certificates } from "@/lib/data";

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-indigo-600 font-mono text-sm font-medium mb-1 tracking-wide">05. certificates</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            Certificates &amp; <span className="text-gradient">Awards</span>
          </h2>
          <div className="w-12 h-1 bg-indigo-500 rounded mb-10" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="glass glass-hover rounded-xl p-4 flex items-start gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0 mt-0.5">
                <Award size={15} className="text-indigo-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800 leading-snug">{cert.name}</p>
                <p className="text-xs text-slate-400 mt-0.5 font-medium">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
