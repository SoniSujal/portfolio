/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        darkBg: "#1a202c",
        darkText: "#f7fafc",
      },
    },
  },
  plugins: [],
};
