/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./docs/**/*.mdx",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000', 
        secondary: '#fff', 
      },
      boxShadow: {
        'custom': 'rgba(0, 0, 0, 0.1) 0px 4px 12px', 
        'custom1': 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
        'custom2':'rgba(149, 157, 165, 0.2) 0px 8px 24px;',
        'custom-outline':'rgba(0, 0, 0, 0.16) 0px 1px 4px;'
      },
    },
  },
  plugins: [],
}