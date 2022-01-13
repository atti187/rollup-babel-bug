const { babel } = require("@rollup/plugin-babel");

module.exports = {
  input: "input.js",
  output: {
    file: "output/bundle.js",
    format: "cjs",
  },
  plugins: [
    babel({
      exclude: /node_modules/,
      babelHelpers: "runtime",
    }),
  ],
};
