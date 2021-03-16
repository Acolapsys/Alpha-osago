<template>
  <div class="header bg-brand1">
    <div class="px-70 py-20 mx-auto flex justify-between items-center lg-max:px-16 lg-max:py-16">
      <span class="logo max-w-124 mr-72 mobile-max">
        <img src="@/assets/images/logo.png" alt="Логотип ОСАГО">
      </span>
      <ul class="navbar ">
        <li class="lg:mr-50">
          <nuxt-link to="/osago">
            Оформление ОСАГО
          </nuxt-link>
        </li>
        <li class="lg:mr-50">
          <nuxt-link to="/checkout">
            Проверка КБМ
          </nuxt-link>
        </li>
        <li class="lg:mr-50">
          <nuxt-link to="/faq">
            Полезная информация
          </nuxt-link>
        </li>
      </ul>
      <nuxt-link to="/profile/auth">
        <BaseButton class="account lg-max:hidden">
          Личный кабинет
        </BaseButton>
      </nuxt-link>
      <div class="burger lg:hidden">
        <img src="~/assets/images/icons/burger.png" alt="">
      </div>
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
  @apply max-h-72;
  position: relative;
  z-index: 10;
}
.navbar {
    @apply flex items-center justify-between text-white;
    @screen lg-max {
      @apply hidden;
    }

  }
.nuxt-link-active {
    @apply text-brand2
}
@media (max-width: 767px) {
  .header {
    position: fixed;
    left: 0;
    right: 0;
  }
  .logo {
    margin-left: 0;
  }
}
</style>
