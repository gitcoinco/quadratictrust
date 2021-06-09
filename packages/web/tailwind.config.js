module.exports = {
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
      karla: ["Karla", "sans-serif"],
    },
    extend: {
      colors: {
        "trust-blue": "#0F00B7",
        "trust-green": "#218449",
        "trust-yellow": "#FEC833",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
