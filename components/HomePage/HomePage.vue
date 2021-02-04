<template>
  <div class="homepage w-full">
    <Hero />
    <QuickCalculation />
    <WorkWith />
    <Help />
    <Information />
    <Examples />
    <FAQ />
    <Footer />
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
import Footer from '~/components/Footer'

export default {
  components: {
    Hero,
    QuickCalculation,
    WorkWith,
    Help,
    Information,
    Examples,
    FAQ,
    Footer
  }
}
</script>
