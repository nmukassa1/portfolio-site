import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "DupeCleaner",
    description:
      "A duplicate file removal tool that helps users identify and clean up redundant files, improving storage efficiency and organization.",
    url: "https://duplicate-file-cleaner.vercel.app/",
    tags: ["React", "Next.js", "File API"],
  },
  {
    title: "Movie Gather",
    description:
      "A movie directory app for discovering and exploring films. Browse through a curated collection of movies with detailed information and ratings.",
    url: "https://find-new-movies.vercel.app/",
    tags: ["React", "Next.js", "API Integration"],
  },
  {
    title: "Designspo",
    description:
      "A Chrome extension and Next.js dashboard for capturing and managing design inspirations. Save, organize, and revisit design ideas with ease.",
    url: "https://designspo-webpage.vercel.app/",
    tags: ["Chrome Extension", "Next.js", "Dashboard"],
  },
]

export function Projects() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Projects
        </h2>
      </div>
      <ul className="group/list">
        {projects.map((project) => (
          <li key={project.title} className="mb-12">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
            >
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-secondary/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3 className="font-medium leading-snug text-foreground">
                  <span className="inline-flex items-baseline gap-1 group/link">
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                    <span>
                      {project.title}
                      <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
                    </span>
                  </span>
                </h3>
                <p className="mt-2 text-sm leading-normal text-muted-foreground">
                  {project.description}
                </p>
                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                  {project.tags.map((tag) => (
                    <li key={tag} className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium leading-5 text-primary">
                        {tag}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
