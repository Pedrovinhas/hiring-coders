module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'roboto-medium': ['Roboto Medium', 'sans-serif'],
        'roboto-black': ['Roboto Black', 'sans-serif']
      },
      colors: {
        'primary': '#f88f20',
        'paragraph': '#3f3d56',
        'backgroundColor': '#181720',
        'secondary': '#f1f1f1'
      },
      screens: {
        'sm': '640px',
      }
    },
  },
  plugins: [
  ],
}
