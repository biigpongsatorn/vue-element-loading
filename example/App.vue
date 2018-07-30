<template>
  <div>
    <div id="app">
      <VueElementLoading :active="show" spinner="bar-fade-scale" color="#FF6700"/>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis,
        nibh id hendrerit imperdiet, elit sapien laoreet elit
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis,
        nibh id hendrerit imperdiet, elit sapien laoreet elit
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis,
        nibh id hendrerit imperdiet, elit sapien laoreet elit
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis,
        nibh id hendrerit imperdiet, elit sapien laoreet elit
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis,
        nibh id hendrerit imperdiet, elit sapien laoreet elit
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis,
        nibh id hendrerit imperdiet, elit sapien laoreet elit
      </span>
    </div>
    <div class="btn-toggle">
      <button @click="show = !show">Toggle</button>
    </div>
  </div>
</template>

<script>
import VueElementLoading from '../src'
// import VueElementLoading from '../lib/vue-element-loading.min.js'

export default {
  name: 'app',
  data () {
    return {
      show: true
    }
  },
  created () {
    setTimeout(() => { this.show = false }, 4000)
  },
  components: { VueElementLoading }
}
</script>

<style scoped>
#app {
  float: left;
  width: 500px;
  height: 500px;
  border: 1px solid #ccc;
}
.btn-toggle {
  float: left;
  margin: 20px;
}
</style>
