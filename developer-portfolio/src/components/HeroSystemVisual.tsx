const surfaces = [
  { title: "Product", lines: ["Discovery", "Workflows", "Business rules"] },
  { title: "Frontend", lines: ["Interfaces", "Dashboards", "Forms"] },
  { title: "Backend", lines: ["APIs", "Jobs", "Webhooks"] },
  { title: "Data", lines: ["PostgreSQL", "Prisma", "Reporting"] },
] as const;

export function HeroSystemVisual() {
  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-white/10 bg-elevated p-4 shadow-[0_30px_100px_rgba(0,0,0,0.34)]">
      <div className="absolute inset-0 bg-grid opacity-25" aria-hidden="true" />
      <div className="relative grid h-full gap-4">
        <div className="rounded-lg border border-white/10 bg-ink/90 p-4">
          <div className="mb-4 flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-normal text-accent-light">
              Product map
            </span>
            <span className="rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-success">
              Live systems
            </span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {surfaces.map((surface) => (
              <div
                key={surface.title}
                className="rounded-lg border border-white/10 bg-surface p-4"
              >
                <p className="font-semibold text-white">{surface.title}</p>
                <div className="mt-4 grid gap-2">
                  {surface.lines.map((line) => (
                    <div
                      key={line}
                      className="h-7 rounded-md border border-border bg-elevated px-3 py-1.5 text-xs text-muted"
                    >
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-[1fr_0.8fr]">
          <div className="rounded-lg border border-white/10 bg-ink/80 p-4">
            <p className="mb-4 text-xs font-semibold uppercase tracking-normal text-muted">
              Integration layer
            </p>
            <div className="grid grid-cols-3 gap-2 text-center text-xs text-muted">
              {[
                "AI APIs",
                "WhatsApp",
                "Payments",
                "Shipping",
                "Email",
                "Cloud",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-border px-2 py-3"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-white/12 bg-white/[0.03] p-4">
            <p className="text-sm font-semibold text-white">
              End-to-end ownership
            </p>
            <p className="mt-2 text-sm leading-6 text-muted">
              Product thinking, UX, data, APIs and the launch path.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
