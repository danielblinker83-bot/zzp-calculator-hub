import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1B2733",
        petrol: {
          50: "#EEF6F5",
          100: "#D8ECE9",
          600: "#0E6E63",
          700: "#0B5850",
          800: "#08443E",
        },
        amber: { 400: "#F0B429", 500: "#DE911D" },
        mist: "#F6F8F8",
      },
      fontFamily: {
        sans: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(27,39,51,0.06), 0 4px 16px rgba(27,39,51,0.06)",
      },
    },
  },
  plugins: [],
};
export default config;
