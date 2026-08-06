import { achievements } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function Achievements() {
  return (
    <section id="achievements">
      <Reveal>
        <div className="card p-6 sm:p-8">
          <SectionLabel>Awards</SectionLabel>

          <p className="text-[15px] leading-snug text-muted sm:text-base">
            Recognition for{" "}
            <span className="text-accent">innovation & excellence</span> in
            technology
          </p>

          <ul className="mt-6 space-y-2.5">
            {achievements.map((item) => (
              <li
                key={`${item.year}-${item.event}`}
                className="row-soft flex items-start justify-between gap-6 px-4 py-3.5"
              >
                <div className="min-w-0">
                  <p className="text-[15px] font-medium text-ink">
                    {item.title}
                  </p>
                  <p className="mt-1 text-[13px] leading-snug text-muted">
                    {item.event}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="font-mono text-[13px] text-accent">
                    {item.year}
                  </p>
                  <p className="mt-1 font-mono text-[11px] text-muted">
                    {item.location}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
