import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { CaseNavigation } from "@/components/CaseNavigation";
import { ExternalLink } from "@/components/ExternalLink";
import { ProjectStatus } from "@/components/ProjectStatus";
import { TechPill } from "@/components/TechPill";
import { getProject, projects } from "@/content/projects";
import { createMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return createMetadata({ title: "Project not found", path: "/projects" });
  }

  return createMetadata({
    title: project.name,
    description: project.summary,
    path: `/projects/${project.slug}`,
    image: project.cover,
  });
}

export default async function ProjectCasePage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(projectIndex + 1) % projects.length];

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.summary,
    url: project.url,
    creator: {
      "@type": "Person",
      name: "Guilherme Fath",
    },
    keywords: project.tags.join(", "),
  };

  return (
    <>
      <section className="border-b border-border bg-elevated/30">
        <div className="container py-14 md:py-20">
          <div className="max-w-4xl">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <ProjectStatus status={project.status} />
              <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted">
                {project.category}
              </span>
            </div>
            <h1 className="text-balance font-display text-[clamp(2.4rem,7vw,5.6rem)] font-semibold leading-none tracking-normal text-white">
              {project.name}
            </h1>
            <p className="mt-6 max-w-3xl text-pretty text-xl leading-8 text-muted">
              {project.hero}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ExternalLink href={project.url} variant="button">
                Visit product
              </ExternalLink>
              <Link href="/projects" className="button-secondary">
                All work
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="container grid gap-10 py-12 lg:grid-cols-[220px_1fr] lg:py-16">
        <CaseNavigation />
        <article className="min-w-0">
          <CaseSection id="overview" title="Overview">
            <div className="grid gap-5 text-lg leading-8 text-muted">
              {project.overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </CaseSection>
          <CaseSection id="business-problem" title="Business problem">
            <p className="case-copy">{project.businessProblem}</p>
          </CaseSection>
          <CaseSection id="product-approach" title="Product approach">
            <p className="case-copy">{project.productApproach}</p>
          </CaseSection>
          <CaseSection id="my-role" title="My role">
            <p className="case-copy">{project.role}</p>
          </CaseSection>
          <CaseSection id="key-capabilities" title="Key capabilities">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {project.capabilities.map((capability) => (
                <div
                  key={capability}
                  className="rounded-lg border border-border bg-surface p-4 text-sm leading-6 text-muted"
                >
                  {capability}
                </div>
              ))}
            </div>
          </CaseSection>
          <CaseSection id="architecture" title="Architecture">
            <ArchitectureDiagram
              title={`${project.name} system view`}
              kind={project.architecture.kind}
              nodes={project.architecture.nodes}
            />
          </CaseSection>
          <CaseSection id="technical-decisions" title="Technical decisions">
            <CardGrid items={project.technicalDecisions} />
          </CaseSection>
          <CaseSection id="challenges" title="Challenges and trade-offs">
            <CardGrid items={project.challenges} />
          </CaseSection>
          <CaseSection id="production" title="Production and operations">
            <p className="case-copy">{project.production}</p>
          </CaseSection>
          <CaseSection id="stack" title="Stack">
            <div className="flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <TechPill key={item}>{item}</TechPill>
              ))}
            </div>
          </CaseSection>
          <CaseSection id="what-i-learned" title="What I learned">
            <p className="case-copy">{project.learned}</p>
          </CaseSection>
          <section className="rounded-lg border border-border bg-surface p-6">
            <p className="eyebrow mb-3">Next project</p>
            <h2 className="text-2xl font-semibold text-white">
              {nextProject.name}
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted">
              {nextProject.summary}
            </p>
            <Link
              href={`/projects/${nextProject.slug}`}
              className="button-secondary mt-5"
            >
              Read next case
            </Link>
          </section>
        </article>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
    </>
  );
}

function CaseSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 border-b border-border py-9 first:pt-0"
    >
      <h2 className="mb-5 text-2xl font-semibold tracking-normal text-white md:text-3xl">
        {title}
      </h2>
      {children}
    </section>
  );
}

function CardGrid({ items }: { items: string[] }) {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {items.map((item) => (
        <div
          key={item}
          className="rounded-lg border border-border bg-surface p-4 text-sm leading-6 text-muted"
        >
          {item}
        </div>
      ))}
    </div>
  );
}
