module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      aspectRatio: {
        "9/16": "9 / 16",
        "3/4": "3 / 4",
      },
    },
  },
  plugins: [],
}
