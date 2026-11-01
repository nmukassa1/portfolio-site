import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "Designspo",
    description: "A library for saved design references.",
    image: "/designspo-img.png",
  },
  {
    id: 2,
    title: "Stream",
    description: "A home screen for films and trailers.",
    image: "/movie-img.png",
  },
  {
    id: 3,
    title: "Stream",
    description: "A home screen for films and trailers.",
    image: "/movie-img.png",
  },
];

function ProjectCardWrapper() {
  return (
    <section aria-label="Projects" className="pb-6 md:pb-8">
      <h2 className="px-6 text-xs font-medium tracking-[0.16em] text-neutral-500 uppercase md:px-10">
        Projects
      </h2>
      <div className="project-scroller mt-4 flex flex-col gap-4 px-6 md:snap-x md:snap-mandatory md:flex-row md:overflow-x-auto md:overflow-y-hidden md:scroll-ps-10 md:px-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectCardWrapper;
