module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'target-black': '#000000',
        'target-blue': '#2FBCF7',
        'target-yellow': '#EFC638',
        'target-red': '#EB2A2A',
        'target-disabled-gray': '#666666',
      },
    },
    fontFamily: {
      openSans: ['Open Sans', 'sans-seriff'],
    },
  },
  plugins: [],
};
