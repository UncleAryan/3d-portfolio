/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js, jsx}'],
  darkMode: 'class', // dark mode with class='dark' attribute in html
  theme: {
    extend: {
      fontFamily: {
        mono: ['Space Mono', 'spacemono'],
        display: ['Syne', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

