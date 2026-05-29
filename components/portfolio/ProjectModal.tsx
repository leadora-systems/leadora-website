"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Target, Zap, Users, Globe, ChevronRight, TrendingUp, Quote, Sparkles } from "lucide-react";
import { Project } from "@/content/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

// Map industry to best-fit service options
function getMatchingService(industry: string): string {
  switch (industry) {
    case "Ecommerce":
      return "SaaS & Product Engineering";
    case "Quick Commerce":
      return "SaaS & Product Engineering";
    case "Healthcare":
      return "AI Integration & Consulting";
    case "Fintech":
      return "SaaS & Product Engineering";
    case "Logistics":
      return "AI Integration & Consulting";
    case "Agriculture & Retail":
      return "Web Development";
    case "Digital Marketing 360":
      return "Digital Marketing 360";
    default:
      return "Web Development";
  }
}

// Helpers for initials-based avatars
function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function getAvatarColor(name: string) {
  const colors = [
    "bg-blue/10 text-blue border-blue/20",
    "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    "bg-purple-500/10 text-purple-600 border-purple-500/20",
    "bg-rose-500/10 text-rose-600 border-rose-500/20",
    "bg-cyan-500/10 text-cyan-600 border-cyan-500/20",
    "bg-amber-500/10 text-amber-600 border-amber-500/20",
  ];
  // Simple deterministic hash
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % colors.length;
  return colors[index];
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
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
              
              {/* Floating Header Info */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <div className="flex flex-wrap items-end justify-between gap-6">
                  <div>
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-lg border border-glass-border/30 overflow-hidden relative">
                        {project.clientLogo ? (
                          <Image
                            src={project.clientLogo}
                            alt={project.clientName}
                            fill
                            sizes="48px"
                            className="object-contain p-1"
                          />
                        ) : (
                          <span className="font-syne text-lg font-bold text-blue">{project.clientName.charAt(0)}</span>
                        )}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-blue font-sans">{project.clientName}</h4>
                        <div className="flex items-center gap-2 text-sm font-medium text-muted font-sans">
                          <span>{project.industry}</span>
                          <span className="h-1 w-1 rounded-full bg-muted/40" />
                          <span>{project.status}</span>
                        </div>
                      </div>
                    </div>
                    <h2 className="font-montserrat text-2xl font-extrabold text-navy md:text-3xl leading-tight">
                      {project.title}
                    </h2>
                  </div>
                  
                  {project.visitUrl && (
                    <a
                      href={project.visitUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary font-montserrat"
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
                {/* Project Overview */}
                <section>
                  <h3 className="mb-4 flex items-center gap-2 font-montserrat text-xl font-bold text-navy">
                    <Target className="text-blue" size={20} /> Overview
                  </h3>
                  <p className="text-[15px] leading-relaxed text-navy/80 font-sans">
                    {project.description}
                  </p>
                </section>

                {/* Metric Widgets Grid */}
                {project.metrics && project.metrics.length > 0 && (
                  <section className="pt-2">
                    <h3 className="mb-4 flex items-center gap-2 font-montserrat text-lg font-bold text-navy">
                      <TrendingUp className="text-blue" size={18} /> Performance Metrics
                    </h3>
                    <div className="grid gap-4 grid-cols-3">
                      {project.metrics.map((metric) => (
                        <div key={metric.label} className="p-4 rounded-2xl border border-blue/10 bg-gradient-to-br from-blue/[0.04] to-cyan/[0.01] text-center shadow-xs">
                          <div className="font-montserrat text-2xl font-extrabold text-blue leading-none">{metric.value}</div>
                          <div className="text-[10px] font-bold uppercase tracking-wider text-muted/80 mt-2 leading-tight font-sans">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Key Features */}
                <section>
                  <h3 className="mb-4 flex items-center gap-2 font-montserrat text-xl font-bold text-navy">
                    <Zap className="text-blue" size={20} /> Key Features
                  </h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5 rounded-xl border border-glass-border bg-lightgray/50 p-3.5 transition-colors hover:border-blue/20">
                        <ChevronRight size={16} className="mt-0.5 shrink-0 text-blue" />
                        <span className="text-sm font-medium text-navy/80 font-sans">{feature}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Challenge & Business Impact */}
                <div className="grid gap-8 sm:grid-cols-2">
                  <section>
                    <h3 className="mb-3 font-montserrat text-lg font-bold text-navy">The Challenge</h3>
                    <p className="text-sm leading-relaxed text-navy/70 font-sans">{project.challenges}</p>
                  </section>
                  <section>
                    <h3 className="mb-3 font-montserrat text-lg font-bold text-navy">Business Impact</h3>
                    <p className="text-sm leading-relaxed text-navy/70 font-sans">{project.impact}</p>
                  </section>
                </div>

                {/* Client Quote Pull Container */}
                {project.testimonial && (
                  <section className="relative rounded-3xl border border-blue/10 bg-gradient-to-br from-blue/[0.03] via-transparent to-transparent p-6 shadow-xs overflow-hidden mt-8">
                    <div className="absolute -right-6 -bottom-6 text-blue/[0.03] pointer-events-none select-none">
                      <Quote size={100} />
                    </div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue/10 text-blue mb-4 border border-blue/10">
                      <Quote size={14} />
                    </div>
                    <blockquote className="text-sm font-semibold italic leading-relaxed text-navy/80 mb-5 font-sans">
                      &ldquo;{project.testimonial.quote}&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-3 border-t border-glass-border/30 pt-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue text-white font-montserrat text-xs font-bold shadow-sm">
                        {project.testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-navy font-montserrat">{project.testimonial.author}</div>
                        <div className="text-[10px] font-bold text-muted uppercase tracking-wider font-sans mt-0.5">{project.testimonial.role}</div>
                      </div>
                    </div>
                  </section>
                )}

                {/* Contextual "Build a Similar Solution" Quick-CTA */}
                <section className="rounded-3xl border border-blue/15 bg-gradient-to-br from-blue/[0.08] via-cyan/[0.01] to-transparent p-6 md:p-8 shadow-xs relative overflow-hidden mt-10">
                  <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-blue/10 blur-2xl pointer-events-none"></div>
                  <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="max-w-md">
                      <div className="flex items-center gap-1.5">
                        <Sparkles size={12} className="text-blue animate-pulse" />
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue font-montserrat">
                          Partner with Leadora
                        </span>
                      </div>
                      <h4 className="font-montserrat text-lg md:text-xl font-bold text-navy mt-1.5 leading-snug">
                        Ready to scale like {project.clientName}?
                      </h4>
                      <p className="text-xs leading-relaxed text-muted font-sans mt-2">
                        Get a high-performance system customized for your workflow. We will pre-fill your inquiry for &quot;{getMatchingService(project.industry)}&quot; referencing this success story!
                      </p>
                    </div>
                    <a
                      href={`/contact?service=${encodeURIComponent(getMatchingService(project.industry))}&project=${encodeURIComponent(project.title)}`}
                      className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-grad text-white px-5 py-3.5 text-xs font-bold shadow-lg shadow-blue/20 transition-all hover:scale-102 hover:shadow-xl hover:shadow-blue/25 font-montserrat w-full md:w-auto text-center"
                    >
                      Build Similar Solution →
                    </a>
                  </div>
                </section>
              </div>

              {/* Right Column: Sidebar */}
              <div className="space-y-8 rounded-3xl border border-glass-border bg-lightgray/30 p-6 h-fit">
                {/* Tech Stack section */}
                <section>
                  <h4 className="mb-4 text-[10px] font-extrabold uppercase tracking-widest text-muted/80 font-montserrat">Technologies</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="rounded-lg border border-blue/10 bg-white px-3 py-1.5 text-xs font-semibold text-blue shadow-xs font-sans">
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>

                {/* Duration Section */}
                <section>
                  <h4 className="mb-4 text-[10px] font-extrabold uppercase tracking-widest text-muted/80 font-montserrat">Project Timeline</h4>
                  <div className="flex items-center gap-3 rounded-2xl bg-white p-3.5 shadow-xs border border-glass-border/20">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue/10 text-blue border border-blue/10">
                      <Calendar size={18} />
                    </div>
                    <div>
                      <div className="text-[10px] font-extrabold text-muted uppercase tracking-wider font-sans">Duration</div>
                      <div className="text-sm font-bold text-navy font-montserrat mt-0.5">{project.timeline}</div>
                    </div>
                  </div>
                </section>

                {/* Team Members Section */}
                {project.industry !== "Digital Marketing 360" && !project.industry.toLowerCase().includes("digital marketing") && (
                  <section>
                    <h4 className="mb-4 text-[10px] font-extrabold uppercase tracking-widest text-muted/80 font-montserrat">Team Members</h4>
                    <div className="space-y-3">
                      {project.team.map((member) => (
                        <div key={member.name} className="flex items-center gap-3 rounded-2xl bg-white p-3.5 shadow-xs border border-glass-border/20">
                          <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border font-montserrat text-xs font-extrabold ${getAvatarColor(member.name)}`}>
                            {getInitials(member.name)}
                          </div>
                          <div>
                            <div className="text-sm font-bold text-navy font-montserrat leading-tight">{member.name}</div>
                            <div className="text-[10px] font-bold text-blue uppercase tracking-wider font-sans mt-0.5">{member.role}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
