"use Client";

import { useEffect, useRef } from "react";
import styles from "./symbol.module.css";
import { webDevSymbols } from "@/utils/constants";

function getRandomSymbol(): string {
  return webDevSymbols[Math.floor(Math.random() * webDevSymbols.length)];
}

export default function SymbolLogic() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const spawnSymbol = () => {
      if (!containerRef.current) return;

      const elem = document.createElement("div");
      elem.className = styles.symbol;
      elem.textContent = getRandomSymbol();

      elem.style.left = Math.random() * containerRef.current.offsetWidth + "px";
      elem.style.top = Math.random() * containerRef.current.offsetHeight + "px";

      containerRef.current.appendChild(elem);

      setTimeout(() => elem.remove(), 1500);
    };

    const interval = setInterval(spawnSymbol, 120);

    return () => clearInterval(interval);
  }, []);

  return <div ref={containerRef} className={styles.overlay}></div>;
}
