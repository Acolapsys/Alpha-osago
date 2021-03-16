<template>
  <main class="profileItem wrapper">
    <div class="profileItem__top">
      <div class="breadCrumbs">
        <nuxt-link to="./" class="breadCrumbs__item">
          Личный кабинет
        </nuxt-link>
        <span class="breadCrumbs__item breadCrumbs__item_current">Yamaha R3</span>
      </div>
    </div>
    <BaseButton>
      Удалить ТС
    </BaseButton>
  </main>
</template>
<script>
import BaseButton from '~/components/base/BaseButton'
export default {
  components: {
    BaseButton
  }
}
</script>

<style>

</style>
