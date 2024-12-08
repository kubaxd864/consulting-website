/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},

      'xl': {'max': '1320px'},

      'lg': {'max': '1100px'},

      'lm': {'max': '970px'},

      'md': {'max': '767px'},

      'sm': {'max': '520px'},
    },

    extend: {
      height: {
        custom: 'calc(100lvh - 90px)',
      },
      spacing: {
        '22': '5.5rem',
      }
    },
  },
  plugins: [],
}

