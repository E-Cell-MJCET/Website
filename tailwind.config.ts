import type { Config } from "tailwindcss";

const svgToDataUri = require("mini-svg-data-uri");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
  // darkMode: ["class"],
  // darkMode: ["class"],
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
      },
      colors: {
        "card-light": "#e4e4e7",
        "card-dark": "#27272a",
        "ecell-red": {
          "100": "#ff403c",
        },
        "ecell-blue": {
          "100": "#0b5db0",
        },
        gray: {
          "50": "#f9fafb",
          "100": "#f3f4f6",
          "200": "#e5e7eb",
          "300": "#d1d5db",
          "400": "#9ca3af",
          "500": "#6b7280",
          "600": "#4b5563",
          "700": "#374151",
          "800": "#1f2937",
          "900": "#111827",
          "950": "#030712",
        },
        slate: {
          "50": "#f8fafc",
          "100": "#f1f5f9",
          "200": "#e2eaf2",
          "300": "#cbd5e1",
          "400": "#94a3b8",
          "500": "#64748b",
          "600": "#475569",
          "700": "#334155",
          "800": "#1e293b",
          "900": "#0f172a",
          "950": "#020617",
        },
        zinc: {
          "50": "#fafafa",
          "100": "#f4f4f5",
          "200": "#e4e4e7",
          "300": "#d4d4d8",
          "400": "#a1a1aa",
          "500": "#717179",
          "600": "#52525a",
          "700": "#3f3f46",
          "800": "#27272a",
          "900": "#18181b",
          "950": "#09090b",
        },
        neutral: {
          "50": "#fafafa",
          "100": "#f5f5f5",
          "200": "#e5e5e5",
          "300": "#d4d4d4",
          "400": "#a3a3a3",
          "500": "#737373",
          "600": "#525252",
          "700": "#404040",
          "800": "#262626",
          "900": "#171717",
          "950": "#0a0a0a",
        },
        stone: {
          "50": "#fafafb",
          "100": "#f5f5f4",
          "200": "#e7e5e4",
          "300": "#d6d3d1",
          "400": "#a8a29e",
          "500": "#78736f",
          "600": "#57534e",
          "700": "#44413c",
          "800": "#292521",
          "900": "#1c1917",
          "950": "#0c0a09",
        },
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
        gradient: "animatedgradient 6s ease infinite alternate",
      },
      backgroundSize: {
        "300%": "300%",
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
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        animatedgradient: {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
        marquee: {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
        marquee2: {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
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
          mobile: {
            max: "700px",
          },
          desktop: {
            min: "640px",
          },
        },
      },
      fontFamily: {
        staatliches: ["var(--font-staatliches)"],
        montserrat: ["var(--font-montserrat)"],
        nanum: ["var(--font-nanum-pen-script)"],
        silkscreen: ["var(--font-silkscreen)"],
        pixelify_sans: ["var(--font-pixelify-`sans)"],
      },
      boxShadow: {
        ticket:
          "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-dot-thick": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
