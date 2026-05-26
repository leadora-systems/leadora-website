"use client";

import React, { ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

interface MarqueeProps {
  children: ReactNode[];
  className?: string;
  slideClassName?: string;
  speed?: number;
}

export function Marquee({
  children,
  className = "",
  slideClassName = "flex-[0_0_auto]",
  speed = 1,
}: MarqueeProps) {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, dragFree: true, containScroll: false },
    [AutoScroll({ playInOut: false, speed })]
  );

  return (
    <div className={`overflow-hidden ${className}`} ref={emblaRef}>
      <div className="flex gap-4 cursor-grab active:cursor-grabbing">
        {children.map((child, index) => (
          <div key={index} className={slideClassName}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
