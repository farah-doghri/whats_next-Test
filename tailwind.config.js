const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'header':"url('/src/assets/bg-header2.jpg')",
      })
    },
    colors: {
      gray: colors.trueGray,
      black: '#000',
      green: '#065E38',
      brown: '#932C1B',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
