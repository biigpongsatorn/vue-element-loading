<template>
  <transition name="fade">
    <div
      v-show="isActive || isActiveDelay"
      :class="{ 'velmld-full-screen': isFullScreen }"
      :style="{ backgroundColor }"
      ref="velmld"
      class="velmld-overlay"
    >
      <div class="velmld-spinner">
        <slot name="default">
          <component
            :is="spinner"
            :color="color"
            :size="`${size}px`"
            :duration="`${duration}s`"
          />
        </slot>
        <div
          v-if="text.length"
          :style="{ color, ...textStyle }"
        >
          {{ text }}
        </div>
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
    text: {
      type: String,
      default: ''
    },
    textStyle: {
      type: Object,
      default: function () {
        return {}
      }
    },
    color: {
      type: String,
      default: '#000'
    },
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
    },
    delay: {
      type: [String, Number],
      default: 0
    }
  },
  data () {
    return {
      isActive: this.active || false,
      isActiveDelay: false
    }
  },
  /**
   * Append class 'velmld-parent' to parent container.
   */
  mounted () {
    this.$refs.velmld.parentNode.classList.add('velmld-parent')

    if (this.delay) {
      const delayMs = (+this.delay) * 1000
      this.delayActive(delayMs)
    }
  },
  methods: {
    delayActive (ms) {
      this.isActiveDelay = true

      setTimeout(() => {
        this.isActiveDelay = false  
      }, ms)
    }
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
  text-align: center
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
