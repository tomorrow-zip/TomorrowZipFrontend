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
        btn: "#F5F6FA",
        list: "#F0F2F6",
        "text-gray": "#787A88",
        blue: "#081EF4",
        dot: "#1900ff",
        lightdot: "#cdd0ff"
      },
      animation: {
        'loading': 'spin 1.5s linear infinite',
      }
    },
  },
  plugins: ["postcss-100vh-fix",require("tailwind-scrollbar-hide")],
}
