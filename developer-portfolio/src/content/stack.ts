export const coreStack = [
  { category: "Languages", items: ["TypeScript", "JavaScript", "SQL"] },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "TanStack"],
  },
  {
    category: "Backend",
    items: ["Node.js", "NestJS", "REST APIs", "WebSockets"],
  },
  { category: "Data", items: ["PostgreSQL", "Prisma", "Supabase", "Neon"] },
  {
    category: "Infrastructure",
    items: ["AWS EC2", "Nginx", "Cloudflare", "GitHub Actions"],
  },
  {
    category: "Integrations",
    items: ["OpenAI", "WhatsApp Cloud API", "Stripe", "Melhor Envio", "Resend"],
  },
  {
    category: "Quality",
    items: ["Vitest", "Jest", "ESLint", "TypeScript", "Sentry"],
  },
] as const;

export const engineeringScope = [
  {
    title: "Product Engineering",
    description:
      "Taking an unclear business problem and turning it into product behavior people can actually use.",
  },
  {
    title: "Frontend",
    description:
      "Responsive interfaces, dashboards, forms and product surfaces with clear states and readable hierarchy.",
  },
  {
    title: "Backend",
    description:
      "REST APIs, authentication, authorization, background jobs, webhooks and business rules.",
  },
  {
    title: "Data",
    description:
      "Relational modeling, PostgreSQL, Prisma, migrations, data integrity and reporting that managers can trust.",
  },
  {
    title: "Infrastructure and Integrations",
    description:
      "Deployment, Nginx, SSL, monitoring, payments, shipping, WhatsApp and AI APIs.",
  },
] as const;
