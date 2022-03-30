module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    minHeight:{
      '0': '0',
      '1/4':'25%',
      '3/4':'75%',
      '6/7': '85%',
      'full':'100%',
      'screen':'100vh',
    },
    extend: {
      backgroundColor:{
        'black-t-50': 'rgba(0,0,0,0.5)',
      },
    },
  },
  variants: {},
  plugins: [],
}
