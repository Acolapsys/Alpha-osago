<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer'

export default {
  components: {
    Footer
  },
  data () {
    return {

    }
  }
}
</script>
<style>

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

</style>
