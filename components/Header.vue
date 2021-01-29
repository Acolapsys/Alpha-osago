<template>
  <div class="header bg-brand1">
    <div class="navbar container lg:px-100 md:px-55">
      <burger-menu class="hidden lg-max:block" />
      <span class="max-w-167 xss-max:mx-auto">
        <img src="@/assets/images/logo.png" alt="Домохозяин - отличный сервис">
      </span>
      <ul class="mobile-max:hidden flex">
          <li v-for="(item, index) in links" :key="index" class="lg:mr-20 xlg:mr-40">
            <nuxt-link :to="item.link">
              {{ item.title }}
            </nuxt-link>
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Header',
    props: {
        links: {
            type: Array,
            required: true
        }
    }
}
</script>
<style lang="scss" scoped>
.navbar {
    @apply py-20 flex items-center justify-between;
    @screen xss-max {
      @apply pr-55;
    }
  }
</style>