<template>
  <div class="help">
    <Steps :steps="steps" />
    <div class="help__wrapper wrapper">
      <nuxt-link to="/osago" class="help__back">
        <img src="~/assets/images/icons/arrow-left-blue.svg" alt="arrow">
        Назад, к форме
      </nuxt-link>
      <h1 class="help__title">
        Помощь в оформлении
      </h1>
      <h2 class="help__subtitle">
        Как работает
      </h2>
      <p class="help__text">
        1. Заполните обычную форму расчёта ОСАГО<br>
        2. Войдите, или зарегистрируйтесь, чтобы мы могли отправить вам полис.<br>
        3. Оплатите оформление полиса:<br>
        — Заморозим стоимость полиса + 800₽ за услугу<br>
        — Деньги спишутся только после оформления<br>
        — Деньги автоматически разморозятся, если полис не оформили за 48 часов<br>
        4. Полис у вас. Или деньги, как повезёт.
      </p>
      <BaseButton class="help__button">
        Перейти к оплате
      </BaseButton>
      <div class="help__hint">
        Мы будем оформлять полис для Toyota Land Cruiser (без <br>
        госномера). Проверьте данные на прошлых шагах.
      </div>
      <div class="help__article">
        <div class="help__articleInner">
          <img src="~/assets/images/article4.png" alt="image" class="help__articleImg">
          <div class="help__articleName">
            Несегмент
          </div>
        </div>
        <div class="help__articleDescription">
          Читайте разбор, что такое несегмент, почему на некоторые виды транспорта все страховые выдают ошибки и не оформляют страховки и как мы работаем с такими случаями, чтобы страховку всё-таки оформили.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Steps from '~/components/Osago/Steps'
import BaseButton from '~/components/base/BaseButton'
export default {
  components: {
    Steps,
    BaseButton
  },
  data () {
    return {
      steps: [
        {
          number: 1,
          name: 'Транспортное средство',
          link: '/osago#vehicle'
        },
        {
          number: 2,
          name: 'Владелец',
          link: '/osago#owner'
        },
        {
          number: 3,
          name: 'Страхователь',
          link: '/osago#insurer'
        },
        {
          number: 4,
          name: 'Водители',
          link: '/osago#driver'
        },
        {
          number: 5,
          name: 'Полис',
          link: '/osago#police'
        },
        {
          number: '+',
          name: 'Помощь',
          link: '/osago/help'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.help {
  &__wrapper {
    position: relative;
    padding-top: 56px;
    padding-bottom: 130px;
  }
  &__back {
    position: absolute;
    top: 25px;
    left: 16px;
    display: flex;
    color: #088DED;
    img {
      margin-right: 14px;
    }
  }
  &__title {
    margin-bottom: 50px;
    text-align: center;
  }
  &__subtitle {
    margin-bottom: 12px;
  }
  &__text {
    font-size: 20px;
  }
  &__button {
    width: 210px;
    margin-top: 24px;
    color: #038661;
    border: 1px solid #038661;
    border-radius: 5px;
    box-sizing: border-box;
  }
  &__hint {
    margin-top: 18px;
  }
  &__article {
    display: flex;
    margin-top: 100px;
  }
  &__articleInner {
    flex-shrink: 0;
    margin-right: 22px;
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
  }
  &__articleImg {
    width: 100%;
    max-height: 216px;
    object-fit: cover;
  }
  &__articleName {
    padding: 20px;
    text-align: center;
    font-size: 20px;
  }
  &__articleDescription {
    width: 25%;
    font-size: 20px;
    letter-spacing: -0.02em;
  }
}
@media (max-width: 1023px) {
  .help {
    background-color: #F6F6F6;
    &__articleImg {
      max-height: 166px;
    }
    &__articleDescription {
      width: 50%;
    }
  }
}
@media (max-width: 767px) {
  .help {
    padding-top: 100px;
    &__wrapper {
      padding-bottom: 47px;
    }
    &__back {
      top: 35px;
    }
    &__title {
      margin: 30px 0 25px;
      font-size: 26px;
    }
    &__subtitle {
      margin-bottom: 5px;
    }
    &__text {
      font-size: 16px;
    }
    &__article {
      flex-direction: column;
      margin-top: 90px;
    }
    &__articleInner {
      margin-right: 0;
    }
    &__articleImg {
      max-height: 180px;
    }
    &__articleName {
      padding: 16px;
    }
    &__articleDescription {
      width: 100%;
      margin-top: 20px;
      font-size: 16px;
    }
  }
}
</style>
