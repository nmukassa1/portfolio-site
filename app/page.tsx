import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen px-6 md:px-12 lg:px-24 max-w-4xl mx-auto">
      <Hero />
      <Projects />
      <Contact />
      <footer className="py-8 border-t border-border text-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Nyah Mukassa. All rights reserved.
        </p>
      </footer>
    </main>
  )
}
