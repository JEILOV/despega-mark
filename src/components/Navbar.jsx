import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { NAV_LINKS } from "../constants/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-dark/10 bg-brand-cream/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <a href="#inicio" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.9rem] text-brand-dark/70 transition-colors hover:text-brand-dark"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="rounded-md bg-brand-dark px-5 py-2.5 text-[0.9rem] text-brand-cream shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-soft-lg"
          >
            Agendar asesoría
          </a>
        </nav>

        <button
          className="text-brand-dark md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-brand-dark/10 px-6 pb-6 md:hidden">
          <nav className="flex flex-col gap-4 pt-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-[0.95rem] text-brand-dark/80"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-md bg-brand-dark px-5 py-3 text-center text-[0.95rem] text-brand-cream"
            >
              Agendar asesoría
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}