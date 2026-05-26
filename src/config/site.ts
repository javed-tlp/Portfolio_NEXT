export const siteConfig = {
  name: "Javed Saifi",
  role: "Full Stack Developer",
  tagline:
    "Full stack developer shipping Angular & Node apps in production—with a QA background in Selenium & Cypress. I focus on clear APIs, solid UI, and code your team can extend with confidence.",
  email: "saifijaved616@gmail.com",
  phone: "+91-8527019853",
  location: "Faridabad, Haryana, India",
  resumePath: "/resume.pdf",
  web3formsAccessKey:
    process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ??
    "a8f92459-6c6f-4139-856f-a63b451fe731",
  social: {
    twitter: "https://x.com/javedsaifi2808",
    linkedin: "https://www.linkedin.com/in/javed-saifi-b9660418a/",
    github: "https://github.com/javed-tlp",
    instagram: "https://www.instagram.com/javed_saifi_0786/",
  },
} as const;

export type NavItem = { href: string; label: string; sectionId: string };

export const mainNav: NavItem[] = [
  { href: "/#top", label: "Home", sectionId: "top" },
  { href: "/#highlights", label: "Overview", sectionId: "highlights" },
  { href: "/#about", label: "About", sectionId: "about" },
  { href: "/#experience", label: "Experience", sectionId: "experience" },
  { href: "/#projects", label: "Projects", sectionId: "projects" },
  { href: "/#skills", label: "Skills", sectionId: "skills" },
  { href: "/#education", label: "Education", sectionId: "education" },
  { href: "/#tools", label: "Tools", sectionId: "tools" },
  { href: "/#contact", label: "Contact", sectionId: "contact" },
];

/** Quick numbers shown at the top — easy to scan for recruiters. */
export const atAGlanceStats = [
  { label: "Years in tech roles", value: "2+", hint: "Internship + current role" },
  { label: "Live SFA products", value: "2", hint: "Enterprise field-sales systems" },
  { label: "Stack focus", value: "MERN+", hint: "JS, Node, Angular, SQL" },
  { label: "Open to", value: "Remote / Hybrid", hint: "Full-time & contract" },
] as const;

export const valuePillars = [
  {
    title: "Clear communication",
    text: "I document decisions, ask early when requirements are fuzzy, and keep stakeholders in the loop so there are fewer surprises at release.",
  },
  {
    title: "Ownership end-to-end",
    text: "From API contracts to UI polish, I follow features through testing and production—fixing what breaks and improving what ships.",
  },
  {
    title: "Continuous learning",
    text: "I stay curious about tooling, patterns, and performance—so the next feature is a bit cleaner than the last.",
  },
] as const;

export const aboutBlocks = [
  {
    title: "Professional summary",
    details:
      "I’m a full stack–oriented developer with hands-on experience shipping business web apps (Angular + Node) and automating quality with Selenium & Cypress. I care about readable code, sensible structure, and shipping on time.",
  },
  {
    title: "What energizes me",
    details:
      "Solving real workflow problems for users, collaborating in code review, and learning better ways to structure APIs and front-ends as products grow.",
  },
  {
    title: "Working style",
    details:
      "I prefer small, reviewable changes, clear tickets, and honest estimates. I’m comfortable asking questions and pairing when a problem is stuck.",
  },
  {
    title: "What I’m looking for",
    details:
      "A team that values quality and growth—where I can own features, learn from seniors, and contribute to a product people rely on every day.",
  },
] as const;

export type ExperienceEntry = {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  summary: string;
  highlights: readonly string[];
  tech: readonly string[];
};

export const experienceItems: readonly ExperienceEntry[] = [
  {
    id: "lpit",
    role: "Full Stack Developer",
    company: "Abacus Desk IT Solutions",
    location: "India",
    period: "Jan 2025 — Present",
    current: true,
    summary:
      "Building and maintaining customer-facing web applications for loyalty and sales programmes—working across Angular front-ends and Node.js backends with a focus on stable releases and maintainable code.",
    highlights: [
      "Developed and enhanced Angular modules for business workflows used in production.",
      "Implemented server-side logic and REST-style APIs with Node.js & Express for integrations.",
      "Connected UI to backend services and databases, handling data flow and error states.",
      "Collaborated with senior developers on code reviews, bug fixes, and feature planning.",
      "Improved reliability by debugging production issues and tightening edge-case handling.",
    ],
    tech: ["Angular", "JavaScript", "TypeScript", "Node.js", "Express", "REST APIs", "Git"],
  },
  {
    id: "lpit",
    role: "Nodejs Developer",
    company: "Loyalty Partner IT Solutions",
    location: "India",
    period: "Dec 2023 — Dec 2024",
    current: false,
    summary:
      "Building and maintaining customer-facing web applications for loyalty and sales programmes—working across Angular front-ends and Node.js backends with a focus on stable releases and maintainable code.",
    highlights: [
      "Developed and enhanced Angular modules for business workflows used in production.",
      "Implemented server-side logic and REST-style APIs with Node.js & Express for integrations.",
      "Connected UI to backend services and databases, handling data flow and error states.",
      "Collaborated with senior developers on code reviews, bug fixes, and feature planning.",
      "Improved reliability by debugging production issues and tightening edge-case handling.",
    ],
    tech: ["Angular", "JavaScript", "TypeScript", "Node.js", "Express", "REST APIs", "Git"],
  },
  {
    id: "vvnt",
    role: "Web Automation Testing Intern",
    company: "VVnT SeQuor",
    location: "Noida, India",
    period: "Jan 2022 — Jun 2022",
    current: false,
    summary:
      "Six-month internship focused on test automation—building and maintaining Selenium & Cypress suites, keeping frameworks compatible with new builds, and feeding quality signals back to developers.",
    highlights: [
      "Authored and maintained automated UI tests with Selenium and Cypress.",
      "Updated test harnesses when application versions or flows changed.",
      "Triaged failures, logged defects with clear repro steps, and verified fixes.",
      "Worked closely with devs to improve selectors, stability, and CI feedback.",
      "Contributed to reporting so teams could see trends in failures over time.",
    ],
    tech: ["Selenium", "Cypress", "JavaScript", "Test reporting", "Git"],
  },
] as const;

