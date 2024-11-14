/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts.tsx}", "./components/*"],
  theme: {
    extend: {
      fontFamily:{
        pblack:["Poppins-Black",  "sans-serif"],
        regular:["Poppins-Regular", "sans-serif"]
      }
    },
  },
  plugins: ["nativewind/babel"],
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],

}

