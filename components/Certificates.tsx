"use client";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certificates } from "@/lib/data";

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Certificates &amp; <span className="text-gradient">Awards</span>
          </h2>
          <div className="w-12 h-1 bg-accent rounded mb-10" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="glass rounded-xl p-4 flex items-start gap-3 hover:border-accent/30 transition-all duration-200"
            >
              <Award size={18} className="text-accent mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-medium text-white leading-snug">{cert.name}</p>
                <p className="text-xs text-slate-500 mt-0.5">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
