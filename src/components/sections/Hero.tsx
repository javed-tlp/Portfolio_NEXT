import Link from "next/link";
import { HeroPortrait } from "@/components/sections/HeroPortrait";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiArrowRight, HiMail } from "react-icons/hi";
import { siteConfig } from "@/config/site";

const social = [
  { icon: FaTwitter, href: siteConfig.social.twitter, label: "Twitter" },
  { icon: FaLinkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
  { icon: FaGithub, href: siteConfig.social.github, label: "GitHub" },
  { icon: FaInstagram, href: siteConfig.social.instagram, label: "Instagram" },
] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="mesh-bg relative scroll-mt-20 overflow-hidden pt-24 pb-20 sm:pt-28 sm:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2240%22%20height%3D%2240%22%3E%3Cg%20fill%3D%22none%22%20stroke%3D%22rgb%2851%2065%2085%20%2F%200.25%29%22%20stroke-width%3D%220.5%22%3E%3Cpath%20d%3D%22M0%20.5h40M40%200v40%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-40" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
        <div className="animate-fade-up">
          <p className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-emerald-400/90">
            Available for opportunities
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              {siteConfig.name.split(" ")[0]}
            </span>
            <span className="text-white"> {siteConfig.name.split(" ").slice(1).join(" ")}</span>
          </h1>
          <p className="mt-2 text-xl font-medium text-slate-400 sm:text-2xl">
            {siteConfig.role}
          </p>
          <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-slate-400">
            {siteConfig.tagline}
          </p>
          <p className="mt-4 text-sm text-slate-500">{siteConfig.location}</p>

          <div className="mt-6 flex flex-wrap gap-2 text-sm">
            <span className="text-slate-600">Jump to:</span>
            <Link href="/#highlights" className="font-medium text-emerald-400/90 hover:underline">
              Overview
            </Link>
            <span className="text-slate-700">·</span>
            <Link href="/#experience" className="font-medium text-emerald-400/90 hover:underline">
              Experience
            </Link>
            <span className="text-slate-700">·</span>
            <Link href="/#projects" className="font-medium text-emerald-400/90 hover:underline">
              Projects
            </Link>
            <span className="text-slate-700">·</span>
            <Link href="/#contact" className="font-medium text-emerald-400/90 hover:underline">
              Contact
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-400"
            >
              <HiMail className="h-5 w-5" />
              Get in touch
            </Link>
            <Link
              href="/#about"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/50 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-emerald-500/40 hover:text-white"
            >
              About me
              <HiArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 flex gap-3">
            {social.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/60 text-slate-400 transition hover:border-emerald-500/30 hover:text-emerald-400"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <HeroPortrait name={siteConfig.name} />
      </div>
    </section>
  );
}
