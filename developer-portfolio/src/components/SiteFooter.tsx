import Link from "next/link";
import { ExternalLink } from "@/components/ExternalLink";
import { BrandMark } from "@/components/BrandMark";
import { navigation, profile } from "@/content/profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-ink">
      <div className="container grid gap-8 py-10 md:grid-cols-[1fr_auto] md:py-14">
        <div>
          <Link
            href="/"
            className="focus-ring group inline-flex items-center gap-3 rounded text-lg font-semibold text-white"
          >
            <BrandMark className="h-9 w-9 transition group-hover:border-accent/40" />
            <span>Guilherme Fath</span>
          </Link>
          <p className="mt-3 max-w-xl text-sm leading-6 text-muted">
            {profile.positioning}
          </p>
        </div>
        <div className="flex flex-col gap-4 md:items-end">
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-5 gap-y-2 text-sm"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring rounded text-muted hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-wrap gap-3">
            <ExternalLink href={profile.github} variant="muted">
              GitHub
            </ExternalLink>
            <ExternalLink href={profile.linkedin} variant="muted">
              LinkedIn
            </ExternalLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
