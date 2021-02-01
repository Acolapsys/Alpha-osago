<template>
  <div class="quick-calculation px-50 py-65">
    <div class="wrapper flex-col">
        <div class="title">
      Быстрый расчет ОСАГО
    </div>
    <InfoBlock>
      <p>
        <strong>Быстрый расчёт покажет приблизительную стоимость полиса.</strong>
        Чтобы узнать точную стоимость, нужно заполнить <span class="underline text-primary cursor-pointer" @click="openAddition">большую форму.</span>
        Но оценить можно по этой — финальная цена редко отличается более, чем на 10%.
      </p>
    </InfoBlock>
   <form submit.prevent="submitHandler">
        <div class="grid grid-col-2 grid-row-2 gap-5">
        <div>
            <label for="vehicle">Транспортное средство</label>
            <select name="vehicle" id="vehicle"></select>
        </div>
        <div>
            <label for="horsepower">Мощность</label>
            <input name="horsepower" id="horsepower" placeholder="100 л.с." />
            <span>=</span>
            <input name="power_kwt" id="power_kwt" placeholder="73.6 кВт" />
        </div>
        <div>
            <label for="registration-place">Место регистрации владельца</label>
            <input name="registration-place" id="registration-place"/>
        </div>
        <div>
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
</template>
<script>
import Driver from '~/components/HomePage/QuickCalculation/Driver'
export default {
    components: {
        Driver
    },
    methods: {
        openAddition() {
            this.$router.push('/')
        }
    }
}
</script>
<style lang="scss" scoped>
.quick-calculation {
    max-width: 946px;
    margin: 0 auto;
    
}
</style>