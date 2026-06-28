import Link from "next/link";
import { CopyEmailButton } from "@/components/CopyEmailButton";
import { ExternalLink } from "@/components/ExternalLink";
import { profile } from "@/content/profile";

export function ContactLinks() {
  const hasEmail = !profile.email.startsWith("CONFIGURE_");
  const message = encodeURIComponent(
    "Hi Guilherme, I saw your portfolio and would like to talk.",
  );
  const whatsappUrl = `https://wa.me/${profile.phone.whatsapp}?text=${message}`;
  const smsUrl = `sms:${profile.phone.e164}?&body=${message}`;
  const emailUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
    "Remote opportunity",
  )}&body=${message}`;

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-surface">
      <div className="relative border-b border-border p-6 md:p-7">
        <div className="absolute inset-0 bg-grid opacity-20" aria-hidden="true" />
        <div className="relative">
          <p className="eyebrow mb-3">Contact options</p>
          <h2 className="text-balance text-3xl font-semibold tracking-normal text-white">
            Choose the channel that fits the context.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
            Email works best for roles and longer context. WhatsApp is faster
            for a first conversation or scheduling. SMS is there when you need a
            simpler fallback.
          </p>
        </div>
      </div>

      <div className="grid gap-4 p-4 md:p-5">
        <ContactAction
          href={whatsappUrl}
          label="Start on WhatsApp"
          detail={profile.phone.display}
          description="Good for a first hello, scheduling or quick context."
          accent="primary"
          external
        />
        <ContactAction
          href={emailUrl}
          label="Send a professional email"
          detail={profile.email}
          description="Best for remote roles, role details and longer messages."
          accent="secondary"
        />
        <ContactAction
          href={smsUrl}
          label="Send SMS"
          detail={profile.phone.display}
          description="A direct fallback when WhatsApp is not the right channel."
          accent="quiet"
        />
      </div>

      <div className="grid gap-5 border-t border-border bg-ink/45 p-5 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="eyebrow mb-2">Direct email</p>
          {hasEmail ? (
            <Link
              href={`mailto:${profile.email}`}
              className="focus-ring rounded text-lg font-semibold text-white hover:text-accent-light"
            >
              {profile.email}
            </Link>
          ) : (
            <p className="text-lg font-semibold text-white">CONFIGURE_EMAIL</p>
          )}
        </div>
        <CopyEmailButton />
      </div>

      <div className="flex flex-wrap gap-3 border-t border-border p-5">
        <ExternalLink href={profile.github} variant="muted">
          View GitHub
        </ExternalLink>
        <ExternalLink href={profile.linkedin} variant="muted">
          View LinkedIn
        </ExternalLink>
      </div>
    </div>
  );
}

function ContactAction({
  href,
  label,
  detail,
  description,
  accent,
  external = false,
}: {
  href: string;
  label: string;
  detail: string;
  description: string;
  accent: "primary" | "secondary" | "quiet";
  external?: boolean;
}) {
  const tone =
    accent === "primary"
      ? "border-accent/60 bg-accent/10 shadow-[0_20px_60px_rgba(37,99,235,0.16)]"
      : accent === "secondary"
        ? "border-white/12 bg-elevated"
        : "border-border bg-ink";

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`focus-ring group grid min-h-28 gap-4 rounded-lg border p-5 transition hover:-translate-y-0.5 hover:border-accent/70 hover:bg-elevated md:grid-cols-[1fr_auto] md:items-center ${tone}`}
    >
      <span>
        <span className="flex flex-wrap items-center gap-3">
          <span className="block text-lg font-semibold text-white">
            {label}
          </span>
          {accent === "primary" ? (
            <span className="rounded-full border border-accent/35 bg-accent/15 px-2.5 py-1 text-xs font-semibold text-accent-light">
              Fastest
            </span>
          ) : null}
        </span>
        <span className="mt-2 block text-sm leading-6 text-muted">
          {description}
        </span>
        <span className="mt-4 block font-mono text-xs font-semibold uppercase tracking-normal text-white/70">
          {detail}
        </span>
      </span>
      <span
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-sm text-muted transition group-hover:border-accent/70 group-hover:bg-accent group-hover:text-white"
        aria-hidden="true"
      >
        ↗
      </span>
      {external ? <span className="sr-only">opens in a new tab</span> : null}
    </a>
  );
}
