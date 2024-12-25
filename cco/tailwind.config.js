/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '90%': '95%',
      },
      screens: {
        '2xs': '320px',
        'xs': '480px',
        'base': '500px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1400px',
        '3xl': '1800px',
      },
      colors: {
        // Configure your color palette here
        'metal': '#565584',
        'orangetext': '#E3654E',
        'white' : '#ffffff',
        'brown' : "#2D2926",
        'border-line' : "#706F6D",
        'width' : '900px'
      }
    },
  },
  plugins: [],
}

// module.exports = {
//   theme: {
//     colors: {
//       // Configure your color palette here
//       'metal': '#565584',
//     }
//   }
// }
