"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef } from "react";

const SATELLITES = [
  { icon: "🤖", label: "AI Engine Model", desc: "Adaptive Neural Processing pipelines.", x: -145, y: -75, z: 75, color: "border-purple-300 bg-purple-50/90 text-purple-600" },
  { icon: "☁️", label: "Cloud Node Hub", desc: "Multi-cloud database syncing & storage.", x: 145, y: -65, z: 90, color: "border-blue-300 bg-blue-50/90 text-blue" },
  { icon: "🛡️", label: "Secure Vault Shield", desc: "Compliance-ready data encryption.", x: -130, y: 80, z: 85, color: "border-emerald-300 bg-emerald-50/90 text-emerald-600" },
  { icon: "⚡", label: "Runtime Spark Core", desc: "Event-driven sub-millisecond API response.", x: 135, y: 70, z: 100, color: "border-amber-300 bg-amber-50/90 text-amber-600" },
  { icon: "🔗", label: "Integration Gateway", desc: "REST & GraphQL webhook endpoints.", x: 0, y: -140, z: 60, color: "border-rose-300 bg-rose-50/90 text-rose-600" },
];

export function Services3DHub() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeNode, setActiveNode] = useState<string | null>(null);

  // Dynamic coordinates for interactive tilting of the entire hub
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  // Soft elastic spring feel
  const rX = useSpring(rotateX, { damping: 28, stiffness: 150 });
  const rY = useSpring(rotateY, { damping: 28, stiffness: 150 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = containerRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;

    // Scale to mild degree tilt limit (15deg)
    rotateX.set(-y / 12);
    rotateY.set(x / 12);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    setActiveNode(null);
  };

  return (
    <section className="section bg-lightgray/20 overflow-hidden relative border-y border-glass-border py-28">
      {/* Background Dot grid & light mesh beams */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(30,144,255,0.7) 1px, transparent 1px)",
          backgroundSize: "24px 28px",
        }}
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px]"
        style={{
          background:
            "radial-gradient(circle, rgba(0,194,255,0.07) 0%, rgba(30,144,255,0.04) 50%, transparent 72%)",
          filter: "blur(75px)",
        }}
      />

      <div className="container relative z-10 text-center">
        
        {/* Visual Title Header */}
        <div className="max-w-[700px] mx-auto mb-16">
          <span className="text-[11px] font-semibold uppercase tracking-[3px] text-blue bg-blue/5 border border-blue/10 px-3.5 py-1.5 rounded-full inline-block mb-4">
            Interactive System Blueprint
          </span>
          <h2 className="font-montserrat text-[clamp(28px,3.8vw,40px)] font-extrabold leading-[1.15] text-navy tracking-tight">
            The Engine of <span className="grad-text">Digital Innovation</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Move your cursor across the blueprint to tilt the system. Hover over any node module in the interactive constellation to test data pathway integration.
          </p>
        </div>

        {/* Big Centered 3D Orbit Hub Area */}
        <div className="flex items-center justify-center min-h-[500px] relative">
          
          <motion.div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX: rX,
              rotateY: rY,
              transformStyle: "preserve-3d",
              perspective: 1000,
            }}
            // Slow hovering float up and down for the whole 3D rig
            animate={{ y: [0, -14, 0] }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative flex items-center justify-center w-[440px] h-[440px] cursor-grab active:cursor-grabbing"
          >
            
            {/* Outer 3D orbital path (Cyan) */}
            <motion.div
              style={{
                width: 380,
                height: 380,
                border: "1.5px dashed rgba(0,194,255,0.25)",
                transform: "translateZ(-40px)",
                transformStyle: "preserve-3d",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              className="absolute rounded-full flex items-center justify-center"
            >
              {/* Outer Orbit Node */}
              <span
                className="absolute h-5 w-5 rounded-full border-[3px] border-white bg-cyan flex items-center justify-center"
                style={{
                  top: "-10px",
                  boxShadow: "0 0 16px 5px rgba(0,194,255,0.45)",
                }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white animate-ping" />
              </span>
              <span
                className="absolute h-4 w-4 rounded-full border-[2.5px] border-white bg-blue"
                style={{
                  bottom: "-8px",
                  boxShadow: "0 0 12px 3px rgba(30,144,255,0.4)",
                }}
              />
            </motion.div>

            {/* Inner 3D orbital path (Blue, opposite rotation) */}
            <motion.div
              style={{
                width: 260,
                height: 260,
                border: "1px dashed rgba(30,144,255,0.30)",
                transform: "translateZ(10px) rotateX(15deg)",
                transformStyle: "preserve-3d",
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute rounded-full flex items-center justify-center"
            >
              {/* Inner Orbit Node */}
              <span
                className="absolute h-4.5 w-4.5 rounded-full border-[2.5px] border-white bg-orange"
                style={{
                  right: "-9px",
                  boxShadow: "0 0 14px 3px rgba(255,140,66,0.5)",
                }}
              />
            </motion.div>

            {/* Cross spheres axes rings for fully modern Sphere cage blueprint look */}
            <div
              className="absolute rounded-full border border-blue/10 pointer-events-none"
              style={{
                width: 320,
                height: 320,
                transform: "rotateY(75deg) rotateX(15deg)",
              }}
            />
            <div
              className="absolute rounded-full border border-cyan/10 pointer-events-none"
              style={{
                width: 320,
                height: 320,
                transform: "rotateY(-75deg) rotateX(-15deg)",
              }}
            />

            {/* Glowing connecting data pathways (geometric lines) */}
            <div
              className="absolute w-[2px] h-[320px] bg-gradient-to-b from-blue/0 via-blue/20 to-blue/0 pointer-events-none"
              style={{ transform: "rotateZ(45deg) translateZ(-10px)" }}
            />
            <div
              className="absolute w-[2px] h-[320px] bg-gradient-to-b from-cyan/0 via-cyan/20 to-cyan/0 pointer-events-none"
              style={{ transform: "rotateZ(-45deg) translateZ(-10px)" }}
            />

            {/* Central Glowing AI / Cloud Core Globe */}
            <motion.div
              style={{
                width: 124,
                height: 124,
                transformStyle: "preserve-3d",
                transform: "translateZ(50px)",
              }}
              animate={activeNode ? { scale: 1.12, boxShadow: "0 0 60px rgba(0,194,255,0.45)" } : { scale: 1 }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
              className="absolute rounded-full bg-gradient-to-br from-blue via-cyan to-white p-[1.5px] shadow-[0_0_45px_rgba(0,194,255,0.30)] flex items-center justify-center"
            >
              <div className="absolute inset-[3.5px] rounded-full bg-navy/95 backdrop-blur-xl flex flex-col items-center justify-center text-center overflow-hidden">
                
                {/* Circuit Grid matrix overlay */}
                <div
                  className="absolute inset-0 opacity-[0.15] pointer-events-none"
                  style={{
                    backgroundImage: "radial-gradient(circle, #00C2FF 1px, transparent 1px)",
                    backgroundSize: "8px 8px",
                  }}
                />

                {/* Pulsing core glow */}
                <motion.div
                  className="absolute inset-4 rounded-full bg-gradient-to-br from-blue/20 to-cyan/15 blur-[4px]"
                  animate={{ scale: [0.85, 1.25, 0.85], opacity: [0.4, 0.9, 0.4] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Dynamic holographic labels */}
                <span className="text-[28px] relative z-10 drop-shadow-[0_0_10px_rgba(0,194,255,0.55)]">
                  {activeNode ? SATELLITES.find(s => s.label === activeNode)?.icon : "🤖"}
                </span>
                <span className="text-[8px] font-black tracking-[2.5px] text-cyan uppercase relative z-10 mt-1.5 max-w-[90px] truncate">
                  {activeNode ? SATELLITES.find(s => s.label === activeNode)?.label.split(" ")[0] : "AI CORE"}
                </span>
              </div>
            </motion.div>

            {/* Interactive Satellites (nodes popping out in 3D Space) */}
            {SATELLITES.map((sat) => (
              <motion.div
                key={sat.label}
                style={{
                  x: sat.x,
                  y: sat.y,
                  transformStyle: "preserve-3d",
                  transform: `translateZ(${sat.z}px)`,
                }}
                onMouseEnter={() => setActiveNode(sat.label)}
                onMouseLeave={() => setActiveNode(null)}
                whileHover={{ scale: 1.15, translateZ: sat.z + 20 }}
                className={`absolute flex flex-col items-center p-3 rounded-2xl border shadow-lg backdrop-blur-md cursor-pointer transition-all duration-300 w-[140px] text-center ${sat.color}`}
              >
                <span className="text-xl mb-1">{sat.icon}</span>
                <span className="text-[10px] font-extrabold tracking-tight leading-tight block truncate w-full">
                  {sat.label}
                </span>

                {/* Micro holographic description tooltip popping out on hover */}
                {activeNode === sat.label && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[160px] p-2 bg-navy/95 border border-cyan/20 rounded-lg shadow-xl text-left z-20"
                    style={{ transform: "translateZ(40px)" }}
                  >
                    <p className="text-[9.5px] text-cyan font-bold uppercase tracking-wider mb-0.5">Integration</p>
                    <p className="text-[10px] text-white leading-normal font-medium">{sat.desc}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}

          </motion.div>

        </div>
      </div>
    </section>
  );
}
