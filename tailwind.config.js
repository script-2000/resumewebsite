/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      keyframes: {
        flip: {
          '0%': { transform: 'rotateY(0deg)' },
          '50%': { transform: 'rotateY(90deg)' },
          '100%': { transform: 'rotateY(100deg)' },
        },
      },
      animation: {
        flip: 'flip 0.5s forwards',
      },
    },
  },
  darkMode: ['class', '[data-mode="dark"]'],
  plugins: [],
};
