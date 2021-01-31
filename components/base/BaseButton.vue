<template>
  <button class="base-button flex justify-center items-center" :class="classes" :disabled="disabled" @click="$emit('click')">
    <button-spinner v-show="loading" />
    <slot />
  </button>
</template>

<script>
import ButtonSpinner from '~/components/base/ButtonSpinner'

export default {
  name: 'BaseButton',
  components: {
    ButtonSpinner
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
      required: false
    },
    loading: {
      type: Boolean,
      default: false,
      required: false
    },
    classes: {
      type: Array,
      default: () => ['rounded-5']
    }
  }
}
</script>

<style scoped>
  .base-button {
    @apply cursor-pointer;
  }

  .account {
    color: white;
    background-color: rgba(255,255,255,0.2);
    width: 154px;
  }
  .upload {
    @apply bg-grey max-w-236 h-55;
    @extend .body-bold;
    color: #088DED;

  }
</style>
