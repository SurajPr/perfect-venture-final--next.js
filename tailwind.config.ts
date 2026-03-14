import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7C3AED",
          dark: "#09090f",
          light: "#A78BFA",
          hover: "#8B5CF6",
        },
        surface: {
          DEFAULT: "#111118",
          "2": "#1a1a27",
          "3": "#22223a",
        },
        "bg-base": "#09090f",
        // dark = headline text colour on dark bg
        dark: "#ffffff",
        muted: "rgba(255,255,255,0.5)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
