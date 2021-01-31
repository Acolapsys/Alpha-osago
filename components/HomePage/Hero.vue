<template>
  <div class="hero">
      <div class="wrapper">
    <div class="content text-white font-bold">
      <h2 class="title mb-23 mt-57">
        ОСАГО без отказов
      </h2>
      <p class="subtitle mb-35 text-left">
        Получите расчёт по всем страховым компаниям, оформите полис онлайн и получите <span class="border-dashed border-b-3 border-white">кэшбек 5%</span>
      </p>
      <InfoBlock class="small info-orange">
        <div class="body-bold text-brand2">
      А если все отказывают?
    </div>
    <div>
      Если вы относитесь к категории рискованных страхователей (мотоциклы, спецтехника, южные регионы, работа в такси), поможем оформить полис в ручном режиме.
      <span class="text-brand2 underline cursor-pointer" @click="detailed">Подробнее</span>
    </div>
      </InfoBlock>
    </div>
    <div class="hero_img">
      <img src="~/assets/images/undraw_fast_car.png" alt="fast car">
    </div>
  </div>
  </div>
</template>

<script>
import InfoBlock from '~/components/base/InfoBlock'
export default {
    components: {
        InfoBlock
    },
    methods: {
    detailed () {
      this.$router.push('/')
    }
  }

}
</script>
<style lang="scss" scoped>
.hero {
    background: linear-gradient(180deg, #038661 0%, rgba(3, 134, 97, 0.84) 100%);
    width: 100%;
}
.content {
    max-width: 557px;
    margin-right: 126px;
}
.title {
font-size: 64px;
line-height: 58px;
letter-spacing: -0.03em;
}
.subtitle {
font-size: 30px;
line-height: 40px;
letter-spacing: -0.02em;
}
.hero_image {
  max-width: 476px;
  max-height: 360px;
}
</style>
