module.exports = {
  purge: ['./src/**/*.{js, jsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      white:"#fff",
      black:"#000",
      transparent:"transparent",
      greenWebsite:"#2ADDA7",
      footerPrimary:"#0E0A27",
      footerSecondary:"#04080C",
      grayPrimary:"#C4C4C4",
      graySecondary:"#565465",
      bluePrimary:"#110D38",
      blueSecondary:"#DCE4F0",
      // colorOne:rgba(0, 0, 0, 0.4)
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
