import { Achievements } from "@/components/Achievements";
import { CardRail } from "@/components/CardRail";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-4 sm:px-6">
        <CardRail>
          <Hero />
          <Skills />
          <Experience />
          <Projects />
          <Achievements />
          <Contact />
        </CardRail>
      </main>
      <Footer />
    </>
  );
}
