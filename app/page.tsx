"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { ServicesScroll } from "@/components/home/ServicesScroll";
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
import { HorizontalShowcase } from "@/components/portfolio/HorizontalShowcase";
import { ProjectModal } from "@/components/portfolio/ProjectModal";
import { useState } from "react";

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const homeServices = services.slice(0, 6);

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

      <ServicesScroll />

      <div className="divider" />

      <section className="section overflow-hidden bg-black text-white relative">
        {/* Ambient background glows for Tech Stack */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[30vw] h-[30vw] bg-blue/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[30vw] h-[30vw] bg-[#9d00ff]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container relative z-10">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-blue font-bold tracking-widest uppercase text-sm">Tech Stack</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-4 mb-6">
                Technologies We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue to-cyan">Master</span>
              </h2>
              <p className="mx-auto max-w-2xl text-gray-400 text-sm md:text-base leading-relaxed">
                Industry-standard tools and frameworks that power our modern digital solutions, ensuring scalable, secure, and high-performance enterprise applications.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-12 flex flex-col gap-6">
              {/* First Row: scrolling left */}
              <Marquee speed={1.5} className="py-4">
                {technologies.slice(0, Math.ceil(technologies.length / 2)).map((t) => (
                  <div key={t.name} className="group relative overflow-hidden rounded-[20px] bg-gradient-to-b from-white/10 to-transparent p-[1px] w-48 transition-transform hover:-translate-y-1 mx-2">
                    <div className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-[19px] bg-black/60 backdrop-blur-xl px-6 py-8 transition-colors group-hover:bg-black/40">
                      <div className="absolute inset-0 bg-gradient-to-b from-blue/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      <div className="relative z-10 text-[40px] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                        {t.icon}
                      </div>
                      <div className="relative z-10 text-sm font-bold text-gray-300 group-hover:text-white transition-colors">
                        {t.name}
                      </div>
                    </div>
                  </div>
                ))}
              </Marquee>

              {/* Second Row: scrolling right */}
              <Marquee speed={-1.5} className="py-4">
                {technologies.slice(Math.ceil(technologies.length / 2)).map((t) => (
                  <div key={t.name} className="group relative overflow-hidden rounded-[20px] bg-gradient-to-b from-white/10 to-transparent p-[1px] w-48 transition-transform hover:-translate-y-1 mx-2">
                    <div className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-[19px] bg-black/60 backdrop-blur-xl px-6 py-8 transition-colors group-hover:bg-black/40">
                      <div className="absolute inset-0 bg-gradient-to-b from-blue/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      <div className="relative z-10 text-[40px] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                        {t.icon}
                      </div>
                      <div className="relative z-10 text-sm font-bold text-gray-300 group-hover:text-white transition-colors">
                        {t.name}
                      </div>
                    </div>
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
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-grad font-montserrat text-[15px] font-bold transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
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
