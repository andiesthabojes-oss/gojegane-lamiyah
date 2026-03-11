import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#f7ead9",
          soft: "#fff6ea",
          panel: "#fffaf3",
          brownDark: "#4b2e1f",
          brownMedium: "#7a4b2a",
          gold: "#e6b325",
          goldSoft: "#f4cf62",
          leaf: "#5f8f3a",
          leafSoft: "#87b05a",
          cream: "#fff0d8",
        },
      },
      borderRadius: {
        brand: "28px",
      },
      fontFamily: {
        display: ["Baloo 2", "cursive"],
        body: ["Nunito", "sans-serif"],
      },
      boxShadow: {
        brand: "0 12px 32px rgba(75,46,31,0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
