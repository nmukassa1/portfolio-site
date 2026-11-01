import type { RefObject } from "react";
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

function ProjectCardWrapper({
  trackRef,
}: {
  trackRef: RefObject<HTMLDivElement | null>;
}) {
  return (
    <section aria-label="Projects" className="pb-6 md:pb-8">
      <h2 className="px-6 text-xs font-medium tracking-[0.16em] text-neutral-500 uppercase md:px-10">
        Projects
      </h2>
      <div
        ref={trackRef}
        className="project-track project-scroller mt-4 flex w-full flex-col gap-4 px-6 md:w-max md:flex-row md:px-10"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectCardWrapper;
