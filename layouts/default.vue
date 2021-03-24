<template>
  <div class="layout">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
  components: {
    Header,
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

.layout {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}

</style>
