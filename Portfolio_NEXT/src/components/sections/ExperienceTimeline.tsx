"use client";

import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { experienceItems, type ExperienceEntry } from "@/config/site";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

function JobCard({ job, index }: { job: ExperienceEntry; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-6%" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className={`relative overflow-hidden rounded-2xl border bg-slate-900/50 p-6 sm:p-8 ${
        job.current
          ? "border-emerald-500/35 shadow-[0_0_40px_-12px_rgba(52,211,153,0.35)]"
          : "border-slate-800"
      }`}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex gap-4">
          <span
            className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-2 ${
              job.current
                ? "border-emerald-500/60 bg-emerald-500/10 text-emerald-400"
                : "border-slate-600 bg-slate-900 text-slate-400"
            }`}
          >
            <FaBriefcase className="h-6 w-6" />
          </span>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              {job.current && (
                <span className="rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-emerald-400">
                  Current role
                </span>
              )}
              <span className="rounded-full border border-slate-700 bg-slate-950/50 px-2.5 py-0.5 text-xs font-medium text-slate-400">
                {job.period}
              </span>
            </div>
            <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">{job.role}</h3>
            <p className="text-lg font-semibold text-emerald-400/95">{job.company}</p>
            <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-500">
              <HiLocationMarker className="h-4 w-4 shrink-0 text-slate-600" />
              {job.location}
            </p>
          </div>
        </div>
      </div>

      <p className="mt-6 border-t border-slate-800/80 pt-6 text-sm leading-relaxed text-slate-400">
        {job.summary}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {job.tech.map((t) => (
          <span
            key={t}
            className="rounded-lg border border-slate-700/90 bg-slate-950/60 px-3 py-1 text-xs font-medium text-slate-300"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Key impact & work</p>
        <ul className="mt-4 space-y-3">
          {job.highlights.map((line) => (
            <li key={line} className="flex gap-3 text-sm leading-relaxed text-slate-300">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-500" />
              {line}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

export function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-b border-slate-800/60 bg-gradient-to-b from-slate-900/30 via-slate-950 to-slate-950"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <ScrollReveal className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400/90">
            Experience
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
            Work history — roles, stack & outcomes
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Each card is written so hiring managers can skim impact first, then read depth. Your
            current role is highlighted.
          </p>
          <div className="mt-8 h-1 w-20 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400" />
        </ScrollReveal>

        <div className="space-y-10">
          {experienceItems.map((job, index) => (
            <JobCard key={job.id} job={job} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
