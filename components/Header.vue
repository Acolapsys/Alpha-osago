<template>
  <div class="header bg-brand1 py-20">
    <div class="wrapper">
      <span class="logo max-w-124 mr-72 mobile-max:mx-auto ">
        <img src="@/assets/images/logo.png" alt="Логотип ОСАГО">
      </span>
      <ul class="navbar mobile-max:hidden flex">
        <li class="lg:mr-50">
          <nuxt-link to="/osago">
            Оформление ОСАГО
          </nuxt-link>
        </li>
        <li class="lg:mr-50">
          <nuxt-link to="/check">
            Проверка КБМ
          </nuxt-link>
        </li>
        <li class="lg:mr-50">
          <nuxt-link to="/faq">
            Полезная информация
          </nuxt-link>
        </li>
      </ul>
      <BaseButton class="account">
        Личный кабинет
      </BaseButton>
    </div>
  </div>
</template>

<script>
import BaseButton from '~/components/base/BaseButton'
export default {
  name: 'Header',
  components: {
    BaseButton
  },
  data () {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
.header {
  @apply max-h-72
}
.navbar {
    @apply flex items-center justify-between text-white;
    @screen mobile-max {
      @apply pr-55;
    }
  }
.nuxt-link-active {
    @apply text-brand2
}
</style>
