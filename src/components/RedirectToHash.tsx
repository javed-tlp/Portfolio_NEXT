"use client";

import { useEffect } from "react";

/** Sends visitors to the single-page app with the correct section hash. */
export function RedirectToHash({ hash }: { hash: string }) {
  useEffect(() => {
    window.location.replace(`/#${hash}`);
  }, [hash]);

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-2 px-4 text-slate-500">
      <div className="h-8 w-8 animate-pulse rounded-full border-2 border-emerald-500/30 border-t-emerald-500" />
      <p className="text-sm">Loading section…</p>
    </div>
  );
}
