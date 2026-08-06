import { projects } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

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

          <ul className="project-list mt-5">
            {projects.map((project) => (
              <li key={project.id}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <div className="project-top">
                    <h3 className="project-title">{project.name}</h3>
                    <span className="project-arrow" aria-hidden>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
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
                    </span>
                  </div>
                  <p className="project-desc">{project.description}</p>
                  <p className="project-tech">{project.tech.join(" · ")}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
