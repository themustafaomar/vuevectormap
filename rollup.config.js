import { terser } from "rollup-plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import babel from "rollup-plugin-babel";
import css from "rollup-plugin-css-only";

module.exports = {
  input: "src/index.js",

  output: [
    {
      name: "VueVectorMap",
      file: "dist/js/vuevectormap.js",
      format: "umd",
      globals: {
        jsvectormap: "jsVectorMap",
      },
    },
    {
      name: "VueVectorMap",
      file: "dist/js/vuevectormap.min.js",
      format: "umd",
      globals: {
        jsvectormap: "jsVectorMap",
      },
      plugins: [terser()],
    },
  ],

  external: ["jsvectormap"],

  plugins: [
    resolve(),
    babel({ exclude: "node_modules/**" }),
    css({ output: "dist/css/vuevectormap.css" }),
  ],
};
