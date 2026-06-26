import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Brand Colors */
        brand: {
          green: "#006B3C",
          "green-dark": "#004D2A",
          "green-light": "#00A05A",
          "green-50": "#E6F4EC",
          "green-100": "#C0E4CE",
          "green-200": "#8ECBAB",
          "green-600": "#005C34",
          "green-700": "#004D2A",
          "green-800": "#003D22",
          "green-900": "#002E19",
        },
        navy: {
          DEFAULT: "#0F172A",
          50: "#F0F4FF",
          100: "#E0E7FF",
          200: "#C7D2FE",
          600: "#0D1426",
          700: "#0A1020",
          800: "#07091A",
          900: "#040614",
        },
        gold: {
          DEFAULT: "#F5B700",
          50: "#FFF8E0",
          100: "#FEEEA3",
          200: "#FDE04D",
          600: "#D9A300",
          700: "#BD8E00",
          800: "#A07800",
          900: "#856300",
        },
        /* Neutral */
        gray: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        ui: ["var(--font-poppins)", "system-ui", "sans-serif"],
        sub: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-xl": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["3rem", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
        "display-md": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "display-sm": ["1.875rem", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
        "body-xl": ["1.25rem", { lineHeight: "1.75" }],
        "body-lg": ["1.125rem", { lineHeight: "1.75" }],
        "body-md": ["1rem", { lineHeight: "1.625" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5" }],
        "caption": ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.05em" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
        "34": "8.5rem",
        "38": "9.5rem",
        "42": "10.5rem",
        "46": "11.5rem",
        "50": "12.5rem",
        "section": "7rem",
        "section-lg": "9rem",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        "glow-green": "0 0 40px rgba(0, 107, 60, 0.3)",
        "glow-gold": "0 0 30px rgba(245, 183, 0, 0.2)",
        "card": "0 4px 24px rgba(0, 0, 0, 0.06)",
        "card-hover": "0 12px 48px rgba(0, 0, 0, 0.12)",
        "nav": "0 2px 20px rgba(0, 0, 0, 0.08)",
        "button": "0 4px 16px rgba(0, 107, 60, 0.4)",
        "button-gold": "0 4px 16px rgba(245, 183, 0, 0.4)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out both",
        "fade-in": "fadeIn 0.4s ease-out both",
        "slide-right": "slideRight 0.5s ease-out both",
        "float": "float 3s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "ticker": "ticker 30s linear infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 107, 60, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 107, 60, 0.6)" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #0F172A 0%, #1A2F1A 40%, #0F172A 100%)",
        "green-gradient": "linear-gradient(135deg, #006B3C 0%, #00A05A 100%)",
        "card-gradient": "linear-gradient(135deg, rgba(0,107,60,0.05) 0%, rgba(245,183,0,0.05) 100%)",
        "section-gradient": "linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)",
        "dark-gradient": "linear-gradient(180deg, #0F172A 0%, #1E293B 100%)",
        "noise": "url('/images/noise.png')",
      },
      backdropBlur: {
        xs: "2px",
      },
      transitionTimingFunction: {
        "spring": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      screens: {
        xs: "375px",
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
};

export default config;
