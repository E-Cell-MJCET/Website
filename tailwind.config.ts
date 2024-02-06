import type { Config } from "tailwindcss";

const config = {
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
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",

        "blue-img":
          'url("https://images.unsplash.com/photo-1523633589114-88eaf4b4f1a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&fit=crop&w=460&h=340&q=100")',
        "green-img":
          'url("https://images.unsplash.com/photo-1488330890490-c291ecf62571?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&fit=crop&w=460&h=340&q=100")',
        "purple-img":
          'url("https://images.unsplash.com/photo-1511800453077-8c0afa94175f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&fit=crop&w=460&h=340&q=100")',
        "red-img":
          'url("https://images.unsplash.com/photo-1519181245277-cffeb31da2e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&fit=crop&w=460&h=340&q=100")',
        "yellow-img":
          'url("https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&fit=crop&w=460&h=340&q=100")',
      },

      colors: {
        "ecell-red": {
          100: "#ff403c",
        },
        "ecell-blue": {
          100: "#0b5db0",
        },
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
          950: "#030712",
        },

        "back-light": "#ffffff",
        "back-dark": "#000000",

        black: "#000000",
        white: "#ffffff",
        transparent: "transparent",
      },
      animation: {
        tilt: "tilt 10s infinite linear",
        fadein: "fadein 2s ease",
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },

      keyframes: {
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(1.5deg)",
          },
          "75%": {
            transform: "rotate(-1.5deg)",
          },
        },

        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },

        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },

        fadein: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "100",
          },
        },
        screens: {
          mobile: { max: "639px" },
          desktop: { min: "640px" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
