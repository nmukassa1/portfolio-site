"use client";

import { useEffect, useRef } from "react";

const KEYBOARD_ROWS = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1.25, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.25],
  [1.55, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.65],
  [1.9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [1.35, 1.15, 1.15, 5.6, 1.15, 1.15, 1.35],
] as const;

type LaptopMockupProps = {
  url: string;
  title: string;
  interactive?: boolean;
};

export default function LaptopMockup({
  url,
  title,
  interactive = true,
}: LaptopMockupProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        root.classList.add("is-visible");
        observer.disconnect();
      },
      { threshold: 0.25 },
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={rootRef}
      className="laptop-mockup"
      data-interactive={interactive ? "true" : "false"}
    >
      <div className="laptop-lid">
        <span className="laptop-camera" aria-hidden="true" />
        <div className="laptop-screen">
          <div className="laptop-viewport">
            <iframe
              src={url}
              title={title}
              loading="lazy"
              {...(interactive
                ? {}
                : { inert: true as const, tabIndex: -1 as const })}
            />
          </div>
        </div>
      </div>
      {/* <div className="laptop-hinge" aria-hidden="true" />
      <div className="laptop-base" aria-hidden="true">
        <div className="laptop-keyboard">
          {KEYBOARD_ROWS.map((row, rowIndex) => (
            <div className="laptop-key-row" key={rowIndex}>
              {row.map((grow, keyIndex) => (
                <span
                  key={keyIndex}
                  className="laptop-key"
                  style={{ flexGrow: grow }}
                />
              ))}
            </div>
          ))}
        </div>
        <div className="laptop-trackpad" />
      </div> */}
    </div>
  );
}
