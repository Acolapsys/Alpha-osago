<template>
  <div class="auth">
    <main class="auth__wrapper">
      <h1 class="auth__title">
        Вход в личный кабинет
      </h1>
      <p class="auth__subtitle">
        В личном кабинете можно продлевать полис, не заполняя заново данные об автомобиле или оформлять новый в пару кликов.
      </p>
      <div class="auth__social">
        <div class="auth__socialTitle">
          Войти через
        </div>
        <div class="auth__socialInner">
          <img src="~/assets/images/icons/facebook-logo.svg" alt="facebook" class="auth__socialItem">
          <img src="~/assets/images/icons/google-logo.svg" alt="google" class="auth__socialItem">
          <img src="~/assets/images/icons/vk-logo.svg" alt="vk" class="auth__socialItem">
        </div>
      </div>
      <form class="auth__form" @submit.prevent="$router.push('/profile')">
        <div class="auth__formTitle">
          Или войти, используя учётную запись
        </div>
        <div class="auth__formInner">
          <div class="baseField">
            <label for="email" class="baseField__label">
              Электронная почта
            </label>
            <BaseInput
              id="email"
              type="email"
              placeholder="owner@domain.com"
              class="baseField__input"
              classes="authInput"
            />
          </div>
          <div class="baseField">
            <label for="password" class="baseField__label">
              Пароль
            </label>
            <BaseInput
              id="password"
              type="password"
              class="baseField__input"
              classes="authInput"
            />
          </div>
        </div>
        <BaseButton id="submit" class="auth__submit">
          Войти
        </BaseButton>
        <div class="auth__link">
          Пришлите мне ссылку на вход
        </div>
      </form>
    </main>
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
  padding: 81px 0;
  background: linear-gradient(180deg, #038661 0%, #FDB215 100%);
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
    width: 95%;
    margin: 0 auto;
    text-align: center;
    line-height: 23px;
    letter-spacing: -0.01em;
    color: #333333;
  }
  &__social {
    margin-top: 40px;
  }
  &__socialTitle {
    text-align: center;
    font-size: 14px;
    letter-spacing: -0.01em;
    color: #BDBDBD;
  }
  &__socialInner {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }
  &__socialItem {
    margin-right: 25px;
    cursor: pointer;
    &:last-child {
      margin-right: 0;
    }
  }
  &__form {
    margin-top: 35px;
  }
  &__formTitle {
    position: relative;
    width: max-content;
    margin: 0 auto;
    text-align: center;
    font-size: 14px;
    letter-spacing: -0.01em;
    color: #BDBDBD;
    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      display: block;
      width: 75px;
      height: 1px;
      background-color: #BDBDBD;
      transform: translateY(-50%);
    }
    &::before {
      right: 110%;
    }
    &::after {
      left: 110%;
    }
  }
  &__formInner {
    .baseField {
      width: 364px;
      margin: 0 auto 20px;
      &:first-child {
        margin-top: 30px;
      }
    }
  }
  &__submit {
    width: 364px;
    margin: 54px auto 0;
    color: #fff;
    background: #038661;
    border-radius: 5px;
  }
  &__link {
    width: max-content;
    margin: 20px auto 0;
    text-decoration: underline;
    letter-spacing: -0.01em;
    color: #088DED;
    cursor: pointer;
  }
}
@media (max-width: 1023px) {
  .auth {
    padding: 55px 0 76px;
    &__wrapper {
      width: 526px;
    }
    &__social {
      margin-top: 20px;
    }
    &__socialInner {
      margin-top: 20px;
    }
    &__form {
      margin-top: 15px;
    }
    &__formInner {
      .baseField {
        width: 343px;
        margin: 0 auto 16px;
        &:first-child {
          margin-top: 20px;
        }
      }
    }
    &__submit {
      width: 343px;
      margin: 40px auto 0;
    }
  }
}
@media (max-width: 767px) {
  /deep/.authInput {
    color: #fff;
    background-color: transparent;
    border: 1px solid #fff;
    &::placeholder {
      color: #fff;
    }
  }
  .auth {
    padding: 40px 0;
    &__wrapper {
      width: 100%;
      margin-top: 50px;
      padding: 0;
      background-color: transparent;
      box-shadow: none;
    }
    &__title {
      font-size: 20px;
      color: #fff;
    }
    &__subtitle {
      color: #fff;
    }
    &__formTitle {
      &::before,
      &::after {
        width: 20px;
      }
      &::before {
        right: 105%;
      }
      &::after {
        left: 105%;
      }
    }
    &__formInner {
      .baseField {
        width: 90%;
        margin: 0 auto 20px;
        &:first-child {
          margin-top: 34px;
        }
        &__label {
          color: rgba(255,255,255,0.7);
        }
      }
    }
    &__submit {
      width: 90%;
      margin: 50px auto 0;
    }
    &__link {
      margin: 16px auto 0;
      font-size: 14px;
      font-weight: bold;
    }
  }
}
</style>
