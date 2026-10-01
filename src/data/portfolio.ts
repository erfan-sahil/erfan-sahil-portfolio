export const personal = {
  fullName: "Erfanul Islam Sahil",
  brand: "Sahil",
  footerName: "Erfan Sahil",
  title: "Software Engineer",
  bio: "Passionate about crafting innovative web solutions with modern technologies. Specializing in full-stack development with Node.js and React.",
  location: "Bangladesh",
  email: "erfansahil20@gmail.com",
  phone: "",
  socials: {
    github: "https://github.com/erfan-sahil",
    linkedin: "https://www.linkedin.com/in/erfan-sahil-5615881a0/",
    facebook: "https://www.facebook.com/mderfanulislam.sahil.3/",
  },
} as const;

export const meta = {
  title: "Portfolio | Software Engineer",
  description:
    "Personal portfolio showcasing my software engineering projects and skills",
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export const experience = [
  {
    id: "initzone",
    company: "Initzone",
    role: "Frontend Engineer",
    period: "Sep 2025 — Present",
  },
  {
    id: "college-mastermind",
    company: "College Mastermind",
    role: "Frontend Engineer",
    period: "Dec 2024 — Mar 2025",
  },
] as const;

export const projects = [
  {
    id: "portulika",
    name: "Portulika",
    description:
      "Story writing platform in Bangladesh where users can write and publish stories like a book-writing experience.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Shadcn UI"],
    link: "https://portulika.com/",
  },
  {
    id: "nextask",
    name: "NexTask",
    description:
      "Project management platform with workspaces, projects, task assignment, real-time chat, and role-based access — built for focused teams.",
    tech: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Shadcn UI",
      "Express.js",
      "MongoDB",
      "Mongoose",
    ],
    link: "https://nextask-client.vercel.app/",
  },
] as const;

export const skills = [
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Mongoose",
  "PostgreSQL",
  "Prisma",
  "TypeScript",
  "TailwindCSS",
  "Git",
  "Docker",
  "Redis",
  "Nginx",
  "BullMQ",
  "Shadcn UI",
] as const;

export const achievements = [
  {
    year: "2025",
    title: "Champion",
    event: "UAP InnovateX 2025 Hackathon",
    location: "Dhaka, BD",
  },
  {
    year: "2025",
    title: "Runners Up",
    event: "MIST Inventious 4.1 Hackathon (Programming Hero × NEOFETCH)",
    location: "Dhaka, BD",
  },
  {
    year: "2025",
    title: "Champion",
    event: "NSU Tech Fest 2025 Hackathon (Programming Hero × WebXtreme)",
    location: "Dhaka, BD",
  },
  {
    year: "2024",
    title: "Top 9 Finalist",
    event: "SUST CSE Carnival 2024 Hackathon",
    location: "Sylhet, BD",
  },
  {
    year: "2023",
    title: "Champion",
    event: "DevFest AI Hackathon by Google Developer Group",
    location: "Sonargaon Cumilla, BD",
  },
] as const;
