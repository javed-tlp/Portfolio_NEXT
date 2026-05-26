"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { heroGallery } from "@/config/site";

const AUTO_MS = 5200;

/** GPU-friendly: only x + opacity — no blur/filter (avoids layout thrash / jank). */
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "6%" : "-6%",
    opacity: 0,
  }),
  center: { x: "0%", opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? "-4%" : "4%",
    opacity: 0,
  }),
};

const slideTransition = {
  type: "tween" as const,
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1] as const,
  opacity: { duration: 0.55, ease: [0.4, 0, 0.2, 1] as const },
};

type HeroGalleryProps = {
  name: string;
};

export function HeroGallery({ name }: HeroGalleryProps) {
  const reduceMotion = useReducedMotion();
  const [slide, setSlide] = useState({ index: 0, direction: 1 as 1 | -1 });
  const [paused, setPaused] = useState(false);
  const tabHidden = useRef(false);

  const count = heroGallery.length;
  const current = heroGallery[slide.index] ?? heroGallery[0];
  const direction = slide.direction;

  const advance = useCallback(() => {
    setSlide((s) => ({
      index: (s.index + 1) % count,
      direction: 1,
    }));
  }, [count]);

  useEffect(() => {
    const onVis = () => {
      tabHidden.current = document.visibilityState === "hidden";
    };
    onVis();
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  useEffect(() => {
    if (count <= 1 || reduceMotion) return;
    const id = window.setInterval(() => {
      if (paused || tabHidden.current) return;
      advance();
    }, AUTO_MS);
    return () => window.clearInterval(id);
  }, [count, reduceMotion, paused, advance, slide.index]);

  const simpleFade = Boolean(reduceMotion || count <= 1);
  const showTimer = count > 1 && !reduceMotion;

  return (
    <div
      className="relative mx-auto w-full max-w-[400px] lg:max-w-[440px] lg:justify-self-end"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label={`Rotating photos of ${name}`}
    >
      <div
        className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-[radial-gradient(ellipse_at_50%_40%,rgb(52_211_153/0.12),transparent_65%)] blur-2xl"
        aria-hidden
      />

      <div className="relative">
        <div className="rounded-[1.75rem] bg-gradient-to-b from-white/[0.14] via-emerald-500/10 to-white/[0.04] p-px shadow-[0_32px_64px_-20px_rgba(0,0,0,0.75)]">
          <div className="overflow-hidden rounded-[1.7rem] bg-slate-950 ring-1 ring-black/40">
            <div className="relative aspect-[4/5] w-full sm:aspect-[5/6]">
              {/* sync = incoming + outgoing overlap for a smooth crossfade (no wait gap). */}
              <AnimatePresence initial={false} custom={direction} mode="sync">
                <motion.div
                  key={current.src}
                  className="absolute inset-0"
                  custom={direction}
                  variants={simpleFade ? undefined : slideVariants}
                  initial={simpleFade ? { opacity: 0 } : "enter"}
                  animate={simpleFade ? { opacity: 1 } : "center"}
                  exit={simpleFade ? { opacity: 0 } : "exit"}
                  transition={
                    simpleFade
                      ? { duration: 0.35, ease: [0.4, 0, 0.2, 1] }
                      : slideTransition
                  }
                  style={{
                    willChange: "transform, opacity",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                >
                  <Image
                    src={current.src}
                    alt={current.alt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 90vw, 420px"
                    priority={slide.index === 0}
                  />
                </motion.div>
              </AnimatePresence>

              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-24 bg-gradient-to-t from-slate-950/50 to-transparent"
                aria-hidden
              />

              {showTimer && (
                <div
                  className={`absolute inset-x-0 bottom-0 z-[2] h-[3px] overflow-hidden rounded-full bg-slate-900/60 px-1 pb-px pt-0 ${paused ? "hero-gallery-paused" : ""}`}
                  aria-hidden
                >
                  <div
                    key={slide.index}
                    className="hero-gallery-timer h-full rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.35)]"
                    style={{ animationDuration: `${AUTO_MS}ms` }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
