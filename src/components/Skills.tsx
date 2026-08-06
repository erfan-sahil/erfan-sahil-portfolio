import { skills } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function Skills() {
  return (
    <section id="skills">
      <Reveal>
        <div className="card p-6 sm:p-8">
          <SectionLabel>Skills</SectionLabel>

          <ul className="skills-flow mt-2">
            {skills.map((skill) => (
              <li key={skill} className="chip">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
