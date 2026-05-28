"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const clients = [
  { name: "Leadora Systems", logo: "/clients/leadora-new.png" },
  { name: "ZipCart", logo: "/clients/zipcart.png" },
  { name: "Kaushik Nursery", logo: "/clients/kaushik-nursery-new.png" },
  { name: "CSC", logo: "/clients/csc-new-logo.png" },
];

export function CompanyLogos() {
  // Duplicate the array a few times to ensure seamless infinite scrolling
  const duplicatedClients = [...clients, ...clients, ...clients, ...clients];

  return (
    <div className="relative w-full overflow-hidden rounded-[32px] py-16 px-4 bg-navy border border-glass-border shadow-2xl mt-8">
      
      {/* Abstract Digital Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-[#051124] pointer-events-none z-0" />
      
      {/* Soft Radial Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-blue/10 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-cyan/10 rounded-full blur-[80px] pointer-events-none z-0" />
      
      {/* Subtle Digital Grid Texture */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Floating Particles / Light Streaks */}
      <motion.div 
        animate={{ 
          x: ["0%", "100%", "0%"],
          opacity: [0, 0.5, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-0 h-[1px] w-[30%] bg-gradient-to-r from-transparent via-cyan to-transparent z-0 blur-[1px]"
      />
      <motion.div 
        animate={{ 
          x: ["100%", "0%", "100%"],
          opacity: [0, 0.3, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/3 right-0 h-[2px] w-[40%] bg-gradient-to-r from-transparent via-blue to-transparent z-0 blur-[2px]"
      />

      {/* Soft gradient masks on the edges to fade out the logos */}
      <div className="absolute left-0 top-0 z-20 h-full w-32 bg-gradient-to-r from-navy to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 z-20 h-full w-32 bg-gradient-to-l from-navy to-transparent pointer-events-none" />

      {/* The Scrolling Marquee */}
      <div className="flex w-[200%] relative z-10">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
          className="flex flex-none items-center justify-start gap-12 sm:gap-20 px-6 sm:px-12"
        >
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="relative flex h-28 w-48 sm:h-36 sm:w-64 flex-shrink-0 items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] group hover:bg-white/10 hover:border-blue/30 transition-all duration-500 overflow-hidden"
            >
              {/* Inner Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Logo Image */}
              <div className="relative w-full h-full transition-all duration-500 transform group-hover:scale-110">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_20px_rgba(30,144,255,0.3)] transition-all duration-500"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

