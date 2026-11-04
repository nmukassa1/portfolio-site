import Link from "next/link";
import { Project } from "@/db";
import Image from "next/image";

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/case-study/${project.title}`}
      prefetch={true}
      className="block w-full shrink-0 md:w-[calc(50vw-3rem)]"
    >
      {/* <div className="overflow-hidden rounded-xl bg-[#e0e0e0] p-4 md:p-6"> */}
      <div className="relative mx-auto aspect-[1024/1536] w-4/5 overflow-hidden rounded-xl md:hidden">
        <Image
          src={project.image.mobile}
          alt=""
          fill
          sizes="80vw"
          className="object-contain"
        />
      </div>
      <div className="relative hidden aspect-[2840/1350] overflow-hidden rounded-xl md:block">
        <Image
          src={project.image.laptop}
          alt=""
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-contain"
        />
      </div>
      <p className="mt-3 text-sm font-medium">{project.title}</p>
      <p className="mt-1 text-sm text-neutral-500">{project.description}</p>
    </Link>
  );
}

export default ProjectCard;
