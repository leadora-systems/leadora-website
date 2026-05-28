"use client";

import { motion, useSpring, useMotionValue } from "framer-motion";
import { useState, useRef } from "react";

const whyFeatures = [
  {
    icon: "📈",
    title: "Scalable Architecture",
    description:
      "Systems designed to grow with your business — from startup MVP to enterprise-grade infrastructure without painful rewrites.",
  },
  {
    icon: "☁️",
    title: "Cloud Expertise",
    description:
      "Deep Azure and AWS knowledge backed by certified engineers who understand cloud economics and reliability at scale.",
  },
  {
    icon: "🤖",
    title: "AI-Driven Solutions",
    description:
      "Integrate cutting-edge AI capabilities — from LLMs and RAG pipelines to predictive analytics — into your existing products.",
  },
  {
    icon: "🔒",
    title: "Secure by Design",
    description:
      "Security is built into every layer — from secure coding practices and pen-testing to compliance-ready architectures.",
  },
  {
    icon: "🤝",
    title: "Dedicated Support",
    description:
      "A named project manager, weekly reports, and a support team that responds within hours — not days.",
  },
  {
    icon: "⚡",
    title: "Fast Time to Market",
    description:
      "Proven agile delivery frameworks that get your product to market faster without compromising on quality or stability.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 35, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
};

interface FeatureCardProps {
  feature: (typeof whyFeatures)[0];
  index: number;
}

function FeatureCard({ feature, index }: FeatureCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [spot, setSpot] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // 3D Tilt coordinates for cards
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const rX = useSpring(rotateX, { damping: 25, stiffness: 220 });
  const rY = useSpring(rotateY, { damping: 25, stiffness: 220 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const normX = x / rect.width - 0.5;
    const normY = y / rect.height - 0.5;

    rotateX.set(-normY * 10);
    rotateY.set(normX * 10);
    setSpot({ x, y });
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariant}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 350, damping: 22 }}
      style={{
        rotateX: rX,
        rotateY: rY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className="relative flex flex-col rounded-2xl border border-glass-border bg-white/80 p-8 shadow-sm overflow-hidden select-none transition-all duration-300 hover:border-blue/20 hover:shadow-[0_20px_50px_rgba(30,144,255,0.08)] cursor-default"
    >
      {/* ── Left vertical blue/gradient highlight line, scales up on hover ── */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-blue to-cyan scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out origin-bottom rounded-l-2xl z-20" />

      {/* ── Background Grid Drift (Micro-Interaction) ── */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #1E90FF 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
        animate={isHovered ? { backgroundPosition: ["0px 0px", "16px 16px"] } : { backgroundPosition: "0px 0px" }}
        transition={{ duration: 5, ease: "linear", repeat: Infinity }}
      />

      {/* ── Aurora Blob 1 - floats top-right, scales on hover ── */}
      <motion.div
        className="pointer-events-none absolute rounded-full bg-gradient-to-br from-blue/10 to-cyan/5 filter blur-[20px]"
        animate={{
          x: isHovered ? [0, 15, -10, 0] : [0, 8, -5, 0],
          y: isHovered ? [0, -10, 15, 0] : [0, -5, 8, 0],
          scale: isHovered ? 1.25 : 1,
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        style={{
          width: "110px",
          height: "110px",
          top: "-20px",
          right: "-20px",
        }}
      />

      {/* ── Aurora Blob 2 - floats bottom-left, scales on hover (indigo/pink accent) ── */}
      <motion.div
        className="pointer-events-none absolute rounded-full bg-gradient-to-br from-cyan/5 to-purple-400/5 filter blur-[25px]"
        animate={{
          x: isHovered ? [0, -15, 10, 0] : [0, -6, 5, 0],
          y: isHovered ? [0, 15, -10, 0] : [0, 8, -4, 0],
          scale: isHovered ? 1.2 : 1,
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{
          width: "90px",
          height: "90px",
          bottom: "-15px",
          left: "-15px",
        }}
      />

      {/* ── Smooth hover spotlight effect ── */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          background: `radial-gradient(180px circle at ${spot.x}px ${spot.y}px, rgba(30,144,255,0.07), transparent 65%)`,
        }}
      />

      {/* ── Icon Area with constant slow floating animation ── */}
      <motion.div
        className="card-icon mb-6 text-2xl flex items-center justify-center relative shadow-sm"
        style={{
          transform: "translateZ(30px)",
          transformStyle: "preserve-3d",
        }}
        // Constant slow vertical float
        animate={{ y: [0, -5, 0] }}
        transition={{
          duration: 3 + (index % 3) * 0.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.18, rotate: 6 }}
      >
        {/* Soft glowing icon circle pulse background */}
        <motion.div
          className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue/10 to-cyan/5 blur-[2px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{
            duration: 2.5 + (index % 2) * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <span className="relative z-10">{feature.icon}</span>
      </motion.div>

      {/* ── Title (pops out) ── */}
      <h3
        className="mb-2.5 text-[16px] font-bold text-navy group-hover:text-blue transition-colors duration-300 relative z-10"
      >
        {feature.title}
      </h3>

      {/* ── Description (depth) ── */}
      <p
        className="text-sm leading-relaxed text-slate-600 font-medium relative z-10"
      >
        {feature.description}
      </p>

      {/* ── Edge shimmer line sweep effect on mount or slowly repeating ── */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[1.5px] opacity-40 bg-gradient-to-r from-transparent via-cyan to-transparent"
        animate={{ x: ["-100%", "100%"] }}
        transition={{
          duration: 4.5 + index * 0.5,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 2,
        }}
      />
    </motion.div>
  );
}

export function ServicesWhyCards() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
    >
      {whyFeatures.map((f, i) => (
        <div key={f.title} className="group">
          <FeatureCard feature={f} index={i} />
        </div>
      ))}
    </motion.div>
  );
}
