/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors:{
      background:'#E8E8E8',
      white: '#ffffff',
      blue: '#4897CC',
      red: '#ff0000db',
      gray: '#808080',

    },
    screens: {
      'xs': '360px',
      'lg': '1024px',
      'xl': '1280px',
      'sm': '640px',
      'md': '768px',
    },
  },
  plugins: [],
}

