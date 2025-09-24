/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideInLeftFadeOut: {
          '0%': { opacity: '0', transform: 'translateX(-100px) scale(1)' },
          '50%': { opacity: '1', transform: 'translateX(0) scale(1)' },
          '100%': { opacity: '0', transform: 'translateX(0) scale(0.8)' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 1s ease forwards',
        slideInLeftFadeOut: 'slideInLeftFadeOut 5s ease forwards',

      },
    },
  },
  plugins: [],
}

