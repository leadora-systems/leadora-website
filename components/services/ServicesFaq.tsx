"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useSpring, useMotionValue } from "framer-motion";

const faqs = [
  {
    question: "How long does a typical web development project take?",
    answer:
      "Most web projects range from 4–12 weeks depending on complexity. We provide a detailed timeline after discovery, with regular sprint demos so you're always informed of progress.",
  },
  {
    question: "Do you provide post-launch support and maintenance?",
    answer:
      "Yes. We offer flexible support plans — from basic monthly maintenance to fully managed services with SLA-backed uptime guarantees and 24/7 monitoring.",
  },
  {
    question: "Can you work with our existing technology stack?",
    answer:
      "Absolutely. Our team is experienced in integrating with existing systems, third-party services, and legacy infrastructure while modernizing incrementally with minimal disruption.",
  },
  {
    question: "Do you sign NDAs and confidentiality agreements?",
    answer:
      "Yes, we sign NDAs before any project discussions begin. Your business ideas, proprietary data, and intellectual property are always fully protected.",
  },
  {
    question: "What is your development process?",
    answer:
      "We follow an agile sprint methodology — Discovery, Planning, Design, Development, QA, and Deployment — with full transparency at every stage, weekly demos, and a dedicated project manager.",
  },
  {
    question: "How do you handle project pricing?",
    answer:
      "We offer both fixed-price and time-and-material models. After a free consultation, we provide a detailed proposal with clear scope, timeline, and cost breakdown — no hidden fees.",
  },
  {
    question: "Do you work with startups and early-stage companies?",
    answer:
      "Yes, we love working with startups. We offer MVP-focused packages designed to get you to market fast, then scale your product as your business grows.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

interface AccordionItemProps {
  faq: (typeof faqs)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionCard({ faq, index, isOpen, onToggle }: AccordionItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [spot, setSpot] = useState({ x: 0, y: 0 });

  // 3D Tilt variables for micro-interaction
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

    // Small tilt limits for minimal, elegant feel
    const normX = x / rect.width - 0.5;
    const normY = y / rect.height - 0.5;

    rotateX.set(-normY * 4);
    rotateY.set(normX * 4);
    setSpot({ x, y });
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -4, scale: 1.008 }}
      transition={{ type: "spring", stiffness: 380, damping: 24 }}
      style={{
        rotateX: rX,
        rotateY: rY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className={`relative rounded-2xl border bg-white/70 backdrop-blur-md overflow-hidden transition-all duration-300 select-none cursor-pointer
        ${
          isOpen
            ? "border-blue/30 bg-white/95 shadow-[0_12px_36px_rgba(30,144,255,0.12)]"
            : "border-glass-border shadow-sm hover:border-blue/20 hover:shadow-[0_8px_24px_rgba(30,144,255,0.06)]"
        }`}
    >
      {/* ── Active Border Gradient Glow Line ── */}
      {isOpen && (
        <motion.div
          layoutId="active-faq-line"
          className="absolute inset-x-0 top-0 h-[2px]"
          style={{
            background: "linear-gradient(90deg, #1E90FF, #00C2FF)",
            boxShadow: "0 0 10px 1.5px rgba(30,144,255,0.4)",
          }}
          transition={{ type: "spring", stiffness: 350, damping: 28 }}
        />
      )}

      {/* ── Hover Spotlight Glow ── */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          background: `radial-gradient(180px circle at ${spot.x}px ${spot.y}px, rgba(30,144,255,0.06), transparent 65%)`,
        }}
      />

      {/* Accordion Toggle Header */}
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-6 px-7 py-5.5 text-left bg-transparent border-0 outline-none"
      >
        <span
          className={`font-montserrat font-bold text-[15px] md:text-[16px] tracking-tight transition-colors duration-200 ${
            isOpen ? "text-blue" : "text-navy hover:text-blue"
          }`}
        >
          {faq.question}
        </span>

        {/* Bouncy Rotate Plus Icon */}
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 320, damping: 18 }}
          className={`shrink-0 flex h-8 w-8 items-center justify-center rounded-full border text-[17px] font-light transition-colors duration-300 ${
            isOpen
              ? "border-blue/25 bg-blue/5 text-blue"
              : "border-glass-border text-muted bg-white shadow-sm"
          }`}
        >
          +
        </motion.span>
      </button>

      {/* Expandable Answer content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div className="px-7 pb-6 text-sm leading-relaxed text-slate-600 font-medium border-t border-glass-border pt-4">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Subtle edge shimmer swipe line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[1px] opacity-30 bg-gradient-to-r from-transparent via-cyan/40 to-transparent"
        animate={{ x: ["-100%", "100%"] }}
        transition={{
          duration: 5.5 + index * 0.5,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 2.5,
        }}
      />
    </motion.div>
  );
}

export function ServicesFaq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="relative max-w-[860px] mx-auto mt-12 pb-16">
      
      {/* Ambient background particles/glows inside FAQ Section */}
      <div
        className="pointer-events-none absolute -left-20 top-20 w-80 h-80 rounded-full bg-blue/5 filter blur-[40px]"
        style={{ opacity: 0.7 }}
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-10 w-72 h-72 rounded-full bg-cyan/5 filter blur-[35px]"
        style={{ opacity: 0.6 }}
      />

      {/* Staggered accordion stack */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="flex flex-col gap-4"
      >
        {faqs.map((faq, i) => (
          <AccordionCard
            key={i}
            faq={faq}
            index={i}
            isOpen={open === i}
            onToggle={() => setOpen(open === i ? null : i)}
          />
        ))}
      </motion.div>

      {/* ── Optional "Still have questions?" CTA Card at bottom ── */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        className="mt-14 relative overflow-hidden rounded-2xl border border-glass-border bg-gradient-to-br from-[#F5F8FF] via-white to-white p-8 text-center shadow-md shadow-blue/5"
      >
        {/* Subtle orange accent shape */}
        <div
          className="pointer-events-none absolute -top-12 -right-12 w-44 h-44 rounded-full bg-orange/5 filter blur-[24px]"
        />

        <div className="relative z-10 max-w-[480px] mx-auto">
          <span className="text-[10px] font-extrabold uppercase tracking-[2.5px] text-orange bg-orange/5 border border-orange/10 px-2.5 py-1 rounded-full inline-block mb-3.5">
            Get Support
          </span>
          <h3 className="font-montserrat text-lg md:text-xl font-bold text-navy mb-2">
            Still have questions?
          </h3>
          <p className="text-xs leading-relaxed text-muted mb-6">
            Can&apos;t find the answer you are looking for? No worries! Speak directly with our engineering core to discuss your specific technical needs.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-grad px-6 py-3.5 text-xs font-bold text-white no-underline shadow-md shadow-blue/15 hover:shadow-blue/25 hover:brightness-110 hover:-translate-y-0.5 transition-all duration-300"
          >
            Ask Our Engineers
            <span className="inline-block transition-transform duration-200 hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
