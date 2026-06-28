export function TechPill({ children }: { children: string }) {
  return (
    <span className="inline-flex min-h-7 items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
      {children}
    </span>
  );
}
