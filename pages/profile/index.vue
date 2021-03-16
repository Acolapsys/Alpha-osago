<template>
  <main class="profile wrapper">
    <h1 class="profile__title">
      Личный кабинет
    </h1>
    <section class="profile__section">
      <div class="profile__sectionHead">
        <h2 class="profile__sectionTitle">
          Машины и полисы
        </h2>
        <div class="profile__sectionAdd">
          <span>+</span> Добавить
        </div>
      </div>
      <div class="profile__sectionInner">
        <VehicleCard
          v-for="item in vehicles"
          :key="item.id"
          :vehicle-data="item"
        />
      </div>
    </section>
    <section class="profile__section">
      <div class="profile__sectionHead">
        <h2 class="profile__sectionTitle">
          Персоны
        </h2>
        <div class="profile__sectionAdd">
          <span>+</span> Добавить
        </div>
      </div>
      <div class="profile__sectionInner">
        <PersonCard
          v-for="item in persons"
          :key="item.id"
          :person-data="item"
          class="profileCard_short"
        />
      </div>
    </section>
    <section class="profile__section">
      <div class="profile__sectionHead">
        <h2 class="profile__sectionTitle">
          Настройки
        </h2>
      </div>
      <h3 class="profile__sectionSubtitle">
        Учётная запись
      </h3>
      <div class="profile__sectionInner">
        <ProfileInput
          id="email"
          label="email"
          type-default="email"
          value-default="registered_email@mail.ru"
        />
        <ProfileInput
          id="password"
          label="пароль"
          type-default="password"
          value-default="12345"
        />
        <ProfileInput
          id="tel"
          label="телефон"
          value-default="+7 999 123 00-00"
        />
      </div>
      <h3 class="profile__sectionSubtitle">
        Добавить вход через
      </h3>
      <div class="profile__sectionInner profile__sectionInner_social">
        <img src="~/assets/images/icons/facebook-logo.svg" alt="facebook" class="profile__social">
        <img src="~/assets/images/icons/google-logo.svg" alt="google" class="profile__social">
        <img src="~/assets/images/icons/vk-logo.svg" alt="vk" class="profile__social">
      </div>
    </section>
    <div class="profile__buttons">
      <BaseButton id="profile-exit" class="profile__exit">
        Выйти из аккаунта
      </BaseButton>
      <span id="profile-remove" class="profile__remove">
        Удалить аккаунт...
      </span>
    </div>
  </main>
</template>

<script>
import VehicleCard from '~/components/Profile/VehicleCard'
import PersonCard from '~/components/Profile/PersonCard'
import ProfileInput from '~/components/Profile/ProfileInput'
import BaseButton from '~/components/base/BaseButton'
export default {
  components: {
    VehicleCard,
    PersonCard,
    ProfileInput,
    BaseButton
  },
  data () {
    return {
      vehicles: [
        {
          link: '/profile/vehicle/1',
          vehicle: 'Toyota Land Cruiser',
          number: 'A 121 AA 163',
          drivers: '1 водитель',
          insurance: 'до 20 декабря 2020 (ещё 3 месяца)',
          inspection: 'Нужен ТО для следующей страовки'
        },
        {
          link: '/profile/vehicle/2',
          vehicle: 'Yamaha R3',
          number: '5558 АВ 63',
          drivers: '2 водителя',
          insurance: 'до 20 сентября 2020 <span class="color-yellow">(осталось 5 дней)</span>',
          inspection: 'ТО до 12 ноября 2021'
        },
        {
          link: '/profile/vehicle/3',
          vehicle: 'Honda CBR 600',
          number: 'А 121 АА  163',
          drivers: '1 водитель',
          insurance: '<span class="color-red">Истекла</span>',
          inspection: 'ТО до 1 сентября 2021'
        }
      ],
      persons: [
        {
          link: '/profile/person/1',
          person: 'Селиверстов Иван Петрович',
          kbm: '1.0',
          certificate: 'Действительны ещё 6 лет'
        },
        {
          link: '/profile/person/2',
          person: 'Селиверстова Елена Константиновна',
          kbm: '1.0',
          certificate: '<span class="color-yellow">Действительны ещё 1 месяц</span>'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scope>
.profile {
  &__sectionInner {
    .profileCard {
      width: calc(50% - 12px);
      margin-bottom: 24px;
    }
    .profileInput {
      width: 32%;
    }
    &_social {
      justify-content: flex-start;
    }
  }
}
@media (max-width: 1023px) {
  .profile {
    &__sectionInner {
      .profileInput {
        width: calc(50% - 10px);
        margin-bottom: 20px;
      }
    }
  }
}
@media (max-width: 767px) {
  .profile {
    &__sectionInner {
      .profileCard {
        width: 100%;
        margin-bottom: 12px;
      }
      .profileInput {
        width: 100%;
        margin-bottom: 12px;
      }
    }
  }
}
</style>
