const sections = [
  "Overview",
  "Business problem",
  "Product approach",
  "My role",
  "Key capabilities",
  "Architecture",
  "Technical decisions",
  "Challenges",
  "Production",
  "Stack",
  "What I learned",
] as const;

export function CaseNavigation() {
  return (
    <aside className="sticky top-24 hidden max-h-[calc(100vh-7rem)] overflow-y-auto lg:block">
      <p className="eyebrow mb-4">Case index</p>
      <nav aria-label="Case study sections" className="grid gap-2">
        {sections.map((section) => (
          <a
            key={section}
            href={`#${section.toLowerCase().replaceAll(" ", "-")}`}
            className="focus-ring rounded-md px-3 py-2 text-sm text-muted hover:bg-surface hover:text-white"
          >
            {section}
          </a>
        ))}
      </nav>
    </aside>
  );
}
