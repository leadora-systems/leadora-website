"use client";

import Link from "next/link";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { 
  Rocket, 
  Cpu, 
  Sparkles, 
  Users as UsersIcon, 
  ArrowRight, 
  Heart, 
  Shield, 
  Home, 
  Coins, 
  Activity, 
  GraduationCap, 
  Award, 
  Laptop,
  CheckCircle2
} from "lucide-react";
import { CareersForm } from "@/components/forms/CareersForm";
import { OpenRoles } from "@/components/careers/OpenRoles";
import { CareersHeader } from "@/components/careers/CareersHeader";
import { EmployeeTestimonials } from "@/components/careers/EmployeeTestimonials";

// Stagger Animation Variants
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 35, scale: 0.98 },
  show: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

const scaleInItem = {
  hidden: { opacity: 0, scale: 0.95, y: 25 },
  show: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

// High-tech premium icons mapping for Culture with simplified English badges - Light theme adapted
const cultureDetails = [
  {
    icon: <Cpu className="w-8 h-8 text-cyan-500" />,
    title: "Build Real Products",
    description: "Work on meaningful projects that go live and are used by real businesses and their customers every day.",
    badge: "Our Work",
    glow: "rgba(0, 194, 255, 0.14)",
    tag: "Next.js • Spring Boot • Cloud",
    badgeClass: "text-cyan-600 bg-cyan-50 border-cyan-100",
    hoverBgClass: "hover:bg-cyan-500/[0.025] hover:border-cyan-500/20",
    hoverTextClass: "group-hover:text-cyan-600",
    hoverIconBgClass: "group-hover:bg-cyan-500/[0.04] group-hover:border-cyan-500/20",
    hoverArrowClass: "group-hover:text-cyan-500"
  },
  {
    icon: <Rocket className="w-8 h-8 text-blue-500" />,
    title: "Grow Fast",
    description: "Clear career growth paths, regular reviews, and mentorship from senior engineers and business leaders.",
    badge: "My Career",
    glow: "rgba(30, 144, 255, 0.14)",
    tag: "Mentorship • Leadership",
    badgeClass: "text-blue-600 bg-blue-50 border-blue-100",
    hoverBgClass: "hover:bg-blue-500/[0.025] hover:border-blue-500/20",
    hoverTextClass: "group-hover:text-blue-600",
    hoverIconBgClass: "group-hover:bg-blue-500/[0.04] group-hover:border-blue-500/20",
    hoverArrowClass: "group-hover:text-blue-500"
  },
  {
    icon: <Sparkles className="w-8 h-8 text-amber-500" />,
    title: "Learn Continuously",
    description: "Access to courses, certifications, tech conferences, and a knowledge-sharing culture that never stops learning.",
    badge: "Learning",
    glow: "rgba(245, 158, 11, 0.14)",
    tag: "Certifications • Courses",
    badgeClass: "text-amber-600 bg-amber-50 border-amber-100",
    hoverBgClass: "hover:bg-amber-500/[0.025] hover:border-amber-500/20",
    hoverTextClass: "group-hover:text-amber-600",
    hoverIconBgClass: "group-hover:bg-amber-500/[0.04] group-hover:border-amber-500/20",
    hoverArrowClass: "group-hover:text-amber-500"
  },
  {
    icon: <UsersIcon className="w-8 h-8 text-indigo-500" />,
    title: "Collaborative Team",
    description: "Flat hierarchy, open communication, and a team that genuinely celebrates each other's wins.",
    badge: "Teamwork",
    glow: "rgba(99, 102, 241, 0.14)",
    tag: "Flat Hierarchy • Hybrid",
    badgeClass: "text-indigo-600 bg-indigo-50 border-indigo-100",
    hoverBgClass: "hover:bg-indigo-500/[0.025] hover:border-indigo-500/20",
    hoverTextClass: "group-hover:text-indigo-600",
    hoverIconBgClass: "group-hover:bg-indigo-500/[0.04] group-hover:border-indigo-500/20",
    hoverArrowClass: "group-hover:text-indigo-500"
  },
  {
    icon: <Heart className="w-8 h-8 text-rose-500" />,
    title: "Work-Life Balance",
    description: "Flexible working hours, hybrid options, and a positive supportive environment that respects your personal time.",
    badge: "Well-Being",
    glow: "rgba(251, 113, 133, 0.14)",
    tag: "Flexible Hours • Hybrid Work",
    badgeClass: "text-rose-600 bg-rose-50 border-rose-100",
    hoverBgClass: "hover:bg-rose-500/[0.025] hover:border-rose-500/20",
    hoverTextClass: "group-hover:text-rose-600",
    hoverIconBgClass: "group-hover:bg-rose-500/[0.04] group-hover:border-rose-500/20",
    hoverArrowClass: "group-hover:text-rose-500"
  },
  {
    icon: <Shield className="w-8 h-8 text-emerald-500" />,
    title: "Trust & Ownership",
    description: "We trust you to take charge of your work, experiment with new ideas, and drive products to completion autonomously.",
    badge: "Trust First",
    glow: "rgba(52, 211, 153, 0.14)",
    tag: "Experiment • Take Charge",
    badgeClass: "text-emerald-600 bg-emerald-50 border-emerald-100",
    hoverBgClass: "hover:bg-emerald-500/[0.025] hover:border-emerald-500/20",
    hoverTextClass: "group-hover:text-emerald-600",
    hoverIconBgClass: "group-hover:bg-emerald-500/[0.04] group-hover:border-emerald-500/20",
    hoverArrowClass: "group-hover:text-emerald-500"
  }
];

// High-tech premium benefits mapping - Light theme adapted
const premiumBenefits = [
  {
    icon: <Home className="w-6 h-6 text-cyan-500" />,
    name: "Hybrid / Remote",
    description: "Work comfortably from your home office or join the team at our collaborative physical space.",
    glow: "rgba(0, 194, 255, 0.1)",
    tag: "Work style",
    hoverBgClass: "hover:bg-cyan-500/[0.02] hover:border-cyan-500/20",
    hoverTextClass: "group-hover:text-cyan-600",
    hoverIconBgClass: "group-hover:bg-cyan-500/[0.04] group-hover:border-cyan-500/20",
    hoverArrowClass: "group-hover:text-cyan-500",
    hoverTagClass: "group-hover:text-cyan-500"
  },
  {
    icon: <Coins className="w-6 h-6 text-emerald-500" />,
    name: "Competitive Pay",
    description: "Industry-standard packages designed to recognize, award, and value your true engineering expertise.",
    glow: "rgba(16, 185, 129, 0.1)",
    tag: "Compensation",
    hoverBgClass: "hover:bg-emerald-500/[0.02] hover:border-emerald-500/20",
    hoverTextClass: "group-hover:text-emerald-600",
    hoverIconBgClass: "group-hover:bg-emerald-500/[0.04] group-hover:border-emerald-500/20",
    hoverArrowClass: "group-hover:text-emerald-500",
    hoverTagClass: "group-hover:text-emerald-500"
  },
  {
    icon: <Activity className="w-6 h-6 text-rose-500" />,
    name: "Health Insurance",
    description: "Comprehensive medical and wellness coverage to support you and your family's overall well-being.",
    glow: "rgba(244, 63, 94, 0.1)",
    tag: "Wellness",
    hoverBgClass: "hover:bg-rose-500/[0.02] hover:border-rose-500/20",
    hoverTextClass: "group-hover:text-rose-600",
    hoverIconBgClass: "group-hover:bg-rose-500/[0.04] group-hover:border-rose-500/20",
    hoverArrowClass: "group-hover:text-rose-500",
    hoverTagClass: "group-hover:text-rose-500"
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-violet-500" />,
    name: "Learning Budget",
    description: "Dedicated annual funding for advanced books, courses, certifications, and global tech conferences.",
    glow: "rgba(139, 92, 246, 0.1)",
    tag: "Growth",
    hoverBgClass: "hover:bg-violet-500/[0.02] hover:border-violet-500/20",
    hoverTextClass: "group-hover:text-violet-600",
    hoverIconBgClass: "group-hover:bg-violet-500/[0.04] group-hover:border-violet-500/20",
    hoverArrowClass: "group-hover:text-violet-500",
    hoverTagClass: "group-hover:text-violet-500"
  },
  {
    icon: <Award className="w-6 h-6 text-amber-500" />,
    name: "Performance Bonus",
    description: "Quarterly and annual financial bonuses directly linked to your product releases and individual success.",
    glow: "rgba(245, 158, 11, 0.1)",
    tag: "Rewards",
    hoverBgClass: "hover:bg-amber-500/[0.02] hover:border-amber-500/20",
    hoverTextClass: "group-hover:text-amber-600",
    hoverIconBgClass: "group-hover:bg-amber-500/[0.04] group-hover:border-amber-500/20",
    hoverArrowClass: "group-hover:text-amber-500",
    hoverTagClass: "group-hover:text-amber-500"
  }
];

function FeaturedCard({ smoothMouseX, smoothMouseY }: { smoothMouseX: any; smoothMouseY: any }) {
  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200, mass: 0.5 };
  const rotateX = useSpring(useTransform(cardY, [-0.5, 0.5], [5, -5]), springConfig);
  const rotateY = useSpring(useTransform(cardX, [-0.5, 0.5], [-5, 5]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    cardX.set(mouseX / width);
    cardY.set(mouseY / height);

    // Set CSS custom properties on element style for spotlight tracking
    e.currentTarget.style.setProperty("--card-mouse-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--card-mouse-y", `${e.clientY - rect.top}px`);
  };

  const handleMouseLeave = () => {
    cardX.set(0);
    cardY.set(0);
  };

  return (
    <div className="lg:col-span-5 h-full relative group">
      {/* Framer-inspired Morphing Glowing Gradient backdrop behind the card */}
      <motion.div
        animate={{
          scale: [1, 1.05, 0.98, 1.02, 1],
          rotate: [0, 4, -4, 2, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          x: useTransform(smoothMouseX, [0, 1920], [-15, 15]),
          y: useTransform(smoothMouseY, [0, 1080], [-15, 15]),
        }}
        className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 opacity-20 blur-xl group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 pointer-events-none z-0"
      />

      <motion.div 
        initial={{ opacity: 0, y: 35, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -6, scale: 1.012 }}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          perspective: 1200,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative z-10 flex flex-col justify-between h-full rounded-2xl border border-slate-100 bg-white/80 p-8 shadow-md hover:border-cyan-500/20 hover:shadow-[0_20px_45px_rgba(30,144,255,0.06)] hover:bg-cyan-500/[0.025] transition-all duration-500 overflow-hidden cursor-pointer backdrop-blur-xl"
      >
        {/* Left blue accent line on hover */}
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-blue origin-center scale-y-0 transition-transform duration-300 group-hover:scale-y-100 z-20" />

        {/* Mouse Spotlight / Gradient Animation inside the card box on hover */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10"
          style={{
            background: "radial-gradient(400px circle at var(--card-mouse-x, 150px) var(--card-mouse-y, 150px), rgba(30, 144, 255, 0.15) 0%, rgba(0, 194, 255, 0.05) 50%, transparent 100%)"
          }}
        />

        {/* Glowing Corner Spotlight with Mouse Parallax offset */}
        <motion.div 
          style={{
            x: useTransform(smoothMouseX, [0, 1920], [10, -10]),
            y: useTransform(smoothMouseY, [0, 1080], [10, -10]),
            background: "radial-gradient(circle, rgba(0,194,255,0.12), transparent 70%)"
          }}
          className="absolute -right-20 -top-20 w-52 h-52 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        />

        <div style={{ transform: "translateZ(25px)", transformStyle: "preserve-3d" }}>
          {/* Top Meta Details */}
          <div className="flex items-center justify-between mb-8">
            <span className="font-montserrat text-[9px] font-bold tracking-[2px] text-cyan-600 bg-cyan-50 border border-cyan-100 px-3 py-1.5 rounded-full uppercase">
              Featured Perk
            </span>
            <span className="font-mono text-[10px] text-cyan-600 font-semibold uppercase tracking-wider">
              Tech Stack
            </span>
          </div>

          {/* Animated Icon Container with Orbit Backdrop */}
          <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-xl border border-cyan-500/10 bg-cyan-500/[0.02] transition-all duration-500 group-hover:scale-105 group-hover:border-cyan-500/20 group-hover:bg-cyan-500/[0.04]">
            <div className="absolute inset-1 rounded-full border border-dashed border-cyan-500/20 opacity-40 group-hover:animate-spin" style={{ animationDuration: "12s" }} />
            <Laptop className="w-10 h-10 text-cyan-500 relative transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:rotate-2" />
          </div>

          {/* Title */}
          <h3 className="font-montserrat text-[22px] font-bold text-navy group-hover:text-cyan-600 transition-colors duration-300 mb-3.5">
            High-End Hardware
          </h3>

          {/* Description */}
          <p className="text-slate-500 text-[14.5px] leading-relaxed mb-6 group-hover:text-slate-600 transition-colors duration-300">
            We provide top-tier development gear, including the latest MacBook Pro setups or high-spec Windows machines, dual 4K monitors, ergonomic chairs, and accessories so you can code at your absolute peak.
          </p>
        </div>

        {/* Technical details footer on card */}
        <div className="border-t border-slate-100 pt-6 flex items-center justify-between" style={{ transform: "translateZ(15px)" }}>
          <span className="font-mono text-[11px] text-cyan-600 font-medium">
            MacBook Pro M3 Max / High-End Workstation
          </span>
          <ArrowRight className="w-4 h-4 text-cyan-500 transition-all duration-300 group-hover:translate-x-1.5" />
        </div>
      </motion.div>
    </div>
  );
}

export function CareersContent() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 40, stiffness: 100, mass: 1 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Slight cursor follow transforms for ambient glow elements
  const moveX1 = useTransform(smoothMouseX, [0, 1920], [-40, 40]);
  const moveY1 = useTransform(smoothMouseY, [0, 1080], [-40, 40]);

  const moveX2 = useTransform(smoothMouseX, [0, 1920], [30, -30]);
  const moveY2 = useTransform(smoothMouseY, [0, 1080], [30, -30]);

  const moveX3 = useTransform(smoothMouseX, [0, 1920], [-20, 20]);
  const moveY3 = useTransform(smoothMouseY, [0, 1080], [20, -20]);

  const handleMouseMove = (e: React.MouseEvent) => {
    // Track mouse coordinates over entire page
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="careers-page-wrapper relative bg-white text-navy min-h-screen overflow-hidden"
    >
      
      {/* Immersive Space-Tech Background elements - Light Mode Adapted */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Soft, clean base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/20 to-white" />

        {/* Dynamic cyber grid overlay, moving subtly with mouse parallax */}
        <motion.div
          style={{
            x: useTransform(smoothMouseX, [0, 1920], [-12, 12]),
            y: useTransform(smoothMouseY, [0, 1080], [-12, 12]),
            backgroundImage: `
              linear-gradient(rgba(30, 144, 255, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(30, 144, 255, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            WebkitMaskImage: "radial-gradient(ellipse 85% 85% at 50% 50%, black 20%, transparent 80%)",
            maskImage: "radial-gradient(ellipse 85% 85% at 50% 50%, black 20%, transparent 80%)",
            animation: "gridDrift 20s linear infinite",
          }}
          className="absolute inset-0 opacity-[0.55]"
        />

        {/* Modern Minimalist Diagonal Gradient Beams (Stripe & Linear style) */}
        <motion.div
          style={{
            x: moveX1,
            y: moveY1,
            transform: "rotate(-12deg)",
            background: "linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.14) 30%, rgba(59, 130, 246, 0.14) 70%, transparent)",
          }}
          className="absolute -top-[5%] left-[5%] w-[90%] h-[150px] blur-[30px] pointer-events-none"
          animate={{
            x: [-15, 15, -15],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          style={{
            x: moveX2,
            y: moveY2,
            transform: "rotate(-12deg)",
            background: "linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.12) 30%, rgba(99, 102, 241, 0.12) 70%, transparent)",
          }}
          className="absolute top-[30%] right-[-10%] w-[85%] h-[180px] blur-[40px] pointer-events-none"
          animate={{
            x: [15, -15, 15],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          style={{
            x: moveX3,
            y: moveY3,
            transform: "rotate(-12deg)",
            background: "linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.12) 30%, rgba(192, 132, 252, 0.12) 70%, transparent)",
          }}
          className="absolute bottom-[25%] left-[5%] w-[80%] h-[160px] blur-[35px] pointer-events-none"
          animate={{
            x: [-10, 10, -10],
            y: [0, 12, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Subtle orange accent glow matching Leadora Systems branding (#FF8C42) */}
        <motion.div
          style={{
            x: moveX1,
            y: moveY3,
            transform: "rotate(-12deg)",
            background: "linear-gradient(90deg, transparent, rgba(255, 140, 66, 0.08) 40%, rgba(255, 140, 66, 0.08) 60%, transparent)",
          }}
          className="absolute top-[50%] left-[20%] w-[75%] h-[130px] blur-[45px] pointer-events-none"
          animate={{
            x: [10, -10, 10],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Elegant Animated Ribbon Wave Lines (Swaying Mesh inspired by Framer & Stripe) */}
        <svg
          className="absolute inset-x-0 top-[15%] h-[500px] w-full opacity-[0.25] pointer-events-none z-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 500"
          preserveAspectRatio="none"
        >
          <motion.path
            animate={{
              d: [
                "M 0 250 C 360 150, 720 350, 1080 150 C 1260 50, 1440 250, 1440 250",
                "M 0 250 C 360 350, 720 150, 1080 350 C 1260 450, 1440 250, 1440 250",
                "M 0 250 C 360 150, 720 350, 1080 150 C 1260 50, 1440 250, 1440 250",
              ],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            fill="none"
            stroke="url(#framer-wave-gradient-1)"
            strokeWidth="1.2"
          />
          <motion.path
            animate={{
              d: [
                "M 0 300 C 360 400, 720 200, 1080 300 C 1260 350, 1440 200, 1440 300",
                "M 0 300 C 360 200, 720 400, 1080 200 C 1260 150, 1440 400, 1440 300",
                "M 0 300 C 360 400, 720 200, 1080 300 C 1260 350, 1440 200, 1440 300",
              ],
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            fill="none"
            stroke="url(#framer-wave-gradient-2)"
            strokeWidth="0.8"
            strokeDasharray="4 4"
          />
          <defs>
            <linearGradient id="framer-wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(6, 182, 212, 0)" />
              <stop offset="50%" stopColor="rgba(59, 130, 246, 0.35)" />
              <stop offset="100%" stopColor="rgba(99, 102, 241, 0)" />
            </linearGradient>
            <linearGradient id="framer-wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(139, 92, 246, 0)" />
              <stop offset="50%" stopColor="rgba(192, 132, 252, 0.25)" />
              <stop offset="100%" stopColor="rgba(6, 182, 212, 0)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main Content Area */}
      <div className="relative z-[1]">
        
        {/* HERO SECTION */}
        <header className="relative overflow-hidden px-0 pb-16 pt-[140px] text-center">
          <div className="container">
            <CareersHeader />
          </div>
        </header>

        {/* CULTURE SECTION */}
        <section className="section relative">
          <div className="container relative z-10">
            
            {/* Culture Header Reveal */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-16"
            >
              <span className="font-montserrat text-[10px] font-bold tracking-[4px] text-blue uppercase bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
                OUR ENVIRONMENT
              </span>
              <h2 className="font-montserrat text-[clamp(28px,4vw,44px)] font-bold text-navy mt-4 leading-tight">
                Why You&apos;ll <span className="bg-gradient-to-r from-blue via-cyan to-indigo-600 bg-clip-text text-transparent filter drop-shadow-[0_0_15px_rgba(0,194,255,0.2)]">Love</span> Working Here
              </h2>
              <p className="max-w-[580px] mx-auto text-slate-500 mt-3.5 text-base leading-relaxed">
                We maintain a hyper-collaborative space designed for world-class builders, engineers, and digital innovators.
              </p>
            </motion.div>

            {/* Culture cards grid with staggered entrance animations */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, margin: "-100px" }}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8"
            >
              {cultureDetails.map((item, index) => (
                <motion.div 
                  key={item.title}
                  variants={fadeUpItem}
                  whileHover={{ y: -6, scale: 1.015 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className={`group relative flex flex-col justify-between rounded-2xl border border-slate-100 bg-white/70 p-7 backdrop-blur-xl h-full cursor-pointer shadow-sm hover:shadow-[0_20px_45px_rgba(30,144,255,0.06)] overflow-hidden transition-all duration-500 ${item.hoverBgClass}`}
                >
                  {/* Left blue accent line on hover */}
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-blue origin-center scale-y-0 transition-transform duration-300 group-hover:scale-y-100 z-20" />

                  {/* Glowing Corner Spotlight */}
                  <div 
                    className="absolute -right-16 -top-16 w-44 h-44 rounded-full blur-[45px] opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle, ${item.glow}, transparent 70%)`
                    }}
                  />

                  <div>
                    {/* Top Meta Details */}
                    <div className="flex items-center justify-between mb-6">
                      <span className={`font-montserrat text-[9px] font-bold tracking-[2px] px-2.5 py-1 rounded uppercase border ${item.badgeClass}`}>
                        {item.badge}
                      </span>
                      <span className="font-mono text-[10px] text-slate-400 group-hover:text-cyan-500/50 transition-colors duration-300">
                        {`// 0${index + 1}`}
                      </span>
                    </div>

                    {/* Animated Lucide Icon Container with Orbit Backdrop */}
                    <div className={`relative mb-5 flex h-16 w-16 items-center justify-center rounded-xl border border-slate-100 bg-slate-50/60 transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(0,194,255,0.02)] ${item.hoverIconBgClass}`}>
                      <div className="absolute inset-1 rounded-full border border-dashed border-cyan-500/15 opacity-0 group-hover:opacity-100 group-hover:animate-spin" style={{ animationDuration: "10s" }} />
                      <div className="relative transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:rotate-3">
                        {item.icon}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className={`font-montserrat text-[17px] font-bold text-navy transition-colors duration-300 mb-2.5 ${item.hoverTextClass}`}>
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-500 text-[13.5px] leading-relaxed mb-6 group-hover:text-slate-600 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>

                  {/* Technical details footer on card */}
                  <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                    <span className="font-mono text-[10px] text-slate-400 group-hover:text-slate-500 transition-colors duration-300">
                      {item.tag}
                    </span>
                    <ArrowRight className={`w-3.5 h-3.5 text-slate-400 transition-all duration-300 group-hover:translate-x-1 ${item.hoverArrowClass}`} />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <div className="divider" />

        {/* BENEFITS SECTION */}
        <section className="section relative">
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-cyan-50/20 blur-[130px] opacity-[0.3] z-0" />

          <div className="container relative z-10">
            
            {/* Section Title */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-16"
            >
              <span className="font-montserrat text-[10px] font-bold tracking-[4px] text-blue uppercase bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
                OUR BENEFITS
              </span>
              <h2 className="font-montserrat text-[clamp(28px,4vw,44px)] font-bold text-navy mt-4 leading-tight">
                What You <span className="bg-gradient-to-r from-cyan via-blue to-emerald-500 bg-clip-text text-transparent filter drop-shadow-[0_0_15px_rgba(0,194,255,0.2)]">Get</span>
              </h2>
              <p className="max-w-[580px] mx-auto text-slate-500 mt-3.5 text-base leading-relaxed">
                We look after our crew. Expand your engineering skills with full medical, learning support, and high-performance setups.
              </p>
            </motion.div>

            {/* Premium layouts with Bento-Grid: 1 larger featured card and a sidebar grid */}
            <div className="grid gap-6 lg:grid-cols-12 mt-8 items-stretch">
              
              {/* Featured Larger Benefit Card */}
              <FeaturedCard smoothMouseX={smoothMouseX} smoothMouseY={smoothMouseY} />

              {/* Sidebar Grid with other 5 benefits */}
              <div className="lg:col-span-7 h-full">
                <motion.div 
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, margin: "-100px" }}
                  className="grid gap-4 md:grid-cols-2 h-full"
                >
                  {premiumBenefits.map((item, index) => (
                    <motion.div 
                      key={item.name} 
                      variants={scaleInItem}
                      whileHover={{ y: -4, scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 400, damping: 19 }}
                      className={`group relative flex flex-col justify-between rounded-xl border border-slate-100 bg-white/70 p-6 shadow-sm hover:shadow-[0_15px_30px_rgba(30,144,255,0.04)] h-full overflow-hidden cursor-pointer transition-all duration-500 ${item.hoverBgClass}`}
                    >
                      {/* Left blue accent line on hover */}
                      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-blue origin-center scale-y-0 transition-transform duration-300 group-hover:scale-y-100 z-20" />

                      {/* Glowing Corner Spotlight */}
                      <div 
                        className="absolute -right-12 -top-12 w-32 h-32 rounded-full blur-[35px] opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
                        style={{
                          background: `radial-gradient(circle, ${item.glow}, transparent 70%)`
                        }}
                      />

                      <div>
                        {/* Top Meta Details */}
                        <div className="flex items-center justify-between mb-4">
                          <span className={`font-montserrat text-[8px] font-bold tracking-[1.5px] text-slate-400 transition-colors duration-300 uppercase ${item.hoverTagClass}`}>
                            {item.tag}
                          </span>
                          <span className="font-mono text-[9px] text-slate-400">
                            {`// B-0${index + 1}`}
                          </span>
                        </div>

                        {/* Icon Container */}
                        <div className={`relative mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-slate-100 bg-slate-50/50 transition-all duration-500 group-hover:scale-105 ${item.hoverIconBgClass}`}>
                          <div className="relative transition-transform duration-500 group-hover:-translate-y-0.5">
                            {item.icon}
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className={`font-montserrat text-[15px] font-bold text-navy transition-colors duration-300 mb-2 ${item.hoverTextClass}`}>
                          {item.name}
                        </h3>

                        {/* Description */}
                        <p className="text-slate-500 text-[12.5px] leading-relaxed group-hover:text-slate-600 transition-colors duration-300">
                          {item.description}
                        </p>
                      </div>

                      {/* Technical details footer on card */}
                      <div className="border-t border-slate-100 pt-4 mt-5 flex items-center justify-between">
                        <span className="font-mono text-[9px] text-slate-400 group-hover:text-slate-500 transition-colors duration-300">
                          Ready on day one
                        </span>
                        <ArrowRight className={`w-3 h-3 text-slate-400 transition-all duration-300 group-hover:translate-x-1 ${item.hoverArrowClass}`} />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* OPEN ROLES DYNAMIC SECTION */}
        <OpenRoles />

        <div className="divider" />

        {/* TESTIMONIALS SECTION */}
        <EmployeeTestimonials />

        <div className="divider" />

        {/* APPLICATION FORM SECTION */}
        <section className="section relative">
          <div className="container relative z-10">
            
            {/* Header Reveal */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-16"
            >
              <span className="font-montserrat text-[10px] font-bold tracking-[4px] text-blue uppercase bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
                JOIN OUR SQUAD
              </span>
              <h2 className="font-montserrat text-[clamp(28px,4vw,44px)] font-bold text-navy mt-4 leading-tight">
                Send Your <span className="bg-gradient-to-r from-blue via-cyan to-indigo-600 bg-clip-text text-transparent filter drop-shadow-[0_0_15px_rgba(0,194,255,0.2)]">Application</span>
              </h2>
              <p className="max-w-[580px] mx-auto text-slate-500 mt-3.5 text-base leading-relaxed">
                Take the leap. Upload your credentials and outline why you are the perfect addition to our software engineering crew.
              </p>
            </motion.div>

            {/* Split layout: Hiring Info Panel (Left) & Form Container (Right) */}
            <div className="grid gap-12 lg:grid-cols-12 mt-8 items-stretch max-w-[1100px] mx-auto">
              
              {/* Hiring Info Panel (Left 5 Columns) */}
              <div className="lg:col-span-5 h-full">
                <motion.div 
                  initial={{ opacity: 0, y: 35, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative flex flex-col justify-between h-full rounded-2xl border border-slate-100 bg-slate-50/50 p-8 shadow-sm hover:border-cyan-500/20 hover:bg-cyan-500/[0.025] transition-all duration-500 overflow-hidden"
                >
                  {/* Left blue accent line on hover */}
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-blue origin-center scale-y-0 transition-transform duration-300 group-hover:scale-y-100 z-20" />
                  {/* Glowing Corner Backdrop */}
                  <div 
                    className="absolute -left-16 -bottom-16 w-48 h-44 rounded-full blur-[45px] opacity-[0.05] pointer-events-none"
                    style={{
                      background: "radial-gradient(circle, #00C2FF, transparent 70%)"
                    }}
                  />

                  <div>
                    {/* Sub-label */}
                    <span className="font-montserrat text-[9px] font-bold tracking-[2.5px] text-cyan-600 uppercase mb-6 block">
                      Our Process
                    </span>

                    <h3 className="font-montserrat text-[22px] font-bold text-navy leading-tight mb-4">
                      We review every application. No bots, no automated filters.
                    </h3>

                    <p className="text-slate-500 text-sm leading-relaxed mb-8">
                      At Leadora Systems, we believe exceptional talent shouldn&apos;t be filtered out by robotic algorithms. Our senior engineering squad personally reviews every single submission and CV uploaded.
                    </p>

                    {/* Hiring Timeline Steps */}
                    <div className="flex flex-col gap-6.5">
                      <div className="flex items-start gap-4">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white">
                          <span className="font-mono text-xs text-cyan-600 font-bold">1</span>
                        </div>
                        <div>
                          <h4 className="font-montserrat text-sm font-semibold text-slate-800">Submit Application</h4>
                          <p className="text-slate-500 text-xs mt-1">Upload your credentials, resume details, and specify your target role.</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white">
                          <span className="font-mono text-xs text-cyan-600 font-bold">2</span>
                        </div>
                        <div>
                          <h4 className="font-montserrat text-sm font-semibold text-slate-800">Tech Evaluation</h4>
                          <p className="text-slate-500 text-xs mt-1">Chat directly with senior developers and discuss architectural problems.</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white">
                          <span className="font-mono text-xs text-cyan-600 font-bold">3</span>
                        </div>
                        <div>
                          <h4 className="font-montserrat text-sm font-semibold text-slate-800">Receive Offer</h4>
                          <p className="text-slate-500 text-xs mt-1">Get an industry-standard package and choose your hybrid/remote gear.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Trust/Secure note footer */}
                  <div className="border-t border-slate-200/60 pt-6 mt-8">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                      <span className="text-[12px] font-medium text-slate-500">
                        Secure submission server certified.
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Form Container (Right 7 Columns) */}
              <div className="lg:col-span-7 h-full" id="form-container">
                <motion.div 
                  initial={{ opacity: 0, y: 35, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="group rounded-2xl border border-slate-100 bg-white p-8 shadow-sm hover:shadow-md hover:border-orange-500/20 hover:bg-orange-500/[0.015] transition-all duration-500 relative overflow-hidden h-full"
                >
                  {/* Left blue accent line on hover */}
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-blue origin-center scale-y-0 transition-transform duration-300 group-hover:scale-y-100 z-20" />

                  {/* Glowing Mesh Corner Background on Form Panel */}
                  <div 
                    className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full blur-[45px] opacity-[0.04] pointer-events-none"
                    style={{
                      background: "radial-gradient(circle, #FF8C42, transparent 70%)"
                    }}
                  />
                  <CareersForm />
                </motion.div>
              </div>

            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
