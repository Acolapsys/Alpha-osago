<template>
  <div class="information py-120 bg-grey">
    <div class="wrapper flex flex-col items-center w-full">
      <h1 class="title mb-65">
        Полезная информация
      </h1>
      <div class="slider flex justify-between w-full mb-50">
        <Article v-for="(article, index) in articles" :key="index" :article="article" />
      </div>
      <BaseButton class="text-brand1 border-DEFAULT border-brand1 bg-white outline">Показать все статьи</BaseButton>
    </div>
  </div>
</template>
<script>
import Article from '~/components/HomePage/Information/Article'
import BaseButton from '~/components/base/BaseButton'
export default {
  components: {
    Article,
    BaseButton
  },
  data () {
    return {
      articles: [
        {
          image: require('/assets/images/article1.png'),
          text: 'Что такое КБМ?'
        },
        // {
        //   image: require('/assets/images/article2.png'),
        //   text: 'Электронное ОСАГО'
        // },
        // {
        //   image: require('/assets/images/article3.png'),
        //   text: 'Техосмотр'
        // },
        // {
        //   image: require('/assets/images/article4.png'),
        //   text: 'Несегмент'
        // }
      ]
    }
  }
}
</script>
