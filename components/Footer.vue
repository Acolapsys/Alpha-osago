<template>
  <div class="footer bg-background2 w-full py-90">
    <div class="wrapper flex justify-between w-full">
      <div class="sections max-w-164">
        <p class="body-bold mb-5 text-white">
          Разделы
        </p>
        <ul>
          <li v-for="section in sections" :key="section.title">
            <nuxt-link :to="section.link" class="body-regular text-grey5">
              {{ section.title }}
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="flex lg-max:flex-col">
        <div class="contacts max-w-120 lg:mr-80 lg-max:mb-30">
          <p class="body-bold mb-5 text-white contacts__title">
            Контакты
          </p>
          <ul class="contacts__list">
            <li>
              <a href="tel:+88002253535" class="body-regular text-grey5">8-800-225-35-35</a>
            </li>
            <li>
              <a href="mailto:onfo@optimus.ru" class="body-regular text-grey5">onfo@optimus.ru</a>
            </li>
          </ul>
        </div>
        <div class="address max-w-154">
          <p class="body-bold mb-5 text-white">
            Юридический адрес
          </p>
          <ul>
            <li>
              <p class="body-regular text-grey5">
                443000, Москва, ул. Тверская, д 1
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div class="information max-w-222">
        <p class="body-bold mb-5 text-white">
          Информация
        </p>
        <ul>
          <li>
            <nuxt-link to="/" class="body-regular underline text-grey5">
              Пользовательское соглашение
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="body-regular underline text-grey5 leading-120">
              Согласие на обработку персональных данных
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="calculate lg-max:hidden">
        <BaseButton class="text-white bg-brand1 shadow">
          Рассчитать ОСАГО
        </BaseButton>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      sections: [
        {
          title: 'Расчет ОСАГО',
          link: '/calculate'
        },
        {
          title: 'Оформление ОСАГО',
          link: '/'
        },
        {
          title: 'Расчет КБМ',
          link: '/'
        },
        {
          title: 'Полезная информация',
          link: '/'
        },
        {
          title: 'Личный кабинет',
          link: '/'
        }

      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@media (max-width: 767px) {
  .footer {
    @apply py-50;
    .wrapper {
      flex-direction: column;
    }
    .sections {
      display: none;
    }
    .contacts {
      max-width: 100%;
      margin-bottom: 0;
      &__title {
        display: none;
      }
      &__list {
        display: flex;
        justify-content: space-between;
        margin-bottom: 25px;
        padding-bottom: 26px;
        border-bottom: 1px solid rgba(255,255,255,0.2);
      }
    }
    .information {
      margin-top: 20px;
    }
  }
}
</style>