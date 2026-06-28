import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/content/projects";

describe("ProjectCard", () => {
  it("renders project links and status", () => {
    const project = projects[0];

    render(<ProjectCard project={project} />);

    expect(
      screen.getByRole("heading", { name: project.name }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /read case/i })).toHaveAttribute(
      "href",
      `/projects/${project.slug}`,
    );
    expect(screen.getByRole("link", { name: /live product/i })).toHaveAttribute(
      "href",
      project.url,
    );
    expect(screen.getByText(project.status)).toBeInTheDocument();
  });
});
