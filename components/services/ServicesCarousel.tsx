"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { services } from "@/content/site";

const ICONS: Record<string, string> = {
  "web-development": "🌐",
  "mobile-app-development": "📱",
  "ecommerce-solutions": "🛒",
  "cloud-azure": "☁️",
  "spring-boot": "⚙️",
  "api-development": "🔗",
  "ai-integration": "🤖",
  "digital-marketing": "📈",
};

interface CardProps {
  service: (typeof services)[0];
  featured: boolean;
}

function MarqueeCard({ service, featured }: CardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [spot, setSpot] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setSpot({ x, y });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 350, damping: 22 }}
      className={`relative flex flex-col justify-between w-[430px] min-w-[430px] h-[320px] rounded-[24px] border bg-white/95 p-8 select-none transition-all duration-300
        ${featured 
          ? "border-violet-300 shadow-[0_4px_32px_rgba(124,58,237,0.06)] hover:border-violet-400 hover:shadow-[0_24px_64px_rgba(124,58,237,0.14)] border-t-[3px] border-t-violet-400" 
          : "border-glass-border shadow-sm hover:border-blue/25 hover:shadow-[0_20px_56px_rgba(30,144,255,0.11)]"
        }`}
    >
      {/* Spotlight effect */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[24px]"
        style={{
          background: `radial-gradient(220px circle at ${spot.x}px ${spot.y}px, ${
            featured ? "rgba(139,92,246,0.11)" : "rgba(30,144,255,0.09)"
          }, transparent 65%)`,
        }}
      />

      {/* Top section: Icon and optional Featured solution badge */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <motion.div
            className="text-[40px] leading-none"
            whileHover={{ scale: 1.25, rotate: 12 }}
            transition={{ type: "spring", stiffness: 450, damping: 10 }}
          >
            {ICONS[service.slug] ?? "🔧"}
          </motion.div>

          {featured && (
            <motion.span 
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-[10.5px] font-bold uppercase tracking-wider text-violet-600 shadow-sm"
            >
              ✦ Featured Solution
            </motion.span>
          )}
        </div>

        {/* Title */}
        <h3
          className="font-montserrat mb-3 text-[20px] font-bold text-navy"
        >
          {service.title}
        </h3>

        {/* Description: No line-clamp so the full content is fully visible */}
        <p
          className="text-[13.5px] leading-relaxed text-slate-600 font-medium"
        >
          {service.description}
        </p>
      </div>

      {/* Bottom section: Tags and Link */}
      <div className="flex items-center justify-between mt-5">
        <div className="flex flex-wrap gap-1.5 max-w-[240px]">
          {service.tags.slice(0, 3).map((t) => (
            <span
              key={t}
              className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold tracking-wide transition-colors ${
                featured
                  ? "border-violet-200 bg-violet-50 text-violet-600"
                  : "border-blue/15 bg-blue/[0.05] text-blue"
              }`}
            >
              {t}
            </span>
          ))}
        </div>

        <Link
          href="/contact"
          className={`group inline-flex items-center gap-1.5 text-[13px] font-bold transition-colors ${
            featured ? "text-violet-600 hover:text-violet-500" : "text-blue hover:text-blue/75"
          }`}
        >
          Start Project
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-1.5">
            →
          </span>
        </Link>
      </div>
    </motion.div>
  );
}

export function ServicesCarousel() {
  const [isHovered, setIsHovered] = useState(false);

  // Replicate the list of 8 services to ensure perfect looping and zero white gap
  const quadrupledItems = [...services, ...services, ...services, ...services];

  return (
    <div className="container mt-4">
      {/* Scroll Viewport Box — bounded inside page layout container, borderless and transparent */}
      <div
        className="relative overflow-hidden py-4 px-2"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="flex gap-6"
          style={{ width: "max-content" }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 72, // Drifts incredibly slowly and peacefully (72 seconds)
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
          // Cinematic slowdown when hovering to read descriptions or click
          {...(isHovered && {
            animate: { x: ["0%", "-50%"] },
            transition: { duration: 180, repeat: Infinity, ease: "linear" }
          })}
        >
          {quadrupledItems.map((service, i) => (
            <MarqueeCard
              key={`${service.slug}-${i}`}
              service={service}
              featured={service.slug === "ai-integration"}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
