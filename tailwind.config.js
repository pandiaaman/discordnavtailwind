/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/*.{js,jsx,html}"],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: "#202225",
        secondary: "#5865f2",
      },
    },
  },
  plugins: [],
};
