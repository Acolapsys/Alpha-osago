<template>
  <div class="info-block text-left" :class="classes">
    <slot />
  </div>
</template>
<script>
export default {
  props: {
    classes: {
      type: Array,
      default: () => ['rounded-5']
    }
  }
}
</script>
<style lang="scss" scoped>
.b-orange {
     @apply border-l-3 border-brand2;

}
.info-block {
    @apply py-22 px-30;
    @screen tablet-max {
      @apply py-20 px-0;
    }
}
.small {
    @apply text-white bg-white rounded-5 bg-opacity-10;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.01em;

}
.default {
    background: #F6F6F6;
    border-radius: 6px;
    max-width: 848px;
}
.text {
}
</style>
