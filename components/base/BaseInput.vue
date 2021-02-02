<template>
  <div class="w-full flex flex-col">
    <div class="base_input w-full relative">
      <input
        ref="placeholder"
        class="h-48 rounded-10 border border-gainsboro px-15 w-full"
        :class="{ empty: isEmpty, 'border-tomato': hasWarnings && hasWarnings.length }"
        :autocomplete="autocomplete"
        :value="value"
        :type="type === 'password' ? passwordCondition : type"
        @focus="setFocus(true)"
        @keyup.enter.prevent="enter"
        @blur="$emit('blur'), setFocus(false)"
        @input="$emit('input', $event.target.value)"
      >
      <label
        v-if="isEmpty && !focused"
        class="absolute inset-0 pl-15 text-sm text-darkgray flex items-center w-maxContent"
        @click="makeActive"
      >
        {{ currentTip }}
        <span v-if="currentTip && required" class="text-tomato">
          *
        </span>
      </label>
      <div v-if="!isEmpty" class="tip absolute top-0 flex">
        <div class="placeholder text-darkgray text-12 pl-15 pr-1 pt-4">
          {{ placeholder }}
        </div>
        <div v-if="required" class="text-tomato text-12 pt-2">
          *
        </div>
      </div>
      <div
        v-if="type === 'password'"
        class="eye_open absolute cursor-pointer"
        @click="changeVisiblePassword"
      />
    </div>
    <validation-warnings v-if="validations && validations.length" :warnings="validations" />
  </div>
</template>

<script>
import ValidationWarnings from '~/components/base/ValidationWarnings'

export default {
  name: 'BaseInput',
  components: { ValidationWarnings },
  props: {
    placeholder: {
      type: String,
      required: true
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    value: {
      type: [String, Number],
      default: ''
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
    }
  },
  data () {
    return {
      passwordCondition: 'password',
      isVisible: false,
      focused: this.focus
    }
  },
  computed: {
    isEmpty () {
      return this.value === ''
    },
    currentTip () {
      return this.isEmpty && this.focused ? '' : this.placeholder
    },
    hasWarnings () {
      return this.validations.filter(v => v.condition)
    }
  },
  mounted () {
    if (this.focus) {
      this.makeActive()
    }
  },
  methods: {
    changeVisiblePassword () {
      this.passwordCondition = this.passwordCondition === 'password' ? 'text' : 'password'
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

<style scoped>
  .eye_open {
    width: 20px;
    height: 20px;
    top: 20px;
    right: 20px;
    display: inline-block;
    background: url("~assets/images/icons/eye-open.svg") 0 0 no-repeat;
  }
  input:focus {
    @apply outline-none border-darkgray
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input:not(.empty) {
    padding-top: 21px;
    font-size: 14px;
  }
  input::-webkit-input-placeholder::after {
    content: '*';
  }
  input::-moz-placeholder::after {
    content: '*';
  }
</style>
