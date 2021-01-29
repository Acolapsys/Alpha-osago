<template>
  <div>
    <Header :links="links" />
    <Nuxt />
  </div>
</template>


<script>
export default {
  data() {
    return {
      links: [
        {
          title: 'Оформление ОСАГО',
          link: '/osago'
        },
        {
          title: 'Проверка КБМ',
          ilnk: '/check'
        },
        {
          title: 'Полезная информация',
          link: '/faq'
        }
      ]
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
