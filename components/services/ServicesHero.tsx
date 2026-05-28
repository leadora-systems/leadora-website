"use client";

import { motion } from "framer-motion";

export function ServicesHero() {
  return (
    <div className="relative overflow-hidden px-0 pb-[80px] pt-[148px] text-center">

      {/* ── Aurora blob 1 — large blue, drifts top-left ── */}
      <motion.div
        className="pointer-events-none absolute rounded-full"
        style={{
          width: 640,
          height: 640,
          top: -220,
          left: -120,
          background:
            "radial-gradient(circle at 40% 40%, rgba(30,144,255,0.20) 0%, rgba(30,144,255,0.06) 45%, transparent 70%)",
          filter: "blur(64px)",
        }}
        animate={{ x: [0, 70, 20, 0], y: [0, 50, 90, 0], scale: [1, 1.08, 0.96, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── Aurora blob 2 — cyan, drifts top-right ── */}
      <motion.div
        className="pointer-events-none absolute rounded-full"
        style={{
          width: 560,
          height: 560,
          top: -180,
          right: -100,
          background:
            "radial-gradient(circle, rgba(0,194,255,0.17) 0%, rgba(0,194,255,0.05) 45%, transparent 68%)",
          filter: "blur(58px)",
        }}
        animate={{ x: [0, -55, -15, 0], y: [0, 60, 25, 0], scale: [1, 0.93, 1.1, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* ── Aurora blob 3 — indigo center pulse ── */}
      <motion.div
        className="pointer-events-none absolute rounded-full"
        style={{
          width: 480,
          height: 480,
          top: 0,
          left: "50%",
          marginLeft: -240,
          background:
            "radial-gradient(circle, rgba(90,100,255,0.09) 0%, transparent 65%)",
          filter: "blur(72px)",
        }}
        animate={{ scale: [1, 1.18, 1], opacity: [0.55, 1, 0.55] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* ── Aurora blob 4 — warm orange accent, bottom-right ── */}
      <motion.div
        className="pointer-events-none absolute rounded-full"
        style={{
          width: 320,
          height: 320,
          bottom: -40,
          right: "12%",
          background:
            "radial-gradient(circle, rgba(255,140,66,0.09) 0%, transparent 65%)",
          filter: "blur(54px)",
        }}
        animate={{ x: [0, 28, 0], y: [0, -22, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 5 }}
      />

      {/* ── Dot grid (masked, sits on top of blobs) ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(30,144,255,0.10) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          maskImage:
            "radial-gradient(ellipse 90% 75% at 50% 0%, black 10%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 75% at 50% 0%, black 10%, transparent 75%)",
        }}
      />

      {/* ── Pulsing top glow line ── */}
      <motion.div
        className="pointer-events-none absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 5%, rgba(30,144,255,0.5) 35%, rgba(0,194,255,0.7) 50%, rgba(30,144,255,0.4) 65%, transparent 95%)",
        }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── Horizontal scan beam ── */}
      <motion.div
        className="pointer-events-none absolute left-0 right-0"
        style={{
          height: 1,
          top: "28%",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(30,144,255,0.06) 30%, rgba(0,194,255,0.18) 50%, rgba(30,144,255,0.06) 70%, transparent 100%)",
        }}
        animate={{ opacity: [0, 0.8, 0], y: [0, 60, 120] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* ── Main content ── */}
      <div className="container relative z-10">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mb-5 inline-flex items-center gap-3"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            style={{ originX: 1 }}
            className="h-px w-8 bg-gradient-to-r from-transparent to-blue/60"
          />
          <span className="text-[11px] font-semibold uppercase tracking-[3.5px] text-blue">
            What We Build
          </span>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            style={{ originX: 0 }}
            className="h-px w-8 bg-gradient-to-l from-transparent to-blue/60"
          />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
          className="font-montserrat relative z-[1] text-[clamp(36px,5.5vw,70px)] font-extrabold leading-[1.08] text-navy"
        >
          Our{" "}
          <span className="services-hero-shine">Services</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.22 }}
          className="relative z-[1] mx-auto mt-6 max-w-[480px] text-[17px] leading-relaxed text-muted"
        >
          Comprehensive technology services tailored to your business objectives.
        </motion.p>

        {/* Category badges */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.36 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-2"
        >
          {["Web & Mobile", "Cloud & Azure", "AI Integration", "Spring Boot", "Digital Marketing"].map(
            (badge) => (
              <span
                key={badge}
                className="rounded-full border border-blue/12 bg-white/70 backdrop-blur-sm px-3.5 py-1.5 text-[11px] font-semibold tracking-wide text-blue/80"
              >
                {badge}
              </span>
            )
          )}
        </motion.div>
      </div>
    </div>
  );
}
