module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'roboto-medium': ['Roboto Medium', 'sans-serif'],
        'roboto-mono': ['Roboto Mono', 'monospace']
      },
      colors: {
        'primary': '#f88f20',
        'paragraph': '#3f3d56',
        'backgroundColor': '#181720',
        'secondary-soft': 'b5b1b1',
        'secondary': '#f1f1f1'
      },
      screens: {
        'sm': '640px',
      },
      animation: {
        fade: 'fadeIn 5s ease-in-out'
      },
      keyframes: {
        fadeIn: {
          ' from': { opacity: 0},
          'to':{ opacity: 1 }
        }
      }
    },
  },
  plugins: [
  ],
}
