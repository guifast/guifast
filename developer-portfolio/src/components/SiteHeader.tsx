"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BrandMark } from "@/components/BrandMark";
import { navigation, profile } from "@/content/profile";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
    buttonRef.current?.focus();
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-ink/85 backdrop-blur-md">
      <a
        href="#main-content"
        className="focus-ring sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-elevated focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="focus-ring group inline-flex items-center gap-3 rounded text-sm font-semibold tracking-wide text-white"
        >
          <BrandMark className="transition group-hover:border-accent/40" />
          <span>Guilherme Fath</span>
        </Link>
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-1 lg:flex"
        >
          {navigation.map((item) => {
            const active =
              pathname === item.href ||
              (item.href === "/projects" && pathname.startsWith("/projects"));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "focus-ring rounded-full px-4 py-2 text-sm transition",
                  active
                    ? "bg-elevated text-white"
                    : "text-muted hover:text-white",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="focus-ring rounded-full px-3 py-2 text-sm text-muted hover:text-white"
          >
            GitHub <span className="sr-only">opens in a new tab</span>
          </Link>
          {!profile.linkedin.startsWith("CONFIGURE_") ? (
            <Link
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="focus-ring rounded-full px-3 py-2 text-sm text-muted hover:text-white"
            >
              LinkedIn <span className="sr-only">opens in a new tab</span>
            </Link>
          ) : null}
          <Link href="/contact" className="button-primary">
            Get in touch
          </Link>
        </div>
        <button
          ref={buttonRef}
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-white lg:hidden"
        >
          <span className="sr-only">Menu</span>
          <span aria-hidden="true" className="relative h-4 w-5">
            <span
              className={cn(
                "absolute left-0 top-0 h-0.5 w-5 bg-current transition",
                open && "top-2 rotate-45",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-2 h-0.5 w-5 bg-current transition",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-4 h-0.5 w-5 bg-current transition",
                open && "top-2 -rotate-45",
              )}
            />
          </span>
        </button>
      </div>
      {open ? (
        <div
          id="mobile-navigation"
          className="fixed inset-x-0 top-16 z-50 max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-border bg-ink p-4 lg:hidden"
        >
          <nav aria-label="Mobile navigation" className="grid gap-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="focus-ring rounded-lg border border-border bg-surface px-4 py-4 text-base font-medium text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="focus-ring rounded-lg border border-border px-4 py-4 text-base font-medium text-muted"
            >
              GitHub <span aria-hidden="true">↗</span>
              <span className="sr-only">opens in a new tab</span>
            </Link>
            {!profile.linkedin.startsWith("CONFIGURE_") ? (
              <Link
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="focus-ring rounded-lg border border-border px-4 py-4 text-base font-medium text-muted"
              >
                LinkedIn <span aria-hidden="true">↗</span>
                <span className="sr-only">opens in a new tab</span>
              </Link>
            ) : null}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
