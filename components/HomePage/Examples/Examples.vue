<template>
  <div class="examples py-115">
    <div class="wrapper flex flex-col items-center">
      <h1 class="mb-60">Примеры расчеты ОСАГО</h1>
      <CalculateOsago v-for="(example, index) in examples" :key="index" :example="example" />
      <BaseButton class="text-white bg-brand1 shadow">Рассчитать ОСАГО</BaseButton>
    </div>
  </div>
</template>
<script>
import CalculateOsago from '~/components/HomePage/Examples/CalculateOsago'
export default {
  name: 'Examples',
  components: {
    CalculateOsago
  },
  data () {
    return {
      examples: [
        {
          title: 'Высокая стоимость',
          desc: '20-летний водитель спортивного авто, часто попадающий в аварии, живет в Мурманске (где наивысший региональный коэффициент), приобретает полис без ограничения числа водителей на весь год.',
          image: require('/assets/images/sedan_car.png')
        },
        {
          title: 'Низкая стоимость',
          desc: '40-летний житель бурятского поселка, который женат, ни разу в жизни не побывал ни в одной аварии, покупает полис только на лето и никого не пускает за руль своего автомобиля, заплатит за полис на несколько порядков меньше.',
          image: require('/assets/images/offroad_car.png')
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>

</style>