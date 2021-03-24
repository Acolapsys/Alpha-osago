<template>
  <div class="profileInput">
    <label class="profileInput__label" :for="id">{{ label }}</label>
    <div class="profileInput__field">
      <input
        ref="input"
        :type="type"
        v-model="value"
        :readonly="readonly"
        class="profileInput__input"
      />
      <div class="profileInput__edit" ref="edit" @click="readonly = !readonly">
        <img src="~/assets/images/icons/pen-green.svg" alt="edit">
        <img src="~/assets/images/icons/check-mark.svg" alt="save">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileInput',
  props: {
    id: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: ''
    },
    typeDefault: {
      type: String,
      default: 'text'
    },
    valueDefault: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      readonly: true,
      value: this.valueDefault,
      type: this.typeDefault
    }
  },
  watch: {
    readonly() {
      !this.readonly && this.$refs.input.focus()
      this.$refs.edit.classList.toggle('profileInput__edit_active')

      if (this.typeDefault === 'password') {
        this.type = !this.readonly ? 'text' : 'password'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.profileInput {
  padding: 8px 34px 22px 39px;
  background: #FFFFFF;
  border-radius: 5px;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.2);
  &__label {
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 1.5px;
    color: #BDBDBD;
  }
  &__field {
    display: flex;
    justify-content: space-between;
  }
  &__input {
    width: calc(100% - 45px);
    font-size: 18px;
    font-weight: bold;
    letter-spacing: -0.02em;
    color: #333333;
    outline: 0;
  }
  &__edit {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 31px;
    height: 31px;
    background-color: rgba(3, 134, 97, 0.06);
    border-radius: 50%;
    cursor: pointer;
    img {
      width: 45%;
    }
    img:last-child {
      display: none;
    }
    &_active {
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
}
@media (max-width: 767px) {
  .profileInput {
    padding: 8px 20px 22px;
  }
}
</style>
