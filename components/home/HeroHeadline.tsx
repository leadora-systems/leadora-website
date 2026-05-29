"use client";

export function HeroHeadline() {
  return (
    <h1
      className="fade-up-2 flex flex-col gap-2 font-extrabold leading-[1.1] tracking-tight text-white"
      style={{ fontSize: "clamp(20px, 3.2vw, 42px)" }}
    >
      <span className="block uppercase text-white">WE ARE</span>
      <span className="block uppercase text-white">BUILDING</span>
      <span className="block uppercase text-white">SCALABLE</span>
      <span className="block uppercase text-white">SOLUTIONS</span>
    </h1>
  );
}