<template>
  <div class="homepage w-full overflow-x-hidden">
    <Hero />
    <QuickCalculation />
    <WorkWith />
    <Help />
    <Information />
    <Examples class="examples"/>
    <FAQ />
  </div>
</template>
<script>
import Hero from '~/components/HomePage/Hero'
import QuickCalculation from '~/components/HomePage/QuickCalculation/QuickCalculation'
import WorkWith from '~/components/HomePage/WorkWith'
import Help from '~/components/HomePage/Help'
import Information from '~/components/HomePage/Information/Information'
import Examples from '~/components/HomePage/Examples/Examples'
import FAQ from '~/components/HomePage/FAQ'

export default {
  components: {
    Hero,
    QuickCalculation,
    WorkWith,
    Help,
    Information,
    Examples,
    FAQ
  }
}
</script>

<style scoped lang="scss">
@media (max-width: 767px) {
  .examples{
    display: none;
  }
}
</style>
