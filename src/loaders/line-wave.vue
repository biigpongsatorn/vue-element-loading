<template>
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" :width="size" :height="size" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">
    <rect x="0" y="0" width="4" height="10" :fill="color">
      <animateTransform attributeType="xml"
        attributeName="transform" type="translate"
        values="0 0; 0 20; 0 0"
        begin="0" :dur="duration" repeatCount="indefinite" />
    </rect>
    <rect x="10" y="0" width="4" height="10" :fill="color">
      <animateTransform attributeType="xml"
        attributeName="transform" type="translate"
        values="0 0; 0 20; 0 0"
        begin="0.2s" :dur="duration" repeatCount="indefinite" />
    </rect>
    <rect x="20" y="0" width="4" height="10" :fill="color">
      <animateTransform attributeType="xml"
        attributeName="transform" type="translate"
        values="0 0; 0 20; 0 0"
        begin="0.4s" :dur="duration" repeatCount="indefinite" />
    </rect>
  </svg>
</template>

<script>
export default {
  name: 'line-wave',
  props: {
    color: {
      type: String,
      default: '#CCC'
    },
    size: {
      type: String,
      default: '40px'
    },
    duration: {
      type: String,
      default: '0.6s'
    }
  }
}
</script>
