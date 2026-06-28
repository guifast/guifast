import type { Metadata } from "next";
import { ContactLinks } from "@/components/ContactLinks";
import { profile } from "@/content/profile";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Contact Guilherme Fath for remote full-stack, product engineering and software engineering opportunities.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="overflow-hidden">
      <div className="container py-12 md:py-18 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow mb-5">Contact</p>
            <h1 className="text-balance font-display text-[clamp(3rem,7vw,6.2rem)] font-semibold leading-[0.92] tracking-normal text-white">
              Let’s talk if the work needs taste and execution.
            </h1>
            <p className="mt-7 max-w-xl text-pretty text-xl leading-9 text-muted">
              I am open to remote roles with international teams, especially
              where product judgment and full-stack ownership matter.
            </p>
            <div className="mt-9 grid gap-4 border-t border-border pt-6 sm:grid-cols-2 lg:grid-cols-1">
              <div>
                <p className="eyebrow mb-2">Location</p>
                <p className="font-semibold text-white">{profile.location}</p>
              </div>
              <div>
                <p className="eyebrow mb-2">Timezone</p>
                <p className="font-semibold text-white">{profile.timezone}</p>
              </div>
            </div>
          </div>

          <ContactLinks />
        </div>
      </div>
    </section>
  );
}
