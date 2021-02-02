<template>
  <div class="examples">
    <div class="wrapper">
      <h1>Примеры расчеты ОСАГО</h1>
      <CalculateOsago v-for="(example, index) in examples" :key="index" :example="example" />
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
          image: '~/assets/images/sedan_car.png'
        },
        {
          title: 'Низкая стоимость',
          desc: '40-летний житель бурятского поселка, который женат, ни разу в жизни не побывал ни в одной аварии, покупает полис только на лето и никого не пускает за руль своего автомобиля, заплатит за полис на несколько порядков меньше.',
          image: '~/assets/images/offroad_car.png'
        }
      ]
    }
  }
}
</script>
