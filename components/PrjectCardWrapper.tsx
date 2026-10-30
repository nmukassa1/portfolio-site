import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "Description 1",
    // image: "https://via.placeholder.com/150",
    image: "/designspo-img.png",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description 2",
    // image: "https://via.placeholder.com/150",
    image: "/movie-img.png",
  },
];

function ProjectCardWrapper() {
  return (
    <div className="mt-auto flex h-fit w-full gap-4 overflow-x-auto overflow-y-hidden">
      <ProjectCard project={projects[0]} />
      <ProjectCard project={projects[1]} />
      <ProjectCard project={projects[1]} />
    </div>
  );
}

export default ProjectCardWrapper;
