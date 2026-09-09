import React from "react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="mx-auto flex max-w-4xl flex-col items-center px-6 pb-24 pt-20 text-center md:pb-32 md:pt-28"
    >
      <span className="text-[0.8rem] tracking-[0.02em] text-brand-accent">
        Agencia de marketing digital
      </span>

      <h1 className="mt-6 font-serif text-[2.4rem] leading-[1.15] text-brand-dark md:text-[3.4rem]">
        Marketing digital diseñado para el crecimiento exponencial.
      </h1>

      <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-brand-dark/70">
        Somos una agencia enfocada en resultados: diseño cuidado,
        automatización inteligente y estrategia que convierte presencia en
        crecimiento real para tu marca.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <a
          href="#servicios"
          className="rounded-md bg-brand-dark px-7 py-3.5 text-[0.95rem] text-brand-cream shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-soft-lg"
        >
          Ver paquetes
        </a>
        <a
          href="#contacto"
          className="rounded-md border border-brand-dark/20 px-7 py-3.5 text-[0.95rem] text-brand-dark transition-colors hover:border-brand-dark/60"
        >
          Conoce nuestro trabajo
        </a>
      </div>
    </section>
  );
}