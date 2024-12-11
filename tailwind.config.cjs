// tailwind.config.js
export default {
  darkMode: "class", // Use 'class' for class-based dark mode
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // Ensure all JSX/TSX files are covered
  theme: {
    extend: {
      fontFamily: {
        doodle: ["Doodle", "cursive"],
        caveat: ["Caveat", "cursive"],
      },
    },
  },
  plugins: [],
};
