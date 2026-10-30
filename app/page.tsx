import ProjectCardWrapper from "@/components/PrjectCardWrapper";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <section className="flex flex-1 items-center px-6 md:px-10">
        <h1 className="max-w-lg text-3xl font-medium leading-tight tracking-tight md:text-4xl">
          I design and build digital products.
        </h1>
      </section>
      <ProjectCardWrapper />
    </div>
  );
}
