import React from "react";
import { Instagram, MessageCircle, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import { buildWhatsAppUrl } from "../constants/data";

const FOOTER_WHATSAPP_MESSAGE =
  "Hola, quiero agendar una asesoría con Despega Mark.";

export default function Footer() {
  return (
    <footer id="contacto" className="px-6 py-20 md:py-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <Logo />

        <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-brand-dark/70">
          Trabajamos con marcas que buscan crecer con criterio. Escríbenos y
          diseñemos juntos el siguiente paso de tu presencia digital.
        </p>

        <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href={buildWhatsAppUrl(FOOTER_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md bg-brand-dark px-7 py-3.5 text-[0.9rem] text-brand-cream shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-soft-lg"
          >
            <MessageCircle className="h-4 w-4" />
            Escríbenos por WhatsApp
          </a>
          <a
            href="https://instagram.com/despega_mark"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md border border-brand-dark/20 px-7 py-3.5 text-[0.9rem] text-brand-dark transition-colors hover:border-brand-dark/60"
          >
            <Instagram className="h-4 w-4" />
            @despega_mark
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="mt-16 w-full border-t border-brand-dark/10 pt-6">
          <p className="text-[0.8rem] text-brand-dark/40">
            © {new Date().getFullYear()} Despega Mark. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}