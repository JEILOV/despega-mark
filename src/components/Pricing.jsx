import React from "react";
import { Check } from "lucide-react";
import { PACKAGES, buildWhatsAppUrl } from "../constants/data";

function PackageCard({ pkg }) {
  const isFeatured = pkg.featured;

  return (
    <div
      className={[
        "flex flex-col rounded-sm border p-8 transition-all duration-300 md:p-10",
        isFeatured
          ? "border-brand-accent bg-white shadow-soft-lg md:-translate-y-3"
          : "border-brand-dark/10 bg-white/80 hover:-translate-y-1 hover:shadow-soft",
      ].join(" ")}
    >
      {isFeatured && (
        <span className="mb-5 w-fit rounded-full bg-brand-accent/10 px-3 py-1 text-[0.7rem] uppercase tracking-widest text-brand-accent">
          El más elegido
        </span>
      )}

      <h3 className="font-serif text-2xl text-brand-dark">{pkg.name}</h3>
      <p className="mt-2 text-sm text-stone-500">{pkg.tagline}</p>

      <div className="mt-6 flex items-baseline gap-1">
        <span className="font-serif text-4xl text-brand-dark">
          {pkg.currency} {pkg.price}
        </span>
        <span className="text-[0.85rem] text-brand-dark/40">/ mes</span>
      </div>

      <div className="my-7 h-px bg-brand-dark/10" />

      <ul className="flex flex-1 flex-col gap-3.5">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-stone-700">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a href={buildWhatsAppUrl(pkg.whatsappMessage)} target="_blank" rel="noopener noreferrer" className={[
          "mt-9 rounded-md px-6 py-3 text-center text-[0.9rem] transition-all",
          isFeatured
            ? "bg-brand-dark text-brand-cream shadow-soft hover:-translate-y-0.5 hover:shadow-soft-lg"
            : "border border-brand-dark/20 text-brand-dark hover:border-brand-dark/60",
        ].join(" ")}>
        Elegir {pkg.name}
      </a>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="servicios" className="bg-brand-cream px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="text-[0.75rem] uppercase tracking-[0.18em] text-brand-accent">
              Servicios y planes
            </span>
            <span className="h-px w-10 bg-brand-accent/60" />
          </div>

          <h2 className="mt-6 font-serif text-[2rem] text-brand-dark md:text-[2.4rem]">
            Paquetes pensados para cada etapa de tu marca
          </h2>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-stone-600">
            Contenido, automatización y publicidad, con el nivel de
            acompañamiento que tu negocio necesita hoy.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 items-stretch gap-8 md:grid-cols-3 md:gap-6">
          {PACKAGES.map((pkg) => (
            <PackageCard key={pkg.name} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}