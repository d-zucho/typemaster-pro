/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        primaryLight: 'var(--primary-light)',
        secondary: 'var(--secondary)',
        secondaryLight: 'var(--secondary-light)',
        gray: 'var(--gray)',
      },
    },
  },
  plugins: [],
}
