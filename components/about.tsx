export function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          About
        </h2>
      </div>
      <div className="text-muted-foreground">
        <p className="mb-4">
          {"I'm"} a frontend engineer passionate about building clean, user-focused web 
          applications. I take pride in crafting thoughtful, accessible products with 
          attention to the little details that elevate user experience.
        </p>
        <p className="mb-4">
          Currently, {"I'm"} seeking new opportunities to create impactful digital 
          experiences. I do my best work at the intersection of design and engineering, 
          where great UX meets clean, scalable code.
        </p>
        <p>
          {"I've"} been building projects to sharpen my skills and showcase my abilities, 
          from utility tools to full-stack applications. When {"I'm"} not coding, you can 
          find me exploring new technologies and staying up to date with the latest in 
          web development.
        </p>
      </div>
    </section>
  )
}
