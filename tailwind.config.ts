import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navactive: "#5c5c5c",
        black: "#000",
        black2: "#1b1b1b",
        white: "#fff",
        white2: "#fbfaf6",
        gray1: "#5c5c5c",
        gray2: "#f2ece4",
        gray3: "#bfbfbf",
        gray4: "#ebe8e2",
        gray5: "#ddd",
        gray6: "#ccc7be",
        red1: "#c71f1f",
        red2: "#fbe8e8",
        red3: "#e60000",
        green1: "#009d27",
        green2: "#2e8540",
        green3: "#307827",
      },
      fontFamily: {
        primary: "var(--primary-font)",
        secondary: "var(--secondary-font)",
      },
    },
  },
  plugins: [],
} satisfies Config;
