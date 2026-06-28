import type { Metadata } from "next";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { SectionHeader } from "@/components/SectionHeader";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Experience",
  description:
    "Experience timeline for Guilherme Fath across product engineering, technical support and marketing operations.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Experience"
          title="Engineering shaped by real service work."
          description="Before building products, I worked close to users, support requests, sales teams and day-to-day business problems."
        />
        <ExperienceTimeline />
      </div>
    </section>
  );
}
