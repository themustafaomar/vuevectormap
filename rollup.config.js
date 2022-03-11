import postcss from 'postcss'
import scss from 'rollup-plugin-scss'
import resolve from '@rollup/plugin-node-resolve'
import { babel } from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'

function processScss(filename, outputStyle = 'expanded') {
  return {
    processor: css => postcss().process(css).then(result => result.css),
    output: `dist/css/${filename}.css`,
    outputStyle,
  }
}

export default [
  {
    input: 'src/js/index.js',
    output: {
      name: 'VueVectorMap',
      file: 'dist/js/vuevectormap.js',
      format: 'umd',
      globals: {
        jsvectormap: 'jsVectorMap'
      },
    },
    external: ['jsvectormap', 'vue'],
    plugins: [
      resolve(),
      babel({ babelHelpers: 'bundled' }),
      scss(processScss('vuevectormap.css'))
    ],
  },
  {
    input: 'src/js/index.js',
    output: {
      name: 'VueVectorMap',
      file: 'dist/js/vuevectormap.min.js',
      format: 'umd',
      plugins: [terser()],
      globals: {
        jsvectormap: 'jsVectorMap'
      },
    },
    external: ['jsvectormap', 'vue'],
    plugins: [
      resolve(),
      babel({ babelHelpers: 'bundled' }),
      scss(processScss('vuevectormap.min.css', 'compressed'))
    ],
  }
]