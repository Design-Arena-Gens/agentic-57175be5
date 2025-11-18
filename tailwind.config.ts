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
        vault: {
          dark: "#0a0e14",
          darker: "#050709",
          gold: "#d4af37",
          silver: "#c0c0c0",
          platinum: "#e5e4e2",
        },
      },
      fontFamily: {
        suisse: ["var(--font-suisse)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
