<template>
  <div class="examples py-115">
    <div class="wrapper flex flex-col items-center">
      <h1 class="mb-60">
        Примеры расчеты ОСАГО
      </h1>
      <CalculateOsago v-for="(example, index) in examples" :key="index" :example="example" />
      <button @click="openAddition" class="count_button text-center w-265 h-50 text-white bg-brand1 rounded-5">
        Рассчитать ОСАГО
      </button>
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
          image: require('~/assets/images/sedan_car.png')
        },
        {
          title: 'Низкая стоимость',
          desc: '40-летний житель бурятского поселка, который женат, ни разу в жизни не побывал ни в одной аварии, покупает полис только на лето и никого не пускает за руль своего автомобиля, заплатит за полис на несколько порядков меньше.',
          image: require('~/assets/images/offroad_car.png')
        },
      ]
    }
  },
  methods:{
    openAddition () {
      this.$router.push('/osago')
    },
  }
}
</script>
<style lang="scss" scoped>
.count_button {
  box-shadow: 0px 3px 15px rgba(4, 166, 120, 0.3);
}
</style>