export type ProjectEntry = {
  id: string;
  title: string;
  client: string;
  period: string;
  tagline: string;
  context: string;
  contribution: string;
  outcomes: readonly string[];
  tech: readonly string[];
  accent: "emerald" | "cyan" | "violet";
};

export const projectItems: readonly ProjectEntry[] = [
  {
    id: "sfa-simollbath",
    title: "Sales Force Automation (SFA) Platform",
    client: "SimollBath",
    period: "Production deployment",
    tagline: "End-to-end tooling for field sales teams and operations.",
    context:
      "Dedicated SFA solution for managing field activity, orders, and reporting. The product needed reliable data capture offline-friendly flows, and exports for business users.",
    contribution:
      "Worked on Angular features for reps and managers, Node.js/Express services for APIs, and XLSX-based import/export so operations could move data without friction.",
    outcomes: [
      "Streamlined how sales data moved between the app and spreadsheets for audits.",
      "Reduced manual rework by standardizing flows for recurring field tasks.",
      "Supported iterative releases as business rules evolved.",
    ],
    tech: ["Angular", "Node.js", "Express.js", "XLSX", "REST APIs", "MongoDB / SQL"],
    accent: "emerald",
  },
  {
    id: "sfa-marmo",
    title: "Sales Force Authhhhomation (SFA) Platform",
    client: "Marmo Solutions",
    period: "Production deployment",
    tagline: "Parallel SFA rollout with similar enterprise constraints.",
    context:
      "Another dedicated SFA engagement with comparable architecture—field workflows, server-side validation, and reporting expectations from stakeholders.",
    contribution:
      "Contributed to feature delivery on the Angular client and Express APIs; helped align exports and validation rules with operations.",
    outcomes: [
      "Consistent patterns with the broader SFA codebase—easier onboarding for the team.",
      "Faster turnaround on change requests through reusable service patterns.",
      "Stable handoffs between front-end forms and backend validation.",
    ],
    tech: ["Angular", "Node.js", "Express.js", "XLSX", "REST APIs"],
    accent: "cyan",
  },
  {
    id: "portfolio-site",
    title: "Personal portfolio (this site)",
    client: "Personal",
    period: "",
    tagline: "Fast, accessible marketing page with a single-scroll story.",
    context:
      "A Next.js portfolio to present experience, projects, and contact in one place—optimized for recruiters and hiring managers skimming on mobile or desktop.",
    contribution:
      "Designed the layout, content hierarchy, and scroll interactions; implemented forms, SEO-friendly metadata, and responsive navigation.",
    outcomes: [
      "Single-page flow so every section is reachable in one scroll or jump link.",
      "Clear separation between experience depth and project case-style detail.",
      "Easy to extend—content lives in one config module.",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    accent: "violet",
  },
] as const;

export const educationItems = [
  {
    meta: "2018 — 2022",
    title: "B.Tech — Computer Science & Engineering",
    details: "YMCA University of Science and Technology, Faridabad",
    extra:
      "Coursework: data structures, algorithms, DBMS, OOP, web technologies, software engineering fundamentals.",
  },
  {
    meta: "2018",
    title: "Senior Secondary (Non-medical)",
    details: "Shanti Niketan Public School",
    extra: "Physics, Chemistry, Mathematics — strong quantitative foundation.",
  },
] as const;

export const skillCategories = [
  {
    name: "Languages & runtime",
    items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Node.js"],
  },
  {
    name: "Frameworks & APIs",
    items: ["Angular", "Express.js", "REST APIs", "JWT", "JSON"],
  },
  {
    name: "Data & persistence",
    items: ["MongoDB", "MySQL", "Schema design basics", "Query tuning basics"],
  },
  {
    name: "Quality & delivery",
    items: ["Git & GitHub", "Selenium", "Cypress", "NPM", "Code review", "Debugging"],
  },
] as const;

export const tools = [
  "VS Code",
  "PuTTY",
  "FileZilla",
  "Postman",
  "DBeaver",
] as const;
