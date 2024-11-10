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
    input: 'src/index.js',
    output: {
      name: 'VueVectorMap',
      file: 'dist/js/vuevectormap.js',
      format: 'umd',
      globals: { jsvectormap: 'jsVectorMap' },
      plugins: [terser()],
    },
    external: ['jsvectormap', 'vue'],
    plugins: [
      resolve(),
      babel({ babelHelpers: 'bundled' }),
      scss(processScss('vuevectormap.css')),
    ],
  },
  {
    input: 'src/index.js',
    output: {
      file: 'dist/js/vuevectormap.cjs.js',
      format: 'cjs',
      plugins: [terser()],
    },
    external: ['jsvectormap', 'vue'],
    plugins: [
      resolve(),
      babel({ babelHelpers: 'bundled' }),
      scss(processScss('vuevectormap.min.css', 'compressed')),
    ],
  },
  {
    input: 'src/index.js',
    output: {
      file: 'dist/js/vuevectormap.esm.js',
      format: 'es',
      plugins: [terser()],
    },
    external: ['jsvectormap', 'vue'],
    plugins: [
      resolve(),
      babel({ babelHelpers: 'bundled' }),
      scss(processScss('vuevectormap.min.css', 'compressed')),
    ],
  },
]