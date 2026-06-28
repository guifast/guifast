import { experiences } from "@/content/experience";

export function ExperienceTimeline({ compact = false }: { compact?: boolean }) {
  const items = compact ? experiences.slice(0, 3) : experiences;

  return (
    <div className="relative grid gap-5">
      {items.map((experience) => (
        <article
          key={`${experience.company}-${experience.role}`}
          className="relative rounded-lg border border-border bg-surface p-5 md:p-6"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="eyebrow mb-2">{experience.company}</p>
              <h3 className="text-xl font-semibold text-white">
                {experience.role}
              </h3>
            </div>
            <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted">
              {experience.period}
            </span>
          </div>
          <p className="mt-4 text-sm leading-7 text-muted">
            {experience.summary}
          </p>
          {!compact ? (
            <ul className="mt-5 grid gap-3 text-sm leading-6 text-muted">
              {experience.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          ) : null}
          {experience.needsConfirmation ? (
            <p className="mt-4 text-xs text-muted">
              Period marked as content to confirm.
            </p>
          ) : null}
        </article>
      ))}
    </div>
  );
}
