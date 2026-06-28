import { existsSync } from "node:fs";
import { join } from "node:path";
import Link from "next/link";
import { profile } from "@/content/profile";

export function ResumeButton() {
  const resumePath = join(
    process.cwd(),
    "public",
    profile.resumeUrl.replace(/^\//, ""),
  );
  const exists = existsSync(resumePath);

  if (!exists) {
    return (
      <span className="inline-flex min-h-11 items-center rounded-full border border-dashed border-border px-5 text-sm font-semibold text-muted">
        PDF coming soon
      </span>
    );
  }

  return (
    <Link href={profile.resumeUrl} className="button-primary" download>
      Download resume
    </Link>
  );
}
