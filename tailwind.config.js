/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage :{
        'image':"url('./assets/images/bg.jpg')",
      }
    },
  },
  plugins: [
  ],
}

