<template>
  <label
    :tabindex="tabindex"
    class="baseFile"
  >
    <input
      ref="input"
      type="file"
      class="baseFile__hidden"
      :id="id"
      @input="
        $emit('input', $event.target.files[0]);
        uploadFn($event.target.files[0].name)
      "
    >
    <div ref="control" class="baseFile__control">
      <img
        src="~/assets/images/icons/upload_picture.png"
        alt="upload"
        class="baseFile__controlIcon"
      >
      Загрузить...
    </div>
    <div ref="result" class="baseFile__result hidden">
      <span ref="resultName" class="baseFile__resultName" />
      <img
        src="~/assets/images/icons/delete.svg"
        alt="delete"
        class="baseFile__resultIcon"
        @click="removeFile"
      >
    </div>
  </label>
</template>

<script>
export default {
  props: {
    tabindex: {
      type: Number,
      default: 0
    },
    id: {
      type: String,
      default: null
    }
  },
  methods: {
    uploadFn(value) {
      this.$refs.control.classList.add('hidden')
      this.$refs.result.classList.remove('hidden')
      this.$refs.resultName.innerHTML = value
    },
    removeFile(e) {
      e.preventDefault()
      e.stopPropagation()
      this.$refs.control.classList.remove('hidden')
      this.$refs.result.classList.add('hidden')
      this.$refs.input.value = this.$refs.resultName.innerHTML = null
    }
  }
}
</script>

<style lang="scss" scoped>
.baseFile {
    display: block;
    padding: 16px 24px 15px;
    font-weight: bold;
    letter-spacing: -0.01em;
    color: #088DED;
    background: #F6F6F6;
    border-radius: 6px;
    outline: none;
    cursor: pointer;
    &__hidden {
        display: none;
    }
    &__control,
    &__result {
        display: flex;
        align-items: center;
    }
    &__result {
      justify-content: space-between;
    }
    &__controlIcon {
        margin-right: 9px;
    }
    &__resultName {
      width: calc(100% - 32px);
      text-overflow: ellipsis;
      overflow: hidden;
    }
}
@media (max-width: 767px) {
  .baseFile {
    padding: 8px;
  }
}
</style>
