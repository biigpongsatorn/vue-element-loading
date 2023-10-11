import VueElementLoading from './index.vue';

const install = function installMyComponent(Vue, opt) {
  // Don't install if already installed, or SSR
  if (install.installed || Vue.prototype.$isServer) return;
  install.installed = true;

  Vue.component('vue-element-loading', VueElementLoading);
};

// Inject install function into component - allows component
// to be registered via Vue.use() as well as Vue.component()
VueElementLoading.install = install;

// To allow use as module (npm/webpack/etc.) export component
export default VueElementLoading;
