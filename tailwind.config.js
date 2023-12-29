/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      ssm: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px'

    },
    extend: {
      colors: {
        "dark-blue": "#174950",
        "light-blue": "#008080",
        "light-red": "#e60234",
        "Dark-red": "#8b0f32"
      }
      ,
    },
  },
  plugins: [],
}

