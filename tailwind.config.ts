import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        tilt: "tilt 10s infinite linear",
        fadein: "fadein 2s ease",
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

        fadein: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "100",
          },
        },
        screens: {
          mobile: { max: "700px" },
          desktop: { min: "640px" },
        },
      },
    },
    plugins: [],
  },
};
export default config;
