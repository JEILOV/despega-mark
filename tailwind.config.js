/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#2C1E16", // Marrón chocolate profundo — texto principal, botones sólidos
          cream: "#F9F8F6", // Hueso / crema suave — fondo principal
          "cream-contrast": "#F4F1EC", // Crema de contraste — fondos de sección alterna
          accent: "#8C7355", // Marrón acentuado — detalles, iconografía, hovers
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -18px rgba(44, 30, 22, 0.18)",
        "soft-lg": "0 20px 60px -20px rgba(44, 30, 22, 0.22)",
      },
    },
  },
  plugins: [],
};