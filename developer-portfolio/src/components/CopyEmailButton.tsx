"use client";

import { useState } from "react";
import { profile } from "@/content/profile";
import { cn } from "@/lib/utils";

export function CopyEmailButton({ className }: { className?: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "missing">("idle");
  const hasEmail = !profile.email.startsWith("CONFIGURE_");

  async function copyEmail() {
    if (!hasEmail) {
      setStatus("missing");
      return;
    }

    await navigator.clipboard.writeText(profile.email);
    setStatus("copied");
    window.setTimeout(() => setStatus("idle"), 2000);
  }

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <button
        type="button"
        onClick={copyEmail}
        className="button-secondary w-fit"
      >
        {hasEmail ? "Copy email" : "Email to configure"}
      </button>
      <p aria-live="polite" className="min-h-5 text-sm text-muted">
        {status === "copied" ? "Email copied to clipboard." : null}
        {status === "missing"
          ? "Set the email in src/content/profile.ts."
          : null}
      </p>
    </div>
  );
}
