"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { technologies } from "@/content/site";

const row1 = technologies.slice(0, 9);
const row2 = technologies.slice(9);

function MarqueeRow({
  items,
  reverse = false,
  paused,
}: {
  items: typeof technologies;
  reverse?: boolean;
  paused: boolean;
}) {
  const duplicated = [...items, ...items];

  return (
    <div className="overflow-hidden py-1.5">
      <motion.div
        className="flex gap-3"
        style={{ width: "max-content" }}
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        // pause by overriding with current position when hovered
        {...(paused && { animate: { x: reverse ? "-25%" : "-25%" } })}
      >
        {duplicated.map((tech, i) => (
          <motion.div
            key={`${tech.name}-${i}`}
            whileHover={{ scale: 1.12, y: -4 }}
            transition={{ type: "spring", stiffness: 420, damping: 16 }}
            className="tech-card shrink-0 cursor-default"
            style={{ minWidth: "100px" }}
          >
            <div className="text-2xl mb-2">{tech.icon}</div>
            <div className="text-[12px] font-semibold text-navy">{tech.name}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export function ServicesTechMarquee() {
  const [paused, setPaused] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="mt-12 flex flex-col gap-4"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <MarqueeRow items={row1} paused={paused} />
      <MarqueeRow items={row2} reverse paused={paused} />
    </motion.div>
  );
}
