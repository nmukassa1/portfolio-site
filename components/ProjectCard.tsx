import Link from "next/link";
import { Project } from "@/types";
import Image from "next/image";

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/case-study/${project.title}`}
      className="block w-full shrink-0 md:w-[calc(50vw-3rem)]"
    >
      <div className="overflow-hidden rounded-xl bg-[#e0e0e0] p-4 md:p-6">
        <div className="relative aspect-[2940/1450] overflow-hidden rounded-xl">
          <Image
            src={project.image}
            alt=""
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-contain"
          />
        </div>
      </div>
      <p className="mt-3 text-sm font-medium">{project.title}</p>
      <p className="mt-1 text-sm text-neutral-500">{project.description}</p>
    </Link>
  );
}

export default ProjectCard;
