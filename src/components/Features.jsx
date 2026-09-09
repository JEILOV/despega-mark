import React from "react";
import { PILLARS } from "../constants/data";

export default function Features() {
  return (
    <section className="px-6 py-24 md:py-28">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-serif text-[1.9rem] text-brand-dark md:text-[2.2rem]">
          El estándar Despega Mark
        </h2>

        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
          {PILLARS.map((pillar) => (
            <div key={pillar.number} className="text-center md:text-left">
              <span className="font-serif text-[1.1rem] text-brand-accent">
                {pillar.number}
              </span>
              <h3 className="mt-3 font-serif text-[1.2rem] text-brand-dark">
                {pillar.title}
              </h3>
              <p className="mt-3 text-[0.92rem] leading-relaxed text-brand-dark/65">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}