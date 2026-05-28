"use client";

import { useState, useEffect } from "react";

export function CareersHeader() {
  const [displayText, setDisplayText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let active = true;
    const phrases = ["Innovate.", "Build.", "Grow."];
    let phraseIdx = 0;
    let charIdx = 0;
    let currentText = "";

    const typeNextChar = () => {
      if (!active) return;

      const currentTargetPhrase = phrases[phraseIdx];

      if (charIdx < currentTargetPhrase.length) {
        currentText += currentTargetPhrase[charIdx];
        setDisplayText(currentText);
        charIdx++;
        
        // Random natural typing speed (60ms to 110ms per character)
        const delay = 60 + Math.random() * 50;
        setTimeout(typeNextChar, delay);
      } else {
        // Current word is fully typed!
        if (phraseIdx < phrases.length - 1) {
          // Add a space, move to next word after a modern 600ms pause
          currentText += " ";
          phraseIdx++;
          charIdx = 0;
          setTimeout(typeNextChar, 600);
        } else {
          // Finished typing everything! Hide cursor smoothly after a slight pause
          if (active) {
            setTimeout(() => {
              setShowCursor(false);
            }, 800);
          }
        }
      }
    };

    // Kickoff typing after 600ms delay for page load
    const kickoffTimeout = setTimeout(typeNextChar, 600);

    return () => {
      active = false;
      clearTimeout(kickoffTimeout);
    };
  }, []);

  // Soft cursor blink rate while typing is active
  useEffect(() => {
    if (!showCursor) return;
    const cursorInterval = setInterval(() => {
      setCursorVisible((visible) => !visible);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, [showCursor]);

  return (
    <div className="flex flex-col items-center">
      {/* Small uppercase label with high letter-spacing and glow */}
      <div className="fade-up mb-5">
        <span
          className="font-montserrat text-[11px] font-bold uppercase tracking-[5px] bg-gradient-to-r from-blue via-cyan to-indigo-600 bg-clip-text text-transparent"
          style={{
            filter: "drop-shadow(0 0 10px rgba(30, 144, 255, 0.45))",
          }}
        >
          CAREERS AT LEADORA
        </span>
      </div>

      {/* Very large bold futuristic heading with smooth typing animation */}
      <h1 className="fade-up-2 font-montserrat font-extrabold tracking-tight block leading-[1.08] mb-6 max-w-[1000px] text-center min-h-[1.2em] relative whitespace-nowrap">
        <span
          className="bg-gradient-to-r from-blue via-cyan to-indigo-600 bg-clip-text text-transparent filter drop-shadow-[0_0_15px_rgba(0,194,255,0.15)] whitespace-nowrap"
          style={{
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "clamp(22px, 5.2vw, 56px)",
          }}
        >
          {displayText}
        </span>
        <span
          className="inline-block w-[4px] bg-cyan ml-1.5 align-middle select-none transition-all duration-500 ease-out"
          style={{
            height: "0.85em",
            opacity: showCursor ? (cursorVisible ? 1 : 0) : 0,
            background: "linear-gradient(180deg, #00C2FF, #1E90FF)",
            transform: showCursor ? "scaleY(1)" : "scaleY(0)",
          }}
        />
      </h1>

      {/* Elegant description with soft color, wider layout, and excellent readability */}
      <p className="fade-up-3 mx-auto block max-w-[720px] text-[15px] sm:text-[17px] leading-relaxed text-slate-500 font-medium">
        Join a team creating modern technology solutions that transform
        ideas into impactful digital products.
      </p>
    </div>
  );
}
