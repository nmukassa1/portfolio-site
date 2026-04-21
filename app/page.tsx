import { Header } from "@/components/header";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <div className="min-h-screen px-6 py-12 md:px-12 md:py-0 lg:px-24">
      <div className="mx-auto max-w-screen-xl lg:flex lg:justify-between lg:gap-4">
        <Header />
        <main className="pt-9 lg:w-1/2 lg:py-24">
          <About />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
}
