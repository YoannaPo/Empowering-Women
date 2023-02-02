/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/index.html', './src/**/*.{vue, js, ts, jsx, tsx}'],
  theme: {
    extend: {
      colors: {
        'indigo': colors.indigo,
        cyan: colors.cyan,

      },
      backgroundImage: {
        'hero-pattern':
          "linear-gradient(to right bottom, rgba(75, 0, 130, 0.9), rgba(43, 108, 176, 0.8)), url('https://i.ibb.co/8xsq1vV/brooke-cagle-u-HVRv-Dr7pg-unsplash.jpg')",
        
        'section-pattern':
           "linear-gradient(to right bottom, rgba( 33, 5, 32, 0.9), rgba(0, 0, 14, 0.8)), url('https://i.ibb.co/4Twf3w9/brooke-cagle-people-laptops.jpg')",
      },

    },
  },
  plugins: [],
}
