<template>
  <div class="baseRadio">
    <label
      v-for="option in options"
      :key="option.id"
      :tabindex="tabindex"
      class="baseRadio__item"
    >
      <input
        type="radio"
        class="baseRadio__hidden"
        :name="name"
        :value="option.value"
        :checked="option.checked"
        :id="id"
      >
      <div class="baseRadio__visible" />
      <div class="baseRadio__text">{{ option.text }}</div>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'radio'
    },
    options: {
      type: Array,
      required: true
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
.baseRadio {
    display: flex;
    &__item {
        display: flex;
        align-items: center;
        margin-right: 36px;
        outline: none;
        cursor: pointer;
    }
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
        margin-right: 6px;
        border: 1px solid #DADADA;
        border-radius: 50%;
        transition: 0.3s;
        &::after {
            content: '';
            width: 10px;
            height: 10px;
            background-color: #038661;
            border-radius: 50%;
            opacity: 0;
            transition: 0.3s;
        }
    }
    &__hidden:checked + &__visible{
        border: 1px solid #038661;
        &::after {
            opacity: 1;
        }
    }
}
@media (max-width: 767px) {
  .baseRadio {
    $root: &;
    border: 1px solid #038661;
    border-radius: 6px;
    &__item {
      margin-right: 0px;
      &:last-child {
        #{$root}__text {
          border: 0;
        }
      }
    }
    &__visible {
      display: none;
    }
    &__text {
      padding: 6px 10px;
      text-align: center;
      font-size: 14px;
      font-weight: bold;
      color: #038661;
      border-right: 1px solid #038661;
      transition: 0.3s;
    }
    &__hidden:checked ~ &__text {
      color: #fff;
      background-color: #038661;
    }
  }
}
</style>
