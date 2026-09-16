import React from "react";
import { PILLARS } from "../constants/data";

const TICKER_ITEMS = ["ESTRATEGIA", "CONTENIDO", "AUTOMATIZACIÓN", "PUBLICIDAD"];

export default function Features() {
  return (
    <section className="bg-[#F9F8F6] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Bloque superior: texto + imagen */}
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3">
              <span className="text-[0.75rem] uppercase tracking-[0.18em] text-brand-accent">
                Nuestro estándar
              </span>
              <span className="h-px w-10 bg-brand-accent/60" />
            </div>

            <h2 className="mt-6 max-w-xl text-left font-serif text-[2.2rem] leading-[1.15] text-brand-dark md:text-[2.8rem] lg:text-[3.2rem]">
              El estándar Despega Mark
            </h2>

            <p className="mt-6 max-w-md text-left text-[1.05rem] leading-relaxed text-stone-600">
              No solo hacemos marketing, aplicamos un estándar de trabajo
              enfocado en resultados, calidad y crecimiento real para cada
              proyecto.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div
              className="w-full overflow-hidden rounded-sm bg-brand-dark/5"
              style={{ aspectRatio: "4/3" }}
            >
              <img
                src="/standard-image.jpg"
                alt="Producción de contenido profesional en tienda, símbolo del estándar de trabajo de Despega Mark"
                className="h-full w-full object-cover"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>

        {/* Bloque inferior: pilares numerados */}
        <div className="mt-20 grid grid-cols-1 gap-10 md:mt-28 md:grid-cols-3">
          {PILLARS.map((pillar) => (
            <div key={pillar.number}>
              <div className="flex items-center gap-4">
                <span className="font-serif text-[2rem] text-brand-accent md:text-[2.4rem]">
                  {pillar.number}
                </span>
                <span className="h-px flex-1 bg-brand-dark/15" />
              </div>
              <h3 className="mt-5 font-serif text-[1.3rem] text-brand-dark">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Ticker inferior de cierre de sección */}
        <div className="mt-16 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-brand-dark/10 pt-6 md:mt-20">
          {TICKER_ITEMS.map((item, index) => (
            <React.Fragment key={item}>
              <span className="text-[0.7rem] uppercase tracking-[0.14em] text-brand-dark/40">
                {item}
              </span>
              {index < TICKER_ITEMS.length - 1 && (
                <span className="text-[0.7rem] text-brand-dark/30">/</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}