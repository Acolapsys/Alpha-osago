<template>
  <div class="calculate-osago flex justify-between pt-42 pb-50 w-full">
    <div class="info">
      <h3 class="title mb-10">
        {{ example.title }}
      </h3>
      <p class="body-regular mb-33">
        {{ example.desc }}
      </p>
      <div class="calculator flex">
        <div class="col">
          <div class="col_title">
            База
          </div>
          <div class="col_value">
            3 750 ₽
          </div>
        </div>
        <div class="col">
          <div class="col_title">
            КТ
          </div>
          <div class="col_value">
            1.0
          </div>
        </div>
        <div class="col">
          <div class="col_title">
            КБМ
          </div>
          <div class="col_value">
            1.0
          </div>
        </div>
      </div>
    </div>
    <div class="image">
      <img :src="example.image" alt="статья">
    </div>
  </div>
</template>
<script>
export default {
  props: {
    example: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
<style lang="scss" scoped>
.calculate-osago {
  border-bottom: 1px dashed #E0E0E0;

}
.info {
  max-width: 654px;
}
.image {
  max-width: 300px;
}
</style>
