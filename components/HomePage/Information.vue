<template>
  <div class="information">
    <div class="wrapper flex-col">
      <h1 class="title">
        Полезная информация
      </h1>

      <div class="slider">
        <Article v-for="(article, index) in articles" :key="index" :article="article" />
      </div>
      <button>Показать все статьи</button>
    </div>
  </div>
</template>
<script>
import Article from '~/components/HomePage/Information/Article'
export default {
  components: {
    Article
  },
  data () {
    return {
      articles: [
        {
          image: '~/assets/images/article1.png',
          text: 'Что такое КБМ?'
        },
        {
          image: '~/assets/images/article2.png',
          text: 'Электронное ОСАГО'
        },
        {
          image: '~/assets/images/article3.png',
          text: 'Техосмотр'
        },
        {
          image: '~/assets/images/article4.png',
          text: 'Несегмент'
        }
      ]
    }
  }
}
</script>
