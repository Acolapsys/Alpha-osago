<template>
  <div class="work_with py-120">
    <div class="wrapper flex flex-col items-center">
      <h1 class="title mb-7 ">
        Компании, с которыми мы сотрудничаем
      </h1>
      <div class="subtitle text-center">
        Отправляем запросы на расчёт ОСАГО сразу во все страховые.
        <br>
        Вы получаете предложения от этих компаний
      </div>
      <div class="slider">
        <button
          v-show="currentSlide !== 0"
          alt=""
          class="showPrev"
          @click="showPrev"
        >
          <img src="../../assets/images/icons/left_row.png" alt="">
        </button>
        <div class="empty" v-show="currentSlide == 0"></div>

        <VueSlickCarousel v-bind="settings" ref="carousel">
          <div class="slider__logo">
            <img src="../../assets/images/icons/work_logo.png" alt="">
          </div>
          <div class="slider__logo">
            <img src="../../assets/images/icons/work_logo.png" alt="">
          </div>
          <div class="slider__logo">
            <img src="../../assets/images/icons/work_logo.png" alt="">
          </div>
          <div class="slider__logo">
            <img src="../../assets/images/icons/work_logo.png" alt="">
          </div>
          <div class="slider__logo">
            <img src="../../assets/images/icons/work_logo.png" alt="">
          </div>
          <div class="slider__logo">
            <img src="../../assets/images/icons/work_logo.png" alt="">
          </div>
          <div class="slider__logo">
            <img src="../../assets/images/icons/work_logo.png" alt="">
          </div>
        </VueSlickCarousel>

        <button
          v-show="currentSlide !== 2"
          alt=""
          class="showNext"
          @click="showNext"
        >
          <img src="../../assets/images/icons/right_row.png" alt="">
        </button>
        <div class="empty2" v-show="currentSlide == 2"></div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

export default {
  name: 'WorkWith',
  components: { VueSlickCarousel },
  data: () => ({
    settings: {
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
      infinite: false,
      // stopAtEnd: true,
      // waitForAnimate: false,
      // cssEase: "easeOutElastic",
      draggable: true,
      initialSlide: 0
      // speed: 0
    },
    slideCount: null,
    currentSlide: 0
  }),
  mounted () {
    this.slideCount = this.$refs.carousel.$refs.innerSlider.slideCount
  },
  methods: {
    showNext () {
      if (this.currentSlide !== this.slideCount - 1) {
        this.$refs.carousel.next()
        this.currentSlide = this.currentSlide + 1
      }
    },
    showPrev () {
      if (this.currentSlide !== 0) {
        this.$refs.carousel.prev()
        this.currentSlide = this.currentSlide - 1
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.slick-slider {
  width: 896px;
}
.slider{
  width: 1135px;
  margin-top: 88px;
  display: flex;
  &__logo{
    max-width: 120px;
    //margin-right: 74px;
    img{
      width: 100%;
    }
  }
  &__logo:last-child{
    margin-right: 0px;
  }
}
.showNext{
  margin-left: 60.7px;
  max-width: 100px;
  img{
    width: 100%;
  }
}
.showPrev{
  margin-right: 60.7px;
  max-width: 100px;
  img{
    width: 100%;
  }
}
.empty{
  max-width: 100px;
  margin-right: 60.7px;
}
.empty2{
  max-width: 100px;
  margin-left: 60.7px;
}
</style>
