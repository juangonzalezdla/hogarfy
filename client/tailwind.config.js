const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        blue: 'hsl(var(--blue))',
        white: 'hsl(var(--white))',
        black: 'hsl(var(--black))',
        dark: 'hsl(var(--dark))',
        'light-blue': 'hsl(var(--light-blue))',
        'light-gray': 'hsl(var(--light-gray))',
        'dark-gray': 'hsl(var(--dark-gray))'
      },
      fontFamily: {
        roboto: 'var(--roboto)',
        poppins: 'var(--poppins)'
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}
