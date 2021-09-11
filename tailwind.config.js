module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        customGray: "#202124",
        primaryBlue1: "#2770ba",
        secondaryBlue1: "#4aa3ec",
        customLightGray: "#656666",
        customSearchBar: "#e2f1fd",
        customBorderColor: "#dadce0",
      },
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(100px, 1fr))",
        14: "repeat(14,minmax(100px,1fr))",
      },
    },
    screens: {
      sm: "640px",
      sm_1: "800px",
      md: "950px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1700px",
      "4xl": "1920px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
