<template>
  <div>
    <div id="app">
      <VueElementLoading :active="fullscreenGreenBg" is-full-screen backgroundColor="rgba(66, 185, 131, .9)" />
      <VueElementLoading :active="fullscreen" is-full-screen/>
      <VueElementLoading :active="show" spinner="bar-fade-scale" color="#FF6700"/>
      <VueElementLoading :active="pikachu">
        <img src="https://i.pinimg.com/originals/9f/b1/25/9fb125f1fedc8cc62ab5b20699ebd87d.gif" width="55px" height="55px">
      </VueElementLoading>
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
      <button @click="show = !show">Toggle (Inside Container)</button>
    </div>
    <div class="btn-toggle">
      <button @click="pikachu = !pikachu">Toggle (Pikachu)</button>
    </div>
    <div class="btn-toggle">
      <button @click="activateFullScreen()">Full Screen</button>
    </div>
    <div class="btn-toggle">
      <button @click="activateFullScreenGreenBg()">Full Screen (Green background color)</button>
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
      show: true,
      fullscreen: false,
      fullscreenGreenBg: false,
      pikachu: false
    }
  },
  created () {
    setTimeout(() => { this.show = false }, 2000)
  },
  methods: {
    activateFullScreen () {
      this.fullscreen = true
      setTimeout(() => { this.fullscreen = false }, 2000)
    },
    activateFullScreenGreenBg () {
      this.fullscreenGreenBg = true
      setTimeout(() => { this.fullscreenGreenBg = false }, 2000)
    }
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
