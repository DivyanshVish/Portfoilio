/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#03045e",
        secondary: "#4cc9f0",
        tertiary: "#80ffdb",
        forth: "#FFBF78",
      },
    },
    screens: {
      sm: { max: "639px" },

      lg: { max: "1023px" },
    },
  },
  plugins: [],
};
