import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0C2257",
          dark: "#091B47",
        },
        cyan: {
          DEFAULT: "#00B8D8",
        },
        amber: {
          DEFAULT: "#F0B429",
          soft: "#F7D56A",
        },
        ink: "#161B22",
        stone: "#F6F7F9",
        line: "#E4E7EC",
      },
      fontFamily: {
        display: ["Montserrat", "sans-serif"],
        body: ["Ubuntu", "sans-serif"],
      },
      maxWidth: {
        container: "1180px",
      },
      borderRadius: {
        organic: "1.75rem",
        "organic-lg": "2.25rem",
      },
      boxShadow: {
        glass: "0 16px 48px rgba(12, 34, 87, 0.12)",
        "glass-lg": "0 24px 64px rgba(12, 34, 87, 0.18)",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        rise: "rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        float: "float 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
