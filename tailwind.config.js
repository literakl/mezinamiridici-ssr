module.exports = {
  mode: "jit",
  content: [
    "./components//*.{js,vue,ts}",
    "./layouts//*.vue",
    "./pages//*.vue",
    "./plugins//*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/@themesberg/flowbite/**/*.js"
  ],
  plugins: [
    require("@tailwindcss/line-clamp"),
  ],
  theme: {
    colors: {
      yellowF: '#e0a800'
    },
    spacing: true,
    screens: {
      a: { max: "1215px" },
      b: { max: "1000px" },
      c: { max: "900px" },
      d: { max: "800px" },
      e: { max: "768px" },
      f: { max: "600px" },
      g: { max: "485px" },
      j: { max: "410px" },
      h: { max: "375px" },
    },
  },
};