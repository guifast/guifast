export type ProjectSlug =
  "crm-by-fatek" | "revello" | "imob-agents" | "strong-body-rewards";

export type DiagramKind = "architecture" | "flow" | "roles";

export type Project = {
  slug: ProjectSlug;
  name: string;
  category: string;
  shortCategory: string;
  summary: string;
  hero: string;
  url: string;
  status: "Production" | "Production / Beta";
  stack: string[];
  tags: string[];
  privateSource: boolean;
  cover: string;
  overview: string[];
  businessProblem: string;
  productApproach: string;
  role: string;
  capabilities: string[];
  architecture: {
    kind: DiagramKind;
    nodes: string[];
  };
  technicalDecisions: string[];
  challenges: string[];
  production: string;
  learned: string;
};

export const projects: Project[] = [
  {
    slug: "crm-by-fatek",
    name: "CRM by Fatek",
    category: "Multi-tenant SaaS · CRM · ERP · AI",
    shortCategory: "Business Management and Automation",
    summary:
      "A multi-tenant SaaS product for CRM, ERP, finance, inventory, customer communication, e-commerce operations and automation.",
    hero: "An integrated business operating system for sales, operations and AI automation.",
    url: "https://crm.fatek.solutions/",
    status: "Production",
    stack: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Prisma", "AWS"],
    tags: ["SaaS", "AI", "CRM", "Integrations"],
    privateSource: true,
    cover: "/projects/crm-by-fatek/cover-executive.png",
    overview: [
      "CRM by Fatek brings the day-to-day operation into one workspace: pipeline, customers, proposals, inbox, stock, finance and automation.",
      "The product was built for small and mid-sized teams that outgrow spreadsheets and scattered tools, but still need something practical enough to use every day.",
    ],
    businessProblem:
      "Small and medium-sized companies often run sales, finance and customer communication in different places. Context gets lost, follow-ups depend on memory and managers only see the business after the problem has already happened.",
    productApproach:
      "The product keeps customer, product, financial and communication data connected while protecting each tenant boundary from the database model up.",
    role: "I worked on product definition, UX flows, frontend, backend, database modeling, API integrations, deployment and infrastructure.",
    capabilities: [
      "visual sales pipelines",
      "leads and customers",
      "tasks and activities",
      "proposals",
      "omnichannel inbox",
      "campaigns",
      "financial management",
      "ERP and inventory",
      "product and supplier management",
      "automations",
      "AI agents",
      "Bastião AI copilot",
      "operational dashboards",
      "internal e-commerce operations",
      "payment integration",
      "shipping integration with Melhor Envio",
    ],
    architecture: {
      kind: "architecture",
      nodes: [
        "Users",
        "Next.js Web Application",
        "Authentication + Tenant Isolation",
        "NestJS API",
        "WebSockets + Background Jobs",
        "PostgreSQL / Prisma",
        "External Services: WhatsApp, AI APIs, Email, Payments, Shipping",
        "AWS Infrastructure + Monitoring",
      ],
    },
    technicalDecisions: [
      "TypeScript end-to-end across product surfaces.",
      "Frontend and backend separation with shared domain contracts where useful.",
      "Multi-tenant data isolation modeled as a first-class concern.",
      "Webhooks and asynchronous jobs for third-party services.",
      "Operational views by business profile instead of one rigid workflow.",
      "Centralized validation for critical business rules.",
    ],
    challenges: [
      "Unifying different business modules.",
      "Maintaining tenant isolation.",
      "Keeping flows flexible without making the product vague.",
      "Dealing with third-party API failures.",
      "Balancing product breadth with interface clarity.",
      "Supporting product and service businesses in the same platform.",
    ],
    production:
      "The product runs as a SaaS with hosted web, API, database and external integrations in place.",
    learned:
      "Broad business systems need disciplined boundaries: shared data where it helps operations, isolated contexts where it protects clarity.",
  },
  {
    slug: "revello",
    name: "Revello",
    category: "Vertical SaaS · Fitness · AI Agents",
    shortCategory: "Gym Operations ERP",
    summary:
      "A vertical SaaS product for gym operations, billing, retention, churn risk, check-ins, WhatsApp communication and assisted operational agents.",
    hero: "An ERP for gyms that connects billing, retention and daily operations.",
    url: "https://revello.tech/",
    status: "Production / Beta",
    stack: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Vitest",
    ],
    tags: ["SaaS", "AI", "Vertical Software", "Integrations"],
    privateSource: true,
    cover: "/projects/revello/cover.png",
    overview: [
      "Revello gives gym owners a clearer view of members, billing, churn risk and WhatsApp follow-up without forcing them to manage everything manually.",
    ],
    businessProblem:
      "Gym managers spend too much time chasing payments, checking inactive members and coordinating WhatsApp messages by hand. By the time churn becomes obvious, the member is usually already gone.",
    productApproach:
      "The product joins billing, member activity and messaging so routine follow-ups can be automated while sensitive actions stay reviewable and logged.",
    role: "I worked on product architecture, domain modeling, web interfaces, APIs, tests and integrations for the gym operations model.",
    capabilities: [
      "member management",
      "plans",
      "billing",
      "PIX, boleto and card payment paths",
      "payment webhooks",
      "check-ins",
      "attendance monitoring",
      "churn-risk detection",
      "inactive-member recovery",
      "WhatsApp agents",
      "scheduling and reminders",
      "MRR and retention indicators",
      "multi-location management",
      "operational logs",
      "human approval for sensitive actions",
      "API and webhooks",
    ],
    architecture: {
      kind: "architecture",
      nodes: [
        "Next.js Web",
        "NestJS API",
        "Shared Domain Packages",
        "PostgreSQL + Prisma",
        "AI Core",
        "Billing Module",
        "Messaging Services",
        "Monitoring and Analytics",
      ],
    },
    technicalDecisions: [
      "TypeScript monorepo for shared product language.",
      "Domain packages for reusable gym operations concepts.",
      "Payment events handled through explicit billing states.",
      "Human approval on sensitive automated actions.",
      "Operational logs for auditability.",
      "Vitest coverage around business-critical logic.",
    ],
    challenges: [
      "Translating gym operations into reusable domain models.",
      "Handling billing events safely.",
      "Detecting operational risk signals.",
      "Combining automation with human approval.",
      "Maintaining auditability.",
      "Supporting multiple units.",
    ],
    production:
      "The product is structured for beta and production use with observability, tests and controlled automation paths.",
    learned:
      "Vertical SaaS works best when generic software patterns are shaped around the language and edge cases of the operation.",
  },
  {
    slug: "imob-agents",
    name: "Imob Agents",
    category: "Vertical SaaS · Real Estate · WhatsApp AI",
    shortCategory: "Portfolio Operations for Real Estate Agencies",
    summary:
      "A vertical SaaS product that uses WhatsApp conversations to update property portfolios, structure owner replies and create prioritized tasks for agents.",
    hero: "Portfolio operations for real estate teams that need cleaner data.",
    url: "https://imobagents.com.br/",
    status: "Production / Beta",
    stack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "OpenAI",
      "WhatsApp API",
    ],
    tags: ["SaaS", "AI", "Vertical Software", "Integrations"],
    privateSource: true,
    cover: "/projects/imob-agents/cover.png",
    overview: [
      "Imob Agents helps real estate teams keep large property portfolios current by talking to owners through WhatsApp and turning replies into structured updates.",
    ],
    businessProblem:
      "Real estate databases go stale fast. A property may be sold, rented, repriced or unavailable, but agents only discover it after spending time on manual owner follow-up.",
    productApproach:
      "The system contacts owners, interprets replies, updates property records and creates a task when a human agent needs to step in.",
    role: "I worked on product flow, tenant modeling, data extraction, owner communication, dashboards and integration architecture.",
    capabilities: [
      "multi-tenant workspaces",
      "CSV import",
      "manual records",
      "property owners",
      "property records",
      "outreach campaigns",
      "WhatsApp templates",
      "conversation tracking",
      "AI extraction into structured data",
      "status updates",
      "opportunity detection",
      "prioritized task generation",
      "agent assignment",
      "dashboards and reports",
      "opt-out handling",
      "human handoff",
    ],
    architecture: {
      kind: "flow",
      nodes: [
        "Import properties and owners",
        "Start WhatsApp outreach",
        "Process owner responses with AI",
        "Update structured CRM data",
        "Detect commercial opportunities",
        "Assign prioritized tasks to agents",
      ],
    },
    technicalDecisions: [
      "Structured extraction with reviewable outputs.",
      "Conversation context preserved alongside property records.",
      "Tenant isolation across portfolios, owners and tasks.",
      "CSV import paths for operational onboarding.",
      "Human handoff where ambiguity or opportunity requires judgment.",
      "Zod validation around data moving from unstructured messages to CRM records.",
    ],
    challenges: [
      "Converting unstructured messages into reliable data.",
      "Handling ambiguous owner responses.",
      "Preserving conversation context.",
      "Creating safe human handoff.",
      "Processing large portfolio imports.",
      "Enforcing tenant isolation.",
      "Maintaining auditability.",
    ],
    production:
      "The product is prepared for beta and production use with messaging, extraction and human review paths.",
    learned:
      "AI features need product guardrails: context, validation, audit trails and a clean moment for humans to take over.",
  },
  {
    slug: "strong-body-rewards",
    name: "Strong Body Rewards",
    category: "B2B2C Platform · Loyalty · Fitness",
    shortCategory: "Loyalty Ecosystem for the Fitness Industry",
    summary:
      "A gamified loyalty platform connecting a supplement brand, partner gyms and end customers through purchases, validations, levels, rewards and partner-specific operational dashboards.",
    hero: "A loyalty ecosystem connecting a supplement brand, partner gyms and customers.",
    url: "https://club.sbsupplements.com.br/",
    status: "Production",
    stack: [
      "React",
      "TypeScript",
      "TanStack",
      "Supabase",
      "Cloudflare",
      "Vitest",
    ],
    tags: ["Vertical Software", "Integrations"],
    privateSource: true,
    cover: "/projects/strong-body-rewards/cover.png",
    overview: [
      "Strong Body Rewards connects customers, gyms and the brand through purchases, validations, points, levels, rewards and partner activity.",
    ],
    businessProblem:
      "The brand needed a way to make loyalty measurable across customers and partner gyms, instead of relying only on offline relationships and manual validation.",
    productApproach:
      "The product separates customer, partner and admin journeys while keeping purchase validation, reward rules and reporting tied to the same source of truth.",
    role: "I worked on product flows, frontend architecture, Supabase data modeling, role-based access, validation, testing and deployment.",
    capabilities: [
      "customer registration",
      "partner-specific QR codes",
      "gym association",
      "purchase registration",
      "purchase validation",
      "social post submission",
      "content validation",
      "points",
      "levels",
      "rewards",
      "referrals",
      "draws",
      "catalog",
      "partner dashboards",
      "customer dashboards",
      "administrator journeys",
      "role-based permissions",
      "operational reporting",
    ],
    architecture: {
      kind: "roles",
      nodes: [
        "Customer",
        "Partner Gym",
        "Brand Administrator",
        "Internal Operations",
      ],
    },
    technicalDecisions: [
      "TanStack Router and Query for typed navigation and server-state flows.",
      "Supabase for auth-adjacent data flows, relational storage and operational access control.",
      "Role-specific dashboards rather than a single overloaded interface.",
      "Zod and React Hook Form for validation-heavy product flows.",
      "Vitest coverage around rules and critical interface behavior.",
      "Cloudflare deployment path for a fast public product experience.",
    ],
    challenges: [
      "Multiple user journeys.",
      "Complex and evolving loyalty rules.",
      "Purchase and content validation.",
      "Role-based access.",
      "Partner-specific data.",
      "Keeping rules understandable to customers.",
      "Aligning product behavior with offline gym operations.",
    ],
    production:
      "The loyalty product is live with customer, partner and administrator journeys.",
    learned:
      "B2B2C products need each role to feel first-class while sharing a consistent operational truth underneath.",
  },
];

export const projectFilters = [
  "SaaS",
  "AI",
  "CRM",
  "Vertical Software",
  "Integrations",
] as const;

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
