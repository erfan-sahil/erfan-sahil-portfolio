import { personal } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="home">
      <div className="card fade-up p-6 sm:p-8">
        <h1 className="fade-up-1 text-[2rem] font-bold tracking-tight sm:text-[2.4rem]">
          Hi, I&apos;m <span className="text-accent">{personal.brand}</span>
        </h1>

        <p className="fade-up-2 mt-3 text-[14px] text-muted">
          <span className="text-ink">{personal.title}</span>
          <span className="mx-2 text-accent">·</span>
          {personal.location}
          <span className="mx-2 text-accent">·</span>
          Full-Stack
        </p>

        <p className="fade-up-2 mt-5 max-w-2xl text-[15px] leading-relaxed text-muted">
          {personal.bio}
        </p>

        <div className="fade-up-3 mt-7 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex h-10 items-center rounded-full bg-accent px-5 text-[13px] font-semibold text-bg transition-opacity hover:opacity-90"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex h-10 items-center rounded-full bg-soft px-5 text-[13px] font-medium text-ink transition-colors hover:text-accent"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
