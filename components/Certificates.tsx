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
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            Certificates &amp; <span className="text-gradient">Awards</span>
          </h2>
          <div className="w-12 h-1 bg-indigo-500 rounded mb-10" />
        </motion.div>

        <div className="flex flex-col gap-3">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="glass glass-hover rounded-xl px-6 py-4 flex items-center gap-5"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0">
                <Award size={18} className="text-indigo-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-base font-semibold text-slate-800 leading-snug">{cert.name}</p>
                <p className="text-sm text-slate-400 mt-0.5 font-medium">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
