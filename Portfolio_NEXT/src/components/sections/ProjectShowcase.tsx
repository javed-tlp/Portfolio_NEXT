"use client";

import { motion } from "framer-motion";
import { HiCode, HiStar } from "react-icons/hi";
import { projectItems, type ProjectEntry } from "@/config/site";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

const accentStyles = {
  emerald:
    "border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 via-slate-900/40 to-slate-950 shadow-[0_0_60px_-20px_rgba(52,211,153,0.35)]",
  cyan: "border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 via-slate-900/40 to-slate-950 shadow-[0_0_60px_-20px_rgba(34,211,238,0.25)]",
  violet:
    "border-violet-500/30 bg-gradient-to-br from-violet-500/10 via-slate-900/40 to-slate-950 shadow-[0_0_60px_-20px_rgba(139,92,246,0.25)]",
} as const;

const accentBadge = {
  emerald: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  cyan: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
  violet: "bg-violet-500/15 text-violet-300 border-violet-500/30",
} as const;

function ProjectCard({ project, index }: { project: ProjectEntry; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`rounded-3xl border p-6 sm:p-8 ${accentStyles[project.accent]}`}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${accentBadge[project.accent]}`}
            >
              {project.client}
            </span>
            <span className="text-xs font-medium text-slate-500">{project.period}</span>
          </div>
          <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">{project.title}</h3>
          <p className="mt-2 flex items-center gap-2 text-base font-medium text-slate-300">
            <HiStar className="h-5 w-5 text-emerald-400/80" />
            {project.tagline}
          </p>
        </div>
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-700/80 bg-slate-950/50 text-slate-400">
          <HiCode className="h-6 w-6" />
        </span>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Context</p>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">{project.context}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">My contribution</p>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">{project.contribution}</p>
        </div>
      </div>

      <div className="mt-8 border-t border-slate-800/80 pt-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Outcomes</p>
        <ul className="mt-4 space-y-3">
          {project.outcomes.map((o) => (
            <li key={o} className="flex gap-3 text-sm leading-relaxed text-slate-300">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-400/90" />
              {o}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-lg border border-slate-700/80 bg-slate-950/60 px-3 py-1.5 text-xs font-medium text-slate-300"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export function ProjectShowcase() {
  return (
    <section id="projects" className="scroll-mt-20 border-b border-slate-800/60 bg-slate-900/25">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <ScrollReveal className="mb-14 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400/90">
            Projects
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
            Case-style detail — not just project titles
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Each block explains the business context, what I did, and what improved. Enterprise SFA
            work plus this portfolio as a shipping example.
          </p>
          <div className="mt-8 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500" />
        </ScrollReveal>

        <div className="space-y-12">
          {projectItems.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
