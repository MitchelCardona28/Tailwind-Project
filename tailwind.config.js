/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'bali': "url('./public/imgs/bali.jpg')",
        'chicago': "url('./public/imgs/chicago.jpg')",
        'europe': "url('./public/imgs/europe.jpg')",
        'iceland': "url('./public/imgs/iceland.jpg')",
        'LA': "url('./public/imgs/LA.jpg')",
        'miami': "url('./public/imgs/miami.jpg')",
        'new_york': "url('./public/imgs/new_york.jpg')",
        'norway': "url('./public/imgs/norway.jpg')",
        'sanFrancisco': "url('./public/imgs/sanFrancisco.jpg')",
        'sanFrancisDesktop': "url('./public/imgs/sanFrancisDesktop.jpg')",
        'seattle': "url('./public/imgs/seattle.jpg')",
        'switzerland': "url('./public/imgs/switzerland.jpg')",
        'sydney': "url('./public/imgs/sydney.jpg')",
        'yosemite': "url('./public/imgs/yosemite.jpg')",
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'principal': '#CC2D4A',
        'secondary': '#8FA206',
        'tertiary': '#61AEC9',
      }),
      textColor: {
        'principal': '#CC2D4A',
        'secondary': '#8FA206',
        'tertiary': '#61AEC9',
      },
      fontFamily: {
        Monserrat: ["Monserrat", "sans-serif"],
      },
    },
  },
  plugins: []
}

