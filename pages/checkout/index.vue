<template>
  <div class="checkoutPage wrapper">
    <h1 class="checkoutPage__title title text-center mb-10">
      Проверка КБМ
    </h1>
    <p class="checkoutPage__subtitle subtitle text-center mb-30">
      Заполните форму и узнайте свой КБМ
    </p>
    <p class="checkoutPage__description description">
      КБМ – это коэффициент бонус-малус, который показывает как часто водитель попадает в аварии. Влияет на цену ОСАГО: чем меньше КБМ, тем дешевле будет стоить полис ОСАГО
    </p>
    <div class="checkoutPage__form">
      <div class="checkoutPage__inner">
        <div class="checkoutPage__field">
          <label for="checkoutPage-surname" class="checkoutPage__label">Фамилия</label>
          <BaseInput id="checkoutPage-surname" class="checkoutPage__input" />
        </div>
        <div class="checkoutPage__field">
          <label for="checkoutPage-name" class="checkoutPage__label">Имя</label>
          <BaseInput id="checkoutPage-name" class="checkoutPage__input" />
        </div>
        <div class="checkoutPage__field">
          <label for="checkoutPage-patronymic" class="checkoutPage__label">Отчество</label>
          <BaseInput id="checkoutPage-patronymic" class="checkoutPage__input" />
        </div>
      </div>
      <div class="checkoutPage__field checkoutPage__field_short">
        <label for="checkoutPage-birth" class="checkoutPage__label">Дата рождения</label>
        <BaseInput id="checkoutPage-birth" class="checkoutPage__input" />
      </div>
      <div class="checkoutPage__field">
        <label for="checkoutPage-number" class="checkoutPage__label">Серия и номер прав</label>
        <BaseInput id="checkoutPage-number" class="checkoutPage__input" />
      </div>
      <div class="checkoutPage__inner">
        <BaseButton type="submit" class="checkoutPage__button">
          Проверить
        </BaseButton>
        <span class="checkoutPage__hint">Это бесплатно</span>
        <div class="checkoutPage__result">
          Ваш КБМ
          <div class="checkoutPage__resultCount">
            0.5
          </div>
        </div>
      </div>
    </div>
    <section class="checkoutPage__improve">
      <h2 class="checkoutPage__improveTitle mb-11">
        Как улучшить КБМ
      </h2>
      <p class="checkoutPage__improveDescription description">
        Здесь можно узнать о том, что такое КБМ, от чего зависит цена полиса, зачем нужно ТО и какие изменения в законодательстве ждут автомобилистов Здесь можно узнать о том, что такое КБМ, от чего зависит цена полиса, зачем нужно ТО и какие изменения в законодательстве ждут автомобилистов Здесь можно узнать о том, что такое КБМ, от чего зависит цена полиса, зачем нужно ТО и какие изменения в законодательстве ждут автомобилистов Здесь можно узнать о том, что такое КБМ, от чего зависит цена полиса, зачем нужно ТО и какие изменения в законодательстве ждут автомобилистов.
      </p>
    </section>
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
.description {
  width: 75%;
  letter-spacing: -0.01em;
}
.checkoutPage {
  padding-top: 75px;
  padding-bottom: 205px;
  &__form {
    margin-top: 41px;
    margin-bottom: 72px;
    padding: 39px 37px 51px;
    background: #F6F6F6;
    border-radius: 5px;
  }
  &__inner {
    display: flex;
    align-items: center;
    &:last-child {
      margin-top: 34px;
    }
  }
  &__field {
    width: 180px;
    margin-bottom: 20px;
    margin-right: 24px;
    &:last-child {
      margin-right: 0;
    }
  }
  &__label {
    color: rgba(51, 51, 51, 0.7);
  }
  &__button {
    width: 180px;
    margin-right: 24px;
    color: #fff;
    background-color: #038661;
    border-radius: 5px;
  }
  &__hint {
    letter-spacing: -0.01em;
    color: #BDBDBD;
  }
  &__result {
    display: none;
    text-transform: uppercase;
    font-size: 10px;
    letter-spacing: 1.5px;
    color: #BDBDBD;
  }
  &__resultCount {
    line-height: 30px;
    font-size: 36px;
    font-weight: bold;
    color: #333333;
  }
}
@media (max-width: 1023px) {
  .description {
    width: 100%;
  }
  .checkoutPage {
    padding-top: 50px;
    padding-bottom: 145px;
    &__subtitle {
      display: none;
    }
    &__form {
      margin-top: 32px;
      margin-bottom: 51px;
      padding: 28px 27px 45px;
    }
  }
}
@media (max-width: 767px) {
  .checkoutPage {
    padding-top: 40px;
    padding-bottom: 94px;
    &__title {
      font-size: 26px;
    }
    &__form {
      margin-top: 34px;
      margin-bottom: 53px;
      padding: 0;
      background-color: #fff;
    }
    &__inner {
      flex-direction: column;
    }
    &__field:not(&__field_short),
    &__button {
      width: 100%;
      margin-right: 0;
    }
    &__button {
      margin-bottom: 26px;
    }
    &__improveTitle {
      text-align: center;
    }
  }
}
</style>
