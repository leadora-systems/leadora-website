"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { 
  Search, 
  Terminal, 
  Layout, 
  Cloud, 
  Megaphone, 
  Handshake, 
  GraduationCap, 
  MapPin, 
  Briefcase, 
  Clock, 
  ArrowRight,
  Flame,
  Sparkles
} from "lucide-react";

// Enriched jobs data mapping with categories and high-tech specs
export const enrichedJobs = [
  {
    title: "Senior Java / Spring Boot Developer",
    category: "Technical",
    type: "Full-Time",
    experience: "3+ Years",
    location: "Hybrid (Bengaluru)",
    description: "Scale enterprise Java backends and coordinate high-throughput microservices pipelines with Spring Boot, Kafka, and Azure integration.",
    isUrgent: true,
    tag: "Back-End",
    icon: <Terminal className="w-5 h-5 text-cyan-600" />,
    glow: "rgba(0, 194, 255, 0.15)",
    tagClass: "text-cyan-600 bg-cyan-50 border-cyan-100",
    hoverBgClass: "hover:bg-cyan-50/30 hover:border-cyan-200/50",
    hoverTextClass: "group-hover:text-cyan-700",
    hoverIconBgClass: "group-hover:bg-cyan-50 group-hover:border-cyan-100",
    hoverBtnClass: "hover:bg-cyan-50 hover:text-cyan-700 hover:border-cyan-200"
  },
  {
    title: "React / Frontend Engineer",
    category: "Technical",
    type: "Full-Time",
    experience: "2+ Years",
    location: "Remote (India)",
    description: "Craft stunning, responsive, and performance-optimized user interfaces using React, Next.js, Tailwind CSS, and TypeScript.",
    isUrgent: true,
    tag: "Front-End",
    icon: <Layout className="w-5 h-5 text-blue-600" />,
    glow: "rgba(30, 144, 255, 0.05)",
    tagClass: "text-blue-600 bg-blue-50 border-blue-100",
    hoverBgClass: "hover:bg-blue-50/30 hover:border-blue-200/50",
    hoverTextClass: "group-hover:text-blue-700",
    hoverIconBgClass: "group-hover:bg-blue-50 group-hover:border-blue-100",
    hoverBtnClass: "hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200"
  },
  {
    title: "Azure Cloud / DevOps Engineer",
    category: "Technical",
    type: "Full-Time",
    experience: "2+ Years",
    location: "Hybrid (Bengaluru)",
    description: "Manage and secure enterprise infrastructure on Microsoft Azure. Automate CI/CD pipelines and orchestrate Kubernetes clusters.",
    isUrgent: false,
    tag: "DevOps",
    icon: <Cloud className="w-5 h-5 text-indigo-600" />,
    glow: "rgba(99, 102, 241, 0.05)",
    tagClass: "text-indigo-600 bg-indigo-50 border-indigo-100",
    hoverBgClass: "hover:bg-indigo-50/30 hover:border-indigo-200/50",
    hoverTextClass: "group-hover:text-indigo-700",
    hoverIconBgClass: "group-hover:bg-indigo-50 group-hover:border-indigo-100",
    hoverBtnClass: "hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200"
  },
  {
    title: "Digital Marketing Executive",
    category: "Marketing",
    type: "Full-Time",
    experience: "1+ Year",
    location: "Remote (India)",
    description: "Drive high-impact performance marketing campaigns, optimize SEO strategies, manage social networks, and accelerate brand growth.",
    isUrgent: false,
    tag: "Growth",
    icon: <Megaphone className="w-5 h-5 text-rose-600" />,
    glow: "rgba(244, 63, 94, 0.05)",
    tagClass: "text-rose-600 bg-rose-50 border-rose-100",
    hoverBgClass: "hover:bg-rose-50/30 hover:border-rose-200/50",
    hoverTextClass: "group-hover:text-rose-700",
    hoverIconBgClass: "group-hover:bg-rose-50 group-hover:border-rose-100",
    hoverBtnClass: "hover:bg-rose-50 hover:text-rose-700 hover:border-rose-200"
  },
  {
    title: "Business Development Executive",
    category: "Sales",
    type: "Full-Time",
    experience: "1+ Year",
    location: "Hybrid (Bengaluru)",
    description: "Build and manage strategic corporate relationships, identify client requirements, and introduce our cutting-edge software services.",
    isUrgent: false,
    tag: "B2B Sales",
    icon: <Handshake className="w-5 h-5 text-emerald-600" />,
    glow: "rgba(16, 185, 129, 0.05)",
    tagClass: "text-emerald-600 bg-emerald-50 border-emerald-100",
    hoverBgClass: "hover:bg-emerald-50/30 hover:border-emerald-200/50",
    hoverTextClass: "group-hover:text-emerald-700",
    hoverIconBgClass: "group-hover:bg-emerald-50 group-hover:border-emerald-100",
    hoverBtnClass: "hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200"
  },
  {
    title: "Software Engineering Intern",
    category: "Internship",
    type: "6 Months",
    experience: "Fresher OK",
    location: "Remote (India)",
    description: "Kickstart your engineering career. Collaborate on real software products under the direct mentorship of senior developers.",
    isUrgent: false,
    tag: "Internship",
    icon: <GraduationCap className="w-5 h-5 text-amber-500" />,
    glow: "rgba(245, 158, 11, 0.05)",
    tagClass: "text-amber-600 bg-amber-50 border-amber-100",
    hoverBgClass: "hover:bg-amber-50/30 hover:border-amber-200/50",
    hoverTextClass: "group-hover:text-amber-700",
    hoverIconBgClass: "group-hover:bg-amber-50 group-hover:border-amber-100",
    hoverBtnClass: "hover:bg-amber-50 hover:text-amber-700 hover:border-amber-200"
  }
];

