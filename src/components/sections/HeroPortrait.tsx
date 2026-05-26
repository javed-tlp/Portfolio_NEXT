import Image from "next/image";

type HeroPortraitProps = {
  name: string;
  imageSrc?: string;
};

/**
 * Minimal treatment: photo only, soft depth behind, no frames or extra UI.
 */
export function HeroPortrait({ name, imageSrc = "/javed.png" }: HeroPortraitProps) {
  return (
    <div className="relative mx-auto w-full max-w-[400px] lg:max-w-[440px] lg:justify-self-end">
      {/* Quiet depth — offset slab, no text, no effects */}
      <div
        className="absolute -right-1 bottom-2 left-3 top-6 rounded-2xl bg-slate-800/50 sm:left-6"
        aria-hidden
      />
      <div className="relative overflow-hidden rounded-2xl bg-slate-900 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.65)] ring-1 ring-white/[0.07]">
        <div className="relative aspect-[4/5] w-full sm:aspect-[5/6]">
          <Image
            src={imageSrc}
            alt={name}
            width={520}
            height={640}
            className="h-full w-full object-cover object-top"
            priority
            sizes="(max-width: 1024px) 90vw, 420px"
          />
        </div>
      </div>
    </div>
  );
}
