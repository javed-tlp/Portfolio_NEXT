"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { ContactForm } from "@/components/forms/ContactForm";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";
import { StatsHighlights } from "@/components/sections/StatsHighlights";
import {
  aboutBlocks,
  educationItems,
  siteConfig,
  skillCategories,
  tools,
} from "@/config/site";

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <ScrollReveal className="mb-12 max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400/90">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-slate-400">{subtitle}</p>}
      <div className="mt-8 h-1 w-16 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400" />
    </ScrollReveal>
  );
}

function AboutCard({
  title,
  details,
}: {
  title: string;
  details: string;
}) {
  return (
    <div className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition hover:border-emerald-500/25 hover:bg-slate-900/70">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-400">{details}</p>
    </div>
  );
}

export function OnePageShell({ hero }: { hero: ReactNode }) {
  return (
    <>
      <ScrollProgress />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        {hero}
      </motion.div>

      <StatsHighlights />

      <section id="about" className="scroll-mt-20 border-b border-slate-800/60 bg-slate-950/80">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <SectionHeading
            eyebrow="About"
            title="Story & approach"
            subtitle="A bit more depth than a résumé headline—so you know how I think and collaborate."
          />
          <StaggerContainer className="grid gap-6 md:grid-cols-2" stagger={0.1}>
            {aboutBlocks.map((block) => (
              <StaggerItem key={block.title}>
                <AboutCard title={block.title} details={block.details} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <ExperienceTimeline />
      <ProjectShowcase />

      <section id="skills" className="scroll-mt-20 border-b border-slate-800/60 bg-slate-950/80">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <SectionHeading
            eyebrow="Skills"
            title="Skills by category"
            subtitle="Grouped so you can map me to your stack quickly—front-end, APIs, data, and quality."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {skillCategories.map((cat, ci) => (
              <ScrollReveal key={cat.name} delay={ci * 0.06}>
                <div className="h-full rounded-2xl border border-slate-800 bg-slate-900/35 p-5">
                  <p className="text-sm font-semibold text-emerald-400/95">{cat.name}</p>
                  <ul className="mt-4 space-y-2">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="scroll-mt-20 border-b border-slate-800/60 bg-slate-900/30">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <SectionHeading
            eyebrow="Education"
            title="Academic background"
            subtitle="Formal CS training plus the coursework that supports software work."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {educationItems.map((ed, i) => (
              <motion.div
                key={ed.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                className="rounded-2xl border border-slate-800 bg-slate-900/45 p-6 sm:p-8"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-500/85">{ed.meta}</p>
                <h3 className="mt-3 text-xl font-bold text-white">{ed.title}</h3>
                <p className="mt-2 text-slate-400">{ed.details}</p>
                {"extra" in ed && ed.extra && (
                  <p className="mt-4 border-t border-slate-800 pt-4 text-sm leading-relaxed text-slate-500">
                    {ed.extra}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="tools" className="scroll-mt-20 border-b border-slate-800/60 bg-slate-950/80">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <SectionHeading
            eyebrow="Toolkit"
            title="Tools & software"
            subtitle="Day-to-day utilities for development, data, and deployment workflows."
          />
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool, i) => (
              <motion.li
                key={tool}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/40 px-4 py-3.5 text-slate-300 transition hover:border-emerald-500/25"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(52,211,153,0.5)]" />
                {tool}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact" className="scroll-mt-20 bg-slate-950 pb-24 pt-20 sm:pb-28 sm:pt-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Contact"
            title="Let’s connect"
            subtitle={`Email: ${siteConfig.email} · Phone: ${siteConfig.phone}`}
          />
          <ScrollReveal delay={0.1}>
            <ContactForm />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
