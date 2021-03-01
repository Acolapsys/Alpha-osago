<template>
  <div
    class="baseSelect"
    :tabindex="tabindex"
    @blur="open = false"
  >
    <div
      class="baseSelect__selected"
      :class="{ 'baseSelect__selected_open': open }"
      :id="id"
      :data-selected="selected"
      @click="open = !open"
    >
      {{ selected }}
      <img
        src="~/assets/images/icons/arrow-down-black.svg"
        alt="arrow"
        class="baseSelect__selectedArrow"
      >
    </div>
    <div
      class="baseSelect__wrapper"
      :class="{ hidden: !open }"
    >
      <div
        class="baseSelect__item"
        v-for="option of options"
        :key="option.id"
        @click="
          selected = option;
          open = false;
        "
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true
    },
    default: {
      type: String,
      default: null
    },
    tabindex: {
      type: Number,
      default: 0
    },
    id: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      selected: this.default
        ? this.default
        : this.options.length > 0
          ? this.options[0]
          : null,
      open: false
    }
  }
}
</script>

<style scoped>
.baseSelect {
  position: relative;
  text-align: left;
  outline: none;
}
.baseSelect__selected {
  display: flex;
  justify-content: space-between;
  padding: 8px 12px;
  color: #333;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.38);
  border-radius: 6px;
  cursor: pointer;
  user-select: none;
}
.baseSelect__selectedArrow {
  transition: 0.3s;
}
.baseSelect__selected_open {
  border: 1px solid #038661;
  border-radius: 6px 6px 0px 0px;
}
.baseSelect__selected_open .baseSelect__selectedArrow {
  transform: rotate(180deg);
}
.baseSelect__wrapper {
  position: absolute;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: #fff;
  border-right: 1px solid #038661;
  border-left: 1px solid #038661;
  border-bottom: 1px solid #038661;
  border-radius: 0px 0px 6px 6px;
}
.baseSelect__item {
  padding: 10px 12px;
  color: #333;
  border-bottom: 1px solid #038661;
  cursor: pointer;
  user-select: none;
  transition: 0.3s;
}
.baseSelect__item:last-child {
  border-bottom: 0;
}
.baseSelect__item:hover {
  background-color: #f0f5f3;
}
</style>
