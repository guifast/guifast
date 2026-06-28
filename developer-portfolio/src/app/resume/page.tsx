import Link from "next/link";
import type { Metadata } from "next";
import { ResumeButton } from "@/components/ResumeButton";
import { SectionHeader } from "@/components/SectionHeader";
import { coreStack } from "@/content/stack";
import { experiences } from "@/content/experience";
import { projects } from "@/content/projects";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Resume",
  description: "Web resume for Guilherme Fath, full-stack product engineer.",
  path: "/resume",
});

export default function ResumePage() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Resume"
          title="Full-stack product engineer focused on SaaS, business systems and AI integrations."
          description="A web résumé built from structured content, with the PDF version available for download."
        >
          <div className="flex flex-wrap gap-3">
            <ResumeButton />
            <Link href="/resume" className="button-secondary">
              View web version
            </Link>
          </div>
        </SectionHeader>
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <section className="rounded-lg border border-border bg-surface p-6">
            <h2 className="text-2xl font-semibold text-white">Experience</h2>
            <div className="mt-5 grid gap-5">
              {experiences.map((experience) => (
                <article key={experience.company}>
                  <p className="font-semibold text-white">{experience.role}</p>
                  <p className="mt-1 text-sm text-muted">
                    {experience.company} · {experience.period}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {experience.summary}
                  </p>
                </article>
              ))}
            </div>
          </section>
          <aside className="grid gap-6">
            <section className="rounded-lg border border-border bg-surface p-6">
              <h2 className="text-2xl font-semibold text-white">
                Selected projects
              </h2>
              <ul className="mt-5 grid gap-3">
                {projects.map((project) => (
                  <li key={project.slug}>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="focus-ring rounded text-sm font-semibold text-white hover:text-accent-light"
                    >
                      {project.name}
                    </Link>
                    <p className="mt-1 text-xs text-muted">
                      {project.shortCategory}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
            <section className="rounded-lg border border-border bg-surface p-6">
              <h2 className="text-2xl font-semibold text-white">Stack</h2>
              <div className="mt-5 grid gap-3 text-sm text-muted">
                {coreStack.map((group) => (
                  <p key={group.category}>
                    <span className="font-semibold text-white">
                      {group.category}:
                    </span>{" "}
                    {group.items.join(" · ")}
                  </p>
                ))}
              </div>
            </section>
            <section className="rounded-lg border border-dashed border-border bg-surface p-6">
              <h2 className="text-2xl font-semibold text-white">Education</h2>
              <p className="mt-3 text-sm leading-6 text-muted">
                Reserved for verified education details when provided.
              </p>
            </section>
          </aside>
        </div>
      </div>
    </section>
  );
}
