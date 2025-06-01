
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        pharaonic: {
          gold: "#FFCB45",
          brightGold: "#FFD700",
          darkGold: "#B8860B",
          red: "#D81F26",
          royalBlue: "#0C4B8E",
          sand: "#FEF7CD",
          sandDark: "#D9C097",
          papyrus: "#EBE6D1",
          stone: "#403E43",
          charcoal: "#221F26",
          nileBlue: "#4A6FA5",
          turquoise: "#26A69A",
          lapis: "#2E5090",
          ochre: "#CC7722",
          clay: "#B87333",
          // New pharaonic colors
          hieroglyphic: "#E6C478",
          ankh: "#DAAA3F",
          scarab: "#169873",
          lotus: "#9B4F96",
          pyramid: "#D4AF37",
          sphinx: "#C19A6B",
          ibis: "#FF5722",
          horus: "#3F51B5",
          osiris: "#006064",
          isis: "#880E4F",
          anubis: "#212121",
          khepri: "#2E7D32",
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "book-rotate": {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" }
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        "scarab-glow": {
          "0%, 100%": { filter: "drop-shadow(0 0 2px #FFCB45)" },
          "50%": { filter: "drop-shadow(0 0 8px #FFCB45)" }
        },
        "pulse-gold": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" }
        },
        "shimmer": {
          "0%": { backgroundPosition: "-500px 0" },
          "100%": { backgroundPosition: "500px 0" }
        },
        "rotate-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        },
        "golden-pulse": {
          "0%, 100%": { boxShadow: "0 0 5px 2px rgba(255, 203, 69, 0.4)" },
          "50%": { boxShadow: "0 0 15px 5px rgba(255, 203, 69, 0.7)" }
        },
        "ankh-spin": {
          "0%": { transform: "rotate(0deg) scale(1)" },
          "50%": { transform: "rotate(180deg) scale(1.2)" },
          "100%": { transform: "rotate(360deg) scale(1)" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "book-rotate": "book-rotate 15s linear infinite",
        "float": "float 3s ease-in-out infinite",
        "scarab-glow": "scarab-glow 4s ease-in-out infinite",
        "pulse-gold": "pulse-gold 2s ease-in-out infinite",
        "shimmer": "shimmer 2.5s infinite linear",
        "rotate-slow": "rotate-slow 20s linear infinite",
        "golden-pulse": "golden-pulse 3s ease-in-out infinite",
        "ankh-spin": "ankh-spin 10s ease-in-out infinite"
      },
      backgroundImage: {
        'papyrus-texture': "url('/papyrus-bg.jpg')",
        'stone-texture': "url('/stone-bg.jpg')",
        'hieroglyph-pattern': "linear-gradient(rgba(254, 247, 205, 0.8), rgba(254, 247, 205, 0.8)), url('/hieroglyph-pattern.png')",
        'gold-gradient': "linear-gradient(to right, #FFDB58, #FFCB45, #B8860B, #FFCB45, #FFDB58)",
        'ankh-pattern': "url('/ankh-pattern.png')",
        'scarab-pattern': "url('/scarab-pattern.png')",
        'eye-pattern': "url('/eye-pattern.png')",
      },
      fontFamily: {
        hieroglyphic: ["'Hieroglyphic'", "serif"],
        egyptian: ["'Cinzel'", "serif"],
        body: ["'Roboto'", "sans-serif"],
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
