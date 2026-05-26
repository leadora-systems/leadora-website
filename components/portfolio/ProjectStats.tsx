"use client";

import { motion } from "framer-motion";
import { portfolioStats } from "@/content/projects";
import { useEffect, useState, useRef } from "react";

function Counter({ value, label }: { value: string, label: string }) {
  const [count, setCount] = useState(0);
  const target = parseInt(value.replace(/\D/g, ''));
  const suffix = value.replace(/\d/g, '');
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div ref={ref} className="text-center p-6 rounded-2xl border border-glass-border bg-white shadow-sm transition-all hover:shadow-md">
      <div className="font-syne text-3xl font-extrabold grad-text mb-2">
        {count}{suffix}
      </div>
      <div className="text-xs font-bold uppercase tracking-widest text-muted">
        {label}
      </div>
    </div>
  );
}

export function ProjectStats() {
  return (
    <section className="section border-y border-glass-border bg-white">
      <div className="container">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {portfolioStats.map((stat) => (
            <Counter key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
