import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function ExternalLink({
  href,
  children,
  className,
  variant = "plain",
}: {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "plain" | "button" | "muted";
}) {
  const isConfigured = !href.startsWith("CONFIGURE_");

  if (!isConfigured) {
    return (
      <span
        className={cn(
          "inline-flex min-h-10 items-center rounded-full border border-dashed border-border px-4 text-sm text-muted",
          className,
        )}
      >
        Configure link
      </span>
    );
  }

  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "focus-ring inline-flex items-center gap-2 rounded-full transition",
        variant === "button" &&
          "min-h-11 border border-white/85 bg-white px-5 text-sm font-semibold text-ink hover:border-accent-light hover:bg-accent-light",
        variant === "muted" &&
          "min-h-10 border border-white/10 px-4 text-sm text-muted hover:border-white/25 hover:text-white",
        variant === "plain" &&
          "text-muted underline-offset-4 hover:text-white hover:underline",
        className,
      )}
    >
      {children}
      <span aria-hidden="true">↗</span>
      <span className="sr-only">opens in a new tab</span>
    </Link>
  );
}
