/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#050b14',
          800: '#0a1628',
          700: '#0f1f3a',
          600: '#1a2d4a',
        },
        cyber: {
          cyan: '#00d4ff',
          violet: '#7c3aed',
          green: '#00e676',
          orange: '#ffa726',
          red: '#ff3b5c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
