export function ProjectStatus({ status }: { status: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-3 py-1 text-xs font-semibold text-success">
      <span
        className="h-1.5 w-1.5 rounded-full bg-success"
        aria-hidden="true"
      />
      {status}
    </span>
  );
}
