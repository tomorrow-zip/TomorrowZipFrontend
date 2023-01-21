/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        border: "#ECEDF1",
        buttonFill: "#F5F6FA",
        listFill: "#F0F2F6",
        textGray: "#787A88",
        blue: "#081EF4",
        dot: "#1900ff",
        lightdot: "#cdd0ff"
      }
    },
  },
  plugins: [],
}
