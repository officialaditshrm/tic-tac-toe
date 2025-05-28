/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme")
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      gruppo: ["gruppo", ...fontFamily.sans],
      gugi: ["gugi", ...fontFamily.sans]
    }
  },
  plugins: [],
  darkMode: "class",
}