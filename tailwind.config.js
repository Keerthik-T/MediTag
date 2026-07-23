/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'medical-red': '#DC2626',
        'medical-navy': '#0F172A',
        'medical-green': '#16A34A',
        'medical-yellow': '#EAB308',
      }
    },
  },
  plugins: [],
}
