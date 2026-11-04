"use client";

import { useEffect, useRef, useSyncExternalStore, type RefObject } from "react";
import { createPortal } from "react-dom";
import ProjectCard from "./ProjectCard";
import { projects } from "@/db";

const subscribeNoop = () => () => {};

const fadeClass =
  "pointer-events-none fixed z-10 opacity-0 transition-opacity duration-500 motion-reduce:transition-none";

function ProjectCardWrapper({
  trackRef,
}: {
  trackRef: RefObject<HTMLDivElement | null>;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const mounted = useSyncExternalStore(
    subscribeNoop,
    () => true,
    () => false,
  );

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const top = topRef.current;
    const bottom = bottomRef.current;
    const left = leftRef.current;
    const right = rightRef.current;
    if (!section || !track || !top || !bottom || !left || !right) return;

    const mobileQuery = window.matchMedia("(max-width: 767px)");
    let frame = 0;

    const setShown = (edge: HTMLDivElement, shown: boolean) => {
      edge.style.opacity = shown ? "1" : "0";
    };

    const update = () => {
      frame = 0;
      const list = track.getBoundingClientRect();
      const sectionBox = section.getBoundingClientRect();

      if (mobileQuery.matches) {
        const viewTop = 64;
        const viewBottom = window.innerHeight;
        const atEnd = list.bottom <= viewBottom + 8;
        setShown(
          top,
          atEnd && list.top < viewTop - 8 && list.bottom > viewTop + 48,
        );
        setShown(bottom, false);
        setShown(left, false);
        setShown(right, false);
        return;
      }

      setShown(top, false);
      setShown(bottom, false);

      const edgeTop = Math.max(sectionBox.top, 0);
      const edgeBottom = Math.min(sectionBox.bottom, window.innerHeight);
      const height = Math.max(0, edgeBottom - edgeTop);
      for (const edge of [left, right]) {
        edge.style.top = `${edgeTop}px`;
        edge.style.height = `${height}px`;
      }

      if (height < 8) {
        setShown(left, false);
        setShown(right, false);
        return;
      }

      if (track.scrollWidth > track.clientWidth + 1) {
        const atEnd =
          track.scrollLeft + track.clientWidth >= track.scrollWidth - 8;
        setShown(left, atEnd && track.scrollLeft > 8);
        setShown(right, false);
        return;
      }

      const atEnd = list.right <= window.innerWidth + 8;
      setShown(left, atEnd && list.left < -8);
      setShown(right, false);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    track.addEventListener("scroll", schedule, { passive: true });
    mobileQuery.addEventListener("change", schedule);
    const resizeObserver = new ResizeObserver(schedule);
    resizeObserver.observe(track);
    resizeObserver.observe(section);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      track.removeEventListener("scroll", schedule);
      mobileQuery.removeEventListener("change", schedule);
      resizeObserver.disconnect();
    };
  }, [trackRef, mounted]);

  return (
    <section
      ref={sectionRef}
      aria-label="Projects"
      className="relative mt-8 pb-6 md:pb-8"
    >
      <h2 className="px-6 text-xs font-medium tracking-[0.16em] text-neutral-500 uppercase md:px-10">
        Projects
      </h2>
      <div
        ref={trackRef}
        className="project-track project-scroller mt-4 flex w-full flex-col gap-4 px-6 md:w-max md:flex-row md:px-10"
      >
        {projects.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
      {mounted &&
        createPortal(
          <>
            <div
              ref={topRef}
              aria-hidden
              className={`${fadeClass} inset-x-0 top-16 h-36 bg-gradient-to-b from-[#F2F0EF] to-transparent md:hidden`}
            />
            <div
              ref={bottomRef}
              aria-hidden
              className={`${fadeClass} inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#F2F0EF] to-transparent md:hidden`}
            />
            <div
              ref={leftRef}
              aria-hidden
              className={`${fadeClass} left-0 hidden w-48 bg-gradient-to-r from-[#F2F0EF] to-transparent md:block`}
            />
            <div
              ref={rightRef}
              aria-hidden
              className={`${fadeClass} right-0 hidden w-48 bg-gradient-to-l from-[#F2F0EF] to-transparent md:block`}
            />
          </>,
          document.body,
        )}
    </section>
  );
}

export default ProjectCardWrapper;
