import Link from "next/link";
import { Project } from "@/types";
import Image from "next/image";

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/case-study/${project.title}`}
      className="block w-full shrink-0 snap-start md:w-[calc(50%-0.5rem)]"
    >
      <div className="relative aspect-[2940/1450] overflow-hidden rounded-xl border border-neutral-200 bg-white">
        {project.image && (
          <Image
            src={project.image}
            alt=""
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-contain"
          />
        )}
      </div>
      <p className="mt-3 text-sm font-medium">{project.title}</p>
      <p className="mt-1 text-sm text-neutral-500">{project.description}</p>
    </Link>
  );
}

export default ProjectCard;
