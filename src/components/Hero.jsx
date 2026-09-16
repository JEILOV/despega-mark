import React from "react";
import { ArrowRight } from "lucide-react";

const TICKER_ITEMS = ["ESTRATEGIA", "CONTENIDO", "AUTOMATIZACIÓN", "PUBLICIDAD"];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="bg-brand-cream px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-20"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-10">
        {/* Columna izquierda: texto y CTA */}
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3">
            <span className="text-[0.75rem] uppercase tracking-[0.18em] text-brand-accent">
              Agencia de marketing digital
            </span>
            <span className="h-px w-10 bg-brand-accent/60" />
          </div>

          <h1 className="mt-6 max-w-2xl text-left font-serif text-[2.6rem] leading-[1.12] text-brand-dark md:text-[3.6rem] lg:text-[4rem]">
            Marketing digital diseñado para el crecimiento exponencial.
          </h1>

          <p className="mt-6 max-w-md text-left text-[1.05rem] leading-relaxed text-stone-600">
            Somos una agencia enfocada en resultados: diseño cuidado,
            automatización inteligente y estrategia que convierte presencia en
            crecimiento real para tu marca.
          </p>

          <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            
             <a href="#servicios"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-dark px-7 py-3.5 text-[0.95rem] text-brand-cream shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-soft-lg"
            >
              Ver paquetes
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            
             <a href="#casos-de-exito"
              className="text-[0.95rem] text-brand-dark underline decoration-brand-dark/40 decoration-1 underline-offset-4 transition-colors hover:decoration-brand-dark"
            >
              Conoce nuestro trabajo
            </a>
          </div>

          {/* Ticker inferior */}
          <div className="mt-16 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-brand-dark/10 pt-6 lg:mt-24">
            {TICKER_ITEMS.map((item, index) => (
              <React.Fragment key={item}>
                <span className="text-[0.7rem] uppercase tracking-[0.14em] text-brand-dark/50">
                  {item}
                </span>
                {index < TICKER_ITEMS.length - 1 && (
                  <span className="text-[0.7rem] text-brand-dark/30">/</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Columna derecha: imagen */}
        <div className="relative lg:col-span-5">
          <div className="aspect-4/5 w-full overflow-hidden rounded-sm bg-brand-dark/5">
            <img
              src="/hero-image.jpg"
              alt="Espacio de trabajo con luz natural, símbolo de la estrategia y creatividad de Despega Mark"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Etiqueta vertical "SCROLL" */}
          <span
            className="absolute -right-6 top-1/2 hidden -translate-y-1/2 text-[0.7rem] uppercase tracking-[0.3em] text-brand-dark/40 [writing-mode:vertical-rl] md:block"
          >
            SCROLL —
          </span>
        </div>
      </div>
    </section>
  );
}