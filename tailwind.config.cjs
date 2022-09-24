/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      'headerColor': "#1F2022",
      'windowColor': "#7A7A8A",
      'borderWindow': "#545569",
      'textColor' : "#FFFFFF"
    },
    extend: {
      backgroundImage: {
        "home-background": "url('./src/assets/home.png')",
      },
    },
  },
  plugins: [],
};
