import { personal } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { SocialLinks } from "./SocialLinks";

export function Contact() {
  return (
    <section id="contact">
      <Reveal>
        <div className="card p-6 sm:p-8">
          <SectionLabel>Contact</SectionLabel>

          <p className="text-[15px] leading-snug text-muted">
            Based in {personal.location}.{" "}
            <span className="text-accent">Let&apos;s build</span> something
            useful.
          </p>

          {personal.email && (
            <a
              href={`mailto:${personal.email}`}
              className="mt-4 inline-block text-[14px] text-ink transition-colors hover:text-accent"
            >
              {personal.email}
            </a>
          )}

          <SocialLinks className="mt-5" />
        </div>
      </Reveal>
    </section>
  );
}
