"use Client";

import { useEffect, useRef } from "react";
import styles from "./symbol.module.css";
import { webDevSymbols } from "@/utils/constants";

type Point = { x: number; y: number };
const recentPostions: Point[] = [];
const MIN_DISTANCE = 44;

function isTooClose(x: number, y: number) {
  return recentPostions.some((p) => {
    const dx = p.x - x;
    const dy = p.y - y;
    return Math.sqrt(dx * dx + dy * dy) < MIN_DISTANCE;
  });
}

function getRandomSymbol(): string {
  return webDevSymbols[Math.floor(Math.random() * webDevSymbols.length)];
}

function getRandomColor(): string {
  const hues = [0, 30, 60, 120, 180, 210, 270, 300];
  const hue = hues[Math.floor(Math.random() * hues.length)];
  return `hsl(${hue}, 90%, 55%)`;
}

export default function SymbolLogic() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const spawnSymbol = () => {
      if (!containerRef.current) return;

      let x = 0;
      let y = 0;
      let attempts = 0;

      do {
        x = Math.random() * containerRef.current.offsetWidth;
        y = Math.random() * containerRef.current.offsetHeight;
        attempts++;
      } while (isTooClose(x, y) && attempts < 15);

      const elem = document.createElement("div");
      elem.className = styles.symbol;
      elem.textContent = getRandomSymbol();
      elem.style.setProperty("--symbol-color", getRandomColor());

      elem.style.left = `${x}px`;
      elem.style.top = `${y}px`;

      containerRef.current.appendChild(elem);

      recentPostions.push({ x, y });

      if (recentPostions.length > 30) recentPostions.shift();

      setTimeout(() => elem.remove(), 1500);
    };

    const interval = setInterval(spawnSymbol, 800);

    return () => clearInterval(interval);
  }, []);

  return <div ref={containerRef} className={styles.overlay}></div>;
}
