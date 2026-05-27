"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Layers } from "lucide-react";
import { Project } from "@/content/projects";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-500/10 text-green-600 border-green-500/20";
      case "Ongoing": return "bg-blue/10 text-blue border-blue/20";
      case "Enterprise": return "bg-purple-500/10 text-purple-600 border-purple-500/20";
      case "Startup": return "bg-orange/10 text-orange border-orange/20";
      default: return "bg-muted/10 text-muted border-muted/20";
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -12 }}
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-glass-border bg-white p-6 shadow-sm transition-all duration-500 hover:border-blue/40 hover:shadow-[0_32px_80px_rgba(30,144,255,0.15)]"
    >
      {/* Shine Effect */}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-full" />
      
      {/* Gradient Hover Border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue/30 to-cyan/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ padding: '1px', mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude' }} />

      <div className="relative z-10">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-lightgray shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
              {project.clientLogo ? (
                <Image src={project.clientLogo} alt={project.clientName} width={32} height={32} className="h-8 w-8 rounded-lg object-cover" />
              ) : (
                <span className="font-syne text-sm font-bold text-blue">{project.clientName.charAt(0)}</span>
              )}
            </div>
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-muted group-hover:text-blue transition-colors">{project.clientName}</h4>
              <div className={`mt-1 inline-block rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-tighter ${getStatusColor(project.status)}`}>
                {project.status}
              </div>
            </div>
          </div>
          <div className="rounded-full bg-lightgray p-2 text-muted transition-colors group-hover:bg-blue/10 group-hover:text-blue">
            <ExternalLink size={14} />
          </div>
        </div>

        {/* Image Preview */}
        <div className="relative mb-5 overflow-hidden rounded-xl">
          <Image 
            src={project.mainImage} 
            alt={project.title}
            width={600}
            height={192}
            className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        </div>

        {/* Content */}
        <h3 className="mb-2 font-syne text-lg font-bold text-navy group-hover:text-blue transition-colors">
          {project.title}
        </h3>
        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-navy/70">
          {project.summary}
        </p>

        {/* Footer */}
        <div className="flex flex-wrap items-center gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="rounded-md bg-lightgray px-2 py-1 text-[10px] font-semibold text-muted transition-colors group-hover:bg-blue/5 group-hover:text-blue">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-[10px] font-semibold text-muted">+{project.technologies.length - 3} more</span>
          )}
        </div>

        <div className="mt-4 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-blue opacity-0 transition-all group-hover:opacity-100">
          <Layers size={12} />
          <span>{project.industry}</span>
        </div>
      </div>
    </motion.div>
  );
}
