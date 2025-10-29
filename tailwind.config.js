/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["index.html","slicing.html","./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "f-color": "#A0E1FF",
        "sen-red": "#680000",
        "red-gelap":"#5A0202"
      },
      animation: {
        bounce: "bounce 2s infinite",
      },
      fontFamily:{
        "josep": 'Josefin Sans'
      }
    },
  },
  plugins: [],
};
