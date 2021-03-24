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
          <div class="first_row flex">
            <div v-for="(item,index) in tooltipTitles" :key="index" class="part flex items-center">
              <p>{{ item.name }}</p>
              <tooltip :item="item" />
            </div>
            <p class="part__price">
              стоимость
            </p>
          </div>
          <div class="second_row mt-9 flex items-center">
            <p class="second_row__price">
              3 750₽
            </p>
            <div class="x ml-13">
              <img src="../../../assets/images/icons/x.png" alt="">
            </div>
            <p class="second_row__cof ml-13">
              1.0
            </p>

            <div class="x ml-13">
              <img src="../../../assets/images/icons/x.png" alt="">
            </div>
            <p class="second_row__cof ml-13">
              1.0
            </p>
            <div class="x ml-13">
              <img src="../../../assets/images/icons/x.png" alt="">
            </div>
            <p class="second_row__cof ml-13">
              1.0
            </p>
            <div class="x ml-13">
              <img src="../../../assets/images/icons/x.png" alt="">
            </div>
            <p class="second_row__cof ml-13">
              1.0
            </p>
            <div class="x ml-13">
              <img src="../../../assets/images/icons/x.png" alt="">
            </div>
            <p class="second_row__cof ml-13">
              1.0
            </p>
            <div class="x ml-13">
              <img src="../../../assets/images/icons/x.png" alt="">
            </div>
            <p class="second_row__cof ml-13">
              1.0
            </p>
            <div class="x ml-13">
              <img src="../../../assets/images/icons/x.png" alt="">
            </div>
            <p class="second_row__cof ml-13">
              1.0
            </p>
            <div class="equal">
              <img src="../../../assets/images/icons/equal.png" alt="">
            </div>
            <p>4 749 ₽</p>
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
import Tooltip from '../../tooltips/tooltip'
export default {
  components: { Tooltip },
  props: {
    example: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      tooltipTitles: [
        {
          name: 'База',
          title: 'Базовая ставка',
          desc: 'Каждая страховка определяет свою базову ставку, но в коридоре цен, установленном законодательством.'
        },
        {
          name: 'кт',
          title: 'Коэффициент территории преимущественного использования.',
          desc: 'Определяется исходя из места жительства, указанного в паспорте.'
        },
        {
          name: 'кбм',
          title: 'Коэффициент бонус-малус.',
          desc: 'Зависит от количества ДТП, произошедших по вине водителя за 1 год.'
        },
        {
          name: 'квс',
          title: 'Коэффициент возраста и стажа.',
          desc: 'Чем меньше возраст и стаж автовладельца, тем выше будет коэффициент. Если полис оформляется на несколько водителей, тогда КВС будет определяться по самому младшему и наименее опытному.'
        },
        {
          name: 'ко',
          title: 'Коэффициент количества водителей.',
          desc: 'Для неограниченной страховки выше, чем для ограниченной.'
        },
        {
          name: 'км',
          title: 'Коэффициент мощности двигателя.',
          desc: 'Чем выше показатель мощности двигателя, тем больше этот коэффициент.'
        },
        {
          name: 'кс',
          title: 'Коэффициент периода использования транспортного средства.',
          desc: 'Чем выше период, тем меньше коэффициент. Минимальный период использования — 3 месяца, максимальный — 12 месяцев.'
        }
      ]
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
.part{
  margin-right: 24.3px;
  p{
    margin-right: 3.8px;
    font-family: Casper;
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 16px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #BDBDBD;
  }
  .logo{
    max-width: 14.4px;
  }
  &__price{
    margin-left: 29.53px;
    font-family: Casper;
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 16px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #BDBDBD;
  }
}
.part:last-child{
  margin-right: 0px;
}
.second_row{
  &__price{
    font-family: Casper;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.02em;
    color: #333333;
  }
  &__cof{
    font-family: Casper;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.02em;
    color: #B3B3B3;
  }
  .equal{
    max-width: 9px;
    margin-left: 59.5px;
    img{
      width: 100%;
    }
  }
  p:last-child{
    margin-left: 32px;
    font-family: Casper;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: -0.01em;
    color: #333333;
  }
}
</style>
