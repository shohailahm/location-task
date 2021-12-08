module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary:'#000000',
        secondary:'#ffffff'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
