"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Carousel } from "@/components/ui/Carousel";
import { Marquee } from "@/components/ui/Marquee";
import { TiltCard } from "@/components/ui/TiltCard";

import {
  industries,
  services,
  technologies,
  testimonials,
  whyChoose,
} from "@/content/site";

import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { HorizontalShowcase } from "@/components/portfolio/HorizontalShowcase";
import { ProjectModal } from "@/components/portfolio/ProjectModal";
import { useState } from "react";

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const homeServices = services.slice(0, 6);
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      <Hero />
      <div className="divider" />

      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeader
              label="Why Choose Us"
              title={
                <>
                  Built for <span className="grad-text">Enterprise Scale</span>
                </>
              }
              subtitle="We combine deep technical expertise with strategic thinking to deliver solutions that drive measurable business outcomes."
            />
          </Reveal>
          <RevealGroup className="why-grid">
            {whyChoose.map((item) => (
              <TiltCard key={item.title}>
                <div className="group relative card h-full overflow-hidden transition-all duration-500 ease-out hover:border-blue/30 hover:shadow-[0_32px_64px_rgba(30,144,255,0.12)]">
                  <div className="mb-2.5 text-[17px] font-bold">{item.title}</div>
                  <p className="text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-full" />
                </div>
              </TiltCard>
            ))}
          </RevealGroup>
        </div>
      </section>

      <div className="divider" />

      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeader
              label="What We Do"
              title={
                <>
                  Our Core <span className="grad-text">Services</span>
                </>
              }
              subtitle="Comprehensive IT services designed to accelerate your digital transformation journey."
            />
          </Reveal>
          <RevealGroup className="services-grid">
            {homeServices.map((s) => (
              <TiltCard key={s.slug}>
                <div className="group relative service-card h-full overflow-hidden transition-all duration-500 ease-out hover:border-blue/40 hover:shadow-[0_32px_80px_rgba(30,144,255,0.15)]">
                  <h3>{s.title}</h3>
                  <p>{s.short}</p>
                  <div className="my-4 flex flex-wrap gap-1.5">
                    {s.tags.slice(0, 3).map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/services"
                    className="btn-outline mt-auto text-xs w-max"
                    style={{ padding: "8px 16px" }}
                  >
                    Learn More
                  </Link>
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-full" />
                </div>
              </TiltCard>
            ))}
          </RevealGroup>
        </div>
      </section>

      <div className="divider" />

      <section className="section overflow-hidden">
        <div className="container">
          <Reveal>
            <SectionHeader
              label="Tech Stack"
              title={
                <>
                  Technologies We <span className="grad-text">Master</span>
                </>
              }
              subtitle="Industry-standard tools and frameworks that power modern digital solutions."
            />
          </Reveal>
          <Reveal>
            <div className="mt-12">
              <Marquee speed={1}>
                {technologies.map((t) => (
                  <div key={t.name} className="group relative overflow-hidden tech-card w-40 transition-all duration-300 hover:border-cyan/40 hover:shadow-md">
                    <div className="mb-2.5 text-[28px] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 flex justify-center">{t.icon}</div>
                    <div className="text-xs font-semibold text-muted">{t.name}</div>
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-full" />
                  </div>
                ))}
              </Marquee>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="divider" />

      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeader
              label="Industries"
              title={
                <>
                  Industry <span className="grad-text">Focus</span>
                </>
              }
              subtitle="We serve clients across diverse sectors with tailored digital solutions."
            />
          </Reveal>
          <RevealGroup className="industry-grid">
            {industries.map((i) => (
              <TiltCard key={i.name}>
                <div className="group relative overflow-hidden industry-card h-full transition-all duration-300 hover:border-blue/30 hover:shadow-md hover:bg-lightgray/30">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] bg-blue/10 text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    {i.icon}
                  </div>
                  <div className="text-sm font-semibold text-navy">{i.name}</div>
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-full" />
                </div>
              </TiltCard>
            ))}
          </RevealGroup>
        </div>
      </section>

      <div className="divider" />

      <section className="section bg-lightgray/10 relative overflow-hidden">
        <div className="container">
          <Reveal>
            <SectionHeader
              label="Portfolio"
              title={
                <>
                  Featured <span className="grad-text">Projects</span>
                </>
              }
              subtitle="A glimpse into the enterprise solutions and digital products we've delivered for our global clients."
            />
          </Reveal>
        </div>
        
        {/* Apple-style Interactive Horizontal Showcase */}
        <div className="w-full max-w-[100vw] overflow-x-hidden">
          <HorizontalShowcase onSelectProject={setSelectedProject} />
        </div>

        <div className="container">
          <div className="mt-12 text-center">
            <Link href="/portfolio" className="btn-outline">
              View All Projects <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeader
              label="Testimonials"
              title={
                <>
                  What Clients <span className="grad-text">Say</span>
                </>
              }
            />
          </Reveal>
          <Reveal>
            <div className="mt-12">
              <Carousel slideClassName="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
                {testimonials.map((t) => (
                  <TiltCard key={t.name} className="h-full">
                    <div className="group relative testi-card h-full overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-blue/20 hover:-translate-y-1">
                      <div className="mb-3.5 text-sm text-[#FFB800]">★★★★★</div>
                      <p className="mb-5 text-[15px] italic leading-relaxed text-muted">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-grad font-syne text-[15px] font-bold transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                          {t.initials}
                        </div>
                        <div>
                          <div className="text-sm font-semibold">{t.name}</div>
                          <div className="text-xs text-muted">{t.role}</div>
                        </div>
                      </div>
                      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-full" />
                    </div>
                  </TiltCard>
                ))}
              </Carousel>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="divider" />

      <section className="section">
        <div className="container">
          <Reveal className="scale-in">
            <CtaBanner
              title={
                <>
                  Let&apos;s Build Something{" "}
                  <span className="grad-text">Extraordinary</span>
                </>
              }
              description="Schedule a free consultation with our technology experts and explore how we can accelerate your digital transformation."
              secondaryHref="/services"
              secondaryLabel="View All Services"
            />
          </Reveal>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
