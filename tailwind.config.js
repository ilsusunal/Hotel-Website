/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "darkBlue": "#68c3cc",
        "lightBlue": "#79c3ee",
        "lightpink": "#eb528d",
        "darkPink": "#d36572",
      }
    },
  },
  plugins: [],
}

