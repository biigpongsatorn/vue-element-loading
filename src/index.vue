<template>
  <transition name="fade">
    <div
      v-show="isActive"
      ref="velmld"
      class="velmld-overlay"
      :class="{ 'velmld-full-screen': isFullScreen }"
      :style="{ backgroundColor }">
      <div class="velmld-spinner">
        <slot name="default">
          <component :is="spinner" :color="spinnerColor" :size="spinnerSize" :duration="spinnerDuration"></component>
        </slot>
      </div>
    </div>
  </transition>
</template>

<script>
import Loaders from './loaders'

export default {
  name: 'vue-element-loading',
  props: {
    active: Boolean,
    spinner: {
      type: String,
      default: 'spinner'
    },
    color: String,
    isFullScreen: {
      type: Boolean,
      default: false
    },
    backgroundColor: {
      type: String,
      default: 'rgba(255, 255, 255, .9)'
    },
    size: {
      type: String,
      default: '40'
    },
    duration: {
      type: String,
      default: '0.6'
    }
  },
  data () {
    return {
      isActive: this.active || false,
      spinnerColor: this.color,
      spinnerSize: this.size+'px',
      spinnerDuration: this.duration+'s'
    }
  },
  /**
   * Append class 'velmld-parent' to parent container.
   */
  mounted () {
    this.$refs.velmld.parentNode.classList.add('velmld-parent')
  },
  watch: {
    /**
     * Binding outside component value and inside component value.
     * Append class 'velmld-parent' to parent container.
     */
    active (value) {
      this.isActive = value
      if (value) {
        this.$refs.velmld.parentNode.classList.add('velmld-parent')
      }
    },
    /**
     * Binding outside component color, size and duration values and 
     * corresponding inside component values.
     */
    color (value) {
      this.spinnerColor = value
    },
    size (value) {
      this.spinnerSize = value
    },
    duration (value) {
      this.spinnerDuration = value
    }
  },
  components: Loaders
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.velmld-overlay {
  position: absolute;
  z-index: 3000;
  margin: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: opacity .3s;
}
.velmld-spinner {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
}
.velmld-full-screen {
  position: fixed;
}
</style>

<style>
.velmld-parent {
  position: relative !important;
}
</style>
