/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      textStroke: {
        '2': '2px',
        '3': '3px',
        '4': '4px',
      },
      textStrokeColor: {
        'black': 'black',
        'white': 'white',
      },
      textColor: {
        'transparent': 'transparent',
      },
      keyframes:{
        marquee:{
          '0%':{ transform: 'translateX(100%)'},
          '100%':{transform: 'translateX(-100%)'}
        },
      },
      animation: { marquee: 'move letters',},
    },
  },
  plugins: [require('flowbite/plugin')],
}
