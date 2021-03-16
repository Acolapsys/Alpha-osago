<template>
  <div class="help bg-background2">
    <div class="wrapper px-70 py-120 flex flex-col items-center  text-grey6 w-full">
      <h1 class="title">
        Вас никто не страхует?
      </h1>
      <p class="subtitle mt-10 text-center">
        Поможем оформить ОСАГО в ситуациях, которые на языке страховых агентов называется “Несегмент”
      </p>
      <div class="list my-70 body-bold text-grey6">
        <div class="row">
          <div class="name">
            Транспортное средство
          </div>
          <div class="desc">
            Мотоциклы, прицепы, троллейбусы, трамваи, спецтехника, комбайны, квадроциклы, экскаваторы, строительная техника.
          </div>
        </div>
        <div class="row">
          <div class="name">
            Регион
          </div>
          <div class="desc">
            Северная Осетия - Алания, Волгоград, Ингушетия, Карачаево-Черкесск, Адыгея, Ростов, Липецк, Краснодарск, Оренбург и другие города и области.
          </div>
        </div>
        <div class="row">
          <div class="name">
            Цель использования
          </div>
          <div class="desc">
            Такси, учебная езда, каршеринг, перевозка опасных грузов, прокат, аренда, специальный транспорт, экстренные и коммунальные службы и прочее.
          </div>
        </div>
        <div class="row">
          <div class="name">
            Период использования
          </div>
          <div class="desc">
            От 3 месяцев.
          </div>
        </div>
      </div>
      <div class="how_works flex flex-col items-center mb-80">
        <div class="line min-w-34" />
        <h2>Как это работает</h2>
        <ul class="list">
          <li class="mt-22">
            <h2 class="num">
              1
            </h2>
            <div class="py-23 border-grey6 border-b-DEFAULT border-opacity-20 flex">
              <div class="col1 body-bold mr-33">
                Рассчитайте цену полиса по короткой форме
              </div>
              <div class="col2 body-regular">
                Если хотя бы одна страховая покажет цену - покупайте, наша услуга Вам не нужна.
              </div>
            </div>
          </li>
          <li class="pt-23">
            <h2 class="num">
              2
            </h2>
            <div class="col1 body-bold mr-33">
              Если все стаховые отказывают, нажмите “Помощь в оформлении”
            </div>
            <div class="col2 body-regular">
              Заново вводить ничего не надо - данные будут переданы специалисту.
            </div>
          </li>
        </ul>
      </div>
      <div class="conditions flex flex-col items-center">
        <div class="line min-w-34" />
        <h2>Условия</h2>
        <div class="grid grid-cols-4-fr gap-40 mt-60 mb-80 w-full lg-max:grid-cols-2-fr lg-max:grid-rows-2">
          <div class="condition_col">
            <div class="img_block">
              <img src="~/assets/images/icons/money.png" alt="money icon">
            </div>
            <div class="text">
              Стоимость услуги: <span>750 ₽</span>
              <br>
              Итоговая стоимость: стоимость полиса + 750 ₽
            </div>
          </div>
          <div class="condition_col">
            <div class="img_block">
              <img src="~/assets/images/icons/padlock.png" alt="padlock icon">
            </div>
            <div class="text">
              Деньги “замораживаются” в банке и списываются со счёта только после оформления
            </div>
          </div>
          <div class="condition_col">
            <div class="img_block">
              <img src="~/assets/images/icons/clock.png" alt="clock icon">
            </div>
            <div class="text">
              Деньги вернутся на Ваш счёт, если полис не будет оформлен за 48 часов
            </div>
          </div>
          <div class="condition_col">
            <div class="img_block">
              <img src="~/assets/images/icons/cashback.png" alt="cashback icon">
            </div>
            <div class="text">
              Если полис получится оформить по стоимости ниже, чем вы заплатили, вернём разницу на карту
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col w-full items-center ">
        <button type="submit" class="count_button text-center w-265 h-50 text-white bg-brand1 rounded-5 mb-12">
          Рассчитать ОСАГО
        </button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.row {
  @apply py-29 border-grey6 border-t-DEFAULT border-opacity-20 flex justify-between w-full items-center ;
  &:last-child {
    @apply border-b-DEFAULT
  }

}
.name {
  min-width: 245px;
  margin-right: 46px;
  @screen lg-max {
    max-width: 245px;
    min-width: 0;
    margin-right: 30px;
  }

}
.desc {
  min-width: 568px;
  margin-right: 96px;
  @screen lg-max {
    max-width: 434px;
    min-width: 0;
    margin-right: 0;
  }

}
.line {
  @apply border-t-2 border-grey6 max-w-34 mb-45;
}
.num {
  @apply flex justify-center items-center text-brand1 min-w-60 min-h-60 rounded-20 mr-37;
  background: rgba(75, 236, 190, 0.2);
}
.list  {
  padding: 0 97px;
  li {
  @apply flex items-center;
  }
  @screen lg-max {
    @apply p-0
  }

}
.subtitle {
  max-width: 660px;
  @screen lg-max {
    max-width: 526px;
  }

}
.col1 {
  width: 256px;
}
.col2 {
  width: 363px;

}
.condition_col {
  @apply flex flex-col items-center text-center;
  width: 230px;
  .img_block {
    @apply flex justify-center items-center rounded-20 mb-20;
    min-width: 120px;
    min-height: 120px;
    background: rgba(75, 236, 190, 0.2);
  }
}
.count_button {
box-shadow: 0px 3px 15px rgba(4, 166, 120, 0.3);
}
</style>
