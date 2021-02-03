<template>
  <button class="base-button flex justify-center items-center body-bold" :class="classes" :disabled="disabled" @click="$emit('click')">
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
    width: 268px;
    height: 50px;
  }
  .outline {
    @apply text-brand1;
border: 1.5px solid #04A678;
box-sizing: border-box;
border-radius: 5px;
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
  .shadow {
    box-shadow: 0px 3px 15px rgba(4, 166, 120, 0.3);
  }
</style>
