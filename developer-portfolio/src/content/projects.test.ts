import { describe, expect, it } from "vitest";
import { getProject, projects } from "@/content/projects";

describe("projects content", () => {
  it("contains the four required projects with live URLs", () => {
    expect(projects.map((project) => project.slug)).toEqual([
      "crm-by-fatek",
      "revello",
      "imob-agents",
      "strong-body-rewards",
    ]);

    for (const project of projects) {
      expect(project.url).toMatch(/^https:\/\//);
      expect(project.summary).not.toMatch(/lorem/i);
      expect(project.stack.length).toBeGreaterThanOrEqual(5);
    }
  });

  it("finds a project by slug", () => {
    expect(getProject("revello")?.name).toBe("Revello");
    expect(getProject("missing")).toBeUndefined();
  });
});
