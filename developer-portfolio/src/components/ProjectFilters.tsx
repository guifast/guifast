"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { projectFilters, projects } from "@/content/projects";
import { cn } from "@/lib/utils";

export function ProjectFilters() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.tags.includes(activeFilter));
  }, [activeFilter]);

  return (
    <div>
      <div
        className="mb-8 flex flex-wrap gap-2"
        role="list"
        aria-label="Project filters"
      >
        {["All", ...projectFilters].map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={cn(
              "focus-ring min-h-10 rounded-full border px-4 text-sm font-medium transition",
              activeFilter === filter
                ? "border-white/80 bg-white text-ink"
                : "border-white/10 bg-surface text-muted hover:border-white/25 hover:text-white",
            )}
            aria-pressed={activeFilter === filter}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="grid gap-6">
        {visibleProjects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            priority={index === 0}
          />
        ))}
      </div>
    </div>
  );
}
