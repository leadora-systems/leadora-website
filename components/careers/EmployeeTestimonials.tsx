"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Heart, Sparkles } from "lucide-react";

const employeeTestimonials = [
  {
    name: "Akash Bandla",
    role: "Backend Developer",
    experience: "",
    quote: "Building products at Leadora is a dream for developers who love clean architecture. We write enterprise Spring Boot systems and modern React interfaces with complete ownership. The hybrid flexibility and the hardware budget allow me to do my best work every single day.",
    initials: "AB",
    gradient: "from-violet-500 to-indigo-600",
    hoverBgClass: "hover:bg-violet-500/[0.015] hover:border-violet-500/20",
    hoverTextClass: "group-hover:text-violet-600"
  },
  {
    name: "Sathya Thota",
    role: "Frontend Developer",
    experience: "",
    quote: "The visual details and user experiences we craft here are on par with international standards. We use Next.js, Framer Motion, and Tailwind CSS to bring incredibly polished web apps to life. The knowledge-sharing culture and dedicated learning budget helped me complete my cloud certifications easily.",
    initials: "ST",
    gradient: "from-pink-400 to-indigo-500",
    hoverBgClass: "hover:bg-indigo-500/[0.015] hover:border-indigo-500/20",
    hoverTextClass: "group-hover:text-indigo-600"
  },
  {
    name: "Gopireddy Manvitha",
    role: "Frontend Developer",
    experience: "",
    quote: "Our Azure cloud practices are extremely advanced. Automating microservices clusters with Kubernetes, Docker, and Terraform provides massive scope for engineering growth. The transparency from leadership and the collaborative atmosphere make Leadora feel like a tight-knit squad of world-class builders.",
    initials: "GM",
    gradient: "from-emerald-400 to-teal-600",
    hoverBgClass: "hover:bg-emerald-500/[0.015] hover:border-emerald-500/20",
    hoverTextClass: "group-hover:text-emerald-600"
  },
  {
    name: "Matangi Varshini",
    role: "Backend Developer",
    experience: "",
    quote: "Collaborating with Leadora's engineering team is amazing because they truly respect the design process. They don't just build code; they refine animations, hover micro-effects, and layout alignment. It's a supportive environment that truly values creative problem solving.",
    initials: "MV",
    gradient: "from-amber-400 to-orange-500",
    hoverBgClass: "hover:bg-orange-500/[0.015] hover:border-orange-500/20",
    hoverTextClass: "group-hover:text-orange-600"
  }
];

export function EmployeeTestimonials() {
  const [currentIndex, setCurrentTextIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isHovered, setIsHovered] = useState(false);
  const autoPlayTimerRef = useRef<ReturnType<typeof setTimeout>>();

  const slideNext = () => {
    setDirection(1);
    setCurrentTextIndex((prev) => (prev + 1) % employeeTestimonials.length);
  };

  const slidePrev = () => {
    setDirection(-1);
    setCurrentTextIndex((prev) => (prev - 1 + employeeTestimonials.length) % employeeTestimonials.length);
  };

  // Auto slide effect
  useEffect(() => {
    if (isHovered) {
      if (autoPlayTimerRef.current) clearTimeout(autoPlayTimerRef.current);
      return;
    }

    const play = () => {
      autoPlayTimerRef.current = setTimeout(() => {
        slideNext();
      }, 5000);
    };

    play();

    return () => {
      if (autoPlayTimerRef.current) clearTimeout(autoPlayTimerRef.current);
    };
  }, [currentIndex, isHovered]);

  const current = employeeTestimonials[currentIndex];

  // Framer motion variants for horizontal slide animation
  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <section className="section relative overflow-hidden bg-transparent py-24">
      {/* Background radial soft cyan glows */}
      <div className="absolute top-[10%] left-[5%] w-[450px] h-[450px] bg-gradient-to-tr from-cyan-100/10 to-transparent blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-[550px] h-[550px] bg-gradient-to-tr from-blue-100/10 to-transparent blur-[130px] rounded-full pointer-events-none" />

      <div className="container relative z-10 max-w-[950px]">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="font-montserrat text-[10px] font-bold tracking-[4px] text-blue uppercase bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
            EMPLOYEE VOICES
          </span>
          <h2 className="font-montserrat text-[clamp(28px,4vw,44px)] font-bold text-navy mt-4 leading-tight">
            Hear From Our <span className="bg-gradient-to-r from-blue via-cyan to-indigo-600 bg-clip-text text-transparent filter drop-shadow-[0_0_15px_rgba(0,194,255,0.2)]">Crew</span>
          </h2>
          <p className="max-w-[580px] mx-auto text-slate-500 mt-3.5 text-base leading-relaxed">
            Get an inside perspective on what it feels like to build, deploy, and scale world-class software systems at Leadora.
          </p>
        </motion.div>

        {/* Carousel Window */}
        <motion.div 
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`group relative rounded-3xl border border-slate-100 bg-white shadow-xl shadow-blue-500/[0.015] p-8 md:p-12 overflow-hidden cursor-pointer transition-all duration-500 ${current.hoverBgClass}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left blue accent line on hover */}
          <div className="absolute left-0 top-0 bottom-0 w-[3.5px] bg-blue origin-center scale-y-0 transition-transform duration-300 group-hover:scale-y-100 z-20" />

          {/* Cyber accents */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
          <Quote className="absolute right-8 top-8 w-24 h-24 text-slate-100/60 pointer-events-none" />

          <div className="relative min-h-[360px] md:min-h-[260px] flex flex-col justify-between">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full flex flex-col justify-between h-full"
              >
                <div>
                  {/* Testimonial Quote */}
                  <p className="font-sans text-[16px] md:text-[18px] leading-relaxed text-slate-700 font-medium italic mb-8 relative z-10 pr-4">
                    &ldquo;{current.quote}&rdquo;
                  </p>
                </div>

                {/* Profile Meta Details */}
                <div className="flex flex-wrap gap-4 items-center justify-between border-t border-slate-100/80 pt-6">
                  <div className="flex items-center gap-4">
                    {/* Stylized Profile initials with glowing circular gradients */}
                    <div className={`relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${current.gradient} text-white font-montserrat text-lg font-bold shadow-md`}>
                      <div className="absolute inset-1 rounded-xl border border-white/20" />
                      {current.initials}
                    </div>

                    <div className="text-left">
                      <h4 className="font-montserrat text-base font-bold text-navy">
                        {current.name}
                      </h4>
                      <div className="flex flex-wrap gap-1.5 items-center mt-1 text-xs font-semibold text-slate-500">
                        <span className={`font-bold transition-colors duration-300 ${current.hoverTextClass || "text-cyan-600"}`}>{current.role}</span>
                        {current.experience && (
                          <>
                            <span className="text-slate-300">•</span>
                            <span>{current.experience}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Trust indicator on right */}
                  <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 font-montserrat tracking-wide">
                    <Heart className="w-3.5 h-3.5 text-rose-500 animate-pulse" /> Certified Review
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Action buttons prev/next */}
          <div className="absolute right-8 bottom-28 md:bottom-12 flex gap-2">
            <button
              onClick={slidePrev}
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-100 bg-white text-slate-500 hover:text-cyan-500 hover:border-cyan-500/20 hover:shadow-md transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={slideNext}
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-100 bg-white text-slate-500 hover:text-cyan-500 hover:border-cyan-500/20 hover:shadow-md transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Carousel indicators/dots */}
        <div className="flex gap-2 justify-center mt-6">
          {employeeTestimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentTextIndex(index);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === index ? "w-6 bg-cyan-500" : "w-2 bg-slate-200 hover:bg-slate-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
