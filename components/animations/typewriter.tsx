"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
}

export default function Typewriter({ text, speed = 80 }: TypewriterProps) {
  const [displayed, setDisplayed] = useState<string>("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [cursorActive, setCursorActive] = useState(true);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index >= text.length) {
        clearInterval(interval);

        setTimeout(() => {
          setCursorActive(false);
        }, 500);
        return;
      }

      setDisplayed(text.slice(0, index + 1));
      index++;
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  useEffect(() => {
    const blink = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 500);

    return () => clearInterval(blink);
  }, []);

  return (
    <h1>
      {displayed}
      {cursorActive && (
        <span
          style={{
            opacity: cursorVisible ? 1 : 0,
            marginLeft: "2px",
          }}
        >
          |
        </span>
      )}
    </h1>
  );
}
