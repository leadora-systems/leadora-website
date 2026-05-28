"use client";

import { motion } from "framer-motion";
import { Telescope, Target, ArrowRight } from "lucide-react";

export function VisionMission() {
  return (
    <div className="grid gap-6 md:grid-cols-2 mt-8">
      {/* Vision Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="group relative overflow-hidden rounded-[24px] border border-glass-border bg-white p-10 shadow-lg hover:shadow-[0_20px_60px_rgba(30,144,255,0.12)] transition-all duration-500"
      >
        {/* Abstract Background Elements */}
        <div className="absolute -right-20 -top-20 h-[250px] w-[250px] rounded-full bg-gradient-to-br from-blue/10 to-transparent blur-[40px] group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute -bottom-20 -left-20 h-[200px] w-[200px] rounded-full bg-gradient-to-tr from-cyan/10 to-transparent blur-[30px] group-hover:scale-110 transition-transform duration-700" />

        <div className="relative z-10 flex flex-col h-full">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue/10 to-cyan/5 border border-blue/20 text-blue shadow-inner group-hover:scale-110 transition-transform duration-500">
              <Telescope strokeWidth={1.5} size={28} />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue/60">01</span>
          </div>

          <h3 className="mb-4 font-montserrat text-3xl font-extrabold text-navy">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue to-cyan">Vision</span>
          </h3>

          <p className="text-[15px] leading-relaxed text-muted/90 mb-8 flex-grow">
            To architect the digital frontier, engineering intelligent and highly scalable platforms that empower global enterprises to lead, disrupt, and thrive in an era of rapid technological acceleration.
          </p>

          <div className="flex items-center gap-2 text-sm font-bold text-blue opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
            Shaping the Future <ArrowRight size={16} />
          </div>
        </div>
      </motion.div>

      {/* Mission Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="group relative overflow-hidden rounded-[24px] border border-glass-border bg-navy p-10 shadow-lg hover:shadow-[0_20px_60px_rgba(30,144,255,0.2)] transition-all duration-500"
      >
        {/* Abstract Background Elements */}
        <div className="absolute -right-20 -top-20 h-[250px] w-[250px] rounded-full bg-gradient-to-br from-cyan/10 to-transparent blur-[40px] group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute -bottom-20 -left-20 h-[200px] w-[200px] rounded-full bg-gradient-to-tr from-[#9d00ff]/10 to-transparent blur-[30px] group-hover:scale-110 transition-transform duration-700" />

        <div className="relative z-10 flex flex-col h-full">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-cyan shadow-inner group-hover:scale-110 transition-transform duration-500 backdrop-blur-md">
              <Target strokeWidth={1.5} size={28} />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">02</span>
          </div>

          <h3 className="mb-4 font-montserrat text-3xl font-extrabold text-white">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-[#9d00ff]">Mission</span>
          </h3>

          <p className="text-[15px] leading-relaxed text-gray-300 mb-8 flex-grow">
            To deliver uncompromising engineering excellence through cloud-native solutions, artificial intelligence, and robust software architecture — acting as the definitive technical partner for visionary businesses.
          </p>

          <div className="flex items-center gap-2 text-sm font-bold text-cyan opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
            Delivering Excellence <ArrowRight size={16} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
