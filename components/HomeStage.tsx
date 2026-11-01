"use client";

import { useEffect, useRef } from "react";
import ProjectCardWrapper from "@/components/PrjectCardWrapper";

export default function HomeStage() {
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pin = pinRef.current;
    const track = trackRef.current;
    if (!pin || !track) return;

    const state: { alive: boolean; revert?: () => void } = { alive: true };

    (async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (!state.alive) return;

      try {
        gsap.registerPlugin(ScrollTrigger);
        pin.dataset.gsap = "registered";

        const mm = gsap.matchMedia();
        mm.add(
          "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
          () => {
            pin.dataset.gsap = "matched";
            const distance = () =>
              Math.max(0, track.scrollWidth - pin.clientWidth);

            gsap.to(track, {
              x: () => -distance(),
              ease: "none",
              scrollTrigger: {
                trigger: pin,
                start: "top 64px",
                end: () => "+=" + distance(),
                pin: true,
                scrub: true,
                invalidateOnRefresh: true,
              },
            });
          },
        );

        if (!state.alive) {
          mm.revert();
          return;
        }

        state.revert = () => mm.revert();
      } catch (error) {
        pin.dataset.gsap = error instanceof Error ? error.message : String(error);
      }
    })();

    return () => {
      state.alive = false;
      state.revert?.();
    };
  }, []);

  return (
    <div
      ref={pinRef}
      className="home-stage flex min-h-[calc(100dvh-4rem)] flex-col md:h-[calc(100dvh-4rem)] md:overflow-hidden"
    >
      <section className="flex flex-1 items-center px-6 md:px-10">
        <h1 className="max-w-lg text-3xl font-medium leading-tight tracking-tight md:text-4xl">
          I design and build digital products.
        </h1>
      </section>
      <ProjectCardWrapper trackRef={trackRef} />
    </div>
  );
}
