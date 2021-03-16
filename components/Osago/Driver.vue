<template>
  <section class="osagoForm wrapper">
    <div :id="ancor" class="osagoForm__ancor"></div>
    <h2 class="osagoForm__title">
      <span>{{ number }}. </span>Водители
    </h2>
    <div class="osagoForm__row osagoForm__row_nolimit">
      <BaseSwitch id="driver-nolimit" />
      <label for="driver-nolimit">Неограниченная страховка</label>
    </div>
    <DriverItem v-if="driver.flag" :number="driver.number" @removeDriver="driver.flag = false" />
    <BaseButton class="osagoForm__button osagoForm__button_add">
      + Водитель
    </BaseButton>
  </section>
</template>

<script>
import BaseSwitch from '~/components/base/BaseSwitch'
import BaseButton from '~/components/base/BaseButton'
import DriverItem from '~/components/Osago/DriverItem'
export default {
  name: 'Driver',
  components: {
    BaseSwitch,
    BaseButton,
    DriverItem
  },
  props: {
    number: {
      type: [Number, String],
      default: null
    },
    ancor: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      driver: {
        flag: true,
        number: 1
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.osagoForm {
    &__row {
        &_nolimit {
            justify-content: flex-start;
            .switch {
                margin-right: 16px;
            }
        }
    }
    &__button {
        &_add {
            width: 100%;
            margin-top: 12px;
        }
    }
}
</style>
