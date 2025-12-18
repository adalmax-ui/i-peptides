import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FDF2F8",
          100: "#FCE7F3",
          200: "#FBCFE8",
          300: "#F9A8D4",
          400: "#F472B6",
          500: "#EC1F8F", // Основной розовый из логотипа
          600: "#DB2777",
          700: "#BE185D",
          800: "#9D174D",
          900: "#831843",
        },
        secondary: {
          50: "#ECFEFF",
          100: "#CFFAFE",
          200: "#A5F3FC",
          300: "#67E8F9",
          400: "#22D3EE",
          500: "#20C4D4", // Бирюзовый из логотипа
          600: "#0891B2",
          700: "#0E7490",
          800: "#155E75",
          900: "#164E63",
        },
      },
      boxShadow: {
        glass: "0 10px 30px rgba(2, 6, 23, 0.12)",
      },
      borderRadius: {
        xl2: "1.25rem",
      }
    },
  },
  plugins: [],
};
export default config;
