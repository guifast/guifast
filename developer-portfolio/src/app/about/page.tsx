import type { Metadata } from "next";
import Image from "next/image";
import { profile } from "@/content/profile";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "About Guilherme Fath, a full-stack product engineer based in Brazil.",
  path: "/about",
});

const principles = [
  "Understand the operation before drawing the screen.",
  "Prefer clear systems over unnecessary complexity.",
  "Treat integrations and failure states as part of the product.",
  "Leave decisions clear enough for the next person.",
  "Move fast without making the system fragile.",
  "Explain technical choices in business language.",
] as const;

export default function AboutPage() {
  return (
    <section className="overflow-hidden">
      <div className="container py-12 md:py-18 lg:py-24">
        <div className="relative grid gap-10 lg:min-h-[720px] lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="relative z-10 max-w-2xl">
            <p className="eyebrow mb-5">About</p>
            <h1 className="text-balance font-display text-[clamp(3rem,7.2vw,6.45rem)] font-semibold leading-[0.92] tracking-normal text-white">
              I like software that earns its place in the business.
            </h1>
            <p className="mt-7 max-w-xl text-pretty text-xl leading-9 text-muted">
              I build SaaS products, business systems and AI integrations for
              teams that need the product to work beyond the demo.
            </p>
            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              <div className="border-l border-accent/70 pl-4">
                <p className="text-sm font-semibold text-white">
                  {profile.location}
                </p>
                <p className="mt-1 text-sm text-muted">
                  Americas-friendly time zones
                </p>
              </div>
              <div className="border-l border-border pl-4">
                <p className="text-sm font-semibold text-white">
                  Remote international focus
                </p>
                <p className="mt-1 text-sm text-muted">
                  Full-stack and product engineering
                </p>
              </div>
            </div>
          </div>

          <figure className="relative min-h-[520px] overflow-hidden rounded-lg border border-border bg-elevated shadow-2xl shadow-black/40 lg:-mr-16 lg:min-h-[720px]">
            <div
              className="absolute inset-0 bg-grid opacity-20"
              aria-hidden="true"
            />
            <Image
              src={profile.photo}
              alt="Portrait of Guilherme Fath"
              width={1040}
              height={1560}
              priority
              sizes="(min-width: 1280px) 58vw, (min-width: 1024px) 52vw, 100vw"
              className="absolute inset-0 h-full w-full object-cover object-[50%_28%] grayscale"
            />
            <div
              className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,10,15,0.34),rgba(8,10,15,0)_45%,rgba(8,10,15,0.2)),linear-gradient(0deg,rgba(8,10,15,0.72),rgba(8,10,15,0)_42%)]"
              aria-hidden="true"
            />
            <figcaption className="absolute bottom-5 left-5 right-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/15 pt-4">
              <span className="font-mono text-xs font-semibold uppercase tracking-normal text-white/80">
                Guilherme Fath
              </span>
              <span className="rounded-full border border-white/20 bg-black/25 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                Product engineer
              </span>
            </figcaption>
          </figure>
        </div>

        <div className="mt-14 grid gap-10 border-t border-border pt-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
          <div>
            <p className="eyebrow mb-4">Profile</p>
            <div className="max-w-xl space-y-6 text-lg leading-8 text-muted">
              <p>
                I am a full-stack product engineer based in Brazil. I build SaaS
                products, business systems and third-party integrations with a
                practical bias toward shipping.
              </p>
              <p>
                I have delivered more than five products, including two SaaS
                products live with real users, across CRM, e-commerce, fitness
                and real estate.
              </p>
              <p>
                My work spans product thinking, UX, frontend, backend, data
                modeling, APIs, cloud infrastructure and post-launch maintenance.
              </p>
              <p>
                Before focusing fully on software engineering, I worked with
                technical support, marketing and business operations. That
                background helps me understand users, sales processes and the
                operational pressure behind a feature request.
              </p>
              <p>
                I am currently looking for a remote international opportunity
                where I can contribute as a full-stack or product engineer, work
                with a strong team and take on larger technical challenges.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold tracking-normal text-white">
              How I work
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {principles.map((principle) => (
                <li
                  key={principle}
                  className="min-h-28 rounded-lg border border-border bg-surface p-5 text-sm leading-6 text-muted"
                >
                  <span className="mb-4 block h-1 w-10 rounded-full bg-accent/80" />
                  {principle}
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-lg border border-border bg-elevated p-6">
              <p className="font-semibold text-white">{profile.location}</p>
              <p className="mt-2 text-sm text-muted">
                Working across Americas-friendly time zones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
