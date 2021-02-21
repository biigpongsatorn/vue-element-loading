const VuePlugin = require('rollup-plugin-vue');
const css = require('rollup-plugin-css-only');

module.exports = function() {
  return [
    {
      entry: 'src/index.js',
      dest: 'ssr/index.js',
      format: 'umd',
      moduleName: 'VueElementLoading',
      plugins: [css(), VuePlugin({css: false})],
    },
    {
      entry: 'src/index.js',
      dest: 'client/vue-element-loading.js',
      format: 'umd',
      moduleName: 'VueElementLoading',
      plugins: [VuePlugin()],
    }
  ];
};

