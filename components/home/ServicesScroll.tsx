"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { services } from "@/content/site";

export function ServicesScroll() {
  const targetRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track the scroll progress of the target section
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });
  
  // Smooth the scroll progress to make the animation feel premium
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001
  });

  const homeServices = services.slice(0, 6);
  
  // Transform vertical scroll to horizontal scroll
  // We move the container to the left by an amount proportional to progress
  const x = useTransform(smoothProgress, [0, 1], ["0%", "-80%"]);

  return (
    <section ref={targetRef} className="relative bg-black text-white md:h-[300vh]">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center">
          <div className="absolute top-[20%] right-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-blue/10 blur-[120px]" />
          <div className="absolute bottom-[20%] left-[10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-[#9d00ff]/10 blur-[100px]" />
        </div>
      </div>

      {/* Desktop Horizontal Scroll */}
      <div className="hidden md:flex sticky top-0 h-screen items-center overflow-hidden z-10">
        
        {/* Section Header on the left */}
        <div className="w-[45vw] lg:w-[40vw] shrink-0 pl-8 lg:pl-20 pr-8 z-20 flex flex-col justify-center h-full bg-black/40 backdrop-blur-md border-r border-white/5 shadow-[20px_0_50px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col gap-4">
            <span className="text-blue font-bold tracking-widest uppercase text-sm">What We Do</span>
            <h2 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight">
              Our Core <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue to-cyan">Services</span>
            </h2>
            <p className="mt-2 text-gray-400 max-w-md text-base leading-relaxed">
              Comprehensive IT services designed to accelerate your digital transformation journey with premium architecture and enterprise-grade performance.
            </p>
          </div>
        </div>

        {/* Scrolling Cards */}
        <div className="flex-1 h-full overflow-hidden flex items-center">
          <motion.div ref={containerRef} style={{ x }} className="flex -space-x-6 lg:-space-x-12 pl-[10vw] pr-[30vw] items-center min-w-max">
          {homeServices.map((service, index) => (
            <ServiceCard 
              key={service.slug}
              service={service}
              index={index}
              totalItems={homeServices.length}
              smoothProgress={smoothProgress}
            />
          ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile Vertical Stacking Scroll */}
      <div className="md:hidden flex flex-col items-center z-10 relative pt-24 pb-20 px-4">
        <div className="flex flex-col gap-2 w-full mb-12 text-center">
          <span className="text-blue font-bold tracking-widest uppercase text-xs">What We Do</span>
          <h2 className="text-3xl font-extrabold text-white">
            Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue to-cyan">Services</span>
          </h2>
        </div>

        <div className="flex flex-col gap-6 w-full max-w-sm">
          {homeServices.map((service, index) => (
            <div 
              key={service.slug} 
              className="sticky top-[15vh]"
              style={{ zIndex: index + 10 }}
            >
              <div className="relative w-full aspect-[4/5] perspective-1000 shadow-2xl">
                <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-blue/40 via-[#9d00ff]/20 to-cyan/40 p-[1px]">
                  <div className="relative h-full w-full rounded-[23px] bg-black/80 backdrop-blur-3xl flex flex-col p-6 overflow-hidden">
                    <div className="relative z-10 flex flex-col h-full">
                      <span className="text-white/20 font-bold text-5xl mb-4 font-montserrat tracking-tighter">
                        0{index + 1}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-4">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-gray-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        href="/services"
                        className="mt-auto flex items-center gap-2 text-xs font-bold text-white"
                      >
                        Explore Service
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                          </svg>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ 
  service, 
  index, 
  totalItems, 
  smoothProgress 
}: { 
  service: typeof services[0]; 
  index: number; 
  totalItems: number; 
  smoothProgress: any; 
}) {
  const segment = 1 / (totalItems - 1);
  const centerProgress = index * segment;
  
  const scale = useTransform(
    smoothProgress,
    [centerProgress - segment, centerProgress, centerProgress + segment],
    [0.85, 1, 0.85]
  );
  
  const opacity = useTransform(
    smoothProgress,
    [centerProgress - segment, centerProgress, centerProgress + segment],
    [0.4, 1, 0.4]
  );

  const rotateY = useTransform(
    smoothProgress,
    [centerProgress - segment, centerProgress, centerProgress + segment],
    [15, 0, -15]
  );

  const zIndex = useTransform(
    smoothProgress,
    [centerProgress - segment, centerProgress, centerProgress + segment],
    [0, 10, 0]
  );

  return (
    <motion.div
      style={{ scale, opacity, rotateY, zIndex }}
      className="relative flex-shrink-0 w-[45vw] lg:w-[35vw] xl:w-[30vw] h-[60vh] max-h-[600px] perspective-1000"
    >
      <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-blue/40 via-[#9d00ff]/20 to-cyan/40 p-[1px]">
        <div className="relative h-full w-full rounded-[23px] bg-black/60 backdrop-blur-2xl flex flex-col p-8 md:p-10 overflow-hidden group hover:bg-black/40 transition-colors duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <div className="relative z-10 flex flex-col h-full">
            <span className="text-white/20 font-bold text-6xl mb-6 font-montserrat tracking-tighter">
              0{index + 1}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
              {service.title}
            </h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 flex-grow">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {service.tags.slice(0, 3).map((tag: string) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 backdrop-blur-md">
                  {tag}
                </span>
              ))}
            </div>
            <Link
              href="/services"
              className="mt-auto group/btn flex items-center gap-2 text-sm font-bold text-white hover:text-blue transition-colors w-max"
            >
              Explore Service
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 group-hover/btn:bg-blue/20 group-hover/btn:translate-x-1 transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}