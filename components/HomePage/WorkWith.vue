<template>
  <div class="work_with py-120">
    <div class="wrapper flex flex-col items-center">
      <h1 class="title mb-7">
        Компании, с которыми мы сотрудничаем
      </h1>
      <div class="subtitle text-center">
        Отправляем запросы на расчёт ОСАГО сразу во все страховые.
        <br>
        Вы получаете предложения от этих компаний
      </div>
      <div class="slider flex items-center">
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
      arrows: true,
      infinite: false,
      // stopAtEnd: true,
      // waitForAnimate: false,
      // cssEase: "easeOutElastic",
      draggable: false,
      initialSlide: 0
      // speed: 0
    },
    slideCount: null,
    currentSlide: 0
  })
}
</script>

<style lang="scss">
button:active, button:focus {
  outline: none !important;
}
button::-moz-focus-inner {
  border: 0 !important;
}
.slick-slider {
  width: 896px;
}
.slick-prev:before {
  color: black !important;
  margin-right: 60px;
}
.slick-next:before {
  color: black !important;
}
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
</style>
