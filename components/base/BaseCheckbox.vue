<template>
    <label
      :tabindex="tabindex"
      class="baseCheckbox"
    >
      <input
        type="checkbox"
        class="baseCheckbox__hidden"
        :id="id"
        :checked="checked"
      >
      <div class="baseCheckbox__visible" />
      <slot />
    </label>
</template>

<script>
export default {
  name: 'BaseCheckbox',
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    tabindex: {
      type: Number,
      default: 0
    },
    id: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.baseCheckbox {
    display: flex;
    align-items: center;
    outline: none;
    cursor: pointer;
    &__hidden {
        display: none;
    }
    &__visible {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 16px;
        height: 16px;
        margin-right: 11px;
        border: 2px solid #DADADA;
        border-radius: 5px;
        transition: 0.3s;
        &::after {
            content: '';
            width: 10px;
            height: 10px;
            background-color: #038661;
            border-radius: 3px;
            opacity: 0;
            transition: 0.3s;
        }
    }
    &__hidden:checked + &__visible{
        border: 2px solid #038661;
        &::after {
            opacity: 1;
        }
    }
}
</style>
