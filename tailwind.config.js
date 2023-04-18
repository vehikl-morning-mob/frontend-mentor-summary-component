/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Hanken Grotesk", "sans-serif"],
        challenge_font: ["Hanken Grotesk", "sans-serif"]
      },
      colors: {
        challenge_red: "hsl(0, 100%, 67%)",
        challenge_yellow: "hsl(39, 100%, 56%)",
        challenge_teal: "hsl(166, 100%, 37%)",
        challenge_blue: "hsl(234, 85%, 45%)",
        challenge_slate_blue: "hsl(252, 100%, 67%)",
        challenge_royal_blue: "hsl(241, 81%, 54%)",
        challenge_violet_blue: "hsla(256, 72%, 46%, 1)",
        challenge_persian_blue:"hsla(241, 72%, 46%, 0)",
        challenge_pale_blue: "hsl(221, 100%, 96%)",
        challenge_light_lavender: "hsl(241, 100%, 89%)",
        challenge_gray_blue: "hsl(224, 30%, 27%)",
      }
    },
  },
  plugins: [],
}

