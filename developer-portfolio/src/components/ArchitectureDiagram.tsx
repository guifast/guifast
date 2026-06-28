import type { DiagramKind } from "@/content/projects";
import { assertNever } from "@/lib/utils";

export function ArchitectureDiagram({
  title,
  kind,
  nodes,
}: {
  title: string;
  kind: DiagramKind;
  nodes: string[];
}) {
  if (kind === "flow") {
    return <FlowDiagram title={title} nodes={nodes} />;
  }

  if (kind === "roles") {
    return <RoleDiagram title={title} nodes={nodes} />;
  }

  if (kind === "architecture") {
    return <SystemDiagram title={title} nodes={nodes} />;
  }

  return assertNever(kind);
}

function SystemDiagram({ title, nodes }: { title: string; nodes: string[] }) {
  return (
    <figure className="rounded-lg border border-border bg-ink p-4 md:p-6">
      <figcaption className="mb-4 text-sm font-semibold text-white">
        {title}
      </figcaption>
      <svg
        role="img"
        aria-label={`${title} architecture diagram`}
        viewBox="0 0 760 420"
        className="h-auto w-full"
      >
        <defs>
          <linearGradient id="diagramLine" x1="0" x2="1" y1="0" y2="1">
            <stop stopColor="#60A5FA" />
            <stop offset="1" stopColor="#2563EB" />
          </linearGradient>
        </defs>
        {nodes.map((node, index) => {
          const x = index % 2 === 0 ? 42 : 405;
          const y = 28 + Math.floor(index / 2) * 92;
          return (
            <g key={node}>
              {index > 1 ? (
                <line
                  x1={index % 2 === 0 ? 220 : 580}
                  y1={y - 36}
                  x2={x + 155}
                  y2={y - 8}
                  stroke="url(#diagramLine)"
                  strokeWidth="2"
                  opacity="0.65"
                />
              ) : null}
              <rect
                x={x}
                y={y}
                width="310"
                height="56"
                rx="8"
                fill="#10131A"
                stroke="#252B37"
              />
              <circle cx={x + 24} cy={y + 28} r="6" fill="#60A5FA" />
              <text
                x={x + 42}
                y={y + 33}
                fill="#F7F8FA"
                fontSize="16"
                fontFamily="Inter, sans-serif"
              >
                {node}
              </text>
            </g>
          );
        })}
      </svg>
    </figure>
  );
}

function FlowDiagram({ title, nodes }: { title: string; nodes: string[] }) {
  return (
    <figure className="rounded-lg border border-border bg-ink p-4 md:p-6">
      <figcaption className="mb-4 text-sm font-semibold text-white">
        {title}
      </figcaption>
      <ol className="grid gap-3 md:grid-cols-2">
        {nodes.map((node, index) => (
          <li
            key={node}
            className="flex items-start gap-3 rounded-lg border border-border bg-surface p-4"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-semibold text-white">
              {index + 1}
            </span>
            <span className="text-sm leading-6 text-muted">{node}</span>
          </li>
        ))}
      </ol>
    </figure>
  );
}

function RoleDiagram({ title, nodes }: { title: string; nodes: string[] }) {
  return (
    <figure className="rounded-lg border border-border bg-ink p-4 md:p-6">
      <figcaption className="mb-4 text-sm font-semibold text-white">
        {title}
      </figcaption>
      <div className="grid gap-3 sm:grid-cols-2">
        {nodes.map((node) => (
          <div
            key={node}
            className="rounded-lg border border-border bg-surface p-5"
          >
            <div
              className="mb-4 h-1 w-12 rounded-full bg-accent"
              aria-hidden="true"
            />
            <p className="font-semibold text-white">{node}</p>
          </div>
        ))}
      </div>
    </figure>
  );
}
