<template>
  <div class="info-block text-left bg-opacity-10 bg-white rounded-5">
      <div class="title body-bold text-brand2">
          А если все отказывают?

      </div>
      <div class="text">
          Если вы относитесь к категории рискованных страхователей (мотоциклы, спецтехника, южные регионы, работа в такси), поможем оформить полис в ручном режиме. 
          <span class="text-brand2 underline cursor-pointer" @click="detailed">Подробнее</span>
      </div>
  </div>
</template>
<script>
export default {
    methods: {
        detailed() {
            this.$router.push('/')
        }
    }
}
</script>
<style lang="scss" scoped>
.info-block {
    @apply border-l-3 border-brand2 py-22 px-30;
    min-width: 557px;
}
.text {
font-weight: normal;
font-size: 16px;
line-height: 23px;
letter-spacing: -0.01em;
color: #FFFFFF;
}
</style>
