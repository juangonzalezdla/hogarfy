/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        azul: 'hsl(var(--azul))',
        blanco: 'hsl(var(--blanco))',
        negro: 'hsl(var(--negro))',
        oscuro: 'hsl(var(--azul))',
        'azul-palido': 'hsl(var(--azul-palido))',
        'gris-claro': 'hsl(var(--gris-claro))',
      },
      fontFamily: {
        roboto: 'var(--roboto)',
        poppins: 'var(--poppins)'
      }
    },
  },
  plugins: [],
}

