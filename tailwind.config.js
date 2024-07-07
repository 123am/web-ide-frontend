/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      "backgroundColor":{
        "background":"#2b2b2b",
        "primary":"#50d3ff",
        "secondary":"#ff0052"
      },
      "textColor":{
        "primary":"#50d3ff",
        "col":"#ffffff",
        "secondary":"#ff0052"
      },
      borderColor:{
        bordercolor:"#50d3ff"
      },
      boxShadowColor:{
        "primary":"#50d3ff",
      }
    },
  },
  plugins: [],
}

