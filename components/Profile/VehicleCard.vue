<template>
  <div class="profileCard">
    <div class="profileCard__link">
      <img src="~/assets/images/icons/arrow-right-green-big.svg" alt="arrow">
    </div>
    <div class="profileCard__title">
      {{ vehicleData.vehicle }}
    </div>
    <div class="profileCard__subtitle">
      {{ vehicleData.number }}
    </div>
    <div class="profileCard__hint">
      {{ vehicleData.drivers }}
    </div>
    <div class="profileCard__details">
      <div class="profileCard__detailsInner">
        <div class="profileCard__detailsBlock">
          <div class="profileCard__detailsTitle">
            Страховка
          </div>
          <div class="profileCard__detailsText" v-html="vehicleData.insurance" />
        </div>
        <div class="profileCard__detailsBlock">
          <div class="profileCard__detailsTitle">
            Технический осмотр
          </div>
          <div class="profileCard__detailsText" v-html="vehicleData.inspection" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileCard',
  props: {
    vehicleData: {
      type: Object,
      required: true
    }
  }
}
</script>
