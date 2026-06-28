import type { Metadata } from "next";
import { ProjectFilters } from "@/components/ProjectFilters";
import { SectionHeader } from "@/components/SectionHeader";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Selected Work",
  description:
    "Selected SaaS, AI, CRM and vertical software case studies by Guilherme Fath.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Work"
          title="Selected work, with the business context included."
          description="Four products across business management, gyms, real estate and loyalty. The focus is not just the interface, but the system behind it."
        />
        <ProjectFilters />
        <section className="mt-14 rounded-lg border border-dashed border-border bg-surface p-6">
          <p className="eyebrow mb-3">Additional work</p>
          <h2 className="text-2xl font-semibold text-white">
            More work is being prepared.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
            Smaller tools, internal systems and experiments will be added here
            when the screenshots and business context are safe to publish.
          </p>
        </section>
      </div>
    </section>
  );
}
