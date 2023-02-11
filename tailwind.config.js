/** @type {import('tailwindcss').Config} */
const { join } = require('path');

module.exports = {
  content: [
    // "./app/**/*.{js,ts,jsx,tsx}",
    // "./pages/**/*.{js,ts,jsx,tsx}",
    join(__dirname,'./Components/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, './pages/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, './src/**/*.{js,ts,jsx,tsx}'),
    // // Or if using `src` directory:
    // "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // boxShadowColor: {
      //   'gdsc-gradient': 'linear-gradient(90deg, ##4285f4 0%, #db4437 20%, #f4b400 40%, #0F9D58 60%, ##4285f4 80%)',
      //   'gdsc-gradient-reverse': 'linear-gradient(90deg, ##4285f4 0%, #0F9D58 20%, #f4b400 40%, #db4437 60%, ##4285f4 80%)',
      // },
      colors: {
        
          primary: '#FA183E',
        

      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'contact': 'rgba(66, 133, 244,1)0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;',
        'footer': '0px 5px 12px rgba(0, 0, 0, 0.35)'
      },
      padding: {
        '3.5': '0.775rem',
      },
      height: {
        '80vh': '41',
        '50vh': '23rem',
        '45vh': '21.5rem',
      }
    },
  },
  plugins: [],
}