import { Github, Linkedin } from "lucide-react";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-mono text-slate-600 text-sm">
          &copy; {new Date().getFullYear()} Bui Dinh Bao. Built with Next.js & Tailwind CSS.
        </span>

        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
