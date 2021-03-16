<template>
  <div class="w-full flex flex-col input-wrapper">
    <div class="base_input w-full relative">
      <div v-if="type === 'password'" ref="eye" class="password-wrapper" @click="changeVisiblePassword">
        <img src="~/assets/images/icons/eye.svg" alt="eye">
        <img src="~/assets/images/icons/eye-strike.svg" alt="eye">
      </div>
      <!-- <label class="text-sm text-darkgray w-maxContent" @click="makeActive">
        {{ currentTip }}
      </label> -->
      <input
        :id="id"
        ref="placeholder"
        class="rounded-6 border px-12 py-12 w-full"
        :readonly="readonly"
        :placeholder="placeholder"
        :class="[{ empty: isEmpty, 'border-red': hasErrors }, classes]"
        :autocomplete="autocomplete"
        :value="value"
        :type="type"
        @focus="setFocus(true)"
        @keyup.enter.prevent="enter"
        @blur="setFocus(false)"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    value: {
      type: [String, Number],
      required: false,
      default: null
    },
    type: {
      type: String,
      required: false,
      default: 'text'
    },
    autocomplete: {
      type: String,
      required: false,
      default: 'new-password'
    },
    focus: {
      type: Boolean,
      required: false,
      default: false
    },
    enter: {
      type: Function,
      default: () => ({}),
      required: false
    },
    validations: {
      type: Array,
      default: () => []
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: null
    },
    classes: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      isVisible: false,
      focused: this.focus
    }
  },
  computed: {
    isEmpty () {
      return this.value === ''
    },
    // currentTip () {
    //   return this.isEmpty && this.focused ? '' : this.placeholder
    // },
    hasErrors () {
      return this.validations.filter(v => v.condition)
    },
    errorText () {
      return 'error'
    }
  },
  mounted () {
    if (this.focus) {
      this.makeActive()
    }
  },
  methods: {
    changeVisiblePassword () {
      this.$refs.placeholder.getAttribute('type') === 'password' ? this.$refs.placeholder.setAttribute('type', 'text') : this.$refs.placeholder.setAttribute('type', 'password')

      this.$refs.eye.classList.toggle('password-wrapper_visible')
      this.$refs.placeholder.focus()
    },
    setFocus (bool) {
      this.focused = bool
    },
    makeActive () {
      this.$refs.placeholder.focus()
    }
  }
}
</script>

<style scoped lang="scss">
.input-wrapper {
  position: relative;
}
.password-wrapper {
  position: absolute;
  top: 50%;
  right: 14px;
  cursor: pointer;
  transform: translateY(-50%);
  img:last-child {
    display: none;
  }
  &_visible {
    img {
      &:first-child {
        display: none;
      }
      &:last-child {
        display: block;
      }
    }
  }
}
/* .eye_open {
    width: 20px;
    height: 20px;
    top: 20px;
    right: 20px;
    display: inline-block;
    background: url("~assets/images/icons/eye-open.svg") 0 0 no-repeat;
  } */
input {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.38);
  border-radius: 6px;
  color: #333333;
  outline: none;
  height: 42px;

font-weight: normal;
font-size: 16px;
line-height: 23px;
letter-spacing: -0.01em;
}
label {
  color: #333333;
  opacity: 0.7;
  &:focus {
    @apply text-brand1;
  }
}

input:focus {
  @apply outline-none border-brand1;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
/* input::-webkit-input-placeholder::after {
  content: "*";
}
input::-moz-placeholder::after {
  content: "*";
} */

</style>
