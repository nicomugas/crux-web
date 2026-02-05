/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cruxAzul: '#2B3990',
        cruxCeleste: '#27AAE1',
      },
    },
  },
  plugins: [],
}