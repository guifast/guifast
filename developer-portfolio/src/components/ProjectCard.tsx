import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";
import { ExternalLink } from "@/components/ExternalLink";
import { ProjectStatus } from "@/components/ProjectStatus";
import { TechPill } from "@/components/TechPill";

export function ProjectCard({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  return (
    <article className="group grid overflow-hidden rounded-lg border border-white/10 bg-surface/90 shadow-[0_24px_90px_rgba(0,0,0,0.26)] transition hover:border-white/20 hover:bg-elevated md:grid-cols-[0.95fr_1.05fr]">
      <Link
        href={`/projects/${project.slug}`}
        className="focus-ring relative block min-h-64 overflow-hidden bg-[#030406]"
      >
        <Image
          src={project.cover}
          alt={`${project.name} product interface`}
          width={1600}
          height={1000}
          priority={priority}
          className="h-full min-h-64 w-full object-contain p-3 transition duration-500 group-hover:brightness-110 sm:p-4"
        />
      </Link>
      <div className="flex flex-col gap-5 border-t border-white/8 p-5 sm:p-7 md:border-l md:border-t-0">
        <div className="flex flex-wrap items-center gap-3">
          <ProjectStatus status={project.status} />
          {project.privateSource ? (
            <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted">
              Private source code
            </span>
          ) : null}
        </div>
        <div>
          <p className="eyebrow mb-3 text-accent-light/90">
            {project.shortCategory}
          </p>
          <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
          <p className="mt-3 text-sm leading-7 text-muted">{project.summary}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <TechPill key={item}>{item}</TechPill>
          ))}
        </div>
        <div className="mt-auto flex flex-wrap gap-3">
          <Link href={`/projects/${project.slug}`} className="button-secondary">
            Read case
          </Link>
          <ExternalLink href={project.url} variant="muted">
            Live product
          </ExternalLink>
        </div>
      </div>
    </article>
  );
}
