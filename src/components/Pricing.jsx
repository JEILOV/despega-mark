import React from "react";
import { Check } from "lucide-react";
import { PACKAGES, buildWhatsAppUrl } from "../constants/data";

function PackageCard({ pkg }) {
  const isFeatured = pkg.featured;

  return (
    <div
      className={[
        "flex flex-col rounded-xl border px-8 py-10 transition-all duration-300",
        isFeatured
          ? "border-brand-accent/40 bg-white shadow-soft-lg md:-translate-y-3"
          : "border-brand-dark/10 bg-white/60 hover:-translate-y-1 hover:shadow-soft",
      ].join(" ")}
    >
      {isFeatured && (
        <span className="mb-5 w-fit rounded-full bg-brand-accent/10 px-3 py-1 text-[0.75rem] text-brand-accent">
          El más elegido
        </span>
      )}

      <h3 className="font-serif text-[1.4rem] text-brand-dark">{pkg.name}</h3>
      <p className="mt-2 text-[0.9rem] text-brand-dark/50">{pkg.tagline}</p>

      <div className="mt-6 flex items-baseline gap-1">
        <span className="font-serif text-[2.2rem] text-brand-dark">
          ${pkg.price}
        </span>
        <span className="text-[0.85rem] text-brand-dark/40">/ mes</span>
      </div>

      <div className="my-7 h-px bg-brand-dark/10" />

      <ul className="flex flex-1 flex-col gap-3.5">
        {pkg.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-3 text-[0.92rem] text-brand-dark/80"
          >
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={buildWhatsAppUrl(pkg.whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className={[
          "mt-9 rounded-md px-6 py-3 text-center text-[0.9rem] transition-all",
          isFeatured
            ? "bg-brand-dark text-brand-cream shadow-soft hover:-translate-y-0.5 hover:shadow-soft-lg"
            : "border border-brand-dark/20 text-brand-dark hover:border-brand-dark/60",
        ].join(" ")}
      >
        Elegir {pkg.name}
      </a>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="servicios" className="bg-brand-cream-contrast/60 px-6 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-serif text-[2rem] text-brand-dark md:text-[2.4rem]">
            Paquetes pensados para cada etapa de tu marca
          </h2>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-brand-dark/70">
            Contenido, automatización y publicidad, con el nivel de
            acompañamiento que tu negocio necesita hoy.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3 md:items-center md:gap-6">
          {PACKAGES.map((pkg) => (
            <PackageCard key={pkg.name} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}