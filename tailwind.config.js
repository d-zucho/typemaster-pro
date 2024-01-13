/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        primaryLight: 'var(--primaryLight)',
        secondary: 'var(--secondary)',
        secondaryLight: 'var(--secondaryLight)',
        gray: 'var(--gray)',
      },
      fontFamily: {
        Barlow: ['Barlow', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
