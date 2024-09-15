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
        "oceanBlue": "#1e3a8a",
        "sunsetCoral": "#ff6f61",
        "sandyBeige": "#f1c40f",
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

