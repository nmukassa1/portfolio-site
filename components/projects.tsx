import { ProjectCard } from "./project-card"

const projects = [
  {
    title: "DupeCleaner",
    description:
      "A tool to find and remove duplicate files from your system. Features an intuitive interface for scanning directories and safely cleaning up duplicate files.",
    tags: ["React", "Node.js", "File System"],
    liveUrl: "https://duplicate-file-cleaner.vercel.app/",
  },
  {
    title: "Movie Gather",
    description:
      "A movie directory app for discovering and exploring films. Browse through a curated collection with detailed information about each title.",
    tags: ["React", "API Integration", "Search"],
    liveUrl: "https://find-new-movies.vercel.app/",
  },
  {
    title: "Designspo",
    description:
      "A Chrome extension and dashboard for capturing and organizing design inspirations. Save screenshots and manage your creative references in one place.",
    tags: ["Chrome Extension", "Next.js", "Dashboard"],
    liveUrl: "https://designspo-webpage.vercel.app/",
  },
]

export function Projects() {
  return (
    <section className="py-16 text-center">
      <h2 className="text-2xl font-bold text-foreground mb-8">Projects</h2>
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}
