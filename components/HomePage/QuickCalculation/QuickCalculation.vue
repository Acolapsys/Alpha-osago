<template>
  <div class="quick-calculation bg-grey w-full pb-38">
    <div class="wrapper">
      <div class="calculator flex flex-col px-50 pt-65 pb-71 bg-white transform tablet:-translate-y-64">
        <h2 class="title text-center mb-40 tablet-max:mb-10">
          Быстрый расчет ОСАГО
        </h2>
        <InfoBlock class="b-orange default tablet-max:hidden">
          <p>
            <span class="body-bold">Быстрый расчёт покажет приблизительную стоимость полиса.</span>
            <br>
            Чтобы узнать точную стоимость, нужно заполнить <span class="underline text-primary cursor-pointer" @click="openAddition">большую форму.</span>
            <br>
            Но оценить можно по этой — финальная цена редко отличается более, чем на 10%.
          </p>
        </InfoBlock>
        <!-- mobile -->
        <div class="body-regular text-center">
          <p>Покажет приблизительную стоимость</p>
        </div>
        <!-- //mobile-end -->
        <form submit.prevent="submitHandler" class="mt-37">
          <div class="grid grid-cols-2-266 grid-rows-2 gap-25 tablet-max:grid-cols-1 tablet-max:gap-19">
            <div class="col">
              <div class="baseField">
                <span class="baseField__label">Транспортное средство</span>
                <BaseSelect
                  id="vehicle"
                  :options="carsList"
                  :default="carDefault"
                  class="baseField__input"
                />
              </div>
<!--              <label for="vehicle">Транспортное средство</label>-->
<!--              <select id="vehicle" name="vehicle" />-->
            </div>
            <div class="col">
              <label for="horsepower" class="mb-3 mt-3">Мощность</label>
              <div class="flex items-center justify-between">
                <BaseInput id="horsepower" name="horsepower" value="100 л.с." class="w-120" />
                <span class="ml-8 mr-8">=</span>
                <BaseInput id="power_kwt" name="power_kwt" value="73.6 кВт" class="w-120" />
              </div>
            </div>
            <div class="col">
              <label for="registration-place" class="mb-3 mt-5">Место регистрации владельца</label>
              <BaseInput id="registration-place" name="registration-place" value="Волгоград" />
            </div>
            <div class="col">
              <div class="baseField">
                <span class="baseField__label">Транспортное средство</span>
                <BaseSelect
                  id="expiration-time"
                  :options="dateList"
                  :default="dateDefault"
                  class="baseField__input"
                />
              </div>
<!--              <label for="expiration-time">Срок действия полиса</label>-->
<!--              <select id="expiration-time" name="expiration-time" />-->
            </div>
          </div>
          <div class="insurance flex mt-18 items-center">
            <BaseSwitch :id="insurance" id="insurance" class="mr-16"/>
            <label for="insurance">Неограниченная страховка</label>
          </div>
          <Driver />
          <div class="add_driver body-bold text-primary mt-20 tablet-max:text-center cursor-pointer"
               @click="addDriver">
            <span class="mr-10">+</span>
            <span>Добавить водителя</span>
          </div>
          <div class="flex flex-col w-full items-center mt-27 ">
            <BaseButton type="submit" class="count text-center w-265 h-50 text-white bg-brand2 rounded-5 mb-12">
              Рассчитать ОСАГО
            </BaseButton>
            <span class="underline text-ui-black text-base">Посмотреть пример расчета</span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import BaseInput from '~/components/base/BaseInput'
import BaseSwitch from '~/components/base/BaseSwitch'
import BaseButton from '~/components/base/BaseButton'
import Driver from '~/components/HomePage/QuickCalculation/Driver'
import BaseSelect from "../../base/BaseSelect";
export default {
  components: {
    BaseSelect,
    Driver,
    BaseInput,
    BaseSwitch,
    BaseButton
  },
  data () {
    return {
      insurance: true,
      carsList: ['Автомобиль', 'Автомобиль', 'Автомобиль'],
      carDefault: 'Автомобиль',
      dateList:['6 месяцев','12 месяцев','18 месяцев'],
      dateDefault: '12 месяцев',
    }
  },
  methods: {
    openAddition () {
      this.$router.push('/osago')
    },
    onSelectInsurance (value) {
      this.insurance = value
    },
    addDriver () {
      this.$router.push('/')
    }
  }
}
</script>
<style lang="scss" scoped>
.calculator {
    max-width: 946px;
    margin: 0 auto;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25), 4px 4px 40px rgba(0, 0, 0, 0.08);
border-radius: 5px;
}
label {
    @apply font-normal text-14 block;
    line-height: 16px;
    letter-spacing: 0.02em;
    color: #333333;
    opacity: 0.7;
}
input {

}
.col {
    //@apply  bg-grey
}
.count {
  box-shadow: 0px 0px 4px rgba(255, 208, 55, 0.3), 0px 3px 15px rgba(255, 208, 55, 0.2);
}
</style>
