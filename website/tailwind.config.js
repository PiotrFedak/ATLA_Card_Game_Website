/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "sm-mobile": "320px",
        "md-mobile": "375px",
        "lg-mobile": "425px",
        "tablet": "768px",
        "laptop": "1024px",
        "large-laptop": "1440px",
        "4k": "2560px",
      },
      colors: {
        "custom-black": "#0D1117",
        "custom-white": "#EDDECE",
        "footer": "#383433",
        "oraange": "#FF5C00",
      },
      fontFamily: {
        head: "Impact",
        body: "Bahnschrift",
      },
    },
  },
  plugins: [],
};
