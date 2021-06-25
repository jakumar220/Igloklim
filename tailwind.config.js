module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge:{ 
    enabled: true,
    content: ["public/index.html"],
  
},
  theme: {
    extend: {
      colors:{
        primary: '#000000', //tu glowny kolor
        secondary:{
          100:'000000', // tu odcienie pobocznego
          200:'000000',
        }
      }
    },
  },
  variants: {},
  plugins: [],
}
