/** @type {import('tailwindcss').Config} */
// const flowbite = require("flowbite-react/tailwind");
import forms from '@tailwindcss/forms';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // flowbite.content(),
  ],
  
  theme: {
    extend: {
      screens: {
        'smallest': '310px', 
        "smaller":"360px",
        'smaller1':'410px',
        'smaller2':'480px',
        
      },
  keyframes:{
    "slide-in-left": {
      "0%": {
          visibility: "visible",
          transform: "translate3d(-100%, 0, 0)",
      },
      "100%": {
          transform: "translate3d(0, 0, 0)",
      },
  },
  "slide-in-right": {
      "0%": {
          visibility: "visible",
          // transform: "translate3d(100%, 0, 0)",
          transform: "translateX(0)"
      },
      "100%": {
          // transform: "translate3d(0, 0, 0)",
          transform: "translateX(0)"
      },
  },

  },
      fontFamily:{
        openSans: ["Open Sans", "system-ui"],
        oswald: ["Oswald", "system-ui"],
        nunitoSans:["Nunito Sans", "sans-serif"]
      },
      animation:{
        slideinleft: 'slide-in-left 1s ease-in-out  ',
        slideinright: 'slide-in-right 1s ease-in-out  ',
      }
    },
   
  },
  plugins: [
    // flowbite.plugin(),
    forms
  ],
}