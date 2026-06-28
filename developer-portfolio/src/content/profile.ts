export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const profile = {
  name: "Guilherme Fath",
  title: "Full-Stack Product Engineer",
  positioning:
    "Full-stack product engineer building SaaS products, business systems and AI integrations that hold up in daily use.",
  location: "Lajeado, Brazil",
  timezone: "America/Sao_Paulo · Americas-friendly time zones",
  availability: "Open to remote international opportunities",
  email: "fathguilherme@gmail.com",
  phone: {
    display: "+55 54 99328-5257",
    e164: "+5554993285257",
    whatsapp: "5554993285257",
  },
  github: "https://github.com/guifast/",
  linkedin: "https://www.linkedin.com/in/guilherme-fath/",
  resumeUrl: "/guilherme-fath-resume.pdf",
  photo: "/profile/guilherme-fath.jpg",
} as const;

export const navigation = [
  { label: "Work", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
] as const;

export const proofPoints = [
  "5+ real products shipped",
  "2 SaaS products live",
  "Product to infrastructure",
] as const;
