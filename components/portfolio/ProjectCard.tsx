"use client";

import { motion } from "framer-motion";
import { ExternalLink, Layers, ArrowRight } from "lucide-react";
import { Project } from "@/content/projects";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500/10 text-green-600 border-green-500/20";
      case "Ongoing":
        return "bg-blue/10 text-blue border-blue/20";
      case "Enterprise":
        return "bg-purple-500/10 text-purple-600 border-purple-500/20";
      case "Startup":
        return "bg-orange/10 text-orange border-orange/20";
      default:
        return "bg-muted/10 text-muted border-muted/20";
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -8 }}
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/20 bg-white/30 backdrop-blur-md p-5 shadow-[0_8px_32px_rgba(0,0,0,0.02)] transition-all duration-500 hover:border-blue/30 hover:shadow-[0_24px_50px_rgba(30,144,255,0.12)] hover:bg-white/40"
    >
      {/* Dynamic diagonal subtle color splash on hover */}
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue/5 blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Shine Sweep Effect */}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-full" />

      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          {/* Header Card Information */}
          <div className="mb-4.5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-lightgray shadow-inner border border-glass-border/30 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3">
                {project.clientLogo ? (
                  <Image
                    src={project.clientLogo}
                    alt={project.clientName}
                    width={28}
                    height={32}
                    className="rounded-lg object-cover"
                  />
                ) : (
                  <span className="font-syne text-xs font-bold text-blue">{project.clientName.charAt(0)}</span>
                )}
              </div>
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-muted/80 transition-colors group-hover:text-blue font-sans">
                  {project.clientName}
                </h4>
                <div className={`mt-1 inline-block rounded-full border px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider font-montserrat ${getStatusColor(project.status)}`}>
                  {project.status}
                </div>
              </div>
            </div>
            
            <div className="rounded-xl bg-lightgray p-2 text-muted/80 transition-all group-hover:bg-blue/10 group-hover:text-blue hover:scale-105">
              <ExternalLink size={13} />
            </div>
          </div>

          {/* Premium Image Container with Overlay */}
          <div className="relative h-44 mb-4.5 overflow-hidden rounded-2xl border border-glass-border/20 shadow-xs">
            <Image
              src={project.mainImage}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
            />
            {/* Soft dark visual gradient wrapper */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent opacity-60 group-hover:opacity-10 transition-opacity duration-500" />
            {/* Color burn overlay */}
            <div className="absolute inset-0 bg-blue/5 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Text Summary Content */}
          <h3 className="mb-2 font-montserrat text-lg font-bold text-navy leading-snug group-hover:text-blue transition-colors">
            {project.title}
          </h3>
          <p className="mb-4 line-clamp-2 text-xs leading-relaxed text-navy/70 font-sans">
            {project.summary}
          </p>
        </div>

        <div>
          {/* Technologies Used Bar */}
          <div className="flex flex-wrap items-center gap-1.5 mb-5">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="rounded-lg bg-lightgray px-2 py-1 text-[9px] font-bold text-muted transition-colors group-hover:bg-blue/5 group-hover:text-blue border border-glass-border/20 font-sans"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-[9px] font-extrabold text-muted/70 pl-0.5 font-sans">
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>

          {/* Premium Card Footer with Call To Action */}
          <div className="pt-3.5 border-t border-glass-border/50 flex items-center justify-between text-[10px] font-extrabold uppercase tracking-widest">
            <div className="flex items-center gap-1.5 text-muted transition-colors group-hover:text-navy font-sans">
              <Layers size={11} className="text-blue" />
              <span>{project.industry}</span>
            </div>

            <div className="flex items-center gap-1 text-blue font-montserrat tracking-wide">
              <span className="transition-all duration-300 border-b border-transparent group-hover:border-blue">
                Explore Case
              </span>
              <ArrowRight size={11} className="transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
