/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "darkest": "#2D3250",
        "darker": "#424769",
        "dark-md": "#63698F",
        "dark": "#7077A1",
        "light": "#F6B17A",
        "light-blue": "#DDE0EF",
        "lighter-blue": "#ECEFFF",
        "light-mode": {
          "darkest": "#8294C4",
          "darker": "#ACB1D6",
          "dark": "#DBDFEA",
          "light": "#FFEAD2"
        }
      }
    },
  },
  plugins: [],
};
