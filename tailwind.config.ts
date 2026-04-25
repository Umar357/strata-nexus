import type { Config } from "tailwindcss";

/**
 * Design tokens mirror the Figma variable system 1:1.
 * Consumed either via Tailwind utility classes (e.g. `text-text-brand`)
 * or directly as CSS custom properties (e.g. `var(--color-text-brand)`).
 */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: {
          page: "var(--color-surface-page)",
          glass: "var(--color-surface-glass)",
        },
        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          brand: "var(--color-text-brand)",
          inverse: "var(--color-text-inverse)",
        },
        brand: {
          DEFAULT: "var(--color-brand-500)",
          400: "var(--color-brand-400)",
          500: "var(--color-brand-500)",
          accent: "var(--color-brand-accent)",
        },
        border: {
          brand: "var(--color-border-brand)",
          DEFAULT: "var(--color-border-default)",
        },
        glow: {
          brand: "var(--color-glow-brand)",
        },
        interactive: {
          secondary: "var(--color-interactive-secondary)",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      fontSize: {
        // maps directly to Figma Typography/Font Size tokens
        xs: ["12px", { lineHeight: "1.5" }],
        sm: ["14px", { lineHeight: "1.5" }],
        base: ["16px", { lineHeight: "1.5" }],
        lg: ["18px", { lineHeight: "1.62" }],
        xl: ["20px", { lineHeight: "1.4" }],
        "2xl": ["24px", { lineHeight: "1.3" }],
        "3xl": ["30px", { lineHeight: "1.25" }],
        "4xl": ["36px", { lineHeight: "1.2" }],
        "5xl": ["48px", { lineHeight: "1.15" }],
        "6xl": ["60px", { lineHeight: "1.15", letterSpacing: "-2px" }],
        "7xl": ["72px", { lineHeight: "1.1", letterSpacing: "-3px" }],
      },
      letterSpacing: {
        tight: "-2px",
        normal: "0px",
      },
      borderRadius: {
        full: "9999px",
      },
      boxShadow: {
        "glow-sm": "0 0 8px rgba(0, 212, 190, 0.4)",
        "glow-md": "0 0 24px rgba(0, 212, 190, 0.45)",
        "glow-lg": "0 0 48px rgba(0, 212, 190, 0.5)",
        "glow-xxl": "0 0 80px rgba(0, 212, 190, 0.55)",
      },
      transitionTimingFunction: {
        "swift-out": "cubic-bezier(0.22, 1, 0.36, 1)",
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      backgroundImage: {
        "gradient-cta": "linear-gradient(168deg, #00d4be 0%, #00b4d8 100%)",
        "gradient-brand-text":
          "linear-gradient(171deg, #00d4be 0%, #00a8ff 50%, #00d4be 100%)",
      },
      animation: {
        "gradient-shift": "gradient-shift 8s ease-in-out infinite",
        "ray-drift": "ray-drift 14s ease-in-out infinite",
        "ray-drift-slow": "ray-drift 22s ease-in-out infinite reverse",
        "scroll-nudge": "scroll-nudge 2.2s ease-in-out infinite",
        "pulse-dot": "pulse-dot 2.4s ease-in-out infinite",
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "ray-drift": {
          "0%, 100%": {
            transform: "translateX(-2%) rotate(0deg)",
            opacity: "0.55",
          },
          "50%": {
            transform: "translateX(3%) rotate(1.5deg)",
            opacity: "0.95",
          },
        },
        "scroll-nudge": {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.6" },
          "50%": { transform: "translateY(6px)", opacity: "1" },
        },
        "pulse-dot": {
          "0%, 100%": {
            boxShadow: "0 0 0 0 rgba(0, 212, 190, 0.6)",
            transform: "scale(1)",
          },
          "50%": {
            boxShadow: "0 0 0 6px rgba(0, 212, 190, 0)",
            transform: "scale(1.15)",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
