"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useSpring, useMotionValue } from "framer-motion";

const PARTICLES = [
  { size: 5, x: "12%", y: "15%", dur: 8, delay: 0 },
  { size: 4, x: "85%", y: "20%", dur: 10, delay: 1.5 },
  { size: 6, x: "20%", y: "75%", dur: 9, delay: 0.8 },
  { size: 4, x: "78%", y: "80%", dur: 12, delay: 2.2 },
  { size: 5, x: "48%", y: "10%", dur: 7, delay: 1 },
];

export function ServicesCta() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="section py-24 overflow-hidden relative">
      <div className="container max-w-[1200px]">
        <div
          className="relative rounded-[32px] border border-blue/15 bg-gradient-to-br from-white via-[#F5F8FF]/80 to-[#EDF2FF]/60 px-8 py-20 md:py-22 text-center shadow-[0_24px_80px_rgba(30,144,255,0.06)] select-none overflow-hidden"
        >
          {/* ── Background Grid Pattern ── */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(circle, #1E90FF 1.5px, transparent 1.5px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* ── Immersive Ambient Auroras inside CTA ── */}
          <div
            className="pointer-events-none absolute w-[420px] h-[420px] -left-32 -top-32 rounded-full bg-blue/5 opacity-60 filter blur-[50px]"
          />
          <div
            className="pointer-events-none absolute w-[360px] h-[300px] -right-24 -top-16 rounded-full bg-orange/4 opacity-40 filter blur-[40px]"
          />
          <div
            className="pointer-events-none absolute w-[500px] h-[250px] left-1/2 bottom-0 -translate-x-1/2 rounded-full bg-cyan/5 opacity-50 filter blur-[45px]"
          />

          {/* ── Floating Glowing Energy Orb ── */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative mx-auto mb-8 h-24 w-24 flex items-center justify-center pointer-events-none"
          >
            {/* Pulsing Outer Shield Ring */}
            <motion.div
              style={{
                border: "2px solid rgba(0,194,255,0.18)",
                boxShadow: "0 0 16px rgba(0,194,255,0.12)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full"
            />
            {/* Inverse Orbit Ring */}
            <motion.div
              style={{
                border: "1.5px dashed rgba(30,144,255,0.18)",
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-2.5 rounded-full"
            />
            {/* Core Energy sphere */}
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 24px 4px rgba(0,194,255,0.25)",
                  "0 0 35px 8px rgba(30,144,255,0.40)",
                  "0 0 24px 4px rgba(0,194,255,0.25)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="h-12 w-14 rounded-full bg-gradient-to-br from-blue via-cyan to-white flex items-center justify-center p-[1px]"
            >
              <div className="h-full w-full rounded-full bg-navy flex items-center justify-center">
                <span className="text-lg relative z-10 drop-shadow-[0_0_8px_rgba(0,194,255,0.6)]">⚡</span>
              </div>
            </motion.div>

            {/* Orbiting Satellite Spark */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 pointer-events-none"
            >
              <span
                className="absolute top-0 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full border-2 border-white bg-cyan shadow-[0_0_10px_rgba(0,194,255,0.7)]"
              />
            </motion.div>
          </motion.div>

          {/* ── Floating micro-particles inside board ── */}
          {PARTICLES.map((p, i) => (
            <motion.span
              key={i}
              className="pointer-events-none absolute rounded-full bg-blue/20"
              style={{
                width: p.size,
                height: p.size,
                top: p.y,
                left: p.x,
                boxShadow: `0 0 ${p.size * 2}px ${p.size / 2}px rgba(30,144,255,0.2)`,
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: p.dur,
                repeat: Infinity,
                ease: "easeInOut",
                delay: p.delay,
              }}
            />
          ))}

          {/* ── Glassmorphic floating shapes for depth layer ── */}
          <motion.div
            className="pointer-events-none absolute rounded-xl border border-white/30 bg-white/15 backdrop-blur-sm"
            style={{
              width: 44,
              height: 44,
              top: "22%",
              left: "14%",
              transform: "rotate(15deg)",
            }}
            animate={{ rotate: [15, 30, 15], y: [0, -8, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="pointer-events-none absolute rounded-xl border border-white/30 bg-white/15 backdrop-blur-sm"
            style={{
              width: 38,
              height: 38,
              bottom: "20%",
              right: "12%",
              transform: "rotate(-25deg)",
            }}
            animate={{ rotate: [-25, -10, -25], y: [0, -6, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />

          {/* ── Heading Content ── */}
          <div className="relative z-10 max-w-[620px] mx-auto">
            {/* Preheading Pill */}
            <span
              className="inline-block rounded-full border border-blue/15 bg-blue/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[2.5px] text-blue shadow-sm mb-4"
            >
              Collaborate With Us
            </span>

            {/* Glowing Gradient Title */}
            <h2
              className="font-montserrat relative text-[38px] md:text-[52px] font-extrabold leading-[1.08] text-navy tracking-tight"
            >
              Have a Project in <br />
              <span className="services-hero-shine block mt-2 drop-shadow-[0_2px_10px_rgba(0,194,255,0.15)]">
                Mind?
              </span>
            </h2>

            {/* Glowing accent underline marker */}
            <div
              className="mx-auto my-6 h-[2px] w-24 rounded-full bg-gradient-to-r from-transparent via-blue to-cyan shadow-[0_0_8px_rgba(30,144,255,0.6)]"
            />

            {/* Subheading detail */}
            <p
              className="text-[15px] md:text-[16px] leading-relaxed text-slate-600 font-medium mb-10 max-w-[500px] mx-auto"
            >
              Let&apos;s discuss how we can help you build something remarkable. Schedule a free 30-minute discovery call with our architectural board.
            </p>

            {/* ── Premium Glow Interactive CTA Button ── */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="inline-block relative group"
            >
              {/* Outer pulsing neon shadow shield aura on button hover */}
              <div
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue to-cyan opacity-0 group-hover:opacity-100 group-hover:blur-[12px] transition-all duration-350"
              />

              <Link
                href="/contact"
                className="btn-primary relative z-10 font-bold tracking-wide no-underline flex items-center gap-2"
                style={{
                  padding: "16px 36px",
                  borderRadius: "14px",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                {/* Sweep hover shine flare overlay inside button */}
                <div
                  className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:animate-[shine_1.2s_ease-in-out]"
                  style={{ content: "''" }}
                />
                
                Book a Free Consultation
                
                {/* Arrow slider icon */}
                <motion.span
                  className="inline-block"
                  animate={isHovered ? { x: 5 } : { x: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 12 }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
