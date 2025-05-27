/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffb400",
        accent: "#7eb942", 
        dark: "#2b2b2b",
        gray: "#767676",
        background: "#f0f0f6"
      },
      spacing: {
        '305': '305px', // Sidebar izquierdo
        '95': '95px',   // Sidebar derecho
        '220': '220px', // Progress bar
        '154': '154px', // Botón hire me
        '51': '51px',   // Altura botón
        '48': '48px',   // Social circle
        '150': '150px'  // Imagen perfil
      },
      fontWeight: {
        '438': '438'
      }
    }
  }
};

export default config;