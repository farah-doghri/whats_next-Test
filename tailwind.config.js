const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'header':"url('/src/assets/bg-header.jpg')",
      })
    },
    colors: {
      gray: colors.trueGray,
      pink: {
        DEFAULT: '#EBBBB9',
      },
      brown: {
        DEFAULT: '#5D3828',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
