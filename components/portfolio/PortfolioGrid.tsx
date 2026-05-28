"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, SlidersHorizontal, X, Check, Cpu, ChevronDown, ChevronUp, Sliders } from "lucide-react";
import { projects, Project } from "@/content/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { HorizontalShowcase } from "./HorizontalShowcase";

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  const [techFilterMode, setTechFilterMode] = useState<"and" | "or">("or");
  const [showTechDrawer, setShowTechDrawer] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Dynamically extract categories that have active projects, plus 'All'
  const categories = useMemo(() => {
    const industries = Array.from(new Set(projects.map((p) => p.industry)));
    return ["All", ...industries];
  }, []);

  // Compute counts for each category to show in the filter tabs
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: projects.length };
    projects.forEach((project) => {
      counts[project.industry] = (counts[project.industry] || 0) + 1;
    });
    return counts;
  }, []);

  // Compute all unique technologies and their project occurrences
  const uniqueTechnologies = useMemo(() => {
    const techs = new Set<string>();
    projects.forEach((p) => p.technologies.forEach((t) => techs.add(t)));
    return Array.from(techs).sort();
  }, []);

  const techCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    projects.forEach((p) => {
      p.technologies.forEach((t) => {
        counts[t] = (counts[t] || 0) + 1;
      });
    });
    return counts;
  }, []);

  // Handle technology toggling
  const handleToggleTech = (tech: string) => {
    setSelectedTechs((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  // Filter projects based on multi-dimensional rules (Category + Technologies + Search text)
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // 1. Match Industry/Category
      const matchesCategory = activeCategory === "All" || project.industry === activeCategory;

      // 2. Match Technology Multi-select
      let matchesTech = true;
      if (selectedTechs.length > 0) {
        if (techFilterMode === "and") {
          matchesTech = selectedTechs.every((tech) => project.technologies.includes(tech));
        } else {
          matchesTech = selectedTechs.some((tech) => project.technologies.includes(tech));
        }
      }

      // 3. Match Text Search query
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesTech && matchesSearch;
    });
  }, [activeCategory, selectedTechs, techFilterMode, searchQuery]);

  const hasActiveFilters = activeCategory !== "All" || selectedTechs.length > 0 || searchQuery !== "";

  // Dynamic search active indicator (user is actively searching or filtering)
  const isUserSearching = searchQuery !== "" || selectedTechs.length > 0 || activeCategory !== "All";

  const handleResetAll = () => {
    setActiveCategory("All");
    setSelectedTechs([]);
    setSearchQuery("");
  };

  return (
    <section className="section bg-gradient-to-b from-lightgray/30 via-white to-lightgray/10 py-16 overflow-hidden">
      
      {/* Interactive Automated Sliding Showcase */}
      <div className="mb-16">
        <div className="container mb-8">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue"></span>
            </span>
            <h3 className="font-montserrat text-[10px] font-extrabold uppercase tracking-widest text-blue">
              Featured Showcases
            </h3>
          </div>
          <h2 className="font-montserrat text-2xl md:text-3xl lg:text-4xl font-extrabold text-navy mt-1 tracking-tight">
            Successful <span className="grad-text">Stories</span>
          </h2>
        </div>
        
        <div className="w-full max-w-[100vw]">
          <HorizontalShowcase onSelectProject={setSelectedProject} />
        </div>
      </div>

      <div className="container">
        <div className="border-t border-glass-border/60 pt-14 mb-10">
          <div className="flex items-center gap-2">
            <h3 className="font-montserrat text-[10px] font-extrabold uppercase tracking-widest text-muted/75">
              Explore All Case Studies
            </h3>
          </div>
        </div>
        
        {/* Main Controls Layout */}
        <div className="mb-6 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          
          {/* Search Box with Interactive Clear Action */}
          <div className="relative max-w-md flex-1 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted/80 transition-colors group-focus-within:text-blue" size={18} />
            <input
              type="text"
              placeholder="Search projects, clients, or technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-glass-border bg-white py-3 pl-12 pr-10 text-sm text-navy outline-none transition-all placeholder:text-muted/60 focus:border-blue focus:ring-4 focus:ring-blue/5 shadow-[0_4px_12px_rgba(0,0,0,0.01)] font-sans"
            />
            {searchQuery && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 rounded-lg bg-lightgray/50 p-1 text-muted hover:text-navy transition-colors"
                title="Clear Search"
              >
                <X size={14} />
              </motion.button>
            )}
          </div>

          {/* Category Filtering Tab Bar */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-muted/85 font-montserrat">
              <SlidersHorizontal size={13} className="text-blue" />
              <span>Industry:</span>
            </div>
            
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                const count = categoryCounts[cat] || 0;
                
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`group/btn relative overflow-hidden rounded-xl px-4 py-2.5 text-xs font-bold transition-all border font-montserrat ${
                      isActive
                        ? "bg-blue border-blue text-white shadow-lg shadow-blue/25"
                        : "bg-white border-glass-border text-muted hover:border-blue/30 hover:text-blue hover:shadow-sm"
                    }`}
                  >
                    <span className="relative z-10 flex items-center gap-1.5">
                      {cat}
                      <span className={`inline-flex items-center justify-center px-1.5 py-0.5 rounded-md text-[9px] font-extrabold transition-colors ${
                        isActive 
                          ? "bg-white/20 text-white" 
                          : "bg-lightgray text-muted group-hover/btn:bg-blue/10 group-hover/btn:text-blue"
                      }`}>
                        {count}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Dynamic Expandable Tech Filter Toggle Bar */}
        <div className="mb-8">
          <button
            onClick={() => setShowTechDrawer(!showTechDrawer)}
            className={`flex items-center justify-between w-full rounded-2xl border p-4 transition-all ${
              showTechDrawer || selectedTechs.length > 0
                ? "bg-white border-blue/25 shadow-sm text-blue"
                : "bg-white/50 border-glass-border/70 hover:border-blue/20 hover:bg-white text-muted hover:text-navy"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                selectedTechs.length > 0 ? "bg-blue/10 text-blue" : "bg-lightgray text-muted"
              }`}>
                <Cpu size={16} />
              </div>
              <div className="text-left">
                <span className="text-xs font-extrabold uppercase tracking-wider font-montserrat block">
                  Filter by Technology Stack
                </span>
                <span className="text-[11px] text-muted font-sans font-medium mt-0.5 block">
                  {selectedTechs.length > 0
                    ? `Selected: ${selectedTechs.join(", ")}`
                    : "Refine results by specific frameworks, cloud services, and languages"}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {selectedTechs.length > 0 && (
                <span className="bg-blue text-white font-montserrat text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-sm">
                  {selectedTechs.length} Active
                </span>
              )}
              {showTechDrawer ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
          </button>

          {/* Animated Drawer Cabinet for Advanced Technologies */}
          <AnimatePresence>
            {showTechDrawer && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="bg-white border-x border-b border-glass-border/60 rounded-b-2xl p-5 shadow-[0_12px_24px_rgba(0,0,0,0.015)]">
                  
                  {/* Filter Configuration Mode (AND / OR) */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-glass-border/40 pb-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Sliders size={14} className="text-blue" />
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-navy font-montserrat">
                        Multi-Selection Matching Logic:
                      </span>
                    </div>

                    <div className="flex rounded-lg bg-lightgray p-0.5 border border-glass-border text-[10px] font-sans">
                      <button
                        type="button"
                        onClick={() => setTechFilterMode("or")}
                        className={`px-3 py-1.5 rounded transition-all font-bold ${
                          techFilterMode === "or"
                            ? "bg-blue text-white shadow-sm"
                            : "text-muted hover:text-navy"
                        }`}
                      >
                        Match Any (OR)
                      </button>
                      <button
                        type="button"
                        onClick={() => setTechFilterMode("and")}
                        className={`px-3 py-1.5 rounded transition-all font-bold ${
                          techFilterMode === "and"
                            ? "bg-blue text-white shadow-sm"
                            : "text-muted hover:text-navy"
                        }`}
                      >
                        Match All (AND)
                      </button>
                    </div>
                  </div>

                  {/* Technology Tag Cloud Grid */}
                  <div className="flex flex-wrap gap-2">
                    {uniqueTechnologies.map((tech) => {
                      const isSelected = selectedTechs.includes(tech);
                      const count = techCounts[tech] || 0;

                      return (
                        <button
                          key={tech}
                          onClick={() => handleToggleTech(tech)}
                          className={`flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-semibold transition-all border ${
                            isSelected
                              ? "bg-blue/5 border-blue text-blue shadow-xs font-bold"
                              : "bg-lightgray/50 border-glass-border/40 text-muted hover:bg-lightgray hover:border-glass-border/80 hover:text-navy"
                          }`}
                        >
                          {isSelected && <Check size={11} className="stroke-[3]" />}
                          <span className="font-sans">{tech}</span>
                          <span className={`inline-flex h-4.5 min-w-4.5 items-center justify-center px-1 rounded text-[9px] font-extrabold ${
                            isSelected ? "bg-blue text-white" : "bg-white text-muted border border-glass-border/30"
                          }`}>
                            {count}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Reset only technologies trigger */}
                  {selectedTechs.length > 0 && (
                    <div className="flex justify-end mt-4 pt-3.5 border-t border-glass-border/30">
                      <button
                        onClick={() => setSelectedTechs([])}
                        className="text-xs font-bold text-muted hover:text-navy transition-colors font-montserrat flex items-center gap-1"
                      >
                        <X size={12} /> Clear Selected Technologies
                      </button>
                    </div>
                  )}

                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Dynamic Results Count & Active Filter Tags Row */}
        <div className="mb-8 flex flex-col gap-4 border-b border-glass-border/70 pb-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="text-xs font-bold uppercase tracking-wider text-muted font-sans flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue"></span>
              <span>
                Showing <span className="text-navy">{filteredProjects.length}</span> of{" "}
                <span className="text-navy">{projects.length}</span> Success Stories
              </span>
            </div>
            
            {hasActiveFilters && (
              <button
                onClick={handleResetAll}
                className="text-xs font-bold text-blue hover:text-blue/80 transition-colors hover:underline font-montserrat flex items-center gap-1 self-start sm:self-auto"
              >
                Reset All Filters
              </button>
            )}
          </div>

          {/* Dismissible Active Tag Badges */}
          {hasActiveFilters && (
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted/70 font-sans mr-1">
                Active Filters:
              </span>
              
              {/* Category tag */}
              {activeCategory !== "All" && (
                <div className="flex items-center gap-1.5 rounded-lg bg-blue/10 border border-blue/20 text-blue font-montserrat text-[10px] font-extrabold px-2.5 py-1">
                  <span>Industry: {activeCategory}</span>
                  <button onClick={() => setActiveCategory("All")} className="hover:text-navy-dark">
                    <X size={10} className="stroke-[3]" />
                  </button>
                </div>
              )}

              {/* Technologies tags */}
              {selectedTechs.map((tech) => (
                <div key={tech} className="flex items-center gap-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 font-sans text-[10px] font-bold px-2.5 py-1">
                  <span>{tech}</span>
                  <button onClick={() => handleToggleTech(tech)} className="hover:text-emerald-800">
                    <X size={10} className="stroke-[3]" />
                  </button>
                </div>
              ))}

              {/* Text search tag */}
              {searchQuery && (
                <div className="flex items-center gap-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-600 font-sans text-[10px] font-bold px-2.5 py-1">
                  <span>Search: &quot;{searchQuery}&quot;</span>
                  <button onClick={() => setSearchQuery("")} className="hover:text-purple-800">
                    <X size={10} className="stroke-[3]" />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Project Showcase Grid */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {!isUserSearching ? (
              <motion.div
                key="search-prompt"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center py-16 px-6 text-center rounded-3xl border border-dashed border-blue/20 bg-blue/[0.01]"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue/10 text-blue border border-blue/10">
                  <Search size={22} className="animate-pulse" />
                </div>
                <h4 className="font-montserrat text-lg font-bold text-navy">Search to Reveal Case Studies</h4>
                <p className="mt-2 text-xs text-muted max-w-md font-sans leading-relaxed">
                  We have delivered robust products across many verticals. To explore our dynamic engineering portfolio, please type in the search engine above or filter by an industry or tech stack keyword!
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="grid-results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onClick={() => setSelectedProject(project)}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Professional Badges for Client Trust & Project Success */}
        {!isUserSearching && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-14 pt-10 border-t border-glass-border/50 space-y-12"
          >
            {/* Tech Development & Trust Credentials */}
            <div>
              <div className="text-center mb-8">
                <span className="text-[10px] font-extrabold uppercase tracking-[3px] text-blue font-montserrat">
                  Our Engineering Credentials
                </span>
                <h4 className="font-montserrat text-lg md:text-xl font-bold text-navy mt-1">
                  Why Enterprise Leaders Trust Our Systems
                </h4>
              </div>
              
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {/* Badge 1 */}
                <div className="group flex items-start gap-4 rounded-2xl border border-white/20 bg-white/30 backdrop-blur-md p-5 shadow-[0_8px_32px_rgba(0,0,0,0.015)] transition-all duration-300 hover:bg-white/40 hover:-translate-y-1 hover:border-blue/20">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue/10 text-blue font-bold text-sm">
                    ✓
                  </div>
                  <div>
                    <h5 className="font-montserrat text-xs font-extrabold uppercase tracking-wider text-navy">
                      100% Delivery SLA
                    </h5>
                    <p className="text-[11px] leading-relaxed text-muted font-sans mt-1">
                      Every project completed on time, meeting all requirements with precision.
                    </p>
                  </div>
                </div>

                {/* Badge 2 */}
                <div className="group flex items-start gap-4 rounded-2xl border border-white/20 bg-white/30 backdrop-blur-md p-5 shadow-[0_8px_32px_rgba(0,0,0,0.015)] transition-all duration-300 hover:bg-white/40 hover:-translate-y-1 hover:border-blue/20">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 font-bold text-sm">
                    🛡️
                  </div>
                  <div>
                    <h5 className="font-montserrat text-xs font-extrabold uppercase tracking-wider text-navy">
                      Enterprise Security
                    </h5>
                    <p className="text-[11px] leading-relaxed text-muted font-sans mt-1">
                      Built using military-grade cloud security, strict compliance standards, and encryption.
                    </p>
                  </div>
                </div>

                {/* Badge 3 */}
                <div className="group flex items-start gap-4 rounded-2xl border border-white/20 bg-white/30 backdrop-blur-md p-5 shadow-[0_8px_32px_rgba(0,0,0,0.015)] transition-all duration-300 hover:bg-white/40 hover:-translate-y-1 hover:border-blue/20">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 font-bold text-sm">
                    ★
                  </div>
                  <div>
                    <h5 className="font-montserrat text-xs font-extrabold uppercase tracking-wider text-navy">
                      99.9% Deployed Uptime
                    </h5>
                    <p className="text-[11px] leading-relaxed text-muted font-sans mt-1">
                      Our microservice architectures maintain high availability and scale smoothly.
                    </p>
                  </div>
                </div>

                {/* Badge 4 */}
                <div className="group flex items-start gap-4 rounded-2xl border border-white/20 bg-white/30 backdrop-blur-md p-5 shadow-[0_8px_32px_rgba(0,0,0,0.015)] transition-all duration-300 hover:bg-white/40 hover:-translate-y-1 hover:border-blue/20">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 font-bold text-sm">
                    🤝
                  </div>
                  <div>
                    <h5 className="font-montserrat text-xs font-extrabold uppercase tracking-wider text-navy">
                      80+ Happy Clients
                    </h5>
                    <p className="text-[11px] leading-relaxed text-muted font-sans mt-1">
                      Retained as long-term technology partners across global sectors and verticals.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Digital Marketing Performance & Lead Generation Badges */}
            <div className="pt-6">
              <div className="text-center mb-8">
                <span className="text-[10px] font-extrabold uppercase tracking-[3px] text-emerald-600 font-montserrat">
                  Performance-Driven Marketing
                </span>
                <h4 className="font-montserrat text-lg md:text-xl font-bold text-navy mt-1">
                  How Our Marketing 360 Drives Business Growth
                </h4>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {/* Marketing Badge 1 */}
                <div className="group flex items-start gap-4 rounded-2xl border border-white/20 bg-white/30 backdrop-blur-md p-5 shadow-[0_8px_32px_rgba(0,0,0,0.015)] transition-all duration-300 hover:bg-white/40 hover:-translate-y-1 hover:border-emerald-500/20">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 font-bold text-sm">
                    🎯
                  </div>
                  <div>
                    <h5 className="font-montserrat text-xs font-extrabold uppercase tracking-wider text-navy">
                      High-Intent Lead Capture
                    </h5>
                    <p className="text-[11px] leading-relaxed text-muted font-sans mt-1">
                      Targeting active commercial search queries that map directly to high-ticket buyers.
                    </p>
                  </div>
                </div>

                {/* Marketing Badge 2 */}
                <div className="group flex items-start gap-4 rounded-2xl border border-white/20 bg-white/30 backdrop-blur-md p-5 shadow-[0_8px_32px_rgba(0,0,0,0.015)] transition-all duration-300 hover:bg-white/40 hover:-translate-y-1 hover:border-emerald-500/20">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue/10 text-blue font-bold text-sm">
                    📊
                  </div>
                  <div>
                    <h5 className="font-montserrat text-xs font-extrabold uppercase tracking-wider text-navy">
                      ROI-First Paid Media
                    </h5>
                    <p className="text-[11px] leading-relaxed text-muted font-sans mt-1">
                      Eliminating wasted ad spend via rigorous copy split-testing and negative-keyword filters.
                    </p>
                  </div>
                </div>

                {/* Marketing Badge 3 */}
                <div className="group flex items-start gap-4 rounded-2xl border border-white/20 bg-white/30 backdrop-blur-md p-5 shadow-[0_8px_32px_rgba(0,0,0,0.015)] transition-all duration-300 hover:bg-white/40 hover:-translate-y-1 hover:border-emerald-500/20">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 font-bold text-sm">
                    🚀
                  </div>
                  <div>
                    <h5 className="font-montserrat text-xs font-extrabold uppercase tracking-wider text-navy">
                      Conversion Rate (CRO)
                    </h5>
                    <p className="text-[11px] leading-relaxed text-muted font-sans mt-1">
                      Optimizing landing flow UX to triple standard form submissions and reduce click-bounces.
                    </p>
                  </div>
                </div>

                {/* Marketing Badge 4 */}
                <div className="group flex items-start gap-4 rounded-2xl border border-white/20 bg-white/30 backdrop-blur-md p-5 shadow-[0_8px_32px_rgba(0,0,0,0.015)] transition-all duration-300 hover:bg-white/40 hover:-translate-y-1 hover:border-emerald-500/20">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 font-bold text-sm">
                    💬
                  </div>
                  <div>
                    <h5 className="font-montserrat text-xs font-extrabold uppercase tracking-wider text-navy">
                      CRM Lead Nurturing
                    </h5>
                    <p className="text-[11px] leading-relaxed text-muted font-sans mt-1">
                      Automating fast SMS and WhatsApp followup lines to close deals before prospects grow cold.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* High-fidelity Empty State */}
        {isUserSearching && filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue/5 text-blue border border-blue/10">
              <Filter size={24} />
            </div>
            <h3 className="text-lg font-bold text-navy font-montserrat">No matching case studies</h3>
            <p className="mt-2 text-sm text-muted max-w-sm font-sans">
              We couldn&apos;t find any projects matching your criteria. Try widening your filters or clearing search query.
            </p>
            <button
              onClick={handleResetAll}
              className="mt-6 rounded-xl bg-blue/10 border border-blue/25 px-5 py-2.5 text-xs font-bold text-blue hover:bg-blue hover:text-white hover:shadow-lg hover:shadow-blue/15 transition-all duration-300 font-montserrat"
            >
              Reset All Filters
            </button>
          </motion.div>
        )}
      </div>

      {/* Project Detail Modal Overlay */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
