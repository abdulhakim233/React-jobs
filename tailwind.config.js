export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    fontFamily:{
      sans:['roboto','sans-serif'],
    },
    gridTempleteColumns: {
      '70/30':'70% 28%',
    },
  },
  },
  plugins: [],
};