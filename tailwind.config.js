/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#06b6d4", // Cyan 500
        secondary: "#0891b2", // Cyan 600
        background: "#0f172a", // Slate 900
        text: "#e2e8f0", // Slate 200
        border: "#1e293b", // Slate 800
      },
    },
  },
  plugins: [],
};
