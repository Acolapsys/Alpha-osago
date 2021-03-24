<template>
  <div class="work_with py-120">
    <div class="wrapper flex flex-col items-center w-full">
      <h1 class="title mb-7 text-center">
        Компании, с которыми мы сотрудничаем
      </h1>
      <div class="subtitle text-center">
        Отправляем запросы на расчёт ОСАГО сразу во все страховые.
        <br>
        Вы получаете предложения от этих компаний
      </div>
      <div class="slider">
        <div
          class="prev flex items-center mr-100 cursor-pointer"
          @click="prev"
        >
          <img src="../../assets/images/icons/left_row.png" alt="">
        </div>

        <VueSlickCarousel v-bind="settings" ref="carousel" class="carousel">
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

        <div
          class="next flex items-center ml-50 cursor-pointer"
          @click="next"
        >
          <img src="../../assets/images/icons/right_row.png" alt="">
        </div>
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
      draggable: false,
      initialSlide: 0,
      cancelable:false,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 5,
            swipeToSlide:true,
            infinite: false,
            dots: false,
            cancelable:false
          }
        },

        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4.3,
            swipeToSlide:true,
            infinite: false,
            dots: false,
            cancelable:false
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3.2,
            swipeToSlide:true,
            infinite: false,
            dots: false,
            cancelable:false,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            swipeToSlide:true,
            infinite: false,
            dots: false,
            cancelable:false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1.5,
            swipeToSlide:true,
            infinite: false,
            dots: false,
            cancelable:false
          }
        },
      ]
      // speed: 0
    },
    slideCount: null,
    currentSlide: 0
  }),
  methods: {
    next () {
      this.$refs.carousel.next()
    },

    prev () {
      this.$refs.carousel.prev()
    }
  }
}
</script>

<style lang="scss" scoped>
button:active, button:focus {
  outline: none !important;
}
button::-moz-focus-inner {
  border: 0 !important;
}
.slick-slider {
  width: 896px;
}
//.carousel{
//  width: 896px;
//}
.slider{
  margin-top: 88.09px;
  display: flex;
}
.slider__logo{
  max-width: 120px;
  margin-right: 74px;
  img{
    width: 100%;
  }
}
.slider__logo:last-child{
  margin-right: 0px;
}
@media (max-width: 1096px){
  .prev{
    display: none;
  }
  .next{
    display: none
  }
}
@media (max-width: 1023px) {
  .slider{
    width: 750px;
  }
  .slick-slider {
    width: 750px;
  }
  .prev{
    display: none;
  }
  .next{
    display: none;
  }
}
@media (max-width: 767px) {
  .slider{
    width: 494px;
  }
  .slick-slider {
    width: 494px;
  }
  .prev{
    display: none;
  }
  .next{
    display: none;
  }
}
@media (max-width: 480px) {
  .slider{
    width: 282px;
  }
  .slick-slider {
    width: 282px;
  }
}
</style>
