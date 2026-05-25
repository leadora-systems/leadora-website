"use client";

import { useEffect, useRef, useState } from "react";
import { counters } from "@/content/site";

export function Counters() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [values, setValues] = useState(counters.map(() => 0));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    counters.forEach((counter, i) => {
      let current = 0;
      const timer = setInterval(() => {
        current = Math.min(current + Math.ceil(counter.target / 35), counter.target);
        setValues((prev) => {
          const next = [...prev];
          next[i] = current;
          return next;
        });
        if (current >= counter.target) clearInterval(timer);
      }, 35 + i * 20);
    });
  }, [started]);

  return (
    <div ref={ref} className="counters">
      {counters.map((c, i) => (
        <div key={c.label} className="counter-card">
          <div className="counter-num">{values[i]}+</div>
          <div className="mt-1.5 text-[13px] text-muted">{c.label}</div>
        </div>
      ))}
    </div>
  );
}
