import { experience } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function Experience() {
  return (
    <section id="experience">
      <Reveal>
        <div className="card p-6 sm:p-8">
          <SectionLabel>Experience</SectionLabel>

          <ul className="experience-list mt-2">
            {experience.map((item) => (
              <li key={item.id} className="experience-item">
                <div className="min-w-0">
                  <p className="experience-company">{item.company}</p>
                  <p className="experience-role">{item.role}</p>
                </div>
                <p className="experience-period">{item.period}</p>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
