/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },

  theme: {
    extend: {

      fontSize: {
        'xxs': '0.65rem',  // Menambahkan ukuran font ekstra kecil
        'multixl': '10rem',  // Menambahkan ukuran font ekstra besar
        'huge': '4rem',    // Menambahkan ukuran font sangat besar
      },

      fontFamily: {
        'Arial' : ['Arial'], 
        'Delicious' : ['Delicious'], 
        'Outfit' : ['Outfit'], 
        'Poppins' : ['Poppins'], 
      },
      colors: {
        
        'primary': '#0206FB', 
        'secondary': '#A7D918', 
        'accent': '#FFD058', 
        'custom-grey': '#D266A1', 
        'custom-bg-primary' : '#9A47C0',
        'custom-slate' : '#FFF5E0',
        'custom-slate' : '#000050',
      },
      backgroundImage: {
        'hero': "url('/assets/background/hero-bg.png')",
        'contour-patern' : "url('/assets/background/contour-patern.png')",
      }
      
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
