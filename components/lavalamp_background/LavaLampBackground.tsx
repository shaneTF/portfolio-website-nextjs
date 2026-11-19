"use client";

import { useEffect, useRef } from "react";
import classes from "./lavalamp.module.css";

export default function LavaLampBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let stopped = false;
    const runningAnimations = new Set<Animation>();
    const blobs = Array.from(container.children) as HTMLElement[];
    const randomScale = () => 0.3 + Math.random() * 0.45;

    const startRising = (
      blob: HTMLElement,
      x: number,
      duration: number,
      startScale: number,
    ) => {
      if (stopped) return;

      const topY = -blob.offsetHeight - 20;
      const bottomY = window.innerHeight * 0.92;
      const topScale = randomScale();
      const animation = blob.animate(
        [
          { transform: `translate3d(${x}px, ${bottomY}px, 0) scale(${startScale})` },
          {
            transform: `translate3d(${x}px, ${topY}px, 0) scale(${topScale})`,
          },
        ],
        { duration, easing: "ease-in-out", fill: "forwards" },
      );

      runningAnimations.add(animation);
      animation.onfinish = () => {
        runningAnimations.delete(animation);
        if (stopped) return;

        const maxX = Math.max(0, window.innerWidth - blob.offsetWidth);
        startFalling(blob, Math.random() * maxX, topY, bottomY, duration, topScale);
      };
    };

    const startFalling = (
      blob: HTMLElement,
      x: number,
      topY: number,
      bottomY: number,
      duration: number,
      topScale: number,
    ) => {
      if (stopped) return;

      const bottomScale = randomScale();
      const animation = blob.animate(
        [
          { transform: `translate3d(${x}px, ${topY}px, 0) scale(${topScale})` },
          {
            transform: `translate3d(${x}px, ${bottomY}px, 0) scale(${bottomScale})`,
          },
        ],
        { duration, easing: "ease-in-out", fill: "forwards" },
      );

      runningAnimations.add(animation);
      animation.onfinish = () => {
        runningAnimations.delete(animation);
        startRising(blob, x, duration, bottomScale);
      };
    };

    blobs.forEach((blob, index) => {
      const startX = Math.min(
        window.innerWidth - blob.offsetWidth,
        window.innerWidth * (index === 0 ? 0.1 : 0.7),
      );
      const duration = index === 0 ? 12000 : 15000;
      startRising(blob, Math.max(0, startX), duration, randomScale());
    });

    return () => {
      stopped = true;
      runningAnimations.forEach((animation) => animation.cancel());
      runningAnimations.clear();
    };
  }, []);

  return (
    <>
      {/* SVG Filter */}
      <svg
        style={{
          position: "absolute",
          width: 0,
          height: 0,
        }}
      >
        <filter id="gooey">
          <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="
              1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 0 0 22 -8
            "
          />
        </filter>
      </svg>

      <div ref={containerRef} className={classes["lava-container"]}>
        <div className={`${classes.blob} ${classes["blob-1"]}`} />
        <div className={`${classes.blob} ${classes["blob-2"]}`} />
      </div>
    </>
  );
}
