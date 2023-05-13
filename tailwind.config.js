/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '614px',
      sm: '1002px',
      md: '1022px',
      lg: '1092px',
      xl: '1280px'
    },
    extend: {
      colors: {
        pallette: {
          25: 'rgba(214, 203, 168, 0.13)',
          50: 'bg-yellow-50/70',
          100: "#fff7cd",
          200: "#ffef9a",
          300: "#fee868",
          400: "#fee035",
          500: "#fdbf12",
          600: "#fed803",
          700: "#cbad02",
          800: "#988202",
          900: "#080808"
        }
      }
    }
  },
  plugins: [],
}

