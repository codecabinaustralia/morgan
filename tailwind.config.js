module.exports = {
    purge: [
      './public/**/*.html',
      './src/**/*.vue',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      extend: {
        screens: {
          'print': { 'raw': 'print' },
      },
        colors: {
            vgreen: '#097A4D',
            vgray: '#6F6F70',
            vgrayDark: '#343B45',
            vgraySuperDark: '#1E1E1E',
            vyellow: '#FFF3EA'
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }