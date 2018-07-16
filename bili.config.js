const vue = require('rollup-plugin-vue')

module.exports = {
  banner: true,
  format: ['umd-min'],
  css: true,
  plugins: [
    vue({ css: true })
  ],
  outDir: 'lib'
}
