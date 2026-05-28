"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { timeline } from "@/content/site";

export function AnimatedTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track vertical scroll progress inside the timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Grow the vertical line as user scrolls down
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative mt-12 pl-8 border-l-0">
      {/* Background track for the vertical line */}
      <div className="absolute bottom-0 left-0 top-0 w-0.5 rounded-sm bg-blue/10" />

      {/* The animated vertical gradient line */}
      <motion.div
        className="absolute left-0 top-0 w-0.5 rounded-sm bg-gradient-to-b from-blue to-cyan origin-top"
        style={{ height: lineHeight }}
      />

      <div className="flex flex-col gap-12">
        {timeline.map((item, index) => (
          <motion.div
            key={item.year}
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Animated Dot */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: index * 0.1 + 0.2,
              }}
              className="absolute -left-[39px] top-1 h-3.5 w-3.5 rounded-full border-[3px] border-white bg-blue"
              style={{ boxShadow: "0 0 0 3px rgba(30, 144, 255, 0.2)" }}
            />

            {/* Content */}
            <div className="text-[11px] font-bold tracking-widest text-blue mb-1">
              {item.year}
            </div>
            <div className="font-montserrat text-lg font-bold text-navy mb-2">
              {item.title}
            </div>
            <div className="text-sm leading-relaxed text-muted">
              {item.description}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
