export function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-26 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
          About
        </h2>
      </div>

      <div className="text-muted-foreground">
        <p className="mb-4">
          I’m a self-taught frontend engineer focused on building fast,
          polished, and maintainable web applications. I enjoy creating reusable
          UI components, improving performance, and developing clean, scalable
          frontend architecture.
        </p>
        <p className="mb-4">
          I primarily work with React, Next.js, and TypeScript, and have built
          projects ranging from full-stack applications to UI-focused products.
          I’m particularly interested in crafting intuitive user experiences and
          writing code that’s easy to extend and maintain.
        </p>
        <p>
          I’m currently looking for a frontend engineering role where I can
          contribute to real products, collaborate with experienced engineers,
          and continue developing my technical skills.
        </p>
      </div>
    </section>
  );
}
