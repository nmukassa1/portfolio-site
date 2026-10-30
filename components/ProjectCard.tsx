import Link from "next/link";
import { Project } from "@/types";
import Image from "next/image";

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/case-study/${project.title}`}
      aria-label={project.title}
      className="block h-[50vh] w-full shrink-0 rounded-lg bg-gray-600 p-6 shadow-md md:w-[calc(50%-0.5rem)]"
    >
      <div className="relative h-full w-full">
        {project.image && (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-contain"
          />
        )}
      </div>
    </Link>
  );
}

export default ProjectCard;
