/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        azul: 'hsl(var(--azul))',
        blanco: 'hsl(var(--blanco))',
        negro: 'hsl(var(--negro))',
        oscuro: 'hsl(var(--oscuro))',
        'azul-palido': 'hsl(var(--azul-palido))',
        'gris-claro': 'hsl(var(--gris-claro))',
        'gris-oscuro': 'hsl(var(--gris-oscuro))'
      },
      fontFamily: {
        roboto: 'var(--roboto)',
        poppins: 'var(--poppins)'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

