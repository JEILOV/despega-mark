// Reemplaza por el número real de la agencia, formato internacional sin "+".
export const WHATSAPP_NUMBER = "51903094119";

// Construye un link de WhatsApp con un mensaje personalizado por contexto.
export function buildWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];

export const PILLARS = [
  {
    number: "01",
    title: "Diseño & estética fina",
    description:
      "Piezas visuales que elevan el estatus de tu marca, cuidadas al detalle en cada publicación.",
  },
  {
    number: "02",
    title: "Automatización inteligente",
    description:
      "Flujos de WhatsApp que convierten visitantes en clientes en minutos, sin perder el trato cercano.",
  },
  {
    number: "03",
    title: "Estrategia orientada a ventas",
    description:
      "Campañas de anuncios enfocadas en retorno de inversión, no solo en likes.",
  },
];

export const PACKAGES = [
  {
    name: "Esencial",
    price: "150",
    tagline: "Para marcas que están definiendo su presencia.",
    featured: false,
    whatsappMessage:
      "Hola, me interesa contratar el Paquete Esencial de $150.",
    features: [
      "1 reel",
      "Configuración de chatbot de WhatsApp",
      "Seguimiento de redes sociales (monitoreo)",
      "Personalización de biografía",
    ],
  },
  {
    name: "Impulso",
    price: "250",
    tagline: "El más elegido por marcas en crecimiento activo.",
    featured: true,
    whatsappMessage:
      "Hola, me interesa contratar el Paquete Impulso de $250.",
    features: [
      "3 reels / TikToks",
      "3 diseños de gráficas o carruseles",
      "Chatbot de WhatsApp",
      "1 campaña de publicidad",
      "Gestión y seguimiento continuo",
    ],
  },
  {
    name: "Elite",
    price: "450",
    tagline: "Gestión integral para marcas que escalan en serio.",
    featured: false,
    whatsappMessage: "Hola, me interesa contratar el Paquete Elite de $450.",
    features: [
      "5 reels / TikToks",
      "4 diseños para feed e historias",
      "Gestión de 2 campañas publicitarias",
      "Automatización completa de WhatsApp + plantillas",
      "Entrega de material publicitario",
      "Reporte mensual y reunión de resultados",
    ],
  },
];