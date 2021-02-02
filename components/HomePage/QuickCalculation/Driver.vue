<template>
  <div class="diver bg-grey px-20 py-32 mt-33">
    <div class="header flex justify-between">
      <div class="title body-big-2">
        Водитель 1
      </div>
      <span>Удалить водителя</span>
    </div>
    <div class="kbm mt-2 py-14">
      <base-switch name="know_kbm" class="mr-16" @onSwitch="onSelectKbm" />
      <label for="know_kbm" class="body-regular">Знаю КБМ</label>
    </div>
    <div class="grid grid-cols-3 grid-rows-2 gap-25">
      <div class="col">
        <label for="second-name">Фамилия</label>
        <BaseInput name="second-name" value="Васильев" />
      </div>
      <div class="col">
        <label for="first-name">Имя</label>
        <BaseInput name="first-name" type="text" value="Иван" />
      </div>
      <div class="col">
        <label for="third-name">Отчество</label>
        <BaseInput name="third-name" type="text" value="Николаевич" />
      </div>
      <div class="col">
        <label for="birthday">Дата рождения</label>
        <BaseInput name="birthday" type="date" value="10.10.1990" />
      </div>
      <div class="col">
        <label for="license">Серия и номер прав</label>
        <BaseInput name="license" type="text" value="55 00 509652" />
      </div>
      <div class="col">
        <label for="experience-date">Дата начала стажа</label>
        <BaseInput name="experience-date" type="text" value="10.10.2010" />
      </div>
    </div>
  </div>
</template>

<script>
import BaseSwitch from '~/components/base/BaseSwitch'
import BaseInput from '~/components/base/BaseInput'
export default {
  name: 'Driver',
  components: {
    BaseSwitch,
    BaseInput
  },
  data () {
    return {
      kbm: false
    }
  },
  methods: {
    onSelectKbm (value) {
      this.kbm = value
    }
  }
}
</script>
