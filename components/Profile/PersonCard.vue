<template>
  <div class="profileCard">
    <div class="profileCard__title">
      {{ personData.person }}
    </div>
    <div class="profileCard__details">
      <div class="profileCard__detailsInner">
        <div class="profileCard__detailsBlock">
          <div class="profileCard__detailsTitle">
            КБМ
          </div>
          <div class="profileCard__detailsText" v-html="personData.kbm" />
        </div>
        <div class="profileCard__detailsBlock">
          <div class="profileCard__detailsTitle">
            Права
          </div>
          <div class="profileCard__detailsText" v-html="personData.certificate" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileCard',
  props: {
    personData: {
      type: Object,
      required: true
    }
  }
}
</script>
