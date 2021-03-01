<template>
  <div class="osago">
    <Steps />
    <Vehicle class="vehicle" />
    <Owner class="owner" />
    <Insurer class="insurer" />
    <Driver class="driver" />
  </div>
</template>

<script>
import Steps from '~/components/Osago/Steps'
import Vehicle from '~/components/Vehicle'
import Owner from '~/components/Owner'
import Insurer from '~/components/Insurer'
import Driver from '~/components/Osago/Driver'
export default {
  components: {
    Steps,
    Vehicle,
    Owner,
    Insurer,
    Driver
  }
}
</script>

<style lang="scss" scoped>
.osago {
  padding-bottom: 31px;
  background-color: #F6F6F6;
}
.vehicle {
  margin-top: 74px;
  margin-bottom: 31px;
}
.owner,
.insurer {
  margin-bottom: 31px;
}
@media (max-width: 1023px) {
  .vehicle {
    margin-top: 30px;
  }
}
@media (max-width: 767px) {
  .osago {
    padding-top: 110px;
  }
  .vehicle {
    margin-top: 0;
    margin-bottom: 0;
  }
  .owner,
  .insurer {
    margin-bottom: 0;
  }
}
</style>
