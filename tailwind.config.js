/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: 'var(--color-black)',
        ivory: 'var(--color-ivory)',
        orange: 'var(--color-orange)',
        white: 'var(--color-white)',
        green: 'var(--color-green)',
        brown: 'var(--color-brown)',
        salmon: 'var(--color-salmon)',
        primary: {
          50: 'var(--color-white)',
          100: 'var(--color-ivory)',
          200: 'var(--color-green)',
          300: 'var(--color-brown)',
          400: 'var(--color-salmon)',
          500: 'var(--color-orange)',
          600: 'var(--color-orange)',
          700: '#c95335',
          800: '#873d2b',
          900: 'var(--color-black)',
        },
        accent: {
          500: 'var(--color-salmon)',
          600: 'var(--color-brown)',
        },
        slate: {
          50: 'var(--color-white)',
          100: 'var(--color-ivory)',
          200: 'var(--color-green)',
          300: 'var(--color-green)',
          400: 'var(--color-brown)',
          500: 'var(--color-brown)',
          600: '#6f6b59',
          700: '#454338',
          800: 'var(--color-black)',
          900: 'var(--color-black)',
          950: 'var(--color-black)',
        },
      },
      fontFamily: {
        sans: ['Inter Tight', 'sans-serif'],
        heading: ['Unbounded', 'sans-serif'],
        mono: ['Courier Prime', 'monospace'],
      },
      spacing: {
        'gutter': 'clamp(1rem, 5vw, 2rem)',
      },
    },
  },
  plugins: [],
}
