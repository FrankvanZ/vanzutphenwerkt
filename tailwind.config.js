const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".image-container": {
          width: "100%",
          "> div": {
            position: "unset !important",
          },
          ".image": {
            "object-fit": "contain",
            width: "100% !important",
            position: "relative !important",
            height: "unset !important",
          },
        },
      });
    }),
  ],
};
