"use client";

import { useEffect, useRef, useState } from "react";
import { heroPhrases } from "@/content/site";

export function HeroHeadline() {
  const [displayText, setDisplayText] = useState("");
  const [showUnderline, setShowUnderline] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(false);
  const phraseIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const clear = () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };

    const typeChar = () => {
      const phrase = heroPhrases[phraseIndexRef.current];
      if (charIndexRef.current <= phrase.length) {
        setDisplayText(phrase.substring(0, charIndexRef.current));
        charIndexRef.current++;
        const delay = charIndexRef.current === 1 ? 120 : 55 + Math.random() * 30;
        timerRef.current = setTimeout(typeChar, delay);
      } else {
        setShowUnderline(true);
        timerRef.current = setTimeout(eraseChar, 2200);
      }
    };

    const eraseChar = () => {
      const phrase = heroPhrases[phraseIndexRef.current];
      setShowUnderline(false);
      setCursorVisible(false);
      if (charIndexRef.current >= 0) {
        setDisplayText(phrase.substring(0, charIndexRef.current));
        charIndexRef.current--;
        timerRef.current = setTimeout(eraseChar, 32 + Math.random() * 18);
      } else {
        phraseIndexRef.current = (phraseIndexRef.current + 1) % heroPhrases.length;
        charIndexRef.current = 0;
        timerRef.current = setTimeout(() => {
          setCursorVisible(true);
          typeChar();
        }, 400);
      }
    };

    const kickoff = setTimeout(() => {
      setCursorVisible(true);
      charIndexRef.current = 0;
      typeChar();
    }, 900);

    return () => {
      clearTimeout(kickoff);
      clear();
    };
  }, []);

  return (
    <h1
      className="fade-up-2 mb-6 flex min-h-[2.4em] flex-col items-center gap-0 text-center font-extrabold leading-[1.08] tracking-tight"
      style={{ fontSize: "clamp(32px, 5vw, 64px)" }}
    >
      <span className="block text-navy">We Are</span>
      <span className="relative block overflow-hidden">
        <span className="hero-anim-text relative block min-h-[1.1em]">
          {displayText}
        </span>
        <span
          className="ml-0.5 inline-block w-[3px] animate-pulse bg-cyan align-middle"
          style={{
            height: "0.8em",
            opacity: cursorVisible ? 1 : 0,
          }}
        />
      </span>
      <span
        className="mx-auto mt-2 block h-[3px] rounded-sm bg-gradient-to-r from-transparent via-blue to-cyan transition-all duration-500"
        style={{ width: showUnderline ? "80%" : "0%" }}
      />
    </h1>
  );
}
