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
      <InfoBlock />
    </div>
  </div>
  </div>
</template>

<script>
import InfoBlock from '~/components/HomePage/InfoBlock'
export default {
    components: {
        InfoBlock
    }

}
</script>
<style lang="scss" scoped>
.hero {
    background: linear-gradient(180deg, #038661 0%, rgba(3, 134, 97, 0.84) 100%);
    width: 100%;
}
.content {
    width: 557px;
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
</style>
