"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import type { PortraitImage } from "@/lib/portraitImages";

const SLIDE_DURATION_MS = 8000;
const TRANSITION_S = 1.05;
const SWIPE_THRESHOLD = 48;

const ease = [0.25, 0.1, 0.25, 1] as const;

type HeroPortraitProps = {
  name: string;
  images: PortraitImage[];
};

export function HeroPortrait({ name, images }: HeroPortraitProps) {
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useMediaQuery("(max-width: 639px)");
  const isTouch = useMediaQuery("(hover: none), (pointer: coarse)");

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const indexRef = useRef(index);
  const imagesRef = useRef(images);

  indexRef.current = index;
  imagesRef.current = images;

  const count = images.length;
  const hasMultiple = count > 1;
  const safeIndex = count > 0 ? Math.min(index, count - 1) : 0;

  const goTo = useCallback((next: number) => {
    const len = imagesRef.current.length;
    if (len <= 1) return;
    const normalized = ((next % len) + len) % len;
    if (normalized === indexRef.current) return;
    setDirection(normalized > indexRef.current ? 1 : -1);
    setIndex(normalized);
  }, []);

  const next = useCallback(() => goTo(indexRef.current + 1), [goTo]);
  const prev = useCallback(() => goTo(indexRef.current - 1), [goTo]);

  useEffect(() => {
    if (index >= count && count > 0) setIndex(0);
  }, [count, index]);

  useEffect(() => {
    images.forEach((img) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = img.src;
      document.head.appendChild(link);
    });
  }, [images]);

  useEffect(() => {
    if (!hasMultiple || paused || prefersReducedMotion) return;
    const id = window.setInterval(() => goTo(indexRef.current + 1), SLIDE_DURATION_MS);
    return () => window.clearInterval(id);
  }, [hasMultiple, paused, goTo, prefersReducedMotion]);

  useEffect(() => {
    if (!hasMultiple) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [hasMultiple, next, prev]);

  if (count === 0) {
    return (
      <div className="mx-auto flex aspect-[4/5] w-full max-w-[400px] items-center justify-center rounded-2xl border border-dashed border-slate-700 bg-slate-900/50 text-sm text-slate-500">
        Add photos to <code className="mx-1 text-emerald-400/90">public/javed/</code>
      </div>
    );
  }

  const current = images[safeIndex];
  const kenBurnsScale = isMobile ? 1.045 : 1.07;
  const slideOffset = isMobile ? 22 : 32;
  const useBlur = !prefersReducedMotion && !isMobile;

  const slideVariants = {
    enter: (d: number) => ({
      opacity: 0,
      x: prefersReducedMotion ? 0 : d * slideOffset,
      filter: useBlur ? "blur(8px)" : "blur(0px)",
    }),
    center: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
    },
    exit: (d: number) => ({
      opacity: 0,
      x: prefersReducedMotion ? 0 : d * -slideOffset,
      filter: useBlur ? "blur(6px)" : "blur(0px)",
    }),
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!hasMultiple) return;
    touchStartX.current = e.touches[0].clientX;
    setPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const start = touchStartX.current;
    touchStartX.current = null;
    setPaused(false);

    if (!hasMultiple || start === null) return;
    const delta = start - e.changedTouches[0].clientX;
    if (Math.abs(delta) < SWIPE_THRESHOLD) return;
    if (delta > 0) next();
    else prev();
  };

  const objectPosition = isMobile ? current.mobileObjectPosition : current.objectPosition;

  return (
    <div
      className="group/portrait relative mx-auto w-full max-w-[min(100%,340px)] sm:max-w-[400px] lg:max-w-[460px] lg:justify-self-end"
      onMouseEnter={() => !isTouch && setPaused(true)}
      onMouseLeave={() => !isTouch && setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setPaused(false);
      }}
    >
      <div
        className="pointer-events-none absolute -inset-3 rounded-[1.75rem] bg-gradient-to-br from-emerald-500/25 via-cyan-500/10 to-transparent opacity-60 blur-2xl sm:-inset-6 sm:opacity-70"
        aria-hidden
      />

      <div
        className="absolute -right-1 bottom-2 left-2 top-5 rounded-[1.25rem] bg-gradient-to-br from-slate-700/50 to-slate-900/75 sm:-right-2 sm:bottom-3 sm:left-8 sm:top-8 sm:rounded-[1.35rem]"
        aria-hidden
      />

      <div
        className="relative rounded-[1.25rem] p-[1px] shadow-[0_20px_48px_-14px_rgba(0,0,0,0.8)] sm:rounded-[1.35rem] sm:shadow-[0_28px_60px_-16px_rgba(0,0,0,0.75)]"
        style={{
          background:
            "linear-gradient(135deg, rgba(52,211,153,0.5) 0%, rgba(34,211,238,0.25) 45%, rgba(255,255,255,0.1) 100%)",
        }}
        role="region"
        aria-roledescription={hasMultiple ? "carousel" : undefined}
        aria-label={`Photos of ${name}`}
      >
        <div
          className="relative overflow-hidden rounded-[1.22rem] bg-slate-950 sm:rounded-[1.32rem]"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={() => {
            touchStartX.current = null;
            setPaused(false);
          }}
          style={{ touchAction: "pan-y pinch-zoom" }}
        >
          <div
            className="relative w-full overflow-hidden
              h-[min(48dvh,400px)] min-h-[280px]
              sm:h-auto sm:min-h-0 sm:aspect-[4/5]"
          >
            <AnimatePresence initial={false} custom={direction} mode="sync">
              <motion.div
                key={current.src}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  opacity: { duration: TRANSITION_S, ease },
                  x: { duration: TRANSITION_S, ease },
                  filter: { duration: TRANSITION_S * 0.85, ease },
                }}
                className="absolute inset-0"
              >
                <motion.div
                  key={`zoom-${current.src}-${isMobile}`}
                  className="absolute inset-0"
                  initial={{ scale: 1 }}
                  animate={{ scale: prefersReducedMotion ? 1 : kenBurnsScale }}
                  transition={{
                    duration: SLIDE_DURATION_MS / 1000,
                    ease: "linear",
                  }}
                >
                  <Image
                    src={current.src}
                    alt={current.alt}
                    fill
                    className="object-cover"
                    style={{ objectPosition }}
                    priority={safeIndex === 0}
                    sizes="(max-width: 640px) 88vw, (max-width: 1024px) 400px, 460px"
                    draggable={false}
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>

            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent"
              aria-hidden
            />

            <span className="pointer-events-none absolute left-2.5 top-2.5 h-5 w-5 border-l border-t border-emerald-400/50 sm:left-3 sm:top-3 sm:h-6 sm:w-6" aria-hidden />
            <span className="pointer-events-none absolute right-2.5 top-2.5 h-5 w-5 border-r border-t border-cyan-400/40 sm:right-3 sm:top-3 sm:h-6 sm:w-6" aria-hidden />
            <span className="pointer-events-none absolute bottom-14 left-2.5 h-5 w-5 border-b border-l border-white/15 sm:bottom-16 sm:left-3 sm:h-6 sm:w-6" aria-hidden />
            <span className="pointer-events-none absolute bottom-14 right-2.5 h-5 w-5 border-b border-r border-white/15 sm:bottom-16 sm:right-3 sm:h-6 sm:w-6" aria-hidden />

            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.07]" aria-hidden />

            {hasMultiple && !prefersReducedMotion && (
              <div className="absolute inset-x-0 top-0 z-20 h-[2px] overflow-hidden bg-white/5">
                <div
                  key={safeIndex}
                  className="portrait-progress-bar h-full bg-gradient-to-r from-emerald-400 to-cyan-400"
                  style={{
                    animationDuration: `${SLIDE_DURATION_MS}ms`,
                    animationPlayState: paused ? "paused" : "running",
                  }}
                />
              </div>
            )}

            {hasMultiple && (
              <>
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous photo"
                  className="absolute left-2 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-slate-950/65 text-white/90 backdrop-blur-md transition hover:border-emerald-400/50 hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 active:scale-95 sm:left-3 sm:h-10 sm:w-10 sm:bg-slate-950/50 sm:opacity-0 sm:group-hover/portrait:opacity-100 [@media(hover:none)]:opacity-90"
                >
                  <HiChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next photo"
                  className="absolute right-2 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-slate-950/65 text-white/90 backdrop-blur-md transition hover:border-emerald-400/50 hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 active:scale-95 sm:right-3 sm:h-10 sm:w-10 sm:bg-slate-950/50 sm:opacity-0 sm:group-hover/portrait:opacity-100 [@media(hover:none)]:opacity-90"
                >
                  <HiChevronRight className="h-5 w-5" />
                </button>

                <div className="absolute bottom-3 left-0 right-0 z-20 flex justify-center gap-1.5 px-2 sm:hidden">
                  {images.map((img, i) => {
                    const active = i === safeIndex;
                    return (
                      <button
                        key={img.src}
                        type="button"
                        onClick={() => goTo(i)}
                        aria-label={`Show photo ${i + 1}`}
                        aria-current={active ? "true" : undefined}
                        className={`rounded-full transition-all duration-500 ${
                          active
                            ? "h-2 w-6 bg-gradient-to-r from-emerald-400 to-cyan-400"
                            : "h-2 w-2 bg-white/35 active:bg-white/55"
                        }`}
                      />
                    );
                  })}
                </div>

                {isMobile && safeIndex === 0 && !prefersReducedMotion && (
                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="pointer-events-none absolute left-0 right-0 top-3 z-10 text-center text-[10px] font-medium uppercase tracking-[0.2em] text-white/40"
                  >
                    Swipe to explore
                  </motion.p>
                )}
              </>
            )}
          </div>

          {hasMultiple && (
            <div className="absolute bottom-0 left-0 right-0 z-20 hidden max-w-full justify-center gap-2 overflow-x-auto p-3 sm:flex sm:gap-2 sm:p-4">
              {images.map((img, i) => (
                <ThumbnailButton
                  key={img.src}
                  img={img}
                  index={i}
                  active={i === safeIndex}
                  isMobile={false}
                  onSelect={() => goTo(i)}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {hasMultiple && (
        <>
          <div className="mt-4 flex justify-center gap-2 overflow-x-auto px-2 sm:hidden">
            {images.map((img, i) => (
              <ThumbnailButton
                key={`mobile-${img.src}`}
                img={img}
                index={i}
                active={i === safeIndex}
                isMobile
                onSelect={() => goTo(i)}
              />
            ))}
          </div>

          <p className="mt-2 text-center text-xs text-slate-500 sm:hidden" aria-live="polite">
            {safeIndex + 1} of {count}
          </p>
        </>
      )}
    </div>
  );
}

type ThumbnailButtonProps = {
  img: PortraitImage;
  index: number;
  active: boolean;
  isMobile: boolean;
  onSelect: () => void;
};

function ThumbnailButton({ img, index, active, isMobile, onSelect }: ThumbnailButtonProps) {
  const pos = isMobile ? img.mobileObjectPosition : img.objectPosition;

  return (
    <button
      type="button"
      onClick={onSelect}
      aria-label={`Show photo ${index + 1}`}
      aria-current={active ? "true" : undefined}
      className={`relative shrink-0 overflow-hidden rounded-xl transition-all duration-500 ${
        isMobile
          ? active
            ? "h-[68px] w-[52px] ring-2 ring-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.35)]"
            : "h-14 w-[48px] opacity-65 ring-1 ring-white/15 active:opacity-90"
          : active
            ? "h-12 w-10 ring-2 ring-emerald-400 shadow-[0_0_16px_rgba(52,211,153,0.35)]"
            : "h-10 w-8 opacity-60 ring-1 ring-white/15 hover:opacity-90"
      }`}
    >
      <Image
        src={img.src}
        alt=""
        fill
        className="object-cover"
        style={{ objectPosition: pos }}
        sizes={isMobile ? "72px" : "56px"}
        draggable={false}
      />
      {active && !isMobile && (
        <motion.span
          layoutId="portrait-thumb-active"
          className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/20"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </button>
  );
}
