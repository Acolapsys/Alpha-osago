<template>
  <div class="osago">
    <Steps />
    <Vehicle />
  </div>
</template>

<script>
import Steps from '~/components/Osago/Steps'
import Vehicle from '~/components/Vehicle'
export default {
  components: {
    Steps,
    Vehicle
  }
}
</script>

<style lang="scss" scoped>
.osago {
    background-color: #F6F6F6;
}
</style>