const categories = ["All", "Technical", "Marketing", "Sales", "Internship"];

interface JobCardProps {
  job: typeof enrichedJobs[0];
}

function JobCard({ job }: JobCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.97, y: 35 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97, y: -25 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative flex flex-col lg:flex-row lg:items-center justify-between gap-6 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 transition-all duration-300 overflow-hidden cursor-pointer shadow-sm hover:-translate-y-1 hover:shadow-md ${job.hoverBgClass}`}
    >
      {/* Left blue accent line on hover */}
      <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-blue origin-center scale-y-0 transition-transform duration-300 group-hover:scale-y-100 z-20" />

      {/* Main content elements */}
      <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-6 z-10 relative pointer-events-none w-full">
        
        {/* Left Side: Icon, Tags, and Title */}
        <div className="flex-1 flex items-start gap-5">
          {/* Animated Icon Container */}
          <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 group-hover:scale-105 ${job.hoverIconBgClass}`}>
            {job.icon}
          </div>
          
          <div className="flex-1">
            {/* Top row: badge & urgency tag */}
            <div className="flex flex-wrap items-center gap-2 mb-2.5">
              <span className={`font-montserrat text-[9px] font-bold tracking-[1.5px] px-2.5 py-1 rounded uppercase border ${job.tagClass}`}>
                {job.tag}
              </span>
              {job.isUrgent && (
                <span className="flex items-center gap-1 font-montserrat text-[9px] font-bold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full border border-orange-100 uppercase tracking-wider animate-pulse">
                  <Flame className="w-3 h-3 text-orange-500 animate-bounce" style={{ animationDuration: '2s' }} /> Urgent
                </span>
              )}
            </div>

            {/* Title */}
            <h3 className={`font-montserrat text-lg md:text-xl font-bold text-navy leading-snug transition-colors duration-300 ${job.hoverTextClass}`}>
              {job.title}
            </h3>

            {/* Meta details badges */}
            <div className="flex flex-wrap gap-2 mt-3.5">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-500 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-xl">
                <Briefcase className="w-3 h-3 text-slate-400" /> {job.type}
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-500 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-xl">
                <Clock className="w-3 h-3 text-slate-400" /> {job.experience}
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-500 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-xl">
                <MapPin className="w-3 h-3 text-slate-400" /> {job.location}
              </span>
            </div>
          </div>
        </div>

        {/* Center: Job Description */}
        <div className="flex-1 lg:max-w-[38%] xl:max-w-[42%] flex items-center md:border-l md:border-slate-100 md:pl-6">
          <p className="text-slate-500 text-[13.5px] leading-relaxed group-hover:text-slate-600 transition-colors duration-300">
            {job.description}
          </p>
        </div>

        {/* Right: Apply Now CTA */}
        <div className="shrink-0 w-full md:w-auto md:pl-4 pointer-events-auto">
          <Link
            href="#apply"
            className={`group/btn relative block w-full md:w-36 text-center py-3 px-5 rounded-2xl font-montserrat text-xs font-bold uppercase tracking-wider overflow-hidden border border-slate-200 bg-slate-50 text-slate-600 transition-all duration-300 hover:scale-105 ${job.hoverBtnClass}`}
          >
            <span className="relative z-10 flex items-center justify-center gap-1.5">
              Apply Now <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </span>
          </Link>
        </div>

      </div>
    </motion.div>
  );
}

