import { projects } from "@/db";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export function generateStaticParams() {
  const titles = new Set(projects.map((project) => project.title));
  return [...titles].map((title) => ({ title }));
}

function CaseStudyPage({ params }: PageProps<"/case-study/[title]">) {
  return (
    <article className="mx-auto w-full h-full flex flex-col items-center justify-center px-6 md:px-initial pb-24">
      <Suspense>
        <CaseStudy params={params} />
      </Suspense>
    </article>
  );
}

async function CaseStudy({
  params,
}: Pick<PageProps<"/case-study/[title]">, "params">) {
  const { title } = await params;
  const project = projects.find(
    (project) => String(project.title).toLowerCase() === title.toLowerCase(),
  );
  if (!project) {
    notFound();
  }
  return (
    <>
      <Image
        src={project.image.mobile}
        alt={project.title}
        width={1024}
        height={1536}
        sizes="80vw"
        className="mx-auto h-auto w-4/5 md:hidden"
        priority
      />
      <Image
        src={project.image.laptop}
        alt={project.title}
        width={1600}
        height={1000}
        sizes="(min-width: 768px) 768px, 100vw"
        className="hidden h-auto w-full max-w-3xl md:block"
        priority
      />
      <div className="md:w-[80%] lg:w-1/2 mt-8">
        <Link
          href={project.url}
          target="_blank"
          className="text-2xl underline decoration-neutral-300 underline-offset-4"
        >
          View Project
        </Link>
        <p className="text-md leading-relaxed text-neutral-500 mt-4">
          <span className="font-semibold text-black">Stack / Tools: </span>
          {project.tools.join(", ")}
        </p>
        <p className="text-lg leading-relaxed text-neutral-500 mt-4">
          <span className="font-semibold text-black">Case Study: </span>
          {project.bio}
        </p>
      </div>
    </>
  );
}

export default CaseStudyPage;
