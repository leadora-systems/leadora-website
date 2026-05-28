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
        white: "#FFFFFF",
        lightgray: "#F7F9FC",
        navy: "#0B1F3A",
        blue: "#1E90FF",
        cyan: "#00A3FF", // Slightly darker cyan for better readability on white
        orange: "#FF8C42",
        text: "#1A202C", // Dark text for readability
        muted: "#4A5568", // Darker muted for readability on white
        glass: "rgba(255, 255, 255, 0.7)",
        "glass-border": "rgba(0, 0, 0, 0.08)",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        orbitron: ["var(--font-orbitron)", "sans-serif"],
        spaceGrotesk: ["var(--font-space-grotesk)", "sans-serif"],
      },
      backgroundImage: {
        grad: "linear-gradient(135deg, #1E90FF, #00C2FF)",
      },
    },
  },
  plugins: [],
};

export default config;
