<template>
  <div class="w-full flex flex-col">
    <div class="base_input w-full relative">
      <label class="text-sm text-darkgray w-maxContent" @click="makeActive">
        {{ currentTip }}
      </label>
      <input
        ref="placeholder"
        class="rounded-6 border px-12 py-16 w-full"
        :class="{ empty: isEmpty, 'border-red': hasErrors }"
        :autocomplete="autocomplete"
        :value="value"
        :type="type === 'password' ? passwordCondition : type"
        @focus="setFocus(true)"
        @keyup.enter.prevent="enter"
        @blur="$emit('blur'), setFocus(false)"
        @input="$emit('input', $event.target.value)"
      />
      <div v-if="hasErrors" class="text-red px-12">
        {{ errorText }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseInput",
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
      default: ""
    },
    type: {
      type: String,
      required: false,
      default: "text"
    },
    autocomplete: {
      type: String,
      required: false,
      default: "new-password"
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
    }
  },
  data() {
    return {
      passwordCondition: "password",
      isVisible: false,
      focused: this.focus
    };
  },
  computed: {
    isEmpty() {
      return this.value === "";
    },
    currentTip() {
      return this.isEmpty && this.focused ? "" : this.placeholder;
    },
    hasWarnings() {
      return this.validations.filter(v => v.condition);
    },
    errorText() {
      return "error";
    }
  },
  mounted() {
    if (this.focus) {
      this.makeActive();
    }
  },
  methods: {
    changeVisiblePassword() {
      this.passwordCondition =
        this.passwordCondition === "password" ? "text" : "password";
      this.$refs.placeholder.focus();
    },
    setFocus(bool) {
      this.focused = bool;
    },
    makeActive() {
      this.$refs.placeholder.focus();
    }
  }
};
</script>

<style scoped>
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
  height: 48px;
  
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
