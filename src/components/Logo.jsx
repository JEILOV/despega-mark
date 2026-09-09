import React from "react";

/**
 * Marca de Despega Mark: usa el ícono real (gráfico de barras ascendente
 * en forma de "M" + flecha), recortado con fondo transparente a partir del
 * logo original, junto al wordmark en serif con tracking amplio.
 *
 * - variant="dark" (default): ícono marrón, para fondos claros (crema).
 * - variant="light": ícono crema, para fondos oscuros (brand-dark).
 *
 * Si en algún punto quieres el lockup completo (ícono + texto ya integrado
 * en la imagen, tal como lo diseñaste), usa en su lugar:
 *   <img src="/logo-full.png" alt="Despega Mark" className="h-12 w-auto" />
 */
export default function Logo({ variant = "dark", className = "" }) {
  const iconSrc = variant === "light" ? "/logo-icon-light.png" : "/logo-icon.png";

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img src={iconSrc} alt="" className="h-6 w-auto" aria-hidden="true" />
      <span
        className={`font-serif text-[1.05rem] tracking-widest ${
          variant === "light" ? "text-brand-cream" : "text-brand-dark"
        }`}
      >
        DESPEGA MARK
      </span>
    </div>
  );
}