import Image from "next/image";
import { projects } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

function ArrowIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M7 17L17 7"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M9 7h8v8"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type ProjectImage = (typeof projects)[number]["image"];

const getHost = (url: string) => new URL(url).host;

const CORNER_MARKS = [
  "top-1.5 left-1.5 rounded-tl-md border-t border-l group-hover:top-2.5 group-hover:left-2.5",
  "top-1.5 right-1.5 rounded-tr-md border-t border-r group-hover:top-2.5 group-hover:right-2.5",
  "bottom-1.5 left-1.5 rounded-bl-md border-b border-l group-hover:bottom-2.5 group-hover:left-2.5",
  "bottom-1.5 right-1.5 rounded-br-md border-b border-r group-hover:bottom-2.5 group-hover:right-2.5",
];

/** Viewfinder-style corner brackets — structural accent, no pattern. */
function CornerMarks() {
  return CORNER_MARKS.map((position) => (
    <span
      key={position}
      aria-hidden
      className={`absolute size-2.5 border-white/25 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-muted motion-reduce:transition-none ${position}`}
    />
  ));
}

function BrowserFrame({ host, image }: { host: string; image: ProjectImage }) {
  return (
    <div className="relative shrink-0 overflow-hidden rounded-lg bg-bg p-4 sm:w-[46%] sm:p-5">
      <CornerMarks />
      <div className="relative overflow-hidden rounded-md border border-white/10 bg-[#0e0e0e] shadow-[0_12px_28px_-10px_rgba(0,0,0,0.9)]">
        <div className="flex items-center gap-1.5 border-b border-white/[0.08] bg-white/[0.05] px-2.5 py-1.5">
          <span className="size-1.5 rounded-full bg-[#ff5f57]/60 transition-colors group-hover:bg-[#ff5f57]" />
          <span className="size-1.5 rounded-full bg-[#febc2e]/60 transition-colors group-hover:bg-[#febc2e]" />
          <span className="size-1.5 rounded-full bg-[#28c840]/60 transition-colors group-hover:bg-[#28c840]" />
          <span className="ml-1.5 min-w-0 flex-1 truncate rounded bg-black/40 px-2 py-0.5 font-mono text-[9px] tracking-tight text-muted">
            {host}
          </span>
        </div>

        <div className="aspect-[16/9] overflow-hidden">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(min-width: 640px) 280px, calc(100vw - 8rem)"
            className="h-full w-full origin-center scale-[1.06] object-cover object-top transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-100"
          />
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects">
      <Reveal>
        <div className="card p-6 sm:p-8">
          <SectionLabel>Projects</SectionLabel>

          <p className="text-[15px] leading-snug text-muted sm:text-base">
            I&apos;ve shipped <span className="text-accent">live products</span>{" "}
            end-to-end
          </p>

          <ul className="mt-5 flex flex-col gap-3">
            {projects.map((project) => (
              <li key={project.id}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-block group flex flex-col gap-3 p-2.5 sm:flex-row sm:gap-4"
                >
                  <BrowserFrame
                    host={getHost(project.link)}
                    image={project.image}
                  />

                  <div className="flex min-w-0 flex-1 flex-col px-1 pb-1 sm:py-1.5 sm:pr-2">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-[15px] font-semibold tracking-tight text-ink transition-colors group-hover:text-accent">
                        {project.name}
                      </h3>
                      <span className="text-muted transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent">
                        <ArrowIcon />
                      </span>
                    </div>

                    <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
                      {project.description}
                    </p>

                    <ul className="mt-auto flex flex-wrap gap-1.5 pt-3">
                      {project.tech.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2 py-0.5 font-mono text-[10.5px] tracking-tight text-muted"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
