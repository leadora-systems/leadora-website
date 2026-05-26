"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { heroStats, site } from "@/content/site";
import { HeroHeadline } from "./HeroHeadline";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-[120px]"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% -10%, rgba(30,144,255,.08) 0%, transparent 70%),
            radial-gradient(ellipse 40% 40% at 90% 60%, rgba(0,194,255,.06) 0%, transparent 60%),
            radial-gradient(ellipse 30% 30% at 10% 80%, rgba(255,140,66,.05) 0%, transparent 60%)
          `,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-100"
        style={{
          backgroundImage: `
            linear-gradient(rgba(30,144,255,.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30,144,255,.05) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 80%)",
          animation: "gridDrift 12s linear infinite",
        }}
      />
      <div
        className="pointer-events-none absolute -right-[100px] -top-20 z-0 h-[380px] w-[380px] rounded-full blur-[72px]"
        style={{
          background:
            "radial-gradient(circle, rgba(30,144,255,.08), transparent 70%)",
          animation: "orbFloat 8s ease-in-out infinite",
        }}
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-[60px] z-0 h-[280px] w-[280px] rounded-full blur-[72px]"
        style={{
          background:
            "radial-gradient(circle, rgba(0,194,255,.08), transparent 70%)",
          animation: "orbFloat 10s ease-in-out infinite reverse",
        }}
      />

      <div className="container relative z-[2] w-full">
        <div className="text-center">
          <div className="fade-up mb-8 inline-flex items-center gap-2 rounded-full border border-blue/25 bg-blue/10 px-4 py-1.5 text-xs uppercase tracking-widest text-blue">
            <span className="h-1.5 w-1.5 rounded-full bg-blue" />
            IT Consulting & Software Engineering
          </div>

          <div className="fade-up-2 mb-6">
            <div className="logo-mark mx-auto mb-5 h-16 w-16 rounded-2xl text-[28px]">
              L
            </div>
            <div className="font-syne text-[13px] font-bold uppercase tracking-[4px] text-muted">
              {site.legalName}
            </div>
          </div>

          <HeroHeadline />

          <p className="fade-up-3 mx-auto mb-10 max-w-[600px] text-[clamp(14px,1.6vw,16px)] leading-relaxed text-muted">
            Scalable Software Solutions, Cloud Infrastructure &amp; Modern
            Enterprise Applications — built for the businesses of tomorrow.
          </p>

          <div className="fade-up-4 flex flex-wrap justify-center gap-3.5">
            <Link href="/contact" className="btn-primary">
              <ChevronRight size={16} />
              Get Started
            </Link>
            <Link href="/services" className="btn-outline">
              Our Services
            </Link>
            <Link href="/careers" className="btn-outline">
              Careers
            </Link>
          </div>

          <div className="fade-up-4 mt-[72px] flex flex-wrap justify-center gap-10 border-t border-glass-border pt-12">
            {heroStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-syne text-[28px] font-extrabold grad-text">
                  {stat.value}
                </div>
                <div className="mt-1 text-[13px] text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
