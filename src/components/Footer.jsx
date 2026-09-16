import React from "react";
import { Instagram, MessageCircle, ArrowRight } from "lucide-react";
import { buildWhatsAppUrl } from "../constants/data";

const FOOTER_WHATSAPP_MESSAGE =
  "Hola, quiero agendar una asesoría con Despega Mark.";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-[#F9F8F6] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Columna izquierda: texto y CTA */}
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3">
              <span className="text-[0.75rem] uppercase tracking-[0.18em] text-brand-accent">
                Despega Mark
              </span>
              <span className="h-px w-10 bg-brand-accent/60" />
            </div>

            <h2 className="mt-6 max-w-2xl text-left font-serif text-3xl leading-[1.15] text-brand-dark md:text-5xl">
              Hablemos de tu próximo proyecto.
            </h2>

            <p className="mt-6 max-w-md text-left text-[1.05rem] leading-relaxed text-stone-600">
              Trabajamos con marcas que buscan crecer con criterio. Escríbenos
              y diseñemos juntos el siguiente paso de tu presencia digital.
            </p>

            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a href={buildWhatsAppUrl(FOOTER_WHATSAPP_MESSAGE)} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 rounded-full bg-[#2C1E16] px-7 py-4 text-[0.95rem] text-brand-cream shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-soft-lg">
                <MessageCircle className="h-4 w-4" />
                Escríbenos por WhatsApp
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="https://instagram.com/despega_mark" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 rounded-full border border-brand-dark/20 px-7 py-4 text-[0.95rem] text-brand-dark transition-colors hover:border-brand-dark/60">
                <Instagram className="h-4 w-4" />
                @despega_mark
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Columna derecha: remate editorial */}
          <div className="hidden border-l border-brand-dark/15 pl-8 lg:col-span-4 lg:block lg:pl-12">
            <span className="text-[0.75rem] uppercase tracking-[0.18em] text-brand-dark/50">
              Marcas que crecen con
            </span>
            <p className="mt-3 font-serif text-3xl italic text-brand-dark md:text-4xl">
              estrategia.
            </p>
          </div>
        </div>

        {/* Derechos de autor */}
        <div className="mt-16 border-t border-brand-dark/10 pt-8">
          <p className="text-center text-xs text-brand-dark/40">
            © {new Date().getFullYear()} Despega Mark. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}