module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
      karla: ["Karla", "sans-serif"],
    },
    extend: {
      colors: {
        "trust-blue": "#0F00B7",
        "trust-yellow": "#FEC833",
        "trust-background": "#FFFBEF",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
