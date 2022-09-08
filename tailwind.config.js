/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '760px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        cozyPink: '#deb7ab',
        purpleBlue: '#3a3958',
        paleGray: '#DCD3DO',
        whiteGray: '#F5EEEC',
        solidGray: '#625C60',
        basicGray: '#404040',
        cozyBeige: '#A7846E',
        paleBlueGray: "#EBEBEB",
        paleBeige: "#FCF8F5",
        fallBeige: "#B68C4B",
        deepTaupe: "#786662",
        lightPink: "#fae0dc"
      },
      spacing: {
        sm: '10px',
        md: '50px',
        lg: '100px',
        xl: '200px'
      },
    },
  },
  plugins: [],
}
