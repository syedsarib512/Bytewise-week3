/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./*.html"
    ],
    theme: {
      extend: {
        colors: {
          'custom-blue': '#1DA1F2',
          'custom-gray': '#657786',
        },
        fontFamily: {
          'body': ['Nunito', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
  