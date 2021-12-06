module.exports = {
  purge: {
    enabled: false,
    content: ['index.html', './resources/*.vue}']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'cornflower-blue': '#5977FF',
        'ghost-white': '#f5f6fa',
        'midnight-express': '#20253A',
        mischka: '#9B9EAC',
        'navy-blue': {
          DEFAULT: '#0054fe',
          dark: '#0043cb'
        },
        'storm-grey': '#74798c'
      },
      lineHeight: {
        '11': '3.5rem'
      },
      transitionProperty: {
        width: 'width'
      }
    }
  },
  variants: {},
  plugins: []
};
