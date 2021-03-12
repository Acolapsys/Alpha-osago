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
        <div class="profile__sectionBody">
          <InsuredVehicle
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
        <div class="profile__sectionBody">

        </div>
      </section>
    </div>
  </div>
</template>

<script>
import InsuredVehicle from '~/components/Profile/InsuredVehicle'
export default {
  components: {
    InsuredVehicle
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
      ]
    }
  }
}
</script>

<style lang="scss" scope>
.profile {
    &__wrapper {
        padding-top: 50px;
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
    &__sectionBody {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .insuredVehicle {
            width: calc(50% - 12px);
            margin-bottom: 24px;
            &:last-child {
              margin-bottom: 0;
            }
        }
    }
}
@media (max-width: 767px) {
    .profile {
        &__wrapper {
            padding-top: 110px;
        }
        &__title {
            margin-bottom: 28px;
            font-size: 26px;
        }
        &__Section {
          margin-bottom: 35px;
        }
        &__sectionHead {
            margin-bottom: 16px;
        }
        &__sectionTitle {
            font-size: 18px;
        }
        &__sectionAdd {
            font-size: 16px;
            span {
                margin-right: 12px;
                font-size: 20px;
            }
        }
        &__sectionBody {
            .insuredVehicle {
                width: 100%;
                margin-bottom: 12px;
            }
        }
    }
}
</style>
