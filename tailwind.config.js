/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "5.67px 5.67px 3.78px 0px #00000066",
        "custom-inset": "inset 0px 4.96px 12.4px 2.48px #00000040",
        "custom-1": " 4px 5px 30px 5px #101213",
        "custom-2": "-5px -3px 30px -10px #96BEE7",
        "custom-3": " 0px 5px 30px 0px #101213",
        "custom-right": "12px 24px 20px 0px rgba(0, 0, 0, 0.9)",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(139.14deg, #303439 12.4%, #161718 94.96%)",
        "custom-gradient-1":
          "linear-gradient(to right, #303439 100%, #6F787C 100%)",
      },
    },
  },
  plugins: [],
};
