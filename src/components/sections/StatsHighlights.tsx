"use client";

import { motion } from "framer-motion";
import { HiLightningBolt, HiShieldCheck, HiTrendingUp } from "react-icons/hi";
import { atAGlanceStats, valuePillars } from "@/config/site";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

const icons = [HiTrendingUp, HiShieldCheck, HiLightningBolt];

export function StatsHighlights() {
  return (
    <section
      id="highlights"
      className="scroll-mt-20 border-b border-slate-800/60 bg-slate-950/90"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <ScrollReveal>
          <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400/90">
            At a glance
          </p>
          <h2 className="mt-3 text-center text-2xl font-bold text-white sm:text-3xl">
            Why recruiters stop here
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-400">
            Numbers and traits—before you dive into experience and projects below.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {atAGlanceStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/80 to-slate-950/80 p-5 text-center shadow-lg shadow-black/20"
            >
              <p className="text-3xl font-bold tabular-nums text-white sm:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm font-medium text-slate-300">{stat.label}</p>
              <p className="mt-1 text-xs text-slate-500">{stat.hint}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {valuePillars.map((pillar, i) => {
            const Icon = icons[i] ?? HiLightningBolt;
            return (
              <ScrollReveal key={pillar.title} delay={i * 0.1} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-slate-800/80 bg-slate-900/30 p-6 transition hover:border-emerald-500/25">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-white">{pillar.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{pillar.text}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
