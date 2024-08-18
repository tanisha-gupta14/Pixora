/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      purple: '#3f3cbb',
      midnight: {
        500: '#121063',
        700: '#1a1a3f', // added a darker shade for hover effect
      },
      metal: '#565584',
      tahiti: '#3ab7bf',
      silver: '#ecebff',
      'bubble-gum': {
        500: '#ff77e9',
        700: '#ff66cc', // added a darker shade for hover effect
      },
      bermuda: '#78dcca',
      gray: {
        300: '#d3d3d3', // added a light gray shade
      },
      'dark-bg': '#121212', // Dark background color
        'dark-text': '#e0e0e0', 
        
    },
    extend: {},
  },
  plugins: [],
}
