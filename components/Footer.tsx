import { Github, Linkedin } from "lucide-react";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
            <span className="text-white font-bold font-mono text-xs leading-none">B</span>
          </div>
          <span className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Bui Dinh Bao &mdash; Built with Next.js &amp; Tailwind CSS
          </span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-indigo-50 hover:border-indigo-200 hover:text-indigo-600 transition-all duration-200"
            aria-label="GitHub"
          >
            <Github size={15} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-indigo-50 hover:border-indigo-200 hover:text-indigo-600 transition-all duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
