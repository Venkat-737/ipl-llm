/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mini: "525px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        wb: "1100px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        'text': '#d2f4f9',
        'background': '#020b0d',
        'primary': '#7cdfee',
        'secondary': '#15199e',
        'accent': '#502fe4',
       },
       fontFamily: {
        poppins: ["Poppins", "sans-serif"],
       },
    },
  },
  plugins: [],
}

