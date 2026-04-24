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
          I’m a self-taught frontend engineer focused on designing and building performant, scalable client-side systems—not just user interfaces. I approach frontend development as a discipline of balancing user experience, performance, and long-term maintainability.
        </p>
        <p className="mb-4">
         I work primarily with React, Next.js, and TypeScript, and have built projects ranging from full-stack applications to component-driven UI systems. My focus goes beyond implementation—I think in terms of rendering strategies, data flow, state management, and performance tradeoffs to ensure applications remain fast and maintainable as they scale.
        </p>
        <p>
          I’m currently looking for a frontend engineering role where I can contribute to production systems, collaborate on technical decisions, and continue developing as an engineer who builds not just features, but resilient and scalable products.
        </p>
      </div>
    </section>
  );
}
