module.exports = {
    purge: [
      './public/**/*.html',
      './src/**/*.vue',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
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