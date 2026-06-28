import Link from "next/link";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ExternalLink } from "@/components/ExternalLink";
import { HeroSystemVisual } from "@/components/HeroSystemVisual";
import { ProjectCard } from "@/components/ProjectCard";
import { ResumeButton } from "@/components/ResumeButton";
import { SectionHeader } from "@/components/SectionHeader";
import { TechPill } from "@/components/TechPill";
import { proofPoints, profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { coreStack, engineeringScope } from "@/content/stack";
import { cn } from "@/lib/utils";

const stackModes = ["Build", "Test", "Ship", "Operate"] as const;

const stackCardClass = {
  Languages: "lg:col-span-2",
  Frontend: "lg:col-span-4",
  Backend: "lg:col-span-3",
  Data: "lg:col-span-3",
  Infrastructure: "lg:col-span-3",
  Integrations: "lg:col-span-3",
  Quality: "lg:col-span-6",
} as Record<string, string>;

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div
          className="absolute inset-0 bg-grid opacity-25"
          aria-hidden="true"
        />
        <div className="container relative grid gap-10 py-16 md:py-24 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <p className="eyebrow mb-5">
              Brazil-based · Remote international work
            </p>
            <h1 className="max-w-4xl text-balance font-display text-[clamp(2.55rem,7vw,5.7rem)] font-semibold leading-[0.96] tracking-normal text-white">
              I build the product, the system and the parts behind it.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-muted">
              Full-stack product engineer working across SaaS, CRM,
              e-commerce, fitness and real estate products. I move from product
              thinking to interface, backend, data, integrations and launch.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/projects" className="button-primary">
                View selected work
              </Link>
              <ExternalLink href={profile.github} variant="muted">
                GitHub
              </ExternalLink>
              <ResumeButton />
            </div>
            <dl className="mt-10 grid gap-3 sm:grid-cols-3">
              {proofPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-lg border border-border bg-surface/80 p-4"
                >
                  <dt className="sr-only">Proof point</dt>
                  <dd className="text-sm font-semibold text-white">{point}</dd>
                </div>
              ))}
            </dl>
          </div>
          <HeroSystemVisual />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Selected work"
            title="Software built close to the operation."
            description="Four products across CRM, gyms, real estate and loyalty, each shaped around how the business actually runs."
          />
          <div className="grid gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                priority={index === 0}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section border-y border-border bg-surface/45">
        <div className="container">
          <SectionHeader
            eyebrow="Engineering scope"
            title="A broader engineering range."
            description="I can work on the interface, the domain model, the API, the data layer and the launch path without losing product context."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {engineeringScope.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-border bg-ink p-5"
              >
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow mb-4">Core stack</p>
            <h2 className="max-w-xl text-balance text-3xl font-semibold tracking-normal text-white md:text-5xl">
              A focused set of tools, used end to end.
            </h2>
            <p className="mt-5 max-w-lg text-pretty text-base leading-7 text-muted md:text-lg">
              The stack stays compact on purpose: enough range to own the
              product from interface to infrastructure, without turning every
              project into a tooling experiment.
            </p>
            <div className="mt-8 hidden grid-cols-2 gap-3 lg:grid">
              {stackModes.map((mode) => (
                <div
                  key={mode}
                  className="rounded-lg border border-white/10 bg-surface/70 p-4"
                >
                  <p className="font-mono text-xs font-semibold uppercase text-accent-light">
                    {mode}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {coreStack.map((group) => (
              <article
                key={group.category}
                className={cn(
                  "rounded-lg border border-white/10 bg-surface p-5 transition hover:border-white/20 hover:bg-elevated",
                  stackCardClass[group.category],
                )}
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <h3 className="font-semibold text-white">{group.category}</h3>
                  <span className="h-px flex-1 bg-white/10" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <TechPill key={item}>{item}</TechPill>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-y border-border bg-elevated/50">
        <div className="container grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="eyebrow mb-4">Product mindset</p>
            <h2 className="text-balance text-3xl font-semibold tracking-normal text-white md:text-5xl">
              I care about what happens after the feature ships.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-muted">
            <p>
              My background in marketing, support and business operations helps
              me read the room before opening the editor: how people sell, where
              handoffs break, what managers need to see and what a user will
              actually tolerate every day.
            </p>
            <p>
              I do not treat software as a pretty screen in isolation. The value
              is in the whole loop: the interface, the rules, the data, the
              integrations, the failure states and the next version.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Experience"
            title="A path through software, support and business work."
          >
            <Link href="/experience" className="button-secondary">
              View full experience
            </Link>
          </SectionHeader>
          <ExperienceTimeline compact />
        </div>
      </section>

      <section className="section">
        <div className="container rounded-lg border border-border bg-surface p-6 md:p-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="eyebrow mb-4">Current focus</p>
              <h2 className="max-w-3xl text-balance text-3xl font-semibold tracking-normal text-white md:text-5xl">
                Looking for someone who can own more than a ticket?
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
                I am open to remote international roles where product judgment,
                full-stack execution and clear communication matter.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="button-primary">
                Start a conversation
              </Link>
              <ExternalLink href={profile.linkedin} variant="muted">
                View LinkedIn
              </ExternalLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
