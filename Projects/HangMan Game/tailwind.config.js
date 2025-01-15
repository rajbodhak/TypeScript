/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        '6': '6px',
        '1.6': '0.1rem'
      },
    },
  },
  plugins: [],
}

