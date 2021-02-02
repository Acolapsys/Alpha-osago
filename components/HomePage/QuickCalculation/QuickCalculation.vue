<template>
  <div class="quick-calculation bg-grey w-full">
    <div class="wrapper">


        <div class="calculator flex flex-col px-50 py-65 bg-white">
                    <h2 class="title text-center mb-40">
      Быстрый расчет ОСАГО
    </h2>
    <InfoBlock class="b-orange default">
      <p>
        <span class="body-bold">Быстрый расчёт покажет приблизительную стоимость полиса.</span>
        <br />
        Чтобы узнать точную стоимость, нужно заполнить <span class="underline text-primary cursor-pointer" @click="openAddition">большую форму.</span>
        <br />
        Но оценить можно по этой — финальная цена редко отличается более, чем на 10%.
      </p>
    </InfoBlock>
   <form submit.prevent="submitHandler" class="mt-37">
        <div class="grid grid-cols-2-266 grid-rows-2 gap-5">
        <div class="col">
            <label for="vehicle">Транспортное средство</label>
            <select name="vehicle" id="vehicle"></select>
        </div>
        <div class="col">
            <label for="horsepower">Мощность</label>
            <input name="horsepower" id="horsepower" placeholder="100 л.с." />
            <span>=</span>
            <input name="power_kwt" id="power_kwt" placeholder="73.6 кВт" />
        </div>
        <div class="col">
            <label for="registration-place">Место регистрации владельца</label>
            <input name="registration-place" id="registration-place"/>
        </div>
        <div class="col">
            <label for="expiration-time">Срок действия полиса</label>
            <select name="expiration-time" id="expiration-time"></select>
        </div>
    </div>
    <div class="insurance">
        <input type="radio" name="insurance" id="insurance">
        <label for="insurance">Неограниченная страховка</label>
    </div>
    <Driver />
    <div class="add_driver">
        <span>Добавить водителя</span>
    </div>
    <button type="submit">Рассчитать ОСАГО</button>
    <span class="underline">Посмотреть пример расчета</span>
   </form>
        </div>

  </div>
  </div>
</template>
<script>
import BaseInput from '~/components/base/BaseInput'
import Driver from '~/components/HomePage/QuickCalculation/Driver'
export default {
    components: {
        Driver,
        BaseInput
    },
    methods: {
        openAddition() {
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
    @apply  bg-grey
}
</style>