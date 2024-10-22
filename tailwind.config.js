/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "xl-custom": { min: "1400px", max: "1600px" },
        "lg-custom": { min: "1200px", max: "1399px" },
        "md-custom": { min: "991px", max: "1199px" },
        "sm-custom": { min: "768px", max: "990px" },
        "xs-custom": { min: "481px", max: "768px" },
        "xxs-custom": { min: "320px", max: "480px" },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
