<template>
  <main class="profile wrapper">
    <h1 class="profile__title">
      Аккаунт привязан
    </h1>
    <p class="profile__description">
      Теперь при входе можете вводить имейл и пароль, а можете входить через Вконтакте.
    </p>
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
    &__back {
        width: 364px;
        margin: 80px auto 0;
        border: 1.5px solid #333333;
    }
}
@media (max-width: 767px) {
    .profile {
        width: 100%;
        &__description {
            width: 80%;
        }
        &__back {
            margin-top: 40px;
        }
    }
}
</style>
