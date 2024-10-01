/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        
      },
      fontFamily: {
        'poppins' : ['Poppins'],
        'montserrat' :  'montserrat',
        'anton' :  'Anton',
        'oswald' :  'Oswald',
      },
      blur: {
        "blur-xxs": '1px',
      }

    },
  },
  plugins: [],
}