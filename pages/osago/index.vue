<template>
  <div class="osago">
    <Steps :steps="steps" />
    <form class="osago__form">
      <Vehicle class="vehicle" number="1" ancor="vehicle" />
      <Owner class="owner" number="2" ancor="owner" />
      <Insurer class="insurer" number="3" ancor="insurer" />
      <Driver class="driver" number="4" ancor="driver" />
      <Police class="police" number="5" ancor="police" />
      <BaseButton class="osago__submit" id="calculation-submit">Рассчитать ОСАГО</BaseButton>
    </form>
    <div class="wrapper">
      <CalculationResult v-for="item in 5" :key="item.id" :calculation-options="calculation1" />
    </div>
  </div>
</template>

<script>
import Steps from '~/components/Osago/Steps'
import Vehicle from '~/components/Vehicle'
import Owner from '~/components/Owner'
import Insurer from '~/components/Osago/Insurer'
import Driver from '~/components/Osago/Driver'
import Police from '~/components/Osago/Police'
import BaseButton from '~/components/base/BaseButton'
import CalculationResult from '~/components/CalculationResult'
export default {
  components: {
    Steps,
    Vehicle,
    Owner,
    Insurer,
    Driver,
    Police,
    BaseButton,
    CalculationResult
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
      ],
      calculation1: {
        price: '3 750',
        items: [
          {
            name: 'КТ',
            coefficient: '1.0'
          },
          {
            name: 'КБМ',
            coefficient: '1.0'
          },
          {
            name: 'КВС',
            coefficient: '1.0'
          },
          {
            name: 'КО',
            coefficient: '1.0'
          },
          {
            name: 'КМ',
            coefficient: '1.0'
          },
          {
            name: 'КС',
            coefficient: '1.0'
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.vehicle {
  margin-top: 74px;
  margin-bottom: 31px;
}
.owner,
.insurer,
.driver {
  margin-bottom: 31px;
}
.calculationResult {
  margin-bottom: 20px;
}
.osago {
  padding-bottom: 31px;
  background-color: #F6F6F6;
  &__submit {
    width: 335px;
    margin: 70px auto;
    color: #fff;
    background: #FDB215;
  }
}
@media (max-width: 1023px) {
  .vehicle {
    margin-top: 30px;
  }
}
@media (max-width: 767px) {
  .vehicle {
    margin-top: 0;
    margin-bottom: 0;
  }
  .owner,
  .insurer,
  .driver {
    margin-bottom: 0;
  }
  .police {
    border-top: 1px solid #E0E0E0;
    box-shadow: none;
  }
  .osago {
    padding-top: 110px;
    background-color: #FFF;
    &__submit {
      width: 90%;
      margin: 20px auto 50px;
    }
  }
}
</style>
