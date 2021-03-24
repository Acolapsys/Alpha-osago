<template>
  <main class="profile wrapper">
    <h1 class="profile__title">
      Этот аккаунт зарегистрирован на другого человека
    </h1>
    <p class="profile__description">
      Чтобы перепривязать его к себе, зайдите в Вконтакте и отзовите доступ для “ОСАГО онлайн”, а после этого снова попробуйте привязать. Так всё получится.
    </p>
    <BaseButton id="vk" class="profile__vk">
      <img src="~/assets/images/icons/vk-logo.svg" alt="icon">
      Перейти
    </BaseButton>
    <BaseButton id="back" class="profile__back">
      В личный кабинет
    </BaseButton>
  </main>
</template>

<script>
import BaseButton from '~/components/base/BaseButton'

export default {
  components: {
    BaseButton
  }
}
</script>

<style lang="scss" scoped>
.profile {
    width: 700px;
    &__title {
        margin-bottom: 35px;
    }
    &__description {
        text-align: center;
    }
    &__vk,
    &__back {
        width: 364px;
        margin: 0 auto;
    }
    &__vk {
        margin-top: 60px;
        color: #2787F5;
        border: 1.5px solid #2787F5;
        img {
            width: 24px;
            height: 24px;
            margin-right: 10px;
        }
    }
    &__back {
        margin-top: 20px;
        border: 1.5px solid #333333;
    }
}
@media (max-width: 767px) {
    .profile {
        width: 100%;
        &__vk,
        &__back {
            width: 90%;
        }
    }
}
</style>
