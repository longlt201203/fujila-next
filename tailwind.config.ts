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
        navyBlue: {
          "0": "#003366",
          "1": "#3874AF"
        },
        myNeutral: {
          softGrey: "#F5F5F5",
          charcoalGrey: "#333333",
          white: "#FFFFFF"
        },
        themeColors: {
          royalBlue: "#4169E1",
          silverBlue: "#B0C4DE",
          ivoryWhite: "#FFFFF0",
          midnightBlue: "#191970",
          crystalBlue: "#5F9EA0"
        }
      },
      fontFamily: {
        display: "Playfair Display, serif",
        heading: "Roboto Slab, serif",
        body: "Open Sans, sans-serif",
        label: "Lato, sans-serif",
        code: "Fira Code, monospace"
      }
    },
  },
  plugins: [],
};
export default config;
