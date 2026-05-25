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
        navy: "#050A14",
        navy2: "#0A1628",
        blue: "#1E6FFF",
        cyan: "#00C8FF",
        orange: "#FF6B2B",
        text: "#F0F4FF",
        muted: "#8899AA",
        glass: "rgba(255,255,255,0.04)",
        "glass-border": "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
      },
      backgroundImage: {
        grad: "linear-gradient(135deg, #1E6FFF, #00C8FF)",
      },
    },
  },
  plugins: [],
};

export default config;
