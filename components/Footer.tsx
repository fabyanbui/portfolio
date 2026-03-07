import Image from "next/image";
import { Github, Linkedin } from "lucide-react";
import { profile } from "@/lib/data";
import basePath from "@/lib/basePath";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4 text-center">
        <div className="flex items-center gap-2.5">
          <Image src={`${basePath}/logo.svg`} alt="B logo" width={24} height={24} className="rounded-md" />
          <span className="text-slate-400 text-sm">&copy; {new Date().getFullYear()} Bui Dinh Bao</span>
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
