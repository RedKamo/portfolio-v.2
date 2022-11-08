/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      'animation': {
        'text':'text 5s ease infinite',
    },
    'keyframes': {
        'text': {
            '0%, 100%': {
              'background-size':'200% 200%',
                'background-position': 'left center'
            },
            '50%': {
              'background-size':'200% 200%',
                'background-position': 'right center'
            }
        },
    },
      backgroundImage: {
        "home-background": "url('./home.png')",
      },
      colors: {
        'headerColor': "#1F2022",
        'windowColor': "#7A7A8A",
        'borderWindow': "#545569",
        'textColor' : "#FFFFFF",
        'regal-blue': "#243c5a",
        'color-1': "#86efac",
        'color-2': "#3b82f6",
        'color-3': "#9333ea",
        'colorProfile': "#3ec6a9"
      },
    },
    fontFamily: {
      customFont: ["Space Mono", "monospace"],
      grot: ['Space Grotesk', 'sans-serif'],
      sora: ["Sora", "sans-serif"],
    },
  },
  plugins: [],
};

