module.exports = {
  darkMode: "class",
  plugins: [
    function ({ addVariant }) {
      addVariant("first-of-type", "&:first-of-type")
      addVariant("last-of-type", "&:last-of-type")
    },
  ],
}
