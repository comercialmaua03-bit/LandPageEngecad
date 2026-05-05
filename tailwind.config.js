/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
            brand: { dark: '#0a3d2f', mid: '#1a6b4a', light: '#2d9b6e', pale: '#e8f5f0' },
            accent: { blue: '#1a4f7a', light: '#2a7ab5' },
            surface: '#f7faf9'
          },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
