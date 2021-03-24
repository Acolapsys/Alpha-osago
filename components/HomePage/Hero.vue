<template>
  <div class="hero">
    <div class="wrapper">
      <!-- desktop view -->
      <PopupCache
        v-if="isInfoPopupVisible"
        @closePopup="closeInfoPopup"
      />
      <div class="flex lg-max:hidden">
        <div class="content text-white font-bold">
          <h2 class="title mb-23 mt-57">
            ОСАГО без отказов
          </h2>
          <p class="subtitle mb-35 text-left">
            Получите расчёт по всем страховым компаниям, оформите полис онлайн и
            получите
            <span class="border-dashed border-b-3 border-white" @click="showPopupInfo">кэшбек 5%</span>
          </p>
          <InfoBlock class="small b-orange">
            <div class="body-bold text-brand2">
              А если все отказывают?
            </div>
            <div>
              Если вы относитесь к категории рискованных страхователей
              (мотоциклы, спецтехника, южные регионы, работа в такси), поможем
              оформить полис в ручном режиме.
              <span
                class="text-brand2 underline cursor-pointer"
                @click="detailed"
              >Подробнее</span>
            </div>
          </InfoBlock>
        </div>
        <div class="hero_img">
          <img src="~/assets/images/undraw_fast_car.png" alt="fast car">
        </div>
      </div>
      <!-- //tablet view -->
      <div class="lg:hidden">
        <div class=" flex justify-between w-full">
          <div class="content text-white font-bold mr-0">
            <h2 class="title mb-23 mt-27 transform -translate-x-14">
              ОСАГО без отказов
            </h2>
            <ul class="mb-30">
              <li class="flex mb-16 items-center">
                <div class="image w-15 h-15 mr-10">
                  <img src="~/assets/images/icons/check.png" alt="check">
                </div>
                <p>Расчёт по всем страховым</p>
              </li>
              <li class="flex mb-16 items-center">
                <div class="image w-15 h-15 mr-10">
                  <img src="~/assets/images/icons/check.png" alt="check">
                </div>
                <p>Оформление онлайн</p>
              </li>
              <li class="flex mb-16 items-center">
                <div class="image w-15 h-15 mr-10">
                  <img src="~/assets/images/icons/check.png" alt="check">
                </div>
                <p>Кэшбек 5%</p>
              </li>
            </ul>
          </div>

          <div class="hero_img max-w-291">
            <img src="~/assets/images/undraw_fast_car.png" alt="fast car">
          </div>
        </div>
        <InfoBlock class="tablet-max:small tablet:b-orange max-w-full text-white">
          <div class="body-bold text-brand2">
            А если все отказывают?
          </div>
          <div>
            Если вы относитесь к категории рискованных страхователей
            (мотоциклы, спецтехника, южные регионы, работа в такси), поможем
            оформить полис в ручном режиме.
            <span
              class="text-brand2 underline cursor-pointer"
              @click="detailed"
            >Подробнее</span>
          </div>
        </InfoBlock>
      </div>
    </div>
  </div>
</template>

<script>
import PopupCache from '../popup/popup_cache'
import InfoBlock from '~/components/base/InfoBlock'
import Popup_cache from "../popup/popup_cache";
export default {
  components: {
    PopupCache,
    InfoBlock
  },
  data () {
    return {
      isInfoPopupVisible: false
    }
  },
  methods: {
    detailed () {
      this.$router.push('/')
    },
    showPopupInfo () {
      this.isInfoPopupVisible = true
    },
    closeInfoPopup () {
      this.isInfoPopupVisible = false
    }
  }
}
</script>
<style lang="scss" scoped>
.hero {
  background: linear-gradient(180deg, #038661 0%, rgba(3, 134, 97, 0.84) 100%);
  width: 100%;
  padding-bottom: 110px;
}
.content {
  max-width: 557px;
  margin-right: 126px;
  @screen lg-max {
    @apply mr-0;
  }
}
.title {
  font-size: 64px;
  line-height: 58px;
  letter-spacing: -0.03em;
  @screen lg-max {
font-weight: bold;
font-size: 44px;
line-height: 40px;
letter-spacing: -0.03em;
  }
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
.border-dashed{
  cursor: pointer;
}

</style>
