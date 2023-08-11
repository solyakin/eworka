/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainred: '#D006069E',
        bgred: '#D00606',
        lightred: '#DE6161',
      }
    },
  },
  plugins: [],
}

