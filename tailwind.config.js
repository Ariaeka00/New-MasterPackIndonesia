/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'Poppins': ['poppins']
    },
    extend: {
      colors: {
        'primary': "#ddd",
        'aaa': "#aaa"
        
      },
      backgroundImage: {
        'hero-pattern': "url('/public/img/banner/banner1.jpg')",
        'hero-pattern1': "url('/public/img/banner/banner2.jpg')",
      },
    },
  },
  plugins: [],
}

