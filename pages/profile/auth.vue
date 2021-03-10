<template>
  <div class="auth">
    <div class="auth__wrapper">
      <h1 class="auth__title">Вход в личный кабинет</h1>
      <p class="auth__subtitle">
        В личном кабинете можно продлевать полис, не заполняя заново данные <br />об автомобиле или оформлять новый в пару кликов.
      </p>
      <div class="auth__social">
        <div class="auth__socialTitle">Войти через</div>
        <div class="auth__socialInner">
          <img src="~/assets/images/icons/facebook-logo.svg" alt="facebook" class="auth__socialItem">
          <img src="~/assets/images/icons/google-logo.svg" alt="google" class="auth__socialItem">
          <img src="~/assets/images/icons/vk-logo.svg" alt="vk" class="auth__socialItem">
        </div>
      </div>
      <form class="auth__form">
        <div class="auth__formTitle">
          Или войти, используя учётную запись
        </div>
        <div class="baseField">
          <label for="vehicle-passport-issue" class="baseField__label">Электронная почта</label>
          <BaseInput
            type="email"
            id="auth-email"
            class="baseField__input"
            placeholder="owner@domain.com"
          />
        </div>
        <div class="baseField">
          <label for="vehicle-passport-issue" class="baseField__label">Пароль</label>
          <BaseInput
            type="password"
            id="auth-password"
            class="baseField__input"
          />
        </div>
        <BaseButton class="osago__submit" id="auth-submit">
          Войти
        </BaseButton>
        <div class="auth__link">Пришлите мне ссылку на вход</div>
      </form>
    </div>
  </div>
</template>

<script>
import BaseInput from '~/components/base/BaseInput'
import BaseButton from '~/components/base/BaseButton'
export default {
  components: {
    BaseInput,
    BaseButton
  }
}
</script>

<style lang="scss" scoped>
.auth {
  padding: 81px 0 101px;
  background: linear-gradient(180deg, #038661 0%, #FDB215 100%);
  .baseField {
    width: 364px;
    margin: 0 auto 20px;
  }
  &__wrapper {
    width: 750px;
    margin: 0 auto;
    padding: 47px 85px 68px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.2);
  }
  &__title {
    margin-bottom: 20px;
    text-align: center;
    font-size: 26px;
  }
  &__subtitle {
    text-align: center;
    line-height: 23px;
    letter-spacing: -0.01em;
    color: #333333;
  }
}
</style>
