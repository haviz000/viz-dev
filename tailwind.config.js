/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Gunakan 'class' untuk dark mode berbasis class
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // Pastikan semua file JSX/TSX ter-cover
  theme: {
    extend: {
      fontFamily: {
        doodle: ["Doodle", "cursive"],
        caveat: ['Caveat', 'cursive']
      },
    },
  },
  plugins: [],
};
