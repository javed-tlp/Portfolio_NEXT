import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { siteConfig, mainNav } from "@/config/site";

const social = [
  { icon: FaTwitter, href: siteConfig.social.twitter, label: "Twitter" },
  { icon: FaLinkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
  { icon: FaGithub, href: siteConfig.social.github, label: "GitHub" },
  { icon: FaInstagram, href: siteConfig.social.instagram, label: "Instagram" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-lg font-semibold text-white">{siteConfig.name}</p>
            <p className="mt-1 max-w-sm text-sm text-slate-500">{siteConfig.role}</p>
            <div className="mt-4 flex gap-3">
              {social.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/50 text-slate-400 transition hover:border-emerald-500/40 hover:text-emerald-400"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Navigate
              </p>
              <ul className="mt-3 space-y-2">
                {mainNav.slice(0, 4).map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-slate-400 hover:text-emerald-400"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                More
              </p>
              <ul className="mt-3 space-y-2">
                {mainNav.slice(4).map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-slate-400 hover:text-emerald-400"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Contact
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-400">
                <li>
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-emerald-400">
                    {siteConfig.email}
                  </a>
                </li>
                <li>{siteConfig.phone}</li>
                <li>{siteConfig.location}</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="mt-10 border-t border-slate-800 pt-8 text-center text-xs text-slate-600">
          © {year} {siteConfig.name}. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
