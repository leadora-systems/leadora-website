"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Target, Zap, Users, Globe, ChevronRight } from "lucide-react";
import { Project } from "@/content/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-navy/40 backdrop-blur-md"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative h-full max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-3xl border border-glass-border bg-white shadow-2xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-6 top-6 z-50 rounded-full bg-white/10 p-2 text-navy backdrop-blur-md transition-colors hover:bg-red-500 hover:text-white"
          >
            <X size={20} />
          </button>

          <div className="h-full overflow-y-auto">
            {/* Banner Image */}
            <div className="relative h-64 w-full md:h-80">
              <Image
                src={project.mainImage}
                alt={project.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
              
              {/* Floating Header Info */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <div className="flex flex-wrap items-end justify-between gap-6">
                  <div>
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-lg">
                        <span className="font-montserrat text-lg font-bold text-blue">{project.clientName.charAt(0)}</span>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-blue">{project.clientName}</h4>
                        <div className="flex items-center gap-2 text-sm font-medium text-muted">
                          <span>{project.industry}</span>
                          <span className="h-1 w-1 rounded-full bg-muted/40" />
                          <span>{project.status}</span>
                        </div>
                      </div>
                    </div>
                    <h2 className="font-montserrat text-3xl font-extrabold text-navy md:text-4xl">
                      {project.title}
                    </h2>
                  </div>
                  
                  {project.visitUrl && (
                    <a
                      href={project.visitUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      Visit Project <Globe size={16} className="ml-2" />
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="grid gap-12 p-8 md:grid-cols-[1.8fr_1fr] md:p-12">
              {/* Left Column: Content */}
              <div className="space-y-10">
                <section>
                  <h3 className="mb-4 flex items-center gap-2 font-montserrat text-xl font-bold text-navy">
                    <Target className="text-blue" size={20} /> Overview
                  </h3>
                  <p className="text-[15px] leading-relaxed text-navy/80">
                    {project.description}
                  </p>
                </section>

                <section>
                  <h3 className="mb-4 flex items-center gap-2 font-montserrat text-xl font-bold text-navy">
                    <Zap className="text-blue" size={20} /> Key Features
                  </h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5 rounded-xl border border-glass-border bg-lightgray/50 p-3.5 transition-colors hover:border-blue/20">
                        <ChevronRight size={16} className="mt-0.5 shrink-0 text-blue" />
                        <span className="text-sm font-medium text-navy/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <div className="grid gap-8 sm:grid-cols-2">
                  <section>
                    <h3 className="mb-3 font-montserrat text-lg font-bold text-navy">The Challenge</h3>
                    <p className="text-sm leading-relaxed text-navy/70">{project.challenges}</p>
                  </section>
                  <section>
                    <h3 className="mb-3 font-montserrat text-lg font-bold text-navy">Business Impact</h3>
                    <p className="text-sm leading-relaxed text-navy/70">{project.impact}</p>
                  </section>
                </div>
              </div>

              {/* Right Column: Sidebar */}
              <div className="space-y-8 rounded-2xl border border-glass-border bg-lightgray/30 p-6">
                <section>
                  <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-muted">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="rounded-lg border border-blue/10 bg-white px-3 py-1.5 text-xs font-semibold text-blue shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>

                <section>
                  <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-muted">Project Timeline</h4>
                  <div className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue/10 text-blue">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-muted uppercase">Duration</div>
                      <div className="text-sm font-bold text-navy">{project.timeline}</div>
                    </div>
                  </div>
                </section>

                <section>
                  <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-muted">Team Members</h4>
                  <div className="space-y-3">
                    {project.team.map((member) => (
                      <div key={member.name} className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy/5 text-navy">
                          <Users size={20} />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-navy">{member.name}</div>
                          <div className="text-[11px] font-bold text-blue uppercase tracking-wider">{member.role}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
