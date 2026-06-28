import type { Metadata } from "next";
import { profile, siteUrl } from "@/content/profile";

export const defaultTitle = "Guilherme Fath | Full-Stack Product Engineer";
export const defaultDescription =
  "Full-stack product engineer building SaaS products, business systems and AI integrations with TypeScript, Next.js, NestJS, PostgreSQL and AWS.";

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function createMetadata({
  title,
  description = defaultDescription,
  path = "/",
  image = "/og-image.png",
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
} = {}): Metadata {
  const pageTitle = title ? `${title} | ${profile.name}` : defaultTitle;

  return {
    title: pageTitle,
    description,
    alternates: {
      canonical: absoluteUrl(path),
    },
    openGraph: {
      title: pageTitle,
      description,
      url: absoluteUrl(path),
      siteName: profile.name,
      images: [{ url: absoluteUrl(image), width: 1200, height: 630 }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [absoluteUrl(image)],
    },
  };
}
