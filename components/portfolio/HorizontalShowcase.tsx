"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight, Layers } from "lucide-react";
import { Project, projects } from "@/content/projects";

interface HorizontalShowcaseProps {
  onSelectProject: (project: Project) => void;
}

export function HorizontalShowcase({ onSelectProject }: HorizontalShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1024); // Hydration safe default
  const dragX = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Responsive adjustments for window size
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // Auto-play feature (continuous)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleDragEnd = () => {
    const x = dragX.get();
    if (x < -50) {
      handleNext();
    } else if (x > 50) {
      handlePrev();
    }
    dragX.set(0);
  };

  // Status badge style helper
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-500/10 text-green-600 border-green-500/20";
      case "Ongoing": return "bg-blue/10 text-blue border-blue/20";
      case "Enterprise": return "bg-purple-500/10 text-purple-600 border-purple-500/20";
      case "Startup": return "bg-orange/10 text-orange border-orange/20";
      default: return "bg-muted/10 text-muted border-muted/20";
    }
  };

  // Get background glow colors depending on active project
  const getAmbientBg = (index: number) => {
    switch (index) {
      case 0: return "from-blue/10 via-cyan/5 to-transparent";
      case 1: return "from-purple-500/10 via-blue/5 to-transparent";
      case 2: return "from-blue/15 via-cyan/5 to-transparent";
      case 3: return "from-orange/10 via-blue/5 to-transparent";
      default: return "from-blue/10 via-cyan/5 to-transparent";
    }
  };

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;
  
  // Calculate dynamic card spacing offsets
  const cardOffset = isMobile ? windowWidth * 0.88 : isTablet ? 450 : 540;

  return (
    <div 
      className="relative w-full py-16 overflow-hidden select-none"
      ref={containerRef}
    >
      {/* Dynamic Ambient Background Glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center transition-all duration-1000 ease-in-out">
        <div className={`absolute w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full blur-[80px] md:blur-[120px] bg-gradient-to-br ${getAmbientBg(activeIndex)} opacity-70`} />
      </div>

      {/* Main Showcase Track */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Carousel Window */}
        <div className="w-full flex justify-center items-center px-4 md:px-0 min-h-[460px] md:min-h-[500px]">
          <div className="relative w-full max-w-5xl flex justify-center items-center">
            
            <AnimatePresence mode="popLayout">
              {projects.map((project, index) => {
                // Calculate relative position to active index
                let position = index - activeIndex;
                if (position < -1) position += projects.length;
                if (position > 1) position -= projects.length;

                const isActive = index === activeIndex;
                const isPrevious = position === -1;
                const isNext = position === 1;

                // Render only visible/neighboring cards to maintain performance
                if (!isActive && !isPrevious && !isNext) return null;

                const currentXOffset = isPrevious ? -cardOffset : isNext ? cardOffset : 0;

                return (
                  <motion.div
                    key={project.id}
                    drag={isActive ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    style={{ x: isActive ? dragX : 0 }}
                    onDragEnd={handleDragEnd}
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                      x: isPrevious ? -cardOffset - 50 : isNext ? cardOffset + 50 : 0,
                      zIndex: isActive ? 30 : 10,
                    }}
                    animate={{
                      opacity: isActive ? 1 : 0.25,
                      scale: isActive ? 1 : 0.84,
                      x: currentXOffset,
                      filter: isActive ? "blur(0px)" : "blur(4px)",
                      zIndex: isActive ? 30 : 10,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.7,
                      x: isPrevious ? -cardOffset - 100 : isNext ? cardOffset + 100 : 0,
                      zIndex: 5,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 240,
                      damping: 26,
                    }}
                    className={`absolute w-full max-w-[92%] md:max-w-4xl h-auto min-h-[400px] md:h-[450px] rounded-3xl border border-glass-border bg-white/90 backdrop-blur-xl p-1 shadow-xl transition-all duration-300 ${
                      isActive 
                        ? "cursor-grab active:cursor-grabbing border-blue/20 shadow-[0_32px_80px_rgba(30,144,255,0.18)] ring-1 ring-blue/5" 
                        : "pointer-events-none md:pointer-events-auto cursor-pointer border-transparent shadow-md hover:scale-95"
                    }`}
                    onClick={() => {
                      if (!isActive) {
                        setActiveIndex(index);
                      }
                    }}
                  >
                    {/* Inner Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-12 h-full w-full rounded-2xl overflow-hidden">
                      
                      {/* Left Column: Project Details */}
                      <div className="col-span-1 md:col-span-7 p-6 md:p-8 flex flex-col justify-between h-full bg-gradient-to-br from-white/40 via-white/20 to-transparent">
                        <div>
                          {/* Card Header Info */}
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-lightgray shadow-inner">
                                {project.clientLogo ? (
                                  <Image src={project.clientLogo} alt={project.clientName} width={24} height={24} className="h-6 w-6 rounded-lg object-cover" />
                                ) : (
                                  <span className="font-montserrat text-xs font-bold text-blue">{project.clientName.charAt(0)}</span>
                                )}
                              </div>
                              <div>
                                <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted">{project.clientName}</h4>
                                <div className="flex items-center gap-1.5 mt-0.5">
                                  <span className="text-[11px] font-medium text-navy/60">{project.industry}</span>
                                </div>
                              </div>
                            </div>

                            <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${getStatusColor(project.status)}`}>
                              {project.status}
                            </span>
                          </div>

                          {/* Titles */}
                          <h3 className="font-montserrat text-xl md:text-2xl lg:text-3xl font-extrabold text-navy leading-tight mb-3">
                            {project.title}
                          </h3>
                          <p className="text-xs md:text-sm lg:text-base leading-relaxed text-navy/80 mb-5 line-clamp-3 md:line-clamp-4">
                            {project.description}
                          </p>
                        </div>

                        {/* Footer & CTA */}
                        <div>
                          {/* Tech Stack Tags */}
                          <div className="flex flex-wrap gap-1.5 mb-6">
                            {project.technologies.slice(0, 4).map((tech) => (
                              <span key={tech} className="rounded-lg bg-lightgray/80 border border-glass-border px-2.5 py-1 text-[11px] font-semibold text-navy/70">
                                {tech}
                              </span>
                            ))}
                            {project.technologies.length > 4 && (
                              <span className="text-[10px] font-bold text-blue/70 self-center ml-1">+{project.technologies.length - 4} more</span>
                            )}
                          </div>

                          {/* CTA Button */}
                          {isActive && (
                            <motion.button
                              whileHover={{ x: 5 }}
                              onClick={(e) => {
                                e.stopPropagation();
                                onSelectProject(project);
                              }}
                              className="inline-flex items-center gap-2 rounded-xl bg-grad text-white px-5 py-3 text-xs font-bold shadow-lg shadow-blue/20 transition-all hover:opacity-90"
                            >
                              Explore Success Story <ArrowRight size={14} />
                            </motion.button>
                          )}
                        </div>
                      </div>

                      {/* Right Column: Hero Image Preview */}
                      <div className="col-span-1 md:col-span-5 relative h-48 md:h-full overflow-hidden border-t md:border-t-0 md:border-l border-glass-border">
                        <Image 
                          src={project.mainImage} 
                          alt={project.title} 
                          fill
                          sizes="(max-width: 768px) 100vw, 40vw"
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] ease-out hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-white via-white/10 to-transparent" />
                        
                        {/* Hover Overlay Visual Accent */}
                        <div className="absolute inset-0 bg-blue/10 mix-blend-overlay opacity-0 hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Industry Ribbon */}
                        <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 rounded-full bg-white/90 border border-glass-border px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-navy shadow-sm backdrop-blur-md">
                          <Layers size={11} className="text-blue" />
                          <span>{project.industry}</span>
                        </div>
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

          </div>
        </div>

        {/* Storytelling Progress Indicator & Controls */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between w-full max-w-5xl px-6 gap-6">
          
          {/* Animated Project Counter: e.g., 01 / 04 */}
          <div className="flex items-center gap-4">
            <span className="font-montserrat text-lg font-bold text-navy">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            <div className="w-24 h-1 bg-blue/10 rounded-full overflow-hidden relative">
              <motion.div 
                className="absolute top-0 bottom-0 left-0 bg-grad"
                initial={false}
                animate={{ width: `${((activeIndex + 1) / projects.length) * 100}%` }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
              />
            </div>
            <span className="font-montserrat text-xs font-bold text-muted">
              {String(projects.length).padStart(2, "0")}
            </span>
          </div>

          {/* Navigation Arrows & Clickable Pagination Dots */}
          <div className="flex items-center gap-6">
            {/* Clickable Pagination Dots */}
            <div className="flex items-center gap-1.5">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "w-6 bg-blue" : "w-2 bg-blue/20 hover:bg-blue/40"
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white border border-glass-border text-navy transition shadow-sm hover:bg-lightgray hover:border-blue/20"
                aria-label="Previous Project"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white border border-glass-border text-navy transition shadow-sm hover:bg-lightgray hover:border-blue/20"
                aria-label="Next Project"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