export function OpenRoles() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Filtering logic
  const filteredJobs = enrichedJobs.filter((job) => {
    const matchesSearch = 
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.tag.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = 
      activeCategory === "All" || job.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="section relative">
      {/* Background ambient lighting element specific to job section - Light theme */}
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-[450px] h-[450px] rounded-full bg-cyan-50/10 blur-[120px] opacity-[0.2] z-0" />

      <div className="container relative z-10">
        
        {/* Section Header Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <span className="font-montserrat text-[10px] font-bold tracking-[4px] text-blue uppercase bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
            EXPLORE OPPORTUNITIES
          </span>
          <h2 className="font-montserrat text-[clamp(28px,4vw,44px)] font-bold text-navy mt-4 leading-tight">
            Current <span className="bg-gradient-to-r from-blue via-cyan to-indigo-600 bg-clip-text text-transparent filter drop-shadow-[0_0_15px_rgba(0,194,255,0.2)]">Openings</span>
          </h2>
          <p className="max-w-[580px] mx-auto text-slate-500 mt-3.5 text-base leading-relaxed">
            Find your place in our hyper-growth crew. We seek builders ready to deploy code that changes businesses.
          </p>
        </motion.div>

        {/* High-tech Search & Filter Dashboard - Clean Light Theme */}
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="max-w-[850px] mx-auto mb-12 flex flex-col md:flex-row gap-5 items-stretch md:items-center justify-between p-4.5 rounded-2xl border border-slate-100 bg-white shadow-sm shadow-blue-500/[0.015]"
        >
          {/* Futuristic Search bar */}
          <div className="relative flex-1 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400 transition-colors duration-300 group-focus-within:text-cyan-500" />
            <input
              type="text"
              placeholder="Search positions, technologies, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 text-sm font-medium rounded-xl border border-slate-200 bg-slate-50 text-slate-800 outline-none transition-all duration-300 placeholder-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-500/5"
            />
          </div>

          {/* Interactive Category Filter Chips */}
          <div className="flex flex-wrap gap-2 items-center">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`font-montserrat px-4 py-2 rounded-xl text-xs font-semibold tracking-wide border transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-blue/10 to-cyan/10 border-cyan-500 text-cyan-600 shadow-sm"
                    : "border-slate-100 bg-slate-50 text-slate-500 hover:text-slate-800 hover:border-slate-200 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Jobs Responsive Grid Layout with Animated Transitions */}
        <div className="min-h-[300px]">
          <AnimatePresence mode="popLayout">
            {filteredJobs.length > 0 ? (
              <motion.div 
                layout
                className="flex flex-col gap-6 max-w-[1050px] mx-auto w-full"
              >
                {filteredJobs.map((job) => (
                  <JobCard key={job.title} job={job} />
                ))}
              </motion.div>
            ) : (
              <motion.div 
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fade-up-2 text-center py-16 p-8 rounded-2xl border border-slate-100 bg-slate-50/50 max-w-[550px] mx-auto"
              >
                <Sparkles className="w-10 h-10 text-slate-400 mx-auto mb-4" />
                <h3 className="font-montserrat text-lg font-semibold text-slate-700">No positions found</h3>
                <p className="text-slate-500 text-sm mt-2">
                  We couldn&apos;t find any roles matching &quot;{searchQuery}&quot; under &quot;{activeCategory}&quot;. Try adjusting your search query or filters.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
