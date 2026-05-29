"use client";

import { motion } from "framer-motion";
import { portfolioStats } from "@/content/projects";
import { useEffect, useState, useRef } from "react";
import { Briefcase, Smile, Cloud, Cpu, Activity } from "lucide-react";

// Color schemas for each stat card
const cardStyles: Record<string, {
  icon: React.ComponentType<any>;
  themeColor: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
  glowColor: string;
}> = {
  "Projects Completed": {
    icon: Briefcase,
    themeColor: "blue",
    bgColor: "bg-blue/10 group-hover:bg-blue/20",
    textColor: "text-blue",
    borderColor: "group-hover:border-blue/30",
    glowColor: "shadow-blue/5",
  },
  "Happy Clients": {
    icon: Smile,
    themeColor: "emerald",
    bgColor: "bg-emerald-500/10 group-hover:bg-emerald-500/20",
    textColor: "text-emerald-600",
    borderColor: "group-hover:border-emerald-500/30",
    glowColor: "shadow-emerald-500/5",
  },
  "Cloud Deployments": {
    icon: Cloud,
    themeColor: "cyan",
    bgColor: "bg-cyan-500/10 group-hover:bg-cyan-500/20",
    textColor: "text-cyan-600",
    borderColor: "group-hover:border-cyan-500/30",
    glowColor: "shadow-cyan-500/5",
  },
  "Applications Built": {
    icon: Cpu,
    themeColor: "purple",
    bgColor: "bg-purple-500/10 group-hover:bg-purple-500/20",
    textColor: "text-purple-600",
    borderColor: "group-hover:border-purple-500/30",
    glowColor: "shadow-purple-500/5",
  },
  "Active Solutions": {
    icon: Activity,
    themeColor: "rose",
    bgColor: "bg-rose-500/10 group-hover:bg-rose-500/20",
    textColor: "text-rose-600",
    borderColor: "group-hover:border-rose-500/30",
    glowColor: "shadow-rose-500/5",
  },
};

function Counter({ value, label }: { value: string; label: string }) {
  const [count, setCount] = useState(0);
  const target = parseInt(value.replace(/\D/g, ""));
  const suffix = value.replace(/\d/g, "");
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
      { threshold: 0.3 }
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

  const style = cardStyles[label] || {
    icon: Briefcase,
    bgColor: "bg-blue/10",
    textColor: "text-blue",
    borderColor: "group-hover:border-blue/20",
    glowColor: "shadow-blue/5",
  };

  const IconComponent = style.icon;

  return (
    <div
      ref={ref}
      className={`group relative flex flex-col items-center p-6 rounded-2xl border border-glass-border bg-white/70 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.015)] transition-all duration-300 hover:bg-white hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-glass-border ${style.borderColor} ${style.glowColor}`}
    >
      {/* Decorative inner gradient radial flare */}
      <div className="absolute inset-0 pointer-events-none rounded-2xl bg-gradient-to-br from-transparent via-transparent to-black/[0.005]" />

      {/* Dynamic Colored Icon */}
      <div className={`mb-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-transparent transition-all duration-500 shadow-inner group-hover:scale-110 group-hover:rotate-3 ${style.bgColor} ${style.textColor}`}>
        <IconComponent size={24} className="transition-transform duration-500 group-hover:scale-105" />
      </div>

      {/* Value Counter (Montserrat typography) */}
      <div className="font-montserrat text-3xl font-extrabold text-navy leading-none tracking-tight mb-2.5">
        {count}
        <span className="text-blue/90 font-bold ml-0.5">{suffix}</span>
      </div>

      {/* Label (Inter typography) */}
      <div className="text-[10px] font-extrabold uppercase tracking-widest text-muted text-center leading-snug">
        {label}
      </div>
    </div>
  );
}

export function ProjectStats() {
  return (
    <section className="relative section border-y border-glass-border bg-gradient-to-b from-lightgray/20 via-white to-lightgray/10 overflow-hidden py-14">
      {/* Ambient background blur circles */}
      <div className="absolute -left-20 top-0 h-40 w-40 rounded-full bg-blue/5 blur-3xl pointer-events-none" />
      <div className="absolute -right-20 bottom-0 h-40 w-40 rounded-full bg-cyan/5 blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {portfolioStats.map((stat) => (
            <Counter key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
