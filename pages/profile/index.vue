<template>
  <div class="profile">
    <div class="profile__wrapper wrapper">
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
            :vehicleData="item"
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
            :personData="item"
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
            typeDefault="email"
            valueDefault="registered_email@mail.ru"
          />
          <ProfileInput
            id="password"
            label="пароль"
            typeDefault="password"
            valueDefault="12345"
          />
          <ProfileInput
            id="tel"
            label="телефон"
            valueDefault="+7 999 123 00-00"
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
        <BaseButton class="profile__exit" id="profile-exit">
          Выйти из аккаунта
        </BaseButton>
        <span class="profile__remove" id="profile-remove">
          Удалить аккаунт...
        </span>
      </div>
    </div>
  </div>
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
          vehicle: 'Toyota Land Cruiser',
          number: 'A 121 AA 163',
          drivers: '1 водитель',
          insurance: 'до 20 декабря 2020 (ещё 3 месяца)',
          inspection: 'Нужен ТО для следующей страовки'
        },
        {
          vehicle: 'Yamaha R3',
          number: '5558 АВ 63',
          drivers: '2 водителя',
          insurance: 'до 20 сентября 2020 <span class="color-yellow">(осталось 5 дней)</span>',
          inspection: 'ТО до 12 ноября 2021'
        },
        {
          vehicle: 'Honda CBR 600',
          number: 'А 121 АА  163',
          drivers: '1 водитель',
          insurance: '<span class="color-red">Истекла</span>',
          inspection: 'ТО до 1 сентября 2021'
        }
      ],
      persons: [
        {
          person: 'Селиверстов Иван Петрович',
          kbm: '1.0',
          certificate: 'Действительны ещё 6 лет'
        },
        {
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
    &__wrapper {
        padding-top: 50px;
        padding-bottom: 100px;
    }
    &__title {
      margin-bottom: 72px;
      text-align: center;
      letter-spacing: -0.02em;
      color: #333333;
    }
    &__section {
      margin-bottom: 75px;
    }
    &__sectionHead {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 40px;
    }
    &__sectionAdd {
        display: flex;
        align-items: center;
        padding-left: 16px;
        font-size: 18px;
        font-weight: bold;
        letter-spacing: -0.02em;
        color: #088DED;
        cursor: pointer;
        span {
          margin-right: 12px;
          font-size: 26px;
        }
    }
    &__sectionSubtitle {
      margin-bottom: 35px;
      font-size: 20px;
    }
    &__sectionInner {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-bottom: 45px;
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
    &__social {
      margin-right: 24px;
      cursor: pointer;
    }
    &__buttons {
      display: flex;
      align-items: center;
      margin-top: 90px;
    }
    &__exit {
      margin-right: 42px;
      border: 1px solid #E0E0E0;
    }
    &__remove {
      line-height: 1;
      font-weight: bold;
      letter-spacing: -0.01em;
      color: #D73E29;
      border-bottom: 1px solid #D73E29;
      cursor: pointer;
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
        &__wrapper {
            padding-top: 110px;
            padding-bottom: 70px;
        }
        &__title {
            margin-bottom: 28px;
            font-size: 26px;
        }
        &__section {
          margin-bottom: 35px;
        }
        &__sectionHead {
            margin-bottom: 16px;
        }
        &__sectionTitle {
            font-size: 20px;
        }
        &__sectionAdd {
            font-size: 16px;
            span {
                margin-right: 12px;
                font-size: 20px;
            }
        }
        &__sectionSubtitle {
          margin-bottom: 16px;
          font-size: 18px;
        }
        &__sectionInner {
            margin-bottom: 28px;
            .profileCard {
                width: 100%;
                margin-bottom: 12px;
            }
            .profileInput {
              width: 100%;
              margin-bottom: 12px;
            }
        }
        &__buttons {
          flex-direction: column;
          margin-top: 70px;
        }
        &__exit {
          margin-bottom: 16px;
          margin-right: 0;
        }
    }
}
</style>
