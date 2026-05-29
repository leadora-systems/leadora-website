"use client";

import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import { site } from "@/content/site";
import { ParticleMesh } from "@/components/ui/ParticleMesh";
import { HeroHeadline } from "./HeroHeadline";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100vh] items-center overflow-hidden bg-black pt-[100px]"
    >
      {/* 1. Animated Particle Mesh background */}
      <div className="absolute inset-0 z-0">
        <ParticleMesh />
      </div>

      {/* 2. Soft glowing ambient lights */}
      <div
        className="pointer-events-none absolute -right-[20%] top-[20%] z-[1] h-[600px] w-[600px] rounded-full blur-[120px]"
        style={{
          background: "radial-gradient(circle, rgba(30,144,255,0.15), transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -left-[10%] bottom-[0%] z-[1] h-[500px] w-[500px] rounded-full blur-[120px]"
        style={{
          background: "radial-gradient(circle, rgba(0,194,255,0.1), transparent 70%)",
        }}
      />

      {/* 3. Dark Overlay for readability */}
      <div 
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background: `
            linear-gradient(to right, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.8) 100%)
          `
        }}
      />

      <div className="container relative z-[3] w-full pt-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-end">
          
          {/* Left Column: Massive Headline & CTA */}
          <div className="lg:col-span-7 flex flex-col justify-end lg:pr-4">
            <div className="fade-up mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-orange animate-pulse" />
              Global IT Consulting
            </div>

            <HeroHeadline />

            <div className="fade-up-4 flex flex-wrap items-center gap-6 mt-12">
              <Link 
                href="/services" 
                className="group relative flex items-center gap-3 overflow-hidden rounded-md bg-blue px-6 py-4 text-sm font-bold text-white transition-all hover:bg-blue/80 hover:shadow-[0_0_30px_rgba(30,144,255,0.4)]"
              >
                <span>Explore Solutions</span>
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:translate-x-1">
                  <ArrowRight size={14} />
                </div>
              </Link>
              <Link 
                href="/contact" 
                className="group flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-orange"
              >
                Contact Us <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: Statement */}
          <div className="lg:col-span-5 fade-up-3 lg:pb-6">
            <div className="border-l-2 border-orange pl-6">
              <h3 className="text-xl font-bold text-white mb-3">Empowering the digital era</h3>
              <p className="text-[15px] leading-relaxed text-gray-400 font-medium">
                We deliver end-to-end IT consulting and software engineering to help your business scale securely. From legacy modernization to intelligent cloud architectures, we build for the future.
              </p>
              <Link 
                href="/portfolio" 
                className="mt-6 inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-wider text-white hover:text-orange transition-colors"
              >
                View Portfolio
                <span className="flex h-5 w-5 items-center justify-center bg-orange text-white">
                  <ChevronRight size={14} />
                </span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
